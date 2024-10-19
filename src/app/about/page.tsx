
import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const AboutPage = async () => {

    return <div className='max-w-7xl mx-auto'>About Page</div>;
};
export default AboutPage;
