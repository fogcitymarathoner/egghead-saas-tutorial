import {supabase} from "../../utils/supabase";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home({lessons}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        fetchUser();
    }, []);
    console.log({lessons});
    console.log('supabase.auth ' + Object.keys(user));
    console.log('supabase.auth ' + user.id);
    console.log('supabase.auth ' + user.email);
    console.log('supabase.auth ' + Object.keys(user.user_metadata));
    console.log('supabase.auth ' + user.user_metadata.user_name);
  return (
    <div
      className="w-full max-w-3xl mx-auto my-16 px-2"
    >
        {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/${lesson.id}`} legacyBehavior>
                <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">{lesson.title}</a></Link>
        ))}
    </div>
  );
}


export const getStaticProps = async () => {
    const {data: lessons} = await supabase.from('lessons').select('*');
	console.log('getStaticProps ' + lessons);

    return {
        props: {
            lessons,
        }
    }
}

