// ============================================================
//  Supabase Client (Single Instance)
// ============================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://dpaugaohbgpbtsstfihm.supabase.co";
const supabaseKey = "sb_publishable_RQV6i4UiMHXTEOs1L0xpYQ_ug4IRSXr";

const supabase = createClient(supabaseUrl, supabaseKey);

// Expose globally
window.sb = supabase;
window.supabaseUrl = supabaseUrl;   // ⭐ NEW LINE
// ============================================================
//  FIX: Ensure window.currentUser is ALWAYS set
// ============================================================

async function initUser() {
  const { data: sessionData } = await supabase.auth.getSession();
  window.currentUser = sessionData.session?.user || null;
}

initUser();

// Keep user updated on login/logout
supabase.auth.onAuthStateChange((_event, session) => {
  window.currentUser = session?.user || null;
});

// ============================================================
//  ⭐ VIEW COUNTER (Option A — Frontend Only)
// ============================================================
// ============================================================
//  ⭐ VIEW COUNTER (Offline Only — No Supabase)
// ============================================================
async function incrementView() {
  try {
    const raw = localStorage.getItem("views_counter");
    const obj = raw ? JSON.parse(raw) : { total_views: 0 };

    obj.total_views += 1;

    localStorage.setItem("views_counter", JSON.stringify(obj));
    console.log("[ViewCounter] total_views =", obj.total_views);
  } catch (e) {
    console.error("[ViewCounter] Failed to increment:", e);
  }
}

incrementView();   // ⭐ Safe now — no Supabase calls
