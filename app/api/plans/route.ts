
import { NextResponse } from 'next/server'
import {plans as getPlans} from '@/lib/stripe'
/* FIXME: not used, handled during build-time server components */

export async function GET(req: Request): Promise<Response> {
    /* Returns public list of lessons, no need to protect */

    console.log('************** api/plans (unprotected) GET()');
    const plans = await getPlans();
    console.log('GET() plans ', JSON.stringify(plans));
    return NextResponse.json(plans)
}
