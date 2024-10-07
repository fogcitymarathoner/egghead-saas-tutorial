import {createClient} from "@supabase/supabase-js";

import '@/envConfig'

console.log('utils/supabase.js process.env.NEXT_PUBLIC_SUPABASE_URL ' + process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('utils/supabase.js process.env.NEXT_PUBLIC_SUPABASE_KEY ' + process.env.NEXT_PUBLIC_SUPABASE_KEY)

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
)