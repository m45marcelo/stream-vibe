import iconArrowLeft from "../../assets/icons/icon-arrow-lefth.png"
import iconArrowRight from "../../assets/icons/icon-arrow-right.png"
export const ScrollCategories = () => {
    return(
        <div className="h-[4.25rem] flex justify-between items-center w-[12.8125rem] p-3 rounded-[0.625rem] border border-black-12">
            <div className="w-11 h-11 cursor-pointer bg-black-10 rounded-md p-2.5 border border-black-12">
                <img alt="icone seta" src={iconArrowLeft} className="h-6"/>
            </div>

            <div className="flex gap-0.75 w-[5.0625rem] h-1">
                <div className="h-full w-[1.4375rem] lef rounded-full bg-red-45"/>
                <div className="h-full w-[1.0206rem] rounded-full bg-black-20"/>
                <div className="h-full w-[1.0206rem] rounded-full bg-black-20"/>
                <div className="h-full w-[1.0206rem] rounded-full bg-black-20"/>
            </div>

            <div className="w-11 h-11 cursor-pointer bg-black-10 rounded-md p-2.5 border border-black-12">
                <img alt="icone seta" src={iconArrowRight} className="h-6"/>
            </div>
        </div>
    )
}