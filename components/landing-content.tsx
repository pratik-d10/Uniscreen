"use client";
import {Card, CardHeader, CardTitle,CardContent} from "@/components/ui/card";
import { Description } from "@radix-ui/react-dialog";

const Testimonials=[
    {
        name:"Antonio",
        avatar:"A",
        title:"Software Engineer",
        Description:"This is the best application I've used!"
    },
    {
        name:"Antonio",
        avatar:"A",
        title:"Software Engineer",
        Description:"This is the best application I've used!"
    },
    {
        name:"Antonio",
        avatar:"A",
        title:"Software Engineer",
        Description:"This is the best application I've used!"
    },
    {
        name:"Antonio",
        avatar:"A",
        title:"Software Engineer",
        Description:"This is the best application I've used!"
    }
    
]

export const LandingContent =()=>{
    return(
        <div className="px-10 pb-20">
           <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Testimonials.map((item, index)=>(
                    <Card key={index} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">
                                        {item.name}
                                    </p>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.Description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
           </div>
        </div>
    )
} 