import { useState } from "react";
import iconOpenQuestion from "../../assets/icons/Icon-open-question.png";
import { CustomText } from "../others/CustomText";
import { CustomTitleH2 } from "../others/CustomTitleH2";

interface FrequentlyQuestionsItemProps {
	numberQuestion: string;
	title: string;
	subtitle: string;
}

export const FrequentlyQuestionsItem: React.FC<
	FrequentlyQuestionsItemProps
> = ({ numberQuestion, title, subtitle }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleChangeStateQuestion() {
		setIsOpen(!isOpen);
	}

	return (
		<li  className="flex min-h-[102px] items-center justify-between w-full max-w-[38.75rem] p-6 gap-4">
			<div className="flex items-center gap-4">
				<div className="flex">
					<div className="p-4 flex justify-center items-center w-[3.125rem] h-[3.375rem] rounded-[0.5rem] bg-black-12 border border-black-15">
						<CustomText className="text-base font-semibold text-absolute-white">
							{numberQuestion}
						</CustomText>
					</div>
				</div>
				<div className="w-[29.125rem] flex flex-col gap-3.5">
					<CustomTitleH2 className="text-[1.25rem] font-normal">
						{title}
					</CustomTitleH2>
					{isOpen && (
						<CustomText className="text-base font-normal text-grey-60">
							{subtitle}
						</CustomText>
					)}
				</div>
			</div>
			<button type="button" onClick={() => handleChangeStateQuestion()}
				className="h-full w-6 flex items-start cursor-pointer"
			>
				<img
					alt="icone de soma"
					src={iconOpenQuestion}
					className="h-6 w-6"
				/>
			</button>
		</li>
	);
};
