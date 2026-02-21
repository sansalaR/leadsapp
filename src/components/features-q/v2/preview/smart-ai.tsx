import Image from "next/image";

export default () => {
    return (
        <div className="flex flex-col size-full items-center z-[100] justify-end relative">
                <div className="w-[65%] h-full relative flex flex-col items-center">
                  
                    <Image 
                        alt=""
                        src={'/assets/v2/feature/1/laptop.png'}
                        fill
                        className="object-contain transition-transform ease-in-out group-hover:scale-[.95] translate-y-[50%] duration-150"
                    />

                    <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center">
                        <div className="relative w-[60%] size-full rounded-md overflow-hidden transition-transform ease-in-out translate-x-[-5%] group-hover:translate-x-[-25%] -rotate-[15deg] group-hover:-rotate-[20deg] group-hover:translate-y-[15%] translate-y-[25%] duration-300">
                            <Image 
                                alt=""
                                src={'/assets/v2/feature/1/p1.png'}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center">
                        <div className="relative w-[60%] size-full rounded-md overflow-hidden transition-all ease-in-out rotate-[20deg] group-hover:scale-[1.01] group-hover:rotate-[25deg] translate-x-[10%] group-hover:translate-x-[25%] group-hover:translate-y-[25%] translate-y-[30%] duration-300">
                            <Image 
                                alt=""
                                src={'/assets/v2/feature/1/p2.png'}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
};