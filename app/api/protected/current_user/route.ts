import {getUser} from "@/lib/auth"
import { NextResponse } from 'next/server'

export async function GET(req: Request): Promise<Response> {
    /* Returns logged in current_user */

    console.log('************** /api/protected/current_user GET()');
    const user = await getUser();
    const userJsonString = JSON.stringify(user);
    console.log('current_user ' + userJsonString);

    return NextResponse.json(user)

}

