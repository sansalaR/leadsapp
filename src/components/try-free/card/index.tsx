

export default ({ no, prefix, title, previewComponent, index }: {
    no: number,
    prefix?: string,
    title: string,
    previewComponent?: React.ReactNode,
    index: number
}) => {
    return (
        <div className="w-[80%] md:w-full max-w-70 group flex flex-col items-center justify-between">
            <div className="pt-2.5">
                <p className="font-readex tracking-[-4%] text-secondary_text font-medium text-3xl md:text-5xl">{no}{prefix}</p>
            </div>
            <div className="flex-1 flex items-center justify-center w-full border-b overflow-y-hidden pt-6">
                <div className="h-20 w-full flex items-center justify-center overflow-visible">
                    {previewComponent}
                </div>
            </div>
            <div className="p-2.5 text-center">
                <p className="font-readex text-center whitespace-pre-wrap line-clamp-2 text-primary_text tracking-[-4%] font-normal text-base">{title}</p>
            </div>
        </div>
    )
}