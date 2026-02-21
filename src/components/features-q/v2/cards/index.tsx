'use client';
import AnimatedDiv from '@/components/common/fade-in';

export default ({ bg, title, subtitle, blur, previewComponent, index }: {
    bg?: string,
    title: string,
    subtitle: string,
    blur?: string,
    previewComponent?: React.ReactNode,
    index: number,
}) => {
    return (
        <AnimatedDiv delay={(index + 1) * 0.1}>
            <div style={{backgroundColor:bg}} className="w-full group aspect-[6.4/5] md:aspect-[6.4/4.8] relative rounded-2xl flex flex-col justify-between overflow-hidden">
                <div className="px-5 md:px-20 pt-7 md:pt-10 pb-0 text-center space-y-3.5">
                    <p className=" font-readex whitespace-pre-wrap font-medium leading-[-4%] text-primary">{title}</p>
                    <p className="text-sm text-secondary font-readex font-light">{subtitle}</p>
                </div>

                <div className="flex flex-1 size-full relative">
                    {previewComponent}
                </div>

                <div className="absolute left-0 right-0 bottom-0 top-0 group-hover:scale-[1.5] transition-transform ease-in-out duration-500">

                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 644 472" fill="none">
                        <g filter="url(#filter0_f_1634_2669)">
                            <circle cx="322" cy="397" r="113" fill={blur || "#007BFF"} />
                        </g>
                        <defs>
                            <filter id="filter0_f_1634_2669" x="-75" y="0" width="794" height="794" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="142" result="effect1_foregroundBlur_1634_2669" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </AnimatedDiv>
    )
};