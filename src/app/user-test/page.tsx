import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
// FIXME: remove this test page

interface UserValue { id: string; email: string; name: string | null; image: string | null; plan: string | null; customerId: string | null; createdAt: Date; updatedAt: Date; }
// db access doe not work in deploy
const Page = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();
    let userProfile = null
    if(user) {
        userProfile = await prisma.user.findUnique({where: {id: user.id}});
    }

    return (<div className='max-w-7xl mx-auto'>
        <section>
            <pre>{JSON.stringify(user)}</pre>
        </section>
        <section>
            <pre>{JSON.stringify(userProfile)}</pre>
        </section>
    </div>)
};
export default Page;