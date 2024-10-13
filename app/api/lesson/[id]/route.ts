import {createClient} from "@/utils/supabase/server";
import { NextResponse } from 'next/server'


export async function GET(req: Request): Promise<Response> {
    /* Returns public list of lessons, no need to protect */

    console.log('************** api/lesson (unprotected) GET()');

    const {searchParams} = new URL(req.url);
    const id = searchParams.get("id");
    const supabase = createClient();
    const {data: lesson} = await supabase.from('lessons').select('*').eq('id', id).single();
    console.log('GET() lesson ', JSON.stringify(lesson));
    return NextResponse.json(lesson)
}
