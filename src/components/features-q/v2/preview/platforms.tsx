import { cn } from "@/utils"
import Image from "next/image"

const social_icons=  [
    {
        id:'bluesky',
        enabled:true,
        path:'/assets/v2/feature/4/icons/bluesky.png',
    },
    {
        id: 'facebook',
        enabled: true,
        path: '/assets/v2/feature/4/icons/facebook.png',
    },
    {
        id: 'instagram',
        enabled: true,
        path: '/assets/v2/feature/4/icons/instagram.png',
    },
    {
        id: 'linkedin',
        enabled: true,
        path: '/assets/v2/feature/4/icons/linkedin.png',
    },
    {
        id: 'pintrests',
        enabled: true,
        path: '/assets/v2/feature/4/icons/pintrests.png',
    },
    {
        id: 'threads',
        enabled: true,
        path: '/assets/v2/feature/4/icons/threads.png',
    },
    {
        id: 'tiktok',
        enabled: true,
        path: '/assets/v2/feature/4/icons/tiktok.png',
    },
    {
        id: 'x',
        enabled: true,
        path: '/assets/v2/feature/4/icons/x.png',
    },
    {
        id: 'youtube',
        enabled: true,
        path: '/assets/v2/feature/4/icons/youtube.png',
    },
]

export default () => {
   
    return (
       <>
     
        <div className="flex flex-col pt-1 size-full items-center z-[100] justify-end relative">
                
            <div className="w-[80%] h-full relative flex flex-col items-center justify-center  group *:transition-all *:ease-in *:duration:400">
                
               
               <div className={
                cn(
                    "w-full aspect-[7.2/3.06] flex flex-col  relative",
                    'group-hover:scale-95 group-hover:opacity-50'
                )
               }>
                    <Image src={'/assets/v2/feature/4/post-card.png'} alt="" fill className="object-contain"/>
               </div>
                
                <div className={
                    cn(
                        "absolute flex flex-col bottom-0 justify-between w-[85%] aspect-[1/.3] bg-white shadow-3xl border rounded-lg",
                        "translate-y-[52%]",
                        'group-hover:translate-y-[-10%]'
                    )
                }>
                        <div className="flex flex-1 p-1 px-3 flex-grow ">
                           
                            <div className="grid grid-cols-9 gap-1.5 my-auto w-full">
                                
                                {
                                    social_icons.map((icon,index) => (
                                        <div key={icon.id} style={{
                                            animationDelay: `${(index+1) * 75}ms`
                                        }} className={cn(
                                            "w-full aspect-square  flex items-center justify-center relative",
                                            icon.enabled ? "opacity-100" : "opacity-50",
                                                    // Format: animation-name duration timing-function delay iteration-count fill-mode
                                            "group-hover:[animation:customBounce_200ms_ease-in-out_200ms_1_forwards]"
                                        )}>
                                            <Image src={icon.path} alt={icon.id} sizes="5vw" fill className="object-contain"/>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="flex flex-1 pb-2.5 px-2.5 flex-grow">
                                <div className="bg-primary w-full text-white px-2 py-1 rounded-lg font-readex shadow-xl flex flex-col items-center justify-center leading-none text-sm font-medium">
                                    Schedule
                                </div>
                        </div>
                </div>
               
                
            </div>
            
        </div>
       </>
    )
}