import {createClient} from "@supabase/supabase-js";

import '@/envConfig'

console.log('utils/supabase.js process.env.SUPABASE_URL ' + process.env.SUPABASE_URL)
console.log('utils/supabase.js process.env.SUPABASE_ANON_KEY ' + process.env.SUPABASE_ANON_KEY)

export const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
)