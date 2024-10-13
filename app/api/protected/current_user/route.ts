import {getUser} from "@/lib/auth"

import {createClient} from "@/utils/supabase/server";


import { NextResponse } from 'next/server'

export async function GET(req: Request): Promise<Response> {
    /* Returns logged in user */
    const {params} = context
    console.log('************** protected/user/id GET()');
    console.log(params)
    const supabase = createClient();
    console.log('getProfile id ' + params?.id);
    const {data: profile } = await supabase.from('profile').select('*').eq('id', params?.id).single();
    console.log('getProfile ' + profile);
    console.log('getProfile error');
    return NextResponse.json(profile)

}

