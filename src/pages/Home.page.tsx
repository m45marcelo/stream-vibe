import iconPlay from "../assets/icons/Icon_play.png";
import imageLogo from "../assets/images/logo_hero.png";
import { Header } from "../components/layout/Header/Header";
import { SectionChoosePlan } from "../components/layout/Sections/SectionChoosePlan";
import { SectionExploreCategories } from "../components/layout/Sections/SectionExploreCategories";
import { SectionFrequentlyQuestions } from "../components/layout/Sections/SectionFrequentlyQuestions";
import { SectionProvideStreamingDevices } from "../components/layout/Sections/SectionProvideStreamingDevices";
import { CustomText } from "../components/others/CustomText";
import { CustomTitleH1 } from "../components/others/CustomTitleH1";
import { CustomButtom } from "../components/ui/CustomButtom";


export const Home = () => {
	return (
		<>
			<div className="h-209 relative mb-[9.375rem]">
				<Header />
				<div className="h-174.75 bg-[url(./../assets/images/Container.png)] flex justify-center bg-center bg-no-repeat relative">
					<img
						alt="imagem logo hero"
						src={imageLogo}
						className="h-[18.75rem] absolute top-[12.4375rem] z-10"
					/>
					<div className="h-[36.3125rem] w-full absolute top-0 bg-gradient-to-b from-[rgba(20,20,20,1)] to-[rgba(20,20,20,0)]" />
					<div className="h-[36.3125rem] w-full absolute bottom-0 bg-gradient-to-b from-[rgba(20,20,20,0)] to-[rgba(20,20,20,1)]" />
				</div>
				<div className="absolute bottom-0 h-[14.8125rem] w-full px-[9.375rem] flex flex-col gap-10 items-center">
					<div className=" h-[9.0625rem] flex flex-col gap-2.5">
						<CustomTitleH1 className="text-center h-18">
							The Best Streaming Experience
						</CustomTitleH1>
						<CustomText className="text-center text-[0.875rem] h-[3.9375rem] text-grey-60">
							StreamVibe is the best streaming experience for
							watching your favorite movies and shows on demand,
							anytime, anywhere. With StreamVibe, you can enjoy a
							wide variety of content, including the latest
							blockbusters, classic movies, popular TV shows, and
							more. You can also create your own watchlists, so
							you can easily find the content you want to watch.
						</CustomText>
					</div>
					<CustomButtom
						isPrimary
						className="h-[3.25rem] text-[0.875rem] font-semibold py-[0.875rem] px-6 gap-1 rounded-lg"
						icon={iconPlay}
						title="Start Watching Now"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col gap-[7.5rem] items-center">
				<SectionExploreCategories/>
				<SectionProvideStreamingDevices/>
				<SectionFrequentlyQuestions/>
				<SectionChoosePlan/>
			</div>
		</>
	);
};
