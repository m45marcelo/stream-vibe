const links = [
    { name: "Home", href: "/"},
    { name: "Filmes & Shows", href: "/filmeseshows"},
    { name: "Suporte", href: "/suporte"},
    { name: "Inscrições", href: "/inscrições"}
]

export const MenuItems = () => {
    return(
        <div className="h-15.25 w-111 flex p-2 bg-black-6 border-[0.1875rem] border-black-12 rounded-[0.625rem]">
            <button type="button">Home</button>
        </div>
    )
}