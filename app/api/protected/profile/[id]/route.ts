import {createClient} from "@/utils/supabase/server";


import { NextResponse } from 'next/server'

export async function GET(req: Request, context: any): Promise<Response> {
    /* 99859050-b9d7-4e2b-b65e-4ffa4990e9b0 */
    const {params} = context
    console.log('************** protected/profile/id GET()');
    console.log(params)
    const supabase = createClient();
    console.log('getProfile id ' + params?.id);
    const {data: profile } = await supabase.from('profile').select('*').eq('id', params?.id).single();
    console.log('getProfile ' + profile);
    console.log('getProfile error');
    return NextResponse.json(profile)

}

