import { CustomText } from "../../others/CustomText";
import { CustomTitleH2 } from "../../others/CustomTitleH2";
import { CustomButtom } from "../../ui/CustomButtom";
import { FrequentlyQuestionsItem } from "../../ui/FrequentlyQuestionsItem";

export const SectionFrequentlyQuestions = () => {
	return (
		<section className="w-full max-w-7xl h-145 flex flex-col">
			<div className="w-full h-19 flex justify-between">
				<div className="flex flex-col gap-2.5">
					<CustomTitleH2 className="h-10.5 text-[1.75rem] font-semibold">
						Frequently Asked Questions
					</CustomTitleH2>
					<CustomText className="text-base font-normal text-grey-60 h-6">
						Got questions? We've got answers! Check out our FAQ
						section to find answers to the most common questions
						about StreamVibe.
					</CustomText>
				</div>
				<div className="h-full flex items-end">
					<CustomButtom
						className="h-[3.0625rem] text-[0.875rem] font-normal px-5 py-3.5 rounded-[0.375rem]"
						title="Ask a Question"
						isPrimary
					/>
				</div>
			</div>
			<div className="min-h-[27.875rem] w-full">
				<ul
					className="
						flex-col columns-[38.75rem] 
						[&>li]:relative 
						[&>li]:after:content-['']
						[&>li]:after:absolute
						[&>li]:after:bottom-0 
						[&>li]:after:left-0
						[&>li]:after:w-full
						[&>li]:after:h-[1px]
						[&>li]:after:bg-[linear-gradient(1deg,rgba(229,0,0,0)_0%,rgba(229,0,0,1)_17%,rgba(229,0,0,0)_100%)]
						[&>li:nth-child(4)]:after:hidden
						[&>li:last-child]:after:hidden"
				>
					<FrequentlyQuestionsItem numberQuestion="01" title="What is StreamVibe?" subtitle="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
					<FrequentlyQuestionsItem numberQuestion="02" title="What is StreamVibe?" subtitle="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
					<FrequentlyQuestionsItem numberQuestion="03" title="What is StreamVibe?" subtitle="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
					<FrequentlyQuestionsItem numberQuestion="04" title="What is StreamVibe?" subtitle="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/> 
					<FrequentlyQuestionsItem numberQuestion="05" title="What is StreamVibe?" subtitle="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
					<FrequentlyQuestionsItem numberQuestion="06" title="What is StreamVibe?" subtitle="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
					<FrequentlyQuestionsItem numberQuestion="07" title="What is StreamVibe?" subtitle="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
					<FrequentlyQuestionsItem numberQuestion="08" title="What is StreamVibe?" subtitle="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/> 
				</ul>
			</div>
		</section>
	);
};
