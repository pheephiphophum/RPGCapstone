import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://oioxlrxwstlotbdszola.supabase.co'
const supabaseKey = 'sb_publishable_U7JB4mWDM71ogYViyWrEcg_-8VVuSaE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase