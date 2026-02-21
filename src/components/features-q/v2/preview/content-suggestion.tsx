import { cn } from "@/lib/utils";
import Image from "next/image";

export default () => {
    return (
        <div className="flex flex-col size-full items-center z-[100] justify-end relative">
            <div className={
                cn(
                    'size-full flex items-start absolute left-0 right-0 transition-all ease-in duration-300 top-0 bottom-0 justify-center',
                    'translate-y-[12%]',
                    'group-hover:translate-y-[20%] group-hover:scale-75'
                )
            }>
                <FirstCard />
            </div>

             <div className={
                cn(
                    'size-full flex items-start absolute left-0 right-0 top-0 bottom-0 transition-all ease-in duration-300 justify-center',
                    'translate-y-[100%]',
                    'group-hover:translate-y-[12%]'
                )
            }>
                <SecondCard />
            </div>
        </div>
    )
};



interface CalendarDayProps {
    dayName: string;
    date: number;
    isToday?: boolean;
    imageUrl?: string;
    suggestionText?: string;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ dayName, date, isToday, imageUrl, suggestionText }) => {
    return (
        <div className="flex flex-col border-r border-gray-200 last:border-r-0">
            <div className="text-center py-2 border-b border-gray-200">
                <p className="font-medium text-sm text-primary_text">{dayName}</p>
            </div>
            <div className="p-3 flex-grow flex-col">
                <div className={`flex items-center justify-end mb-2 ${isToday ? 'relative mb-5' : ''}`}>
                    {isToday && (
                        <span className="absolute top-[-8px] right-[-5px] bg-purple-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                            {date}
                        </span>
                    )}
                    {!isToday && <p className="text-sm font-semibold text-gray-800">{date}</p>}
                </div>
                {imageUrl && (
                    <div className="aspect-square flex-shrink-0 relative w-full rounded-md overflow-hidden">
                        <Image src={imageUrl} alt={`${dayName} post`} fill className="object-cover" />
                    </div>
                )}
                {suggestionText && (
                    <div className="mt-2 p-2 bg-gray-100 space-x-1.5 rounded-md flex items-center">
                        <div className="size-4 rounded-full text-white font-medium flex flex-col items-center justify-center leading-none bg-accent flex-shrink-0">
                            +
                        </div>
                        <p className="text-xs text-gray-700">{suggestionText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

const FirstCard = () => {
    return (
        <div className="w-[80%] rounded-lg grid grid-cols-2 aspect-video bg-white shadow-xl overflow-hidden" >
            <CalendarDay 
                dayName="Friday" 
                date={23} 
                isToday 
                imageUrl="/assets/v2/feature/3/post.png" // Replace with actual image URL
            />
            <CalendarDay 
                dayName="Saturday" 
                date={24} 
                suggestionText="Create a post for National Brother's Day" 
            />
        </div>
    )
}
const SecondCard = () => {
    return (
        <div className="w-[80%] rounded-lg grid grid-cols-2 aspect-video bg-white shadow-xl overflow-hidden" >
            <CalendarDay 
                dayName="Sunday" 
                date={25} 
                suggestionText="Share a weekend reflection post" 
            />
            <CalendarDay 
                dayName="Monday" 
                date={26} 
                suggestionText="Plan a motivational quote for the week" 
            />
        </div>
    )
}
