import {createClient} from "@supabase/supabase-js";


import '@/envConfig.js'

console.log('utils/supabase.js process.env.NEXT_SUPABASE_URL ' + process.env.NEXT_SUPABASE_URL)
console.log('utils/supabase.js process.env.NEXT_SUPABASE_KEY ' + process.env.NEXT_SUPABASE_KEY)


export const supabase = createClient(
    process.env.NEXT_SUPABASE_URL,
    process.env.NEXT_SUPABASE_KEY
)