// ============================================================
//  Supabase Client (Single Instance)
// ============================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://dpaugaohbgpbtsstfihm.supabase.co";
const supabaseKey = "sb_publishable_RQV6i4UiMHXTEOs1L0xpYQ_ug4IRSXr";

const supabase = createClient(supabaseUrl, supabaseKey);

// Expose globally
window.sb = supabase;



// ============================================================
//  Ensure Profile Row Exists (Correct, RLS-Safe)
// ============================================================
async function ensureProfileRow() {
  const { data: sessionData } = await supabase.auth.getSession();
  const user = sessionData.session?.user;

  if (!user?.id) {
    console.log("No user logged in — skipping profile creation.");
    return null;
  }

  // Try inserting — 409 means "already exists", which is OK
  const { error: insertError } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
      email: user.email,
      membership_status: "inactive",
      membership_plan: null,
      stripe_customer_id: null,
      stripe_subscription_id: null
    });

  if (insertError) {
    if (insertError.code === "409") {
      console.log("Profile already exists:", user.email);
    } else {
      console.error("Profile insert error:", insertError);
    }
  }

  // Always fetch profile after insert attempt
  const { data: profile, error: selectError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (selectError) {
    console.error("Profile select error:", selectError);
    return null;
  }

  console.log("Profile loaded:", profile);
  return profile;
}



// ============================================================
//  Auth State Initialization Guard
// ============================================================
let hasInitialized = false;

supabase.auth.onAuthStateChange(async (event, session) => {
  const user = session?.user;
  if (!user) return;

  if (hasInitialized) return;
  hasInitialized = true;

  console.log("User logged in:", user.email);

  await ensureProfileRow();
});



// ============================================================
//  Fetch Membership (Always Fresh)
// ============================================================
async function fetchMembership() {
  // Refresh session to avoid stale reads after Stripe redirect
  await supabase.auth.refreshSession();

  const { data: sessionData } = await supabase.auth.getSession();
  const user = sessionData.session?.user;

  if (!user) {
    console.log("No user logged in.");
    return {
      status: "inactive",
      plan: null,
      stripe_customer_id: null,
      stripe_subscription_id: null
    };
  }

  // Fetch full profile by ID
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Membership fetch error:", error);
    return {
      status: "inactive",
      plan: null,
      stripe_customer_id: null,
      stripe_subscription_id: null
    };
  }

  console.log("Membership fetched:", profile);

  return {
    status: profile.membership_status,
    plan: profile.membership_plan,
    stripe_customer_id: profile.stripe_customer_id,
    stripe_subscription_id: profile.stripe_subscription_id
  };
}



// ============================================================
//  Helper: Get Current User
// ============================================================
async function getCurrentUser() {
  const { data } = await supabase.auth.getSession();
  return data.session?.user || null;
}
