// ============================================================
//  Supabase Client (Single Instance)
// ============================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://dpaugaohbgpbtsstfihm.supabase.co";
const supabaseKey = "sb_publishable_RQV6i4UiMHXTEOs1L0xpYQ_ug4IRSXr";

const supabase = createClient(supabaseUrl, supabaseKey);

// Expose globally
window.sb = supabase;
