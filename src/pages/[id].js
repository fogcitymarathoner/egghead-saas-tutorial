import {supabase} from "@/utils/supabase";

export default function LessonDetailsPage({lesson}) {
    console.log(lesson)
    return (
        <div className="w-full max-w-3xl mx-auto py-16 px-8">
            <h1 className="text-3xl mb-6">{lesson.title}</h1>
            <p>{lesson.description}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    const {data: lessons} = await supabase.from('lessons').select('*');
    console.log('getStaticProps ' + lessons);
    const paths = lessons.map(({id}) => ({
        params: {
            id: id.toString(),
        }
    }))
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({params: {id}}) => {
    const {data: lesson} = await supabase.from('lessons').select('*').eq('id', id).single();
    console.log('getStaticProps [id] ' + lesson);

    return {
        props: {
            lesson,
        }
    }
}

