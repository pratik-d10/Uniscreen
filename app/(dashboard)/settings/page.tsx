"use client;"
import { Settings, SubscriptIcon } from "lucide-react";
import {Heading} from "@/components/heading";
import { checkSubscription } from "@/lib/subscription";
import { lazy } from 'react';
// import { SubscriptionButton } from "@/components/subscription-button";

const SettingPage =async () =>{
    const isPro = await checkSubscription();
    const SubscriptionButton = lazy(() => import("@/components/subscription-button"));
    return(
        <div>
            <Heading
            title="Settings"
            description="Manage account settings."
            icon={Settings}
            iconColor="text-gray-700"
            bgColor="bg-gray-700/10"
            />

            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foregrount text-sm">
                    {isPro ? "You are currently on a pro plan." : "You are currently on a free plan." }
                </div>
                <SubscriptionButton isPro={isPro}/>
            </div>
            
        </div>
    );
}

export default SettingPage;