import { CustomText } from "../others/CustomText";
import { CustomTitleH2 } from "../others/CustomTitleH2"

interface CardStreamingDevicesProps{
    icon: string;
    title: string;
    subtitle: string;
}

export const CardStreamingDevices: React.FC<CardStreamingDevicesProps> = ({icon, title, subtitle}) => {
    return(
        <div className="h-57.5 flex flex-col p-10 gap-6 [background:linear-gradient(to_bottom_left,#140000ff_0%,#0f0f0fff_42%,#0f0f0fff_100%)] rounded-[0.625rem] border border-black-15">
            <div className="h-13.5 flex items-center gap-3">
                <div className="h-13.5 w-13.5 p-3 rounded-[0.625rem] bg-black-8 border border-black-12">
                    <img alt="imagem de um icone" src={icon}/>
                </div>
                <CustomTitleH2 className="text-[1.25rem] font-semibold">{title}</CustomTitleH2>
            </div>

            <CustomText className="text-base font-normal text-grey-60">{subtitle}</CustomText>
        </div>
    )
}