import { cn } from "@/utils";
import Image from "next/image";

// public/assets/v2/feature/2/av2.png
// public/assets/v2/feature/2/av1.png

const avatarImages = [
    '/assets/v2/feature/2/av1.png',
    '/assets/v2/feature/2/av2.png',
];

const avatarPositions = [
    { top: '35%', left: '125%', rotate: '10deg' },
    { top: '30%', left: '-20%', rotate: '5deg' },
];

export default () => {
    return (
        <div className="flex flex-col size-full items-center z-[100] justify-end relative">
                <div className="w-[45%] h-full min-w-40 relative *:transition-all *:ease-in-out *:duration-300">


                        <div className={
                            cn(
                                "w-full h-full rounded-md relative overflow-hidden z-[1]",
                                'translate-y-[20%]',
                                'group-hover:translate-y-[10%]'
                            )
                        }>
                            
                            <Image 
                                src={'/assets/v2/feature/2/post.png'}
                                fill
                                alt=""
                                className="object-cover object-left-top"
                            />
                        </div>

                        <div className={
                            cn(
                                "w-32 bottom-0 aspect-square absolute left-0",
                                'translate-y-[20%] translate-x-[-65%]',
                                'group-hover:translate-y-[15%] group-hover:translate-x-[-70%]'
                            )
                        }>
                                <div className="size-full relative">
                                    <Image fill alt="" className="object-contain" src={`/assets/v2/feature/2/like.png`}/>
                                </div>
                        </div>


                        <div className={
                            cn(
                                "w-32 bottom-0 right-0 aspect-square absolute",
                                'translate-y-[20%] translate-x-[65%]',
                                'group-hover:translate-y-[15%] group-hover:translate-x-[70%]'

                            )
                        }>
                                <div className="size-full relative">
                                    <Image fill alt="" className="object-contain" src={`/assets/v2/feature/2/comment.png`}/>
                                </div>
                        </div>


                        {avatarPositions.map((pos, index) => (
                            <div
                                key={index}
                                className={
                                    cn(
                                        "size-8 z-[1] absolute rounded-full overflow-hidden",
                                        'opacity-0 translate-y-[25%] scale-95',
                                        'group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0'
                                    )
                                }
                                style={{
                                    top: pos.top,
                                    left: pos.left,
                                    // transform: `translate(-50%, -50%) rotate(${pos.rotate})`,
                                    transitionDelay: `${(index+1)*150}ms`
                                }}
                            >
                                <Image
                                    src={avatarImages[index % avatarImages.length]}
                                    fill
                                    alt={`avatar ${index + 1}`}
                                    className="object-cover"
                                />
                            </div>
                        ))}

                      
                </div>
        </div>
    );
}