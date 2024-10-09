import {supabase} from "@/utils/supabase";

export default async function LessonDetailsPage({ params }: { params: { id: string } }) {
    const data = await getData(params.id)
    console.log(data)
    const lesson = data.props.lesson

    return (
        <div className="w-full max-w-3xl mx-auto py-16 px-8">
            <h1 className="text-3xl mb-6">{lesson.title}</h1>
            <p>{lesson.description}</p>
        </div>
    )
}

const getData = async (id: string) => {
    const {data: lesson} = await supabase.from('lessons').select('*').eq('id', id).single();
    console.log('getData [id] ' + lesson);

    return {
        props: {
            lesson,
        }
    }
}