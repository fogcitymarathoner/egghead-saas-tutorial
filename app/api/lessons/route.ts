import {createClient} from "@/utils/supabase/server";
import { NextResponse } from 'next/server'


export async function GET(req: Request): Promise<Response> {
    /* Returns public list of lessons, no need to protect */

    console.log('************** api/lessons (unprotected) GET()');
    const supabase = createClient();
    const {data: lessons} = await supabase.from('lessons').select('*');
    console.log('GET() lessons ', JSON.stringify(lessons));
    return NextResponse.json(lessons)
}
