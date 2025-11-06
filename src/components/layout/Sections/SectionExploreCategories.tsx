import { CustomText } from "../../others/CustomText";
import { CustomTitleH2 } from "../../others/CustomTitleH2";
import { ScrollCategories } from "../../ui/ScrollCategories";
import iconArrowRight from "../../../assets/icons/icon-arrow-right.png";
import imageCategoryAction from "../../../assets/images/imageCategoryAction.png";
import imageCategoryAdventure from "../../..//assets/images/imageCategoryAdventure.png";
import imageCategoryComedy from "../../../assets/images/imageCategoryComedy.png";
import imageCategoryDrama from "../../../assets/images/imageCategoryDrama.png";
import imageCategoryHorror from "../../../assets/images/imageCategoryHorror.png";

export const SectionExploreCategories = () => {
	return (
		<section className="w-full max-w-319.75 h-104.5 flex flex-col gap-[3.75rem]">
			<div className="h-19 w-full flex justify-between">
				<div className="w-full max-w-[62.125rem] flex flex-col gap-2.5">
					<CustomTitleH2 className="text-[1.75rem] font-semibold">
						Explore our wid e variety of categories
					</CustomTitleH2>
					<CustomText className="h-6 text-base text-grey-60 font-normal">
						Whether you're looking for a comedy to make you laugh, a
						drama to make you think, or a documentary to learn
						something new
					</CustomText>
				</div>
				<ScrollCategories />
			</div>

			<div className="w-full h-[17.625rem] flex gap-5">
				<div className="h-[17.625rem] w-full max-w-[14.9875rem] p-6 rounded-xl bg-black-10 border border-black-15">
					<img
						alt="imagem de categorias de filmes"
						src={imageCategoryAction}
						className="h-[13.125rem] w-full"
					/>
					<div className="h-6 flex justify-between">
						<CustomText className="text-base font-medium text-absolute-white">
							Ação
						</CustomText>
						<img
							alt="imagem de uma seta"
							src={iconArrowRight}
							className="h-6 w-6"
						/>
					</div>
				</div>
				<div className="h-[17.625rem] w-full max-w-[14.9875rem] p-6 rounded-xl bg-black-10 border border-black-15">
					<img
						alt="imagem de categorias de filmes"
						src={imageCategoryAdventure}
						className="h-[13.125rem] w-full"
					/>
					<div className="h-6 flex justify-between">
						<CustomText className="text-base font-medium text-absolute-white">
							Aventura
						</CustomText>
						<img
							alt="imagem de uma seta"
							src={iconArrowRight}
							className="h-6 w-6"
						/>
					</div>
				</div>
				<div className="h-[17.625rem] w-full max-w-[14.9875rem] p-6 rounded-xl bg-black-10 border border-black-15">
					<img
						alt="imagem de categorias de filmes"
						src={imageCategoryComedy}
						className="h-[13.125rem] w-full"
					/>
					<div className="h-6 flex justify-between">
						<CustomText className="text-base font-medium text-absolute-white">
							Comédia
						</CustomText>
						<img
							alt="imagem de uma seta"
							src={iconArrowRight}
							className="h-6 w-6"
						/>
					</div>
				</div>
				<div className="h-[17.625rem] w-full max-w-[14.9875rem] p-6 rounded-xl bg-black-10 border border-black-15">
					<img
						alt="imagem de categorias de filmes"
						src={imageCategoryDrama}
						className="h-[13.125rem] w-full"
					/>
					<div className="h-6 flex justify-between">
						<CustomText className="text-base font-medium text-absolute-white">
							Drama
						</CustomText>
						<img
							alt="imagem de uma seta"
							src={iconArrowRight}
							className="h-6 w-6"
						/>
					</div>
				</div>
				<div className="h-[17.625rem] w-full max-w-[14.9875rem] p-6 rounded-xl bg-black-10 border border-black-15">
					<img
						alt="imagem de categorias de filmes"
						src={imageCategoryHorror}
						className="h-[13.125rem] w-full"
					/>
					<div className="h-6 flex justify-between">
						<CustomText className="text-base font-medium text-absolute-white">
							Horror
						</CustomText>
						<img
							alt="imagem de uma seta"
							src={iconArrowRight}
							className="h-6 w-6"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
