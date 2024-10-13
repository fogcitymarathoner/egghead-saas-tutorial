import {lessons} from '@/lib/lesson'
import Link from 'next/link'

export default async function EggheadLessons() {
    console.log('EggheadLessons()  build time ????')
    const buildTimeLessons = await lessons()
    console.log(Object.keys(buildTimeLessons))
    console.log(Object.keys(buildTimeLessons.props))
    console.log('buildTimeLessons type()  build time ????' + typeof (buildTimeLessons))
    return (
        <>
            <div className="w-full max-w-3xl mx-auto my-16 px-2">
                {buildTimeLessons.props.lessons?.map((lesson) => (
                    <Link key={lesson?.id} href={`/protected/egghead/${lesson?.id}`} legacyBehavior>
                        <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">{lesson?.title}</a></Link>
                ))}
            </div>
        </>
    )
}
