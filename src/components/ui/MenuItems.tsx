import { useLocation } from "react-router"

const links = [
    { name: "Home", href: "/"},
    { name: "Filmes & Shows", href: "/filmeseshows"},
    { name: "Suporte", href: "/suporte"},
    { name: "Inscrições", href: "/inscrições"}
]


export const MenuItems = () => {
    const { pathname } = useLocation();
    return(
        <div className="h-[4.1875rem] w-111 flex p-2 bg-black-6 border-[0.1875rem] border-black-12 rounded-[0.625rem]">
            {
                links.map((item) => (
                    <button key={item.name} type="button" className={
                        item.href === pathname ? "h-11.25 bg-black-10 text-absolute-white text-[0.875rem] font-medium px-5 py-3 rounded-lg" : "bg-black-6 h-11.25 text-[0.875rem] text-grey-75 font-normal px-5 py-3"
                    }>{item.name}</button>
                ))
            }
        </div>
    )
}