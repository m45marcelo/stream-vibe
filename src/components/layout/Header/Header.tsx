import logo from "./../../../assets/images/Logo_Desktop.png";
import iconSearch from "./../../../assets/icons/icon_search.png";
import iconNotification from "./../../../assets/icons/icon_notification.png";
import { MenuItems } from "../../ui/MenuItems";
export const Header = () => {
    return(
        <header className="h-24.5 w-full z-10 flex items-center justify-between absolute px-20">
            <img alt="imagem logo" src={logo} className="h-12.5"/>
            <MenuItems/>
            <div className="flex gap-3.5">
                <img alt="icone pesquisa" src={iconSearch} className="h-6"/>
                <img alt="icone notificação" src={iconNotification} className="h-6"/>
            </div>
        </header>
    )
}