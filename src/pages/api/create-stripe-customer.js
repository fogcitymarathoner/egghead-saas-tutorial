import initStripe from  'stripe'
import '@/envConfig.js'
import {supabase} from "@/utils/supabase";

const handler = async (req, res) => {
    console.log('create-stripe-customer handler() process.env.STRIPE_SECRET_KEY ' + process.env.STRIPE_SECRET_KEY)

    const { email } = req.query
    const { id } = req.query
    console.log('email ' + email)
    console.log('id ' + id)

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