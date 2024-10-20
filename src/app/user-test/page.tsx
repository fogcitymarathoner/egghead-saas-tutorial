import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {

    const users = await prisma.user.findMany();

    return <div className='max-w-7xl mx-auto'><pre>{JSON.stringify(users)}</pre></div>;
};
export default Page;