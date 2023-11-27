import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  try{
    const session = await getSession()
    if(!session?.user?.email) return null

    const curretUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email
      }
    });
    if (!curretUser) return null
    return{
      ...curretUser,
      createdAt: curretUser.createdAt.toISOString(),
      updatedAt: curretUser.updatedAt.toISOString(),
      emailVerified: curretUser.emailVerified?.toISOString() || null,
    }
    return session?.user
  }catch(error:any){
    return null
  };

}
