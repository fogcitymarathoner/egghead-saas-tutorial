/* build time lesson, server rendering supported */

import {createClient} from "@/utils/supabase/server";

export async function lessons() {
    /* Returns list of lessons */
    console.log('lessons, at build time????')
    console.log('************** lib/lesson lessons(), at build time????');
    const supabase = createClient();
    const {data: lessons} = await supabase.from('lessons').select('*');
    console.log('lib/lesson lessons() ', JSON.stringify(lessons));

    return {
        props: {
            lessons,
        }
    }
}
