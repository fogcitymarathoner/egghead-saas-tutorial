/* dealing with absence of getStaticProps in app router
called during build???
 */

import initStripe from "stripe";

interface Plan {
    id: string;
    interval: initStripe.Price.Recurring.Interval;
    name: string;
    price: number | null;
    currency: string;
}

export async function plans() {
    console.log('stripe plans, at build time????')
/*    const stripe_key = process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY : 'sss'
    const stripe = new initStripe(stripe_key)*/
    const stripe = new initStripe(process.env.STRIPE_SECRET_KEY!)
    const {data: prices} = await stripe.prices.list()

    const plans = await Promise.all(prices.map(async price => {
        console.log('price ' + price)
        //console.log('price.recurring ' + Object.keys(price.recurring))
        console.log('price.recurring ' + price.recurring)
        console.log('price.recurring.interval ' + price.recurring!.interval)
        console.log('price.product ' + Object.keys(price.product))
        console.log('price.product ' + price.product)
        console.log('price.product ' + typeof price.product)
        const product = await stripe.products.retrieve(price.product as string)
        console.log('product ' + Object.keys(product))
        console.log('product ' + product)
        console.log('price ' + Object.keys(price))
        return {
            id: price.id,
            name: product.name,
            price: price.unit_amount,
            interval: price.recurring!.interval,
            currency: price.currency,
        }
    }))
    const sortedPlans: Plan[] = plans.sort((a, b) => a.price! - b.price!)
    return {
        props: {
            sortedPlans,
        }
    }
}