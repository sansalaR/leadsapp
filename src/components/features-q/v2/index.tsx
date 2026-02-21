'use client'

import Cards from "./cards";
import SmartAi from "./preview/smart-ai";
import ImproveResults from "./preview/improve-results";
import ContentSuggestion from "./preview/content-suggestion";
import Platforms from "./preview/platforms";
import AnimatedDiv from "../../common/fade-in";

type ShowCaseProps = {
  title: string;
  subtitle: string;
};

export default ({ title, subtitle }: ShowCaseProps) => {
    return (
        <section className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
            <AnimatedDiv>
                <div className="container mx-auto text-center">
                    <h2 className="title relative">
                       {title}
                        {/*<Image*/}
                        {/*    src="/assets/images/doodles/Vector 7.svg"*/}
                        {/*    alt="heart doodle"*/}
                        {/*    width={100}*/}
                        {/*    height={100}*/}
                        {/*    className="absolute right-[calc(50%-28rem)] top-[-1.4rem]"*/}
                        {/*    //remove in mobile view*/}
                        {/*/>*/}
                    </h2>
                    <p className="subtitle !mt-0">
                        {subtitle}
                    </p>
                </div>
            </AnimatedDiv>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Cards
                        bg="#E4F1FF"
                        title={`Smart AI That Sounds Just Like You`}
                        subtitle="Crafted to match your brand's tone, voice, and vibe—no more generic content."
                        previewComponent={<SmartAi />}
                        index={0}
                    />
                </div>
                <div>
                    <Cards
                        bg="#E4E7FF"
                        title="AI That Improves Your Results"
                        subtitle="Plan and automate your social media calendar effortlessly."
                        blur="#001CFF"
                        previewComponent={<ImproveResults />}
                        index={1}
                    />
                </div>
                <div className="order-2 sm:order-1">
                    <Cards
                        bg="#E4E7FF"
                        title="1-Click Scheduling Across Platforms"
                        subtitle="Track performance and understand your audience better."
                        blur="#001CFF"
                        previewComponent={<Platforms />}
                        index={2}
                    />
                </div>
                <div className="order-1 sm:order-2">
                    <Cards
                        bg="#E4F1FF"
                        title="Content Suggestions Based on your Business"
                        subtitle="Manage all your social accounts from one place."
                        previewComponent={<ContentSuggestion />}
                        index={3}
                    />
                </div>
            </div>
        </section>
    )
};

