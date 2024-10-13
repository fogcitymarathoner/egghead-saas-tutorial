import {createClient} from "@/utils/supabase/server";
import { NextResponse } from 'next/server'


export async function GET(req: Request, context: any): Promise<Response> {
    /* Returns public lesson #id, no need to protect */
    console.log('************** api/lesson (unprotected) GET()');
    const {params} = context
    console.log('lesson id ' + params?.id);
    const supabase = createClient();
    const {data: lesson} = await supabase.from('lessons').select('*').eq('id', params?.id).single();
    console.log('GET() lesson ', JSON.stringify(lesson));
    return NextResponse.json(lesson)
}