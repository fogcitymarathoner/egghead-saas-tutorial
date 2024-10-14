'use client'
import {useState, useEffect} from "react";
import LoginButton from "@/components/LoginButton";

export default function PricingPage() {

    console.log('PricingPage() - client render');
    //const [user, setUser] = useState(null)
    const [showSubscribeButton, setShowSubscribeButton] = useState(false)
    const [showCreateAccountButton, setShowCreateAccountButton] = useState(false)
    const [showManageSubscriptionButton, setShowManageSubscriptionButton] = useState(false)
    const [plans, setPlans] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/current_user`)
            .then((res) => res.json())
            .then((user_data) => {
                // setUser(data)
                console.log('PricingPage() - data/user ' + JSON.stringify(user_data, null, 2));
                //
                if (user_data) {
                    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protected/profile/${user_data.id}`)
                        .then((res) => res.json())
                        .then((profile_data) => {
                            console.log('PricingPage() - profile ' + JSON.stringify(profile_data, null, 2));
                            console.log('PricingPage() - user ' + JSON.stringify(user_data, null, 2));
                            setShowSubscribeButton(!!user_data && !profile_data.is_subscribed)
                            setShowCreateAccountButton(!user_data)
                            setShowManageSubscriptionButton(!!user_data && profile_data.is_subscribed)
                            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/plans`)
                                .then((res) => res.json())
                                .then((plans_data) => {
                                    setPlans(plans_data)
                                    console.log('PricingPage() - plans ' + JSON.stringify(plans_data, null, 2));
                                    setIsLoading(true)
                                });
                        });
                }
            });
    }, [])

    if (!isLoading) {
        return <h1>Loading ...</h1>
    } else {
        return (
            <div className="w-full max-w-3xl mx-auto py-16 flex justify-around items-center py-10">
                {plans.props.sortedPlans.map((plan) => (
                    <div className="w-80 h-40 rounded shadow px-6" key={plan.id}>
                        <h2 className="text-xl">{plan.name}</h2>
                        <p className="text-gray-500">
                            ${plan.price ? plan.price : 1 / 100} / {plan.interval}
                        </p>
                        <div>
                            {showSubscribeButton && <button>Subscribe</button>}
                            {showCreateAccountButton && (
                                <LoginButton/>
                            )}
                            {showManageSubscriptionButton && (
                                <button>Manage Subscription</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}
