import initStripe from 'stripe';
import '@/envConfig';
import { supabase } from '@/utils/supabase';

export async function POST(req: Request): Promise<Response> {
    console.log('************** create-stripe-user POST()');
    const body = await req.json();
    const email: string = body.record.email;
    const id: string = body.record.id;
    const API_ROUTE_SECRET: string = body.API_ROUTE_SECRET;
    console.log('body.record.id ' + id);
    console.log('body.record.email ' + email);
    console.log('create-stripe-customer POST() process.env.STRIPE_SECRET_KEY ' + process.env.STRIPE_SECRET_KEY);
    console.log('API_ROUTE_SECRET ' + API_ROUTE_SECRET);

    if (API_ROUTE_SECRET !== process.env.API_ROUTE_KEY) {
        console.log('API_ROUTE_SECRET BAD!');
        return new Response(
            JSON.stringify({ message: 'You are not authorized to use this API.' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
    }
    const stripe = new initStripe(process.env.STRIPE_SECRET_KEY);
    const customer = await stripe.customers.create({
        email: email
    });
    console.log('new stripe customer id ' + customer.id);
    await supabase
        .from('profile')
        .update({
            stripe_customer_id: customer.id
        })
        .eq('id', id);
    return new Response(
        JSON.stringify({ message: `stripe customer created: ${customer.id}` }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}
