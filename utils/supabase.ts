import { createClient } from "@supabase/supabase-js";
import '@/envConfig.ts';

console.log('utils/supabase.ts process.env.NEXT_PUBLIC_SUPABASE_URL ' + process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('utils/supabase.ts process.env.NEXT_PUBLIC_SUPABASE_KEY ' + process.env.NEXT_PUBLIC_SUPABASE_KEY);

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_KEY as string
);

