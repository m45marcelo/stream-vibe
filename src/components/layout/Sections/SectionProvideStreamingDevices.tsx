import iconConsole from "../../../assets/icons/Icon-console.png";
import iconHeadset from "../../../assets/icons/Icon-headset.png";
import iconLaptop from "../../../assets/icons/Icon-laptop.png";
import iconSmartphone from "../../../assets/icons/Icon-smartphone.png";
import iconTablet from "../../../assets/icons/Icon-tablet.png";
import iconTv from "../../../assets/icons/Icon-tv.png";
import { CustomText } from "../../others/CustomText";
import { CustomTitleH2 } from "../../others/CustomTitleH2";
import { CardStreamingDevices } from "../../ui/CardStreamingDevices";

export const SectionProvideStreamingDevices = () => {
	const cardStreamingInfos = [
		{
			icon: iconSmartphone,
            title: "Smartphones",
			subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
		},
        {
            icon: iconTablet,
            title: "Tablet",
			subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
		},
        {
            icon: iconTv,
            title: "Smart TV",
			subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
		},
        {
            icon: iconLaptop,
            title: "Laptops",
			subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
		},
        {
            icon: iconConsole,
            title: "Gaming Consoles",
			subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
		},
        {
            icon: iconHeadset,
            title: "VR Headsets ",
			subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
		},
	];
	return (
		<section className="w-full max-w-319.75 h-[40rem] flex flex-col gap-[3.75rem]">
			<div className="flex flex-col gap-2.5">
				<CustomTitleH2 className="text-[1.75rem] font-semibold">
					We Provide you streaming experience across various devices.
				</CustomTitleH2>
				<CustomText className="text-base font-normal text-grey-60 h-12 w-[70.5625rem]">
					With StreamVibe, you can enjoy your favorite movies and TV
					shows anytime, anywhere. Our platform is designed to be
					compatible with a wide range of devices, ensuring that you
					never miss a moment of entertainment.
				</CustomText>
			</div>
			<div className="h-120 grid grid-cols-3 grid-rows-2 gap-5">
				{
                    cardStreamingInfos.map((item) => (
                        <CardStreamingDevices key={item.title} icon={item.icon} title={item.title} subtitle={item.subtitle}/>
                    ))
                }
			</div>
		</section>
	);
};
