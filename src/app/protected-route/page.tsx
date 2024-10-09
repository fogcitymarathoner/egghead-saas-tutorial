import {supabase} from "@/utils/supabase";

import Link from "next/link";

export default async function Home() {
    const data = await getData()
    console.log(data)
    const lessons = data.props.lessons ? data.props.lessons : []

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
                    <Link key={lesson.id} href={`/protected-route/${lesson.id}`} legacyBehavior>
                        <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">{lesson.title}</a></Link>
                ))}
            </div>
        </>
    );
}


const getData = async () => {
    const {data: lessons} = await supabase.from('lessons').select('*');
    console.log('getStaticProps ' + lessons);

    return {
        props: {
            lessons,
        }
    }
}