import bcrypt from 'bcrypt';
import prisma from "@/libs/prismadb";
import { NextResponse } from 'next/server';

export async function POST( request : Request) {
  const body = await request.json();
  const { name , email, password } = body;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  return NextResponse.json(user);
}