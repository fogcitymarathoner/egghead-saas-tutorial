import { createClient } from "@/utils/supabase/server";
import {getUser} from "@/lib/auth"

import Link from "next/link";

export default async function Home() {
    const user = await getUser();
    const userJsonString = JSON.stringify(user);
    console.log('user ' + userJsonString);
    const user_id = user!.id
    const profile = await getProfile(user_id);

    const profileJsonString = JSON.stringify(profile);
    console.log('profile ' + profileJsonString);

    const lessons_data = await getData()
    const lessons = lessons_data.props.lessons ? lessons_data.props.lessons : []

    console.log({lessons});
    /*
      if (user){
        console.log('supabase.auth ' + Object.keys(user));
        console.log('supabase.auth ' + user.id);
        console.log('supabase.auth ' + user.email);
        console.log('supabase.auth ' + Object.keys(user.user_metadata));
        console.log('supabase.auth ' + user.user_metadata.user_name);
      }
    */

    return (
        <>
            <div className="w-full max-w-3xl mx-auto my-16 px-2">
                {lessons.map((lesson) => (
                    <Link key={lesson.id} href={`/protected/egghead/${lesson.id}`} legacyBehavior>
                        <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">{lesson.title}</a></Link>
                ))}
            </div>
        </>
    );
}


const getProfile = async (id: any) => {
    /*(auth.uid() = id)
    * 99859050-b9d7-4e2b-b65e-4ffa4990e9b0
    * 99859050-b9d7-4e2b-b65e-4ffa4990e9b0*/
    const supabase = createClient();
    console.log('getProfile id ' + id);
    const {data: profile } = await supabase.from('profile').select('*').eq('id', id).single();
    console.log('getProfile ' + profile);
    console.log('getProfile error');
    return {
        props: {
            profile,
        }
    }
}

const getData = async () => {
    const supabase = createClient();
    const {data: lessons} = await supabase.from('lessons').select('*');
    console.log('getData ' + lessons);
    return {
        props: {
            lessons,
        }
    }
}
