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
        console.log('price cents ' + price.unit_amount)
        const price_dollars = price.unit_amount?price.unit_amount!/100:0
        console.log('price dollars ' + price_dollars)
        return {
            id: price.id,
            name: product.name,
            price: price_dollars,
            interval: price.recurring!.interval,
            currency: price.currency,
        }
    }))
    const sortedPlans: Plan[] = plans.sort((a, b) => a.price! - b.price!)
    console.log('/lib/stripe - sortedPlans', JSON.stringify(sortedPlans, null, 2))
    return {
        props: {
            sortedPlans,
        }
    }
}