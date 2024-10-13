'use client'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import {UserData} from '@/interfaces/user'
import {LessonData} from '@/interfaces/lesson'

export default function EggheadLessons() {
    console.log('EggheadLessons()')
    const [user, setUser] = useState<UserData | null>(null)
    const [profile, setProfile] = useState(null)
    const [lessons, setLessons] = useState<[LessonData] | [null]>([null])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protected/current_user`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protected/profile/${data.id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setProfile(data)
                        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lessons`)
                            .then((res) => res.json())
                            .then((data) => {
                                setLessons(data)
                                setLoading(false)
                            })
                    })
            })
    }, [])
    if (isLoading) {
        return <h1>Loading...</h1>;
    } else if (!user && !profile && !lessons) {
        return <p>No user or profile data</p>
    } else if (user && profile && lessons) {  //logged in
        console.log('EggheadLessons() l:40 ', user)
        console.log('EggheadLessons() l:41 ', profile)
        return (<>
            {/*                <p>{JSON.stringify(user, null, 2)}</p>
                <p>{JSON.stringify(profile, null, 2)}</p>*/}
            <div className="w-full max-w-3xl mx-auto my-16 px-2">
                {lessons.map((lesson) => (
                    <Link key={lesson?.id} href={`/protected/egghead/${lesson?.id}`} legacyBehavior>
                        <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">{lesson?.title}</a></Link>
                ))}
            </div>
        </>)
    } else if (!user && !profile && lessons) {  // anonymous user, not reachable because this is a protected page

    return (<>
        {/*                <p>{JSON.stringify(user, null, 2)}</p>
                <p>{JSON.stringify(profile, null, 2)}</p>*/}
        <div className="w-full max-w-3xl mx-auto my-16 px-2">
            {lessons.map((lesson) => (
                <Link key={lesson?.id} href={`/protected/egghead/${lesson?.id}`} legacyBehavior>
                    <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">{lesson?.title}</a></Link>
            ))}
        </div>
    </>)
}
}
