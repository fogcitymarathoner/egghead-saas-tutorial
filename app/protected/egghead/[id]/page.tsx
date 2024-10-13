'use client'
import {useState, useEffect} from "react";
import {LessonData} from "@/interfaces/lesson";
import {PremiumContentData} from "@/interfaces/premiumContent";

export default function LessonPage({params}: { params: { id: string } }) {
    const [lesson, setLesson] = useState<LessonData | null>(null)
    const [premiumContent, setPremiumContent] = useState<PremiumContentData | null>(null)
    const [isLoading, setLoading] = useState(true);
    console.log('LessonPage()')
    console.log('lesson No. ' + params.id)
    useEffect(() => {
        console.log('useEffect()')
        console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lesson/${params.id}`)
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lesson/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setLesson(data);
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protected/premium_content/${params.id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setPremiumContent(data);
                        setLoading(false);
                    })
            });
    }, []);
    if(isLoading) {
        return <h1>Loading...</h1>;
    } else if (lesson && !premiumContent) {
        return (
            <div className="w-full max-w-3xl mx-auto py-16 px-8">
                <h1 className="text-3xl mb-6">{lesson!.title}</h1>
                <p>{lesson!.description}</p>
            </div>
        )
    } else if (lesson && premiumContent) {
        return (
            <div className="w-full max-w-3xl mx-auto py-16 px-8">
                <h1 className="text-3xl mb-6">{lesson!.title}</h1>
                <p>{lesson!.description}</p>
                <p>{premiumContent!.video_url   }</p>
            </div>
        )
    }
}
