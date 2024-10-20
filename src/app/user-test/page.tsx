'use client'
import prisma from "@/db/prisma";
import { useQuery } from "@tanstack/react-query";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {checkAuthStatus} from "@/app/auth/callback/actions";
import {getDBUser} from "./actions"
// FIXME: remove this test page

interface UserValue { id: string; email: string; name: string | null; image: string | null; plan: string | null; customerId: string | null; createdAt: Date; updatedAt: Date; }
// db access doe not work in deploy
const Page = () => {
    const { isAuthenticated, user } = useKindeBrowserClient();
    // FIXME: remove
    console.log('user-test isAuthenticated ' + isAuthenticated);
    console.log('user-test user' + JSON.stringify(user));
    const { data } = useQuery({
        queryKey: ["getDBUser"],
        queryFn: async () => await getDBUser(),
    });

    console.log('user-test data' + JSON.stringify(user));

    return (<div className='max-w-7xl mx-auto'>
        <section>
            <pre>{JSON.stringify(user)}</pre>
        </section>
        <section>
            <pre>{JSON.stringify(data)}</pre>
        </section>
    </div>)
};
export default Page;