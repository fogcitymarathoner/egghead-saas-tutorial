import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	console.log('Premium kinde user ' + JSON.stringify(user));
	if (!user) return redirect("/");

	const userProfile = await prisma.user.findUnique({ where: { id: user.id } });
	console.log('Premium mongo userProfile ' + JSON.stringify(userProfile));
	if (userProfile?.plan === "free") return redirect("/");

	return <div className='max-w-7xl mx-auto'>You are on the premium plan so you can see this page</div>;
};
export default Page;