import type { ReactNode } from "react"

interface CustomTitleH2Props{
    children: ReactNode;
    className?: string;
}

export const CustomTitleH2: React.FC<CustomTitleH2Props> = ({children, className}) => {
    return <h2 className={`flex text-absolute-white ${className}`}>{children}</h2>
}