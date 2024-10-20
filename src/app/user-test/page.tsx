import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
// FIXME: remove this test page
// db access doe not work in deploy
const Page = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const userProfile = await prisma.user.findUnique({ where: { id: user.id } });

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