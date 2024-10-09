import {createClient} from "@supabase/supabase-js";

import '@/envConfig'

console.log('utils/supabase.js process.env.SUPABASE_URL ' + process.env.SUPABASE_URL)
console.log('utils/supabase.js process.env.SUPABASE_ANON_KEY ' + process.env.SUPABASE_ANON_KEY)


const sbase_url = process.env.SUPABASE_URL ? process.env.SUPABASE_URL : 'sss'
const sbase_akey = process.env.SUPABASE_ANON_KEY ? process.env.SUPABASE_ANON_KEY : 'sss'

export const supabase = createClient(
    sbase_url,
    sbase_akey
)