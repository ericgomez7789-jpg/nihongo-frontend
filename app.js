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
//  Ensure Profile Row Exists (Correct, RLS-Safe, No Duplicate Inserts)
// ============================================================
async function ensureProfileRow(user) {
  if (!user?.id) {
    console.log("No user logged in — skipping profile creation.");
    return null;
  }

  // 1. Check if profile already exists
  const { data: existingProfile, error: selectError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle(); // <-- FIXED

  if (selectError) {
    console.error("Profile select error:", selectError);
  }

  // 2. If profile exists → return it
  if (existingProfile) {
    console.log("Profile already exists:", existingProfile.email);
    return existingProfile;
  }

  // 3. Insert new profile only when missing
  const { data: newProfile, error: insertError } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
      email: user.email,
      membership_status: "inactive",
      membership_plan: null,
      stripe_customer_id: null,
      stripe_subscription_id: null
    })
    .select()
    .single();

  if (insertError) {
    console.error("Profile insert error:", insertError);
    return null;
  }

  console.log("Profile created:", newProfile);
  return newProfile;
}



// ============================================================
//  Auth Boot (Session-Ready, Race-Condition-Proof)
// ============================================================
async function bootAuth() {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    console.log("Session not ready yet — waiting for login.");
    return;
  }

  const user = session.user;
  console.log("Boot user:", user);

  await ensureProfileRow(user);
}

supabase.auth.onAuthStateChange(async () => {
  bootAuth();
});



// ============================================================
//  Fetch Membership (Always Fresh, No 406 Errors)
// ============================================================
async function fetchMembership() {
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

  // Fetch profile safely
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle(); // <-- FIXED

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
