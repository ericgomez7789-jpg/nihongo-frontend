// ============================================================
//  Initialize Supabase Client (ESM)
// ============================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://dpaugaohbgpbtsstfihm.supabase.co";
const supabaseKey =
"sb_publishable_RQV6i4UiMHXTEOs1L0xpYQ_ug4IRSXr";
const supabase = createClient(supabaseUrl, supabaseKey);

// Make Supabase global
window.sb = supabase;



// ============================================================
//  Ensure Membership Row ALWAYS Exists (but NEVER overwrite)
// ============================================================
async function ensureMembershipRow() {
  const { data: sessionData } = await supabase.auth.getSession();
  const user = sessionData.session?.user;

  if (!user || !user.email) {
    console.log("No user logged in — skipping profile creation.");
    return;
  }

  // Check if profile already exists
  const { data: existing, error: fetchError } = await supabase
    .from("profiles")
    .select("email")
    .eq("email", user.email)
    .maybeSingle();

  if (fetchError) {
    console.error("Profile fetch error:", fetchError);
    return;
  }

  // If exists → do nothing
  if (existing) {
    console.log("Profile already exists:", user.email);
    return;
  }

  // Create new profile with default membership
  const { error: insertError } = await supabase
    .from("profiles")
    .insert({
      email: user.email,
      membership_status: "none",
      membership_plan: null
    });

  if (insertError) {
    console.error("Profile insert error:", insertError);
  } else {
    console.log("Profile created for:", user.email);
  }
}



let hasInitialized = false;

supabase.auth.onAuthStateChange(async (event, session) => {
  if (!session?.user?.email) return;

  if (hasInitialized) return;   // ⭐ Prevent repeated triggers
  hasInitialized = true;

  console.log("User logged in:", session.user.email);
  await ensureMembershipRow();
});



// ============================================================
//  Fetch Membership Status (REFRESH + READ UPDATED ROW)
// ============================================================
async function fetchMembership() {
  // Refresh session after Stripe redirect
  await supabase.auth.refreshSession();

  const { data: sessionData } = await supabase.auth.getSession();
  const user = sessionData.session?.user;

  if (!user) {
    console.log("No user logged in.");
    return { status: "none", plan: null };
  }

  // Fetch membership from profiles table
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("membership_status, membership_plan")
    .eq("email", user.email)
    .single();

  if (error) {
    console.error("Membership fetch error:", error);
    return { status: "none", plan: null };
  }

  console.log("Membership fetched:", profile);

  return {
    status: profile.membership_status,
    plan: profile.membership_plan
  };
}


// ============================================================
//  Helper: Get Current User
// ============================================================
async function getCurrentUser() {
  const { data } = await supabase.auth.getSession();
  return data.session?.user || null;
}
