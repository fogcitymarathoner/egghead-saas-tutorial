import initStripe from  'stripe'
import '@/envConfig.js'
import {supabase} from "@/utils/supabase";

const handler = async (req, res) => {
    console.log('create-stripe-customer handler() process.env.STRIPE_SECRET_KEY ' + process.env.STRIPE_SECRET_KEY)

    const { email } = req.query
    const { id } = req.query
    const { API_ROUTE_SECRET } = req.query
    console.log('email ' + email)
    console.log('id ' + id)
    console.log('API_ROUTE_SECRET ' + API_ROUTE_SECRET)

    if (API_ROUTE_SECRET !== process.env.API_ROUTE_KEY) {
        return res.status(401).send('You are not authorized to use this API.')
    }

    const stripe = initStripe(process.env.STRIPE_SECRET_KEY)
    const customer = await stripe.customers.create({
        email: email
    })
    console.log('new stripe customer id ' + customer.id)
    await supabase
        .from('profile')
        .update({
            stripe_customer_id: customer.id
        })
        .eq('id', id)
    res.send({
        message: `stripe customer created: ${customer.id}`,
    })
}

export default handler