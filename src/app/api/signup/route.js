import bcrypt from "bcrypt";
import prismadb from "@/app/lib/prismadb";
import { PrismaClient } from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function POST(request){
    const body = await request.json();
    const { name, email, password } = body;

    if(!name || !email || !password){
        return new NextResponse('Missing Fields', {status: 400})
    }

    const exist = await prismadb.user.findUnique({
        where: {
            email
        }
    });

    if(exist){
        throw new Error('Email already exist')
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await prismadb.user.create({
        data: {
            name,
            email,
            password,
        }
    });

    return NextResponse.json(user)

}