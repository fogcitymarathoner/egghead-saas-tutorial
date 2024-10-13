// plans will be populated at build time ?
import {plans} from '@/lib/stripe'

export default async function PricingPage() {

    const buildTimePlans = await plans();
    console.log('buildTimePlans ' + buildTimePlans.props.sortedPlans);
    console.log(Object.keys(buildTimePlans.props.sortedPlans[0]))

/*    let reconstitutedPlans: Plan[] = []
    buildTimePlans.props.sortedPlans.forEach((p) => {
        console.log(p)
        let interval =p.interval.interval, // FIXME: this object in object causes errors
        reconstitutedPlans.push(
        {
            id: p.id,
            name: p.name,
            price: p.price,
            interval: interval,
            currency: p.currency
        }
        )})*/

    console.log('PricingPage() ' + buildTimePlans.props.sortedPlans)
    //console.log('PricingPage() ' + reconstitutedPlans)
    return (
        <div className="w-full max-w-3xl mx-auto py-16 flex justify-around items-center py-10">
            {buildTimePlans.props.sortedPlans.map((plan) => (
                <div className="w-80 h-40 rounded shadow px-6" key={plan.id}>
                    <h2 className="text-xl">{plan.name}</h2>
                    <p className="text-gray-500">
                        ${plan.price?plan.price:1 / 100} / {plan.interval}
                    </p>
                </div>
            ))}
        </div>
    )

}
