import { useState } from "react";
import { CustomText } from "../../others/CustomText";
import { CustomTitleH2 } from "../../others/CustomTitleH2";
import { CardPlan } from "../../ui/CardPlan";
import clsx from "clsx";

export const SectionChoosePlan = () => {
	const [selectedPlanPeriod, setSelectedPlanPeriod] = useState<"Monthly" | "Yearly">("Monthly");
	return (
		<section className="flex flex-col gap-15 w-full max-w-7xl h-[31.5625rem]">
			<div className="w-full h-[6.25rem] flex justify-between">
				<div className="flex flex-col gap-2.5">
					<CustomTitleH2 className="text-[1.75rem] font-semibold">
						Choose the plan that's right for you
					</CustomTitleH2>
					<CustomText className="text-base font-normal text-grey-60 max-w-[63.125rem]">
						Join StreamVibe and select from our flexible
						subscription options tailored to suit your viewing
						preferences. Get ready for non-stop entertainment!
					</CustomText>
				</div>
				<div className="h-full flex items-end">
					<div className="h-[3.8125rem] w-[11.875rem] flex items-center justify-center bg-black-6 border border-black-15 rounded-[0.5rem] p-2 trans">
						<button
							onClick={() => setSelectedPlanPeriod("Monthly")}
							type="button"
							className={clsx("py-3 px-5 text-[0.875rem] font-medium h-11.25 cursor-pointer", 
								
									selectedPlanPeriod === "Monthly" && "text-absolute-white transition duration-300 ease-in-out bg-black-12 rounded-md w-23.5",
									selectedPlanPeriod === "Yearly" && "text-grey-60 transition duration-300 ease-in-out rounded-md  w-23.5"
							)}
						>
							Monthly
						</button>
						<button
							onClick={() => setSelectedPlanPeriod("Yearly")}
							type="button"
							className={clsx("py-3 px-5 text-[0.875rem] font-medium h-11.25 cursor-pointer", 
								
								selectedPlanPeriod === "Monthly" && "text-grey-60 transition duration-300 ease-in-out rounded-md w-20",
								selectedPlanPeriod === "Yearly" && "text-absolute-white transition duration-300 ease-in-out bg-black-12 rounded-md w-20"
						)}
						>
							Yearly
						</button>
					</div>
				</div>
			</div>
            <div className="h-[21.5625rem] w-full grid grid-cols-3 gap-5">
                <CardPlan planPeriod={selectedPlanPeriod} planType="Basic Plan" subtitle="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles." priceMonthly="9.99" priceYearly="99.9"/>
                <CardPlan planPeriod={selectedPlanPeriod} planType="Standard Plan" subtitle="Access to a wider selection of movies and shows, including most new releases and exclusive content" priceMonthly="12.99" priceYearly="129.99"/>
                <CardPlan planPeriod={selectedPlanPeriod} planType="Premium Plan" subtitle="Access to a widest selection of movies and shows, including all new releases and Offline Viewing" priceMonthly="14.99" priceYearly="149.99"/>
            </div>
		</section>
	);
};
