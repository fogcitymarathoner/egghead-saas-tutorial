import {createClient} from "@/utils/supabase/server";
import { NextResponse } from 'next/server'


export async function GET(req: Request, context: any): Promise<Response> {
    /* Returns public lesson #id, no need to protect */
    console.log('************** api/premium_content (urotected) GET()');
    const {params} = context
    console.log('lesson id ' + params?.lesson_id);
    const supabase = createClient();
    const {data: premium_content} = await supabase.from('premium_content').select('*').eq('id', params?.id).single();
    console.log('GET() premium_content ', JSON.stringify(premium_content));
    return NextResponse.json(premium_content)
}