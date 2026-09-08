import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://rgzvpaczvwsbngctdltj.supabase.co'
const supabaseKey = 'sb_publishable_gwi7h-92FcUJWkmaME9IBg_E1asI5Yl'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase