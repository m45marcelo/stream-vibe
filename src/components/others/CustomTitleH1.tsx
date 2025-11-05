import type { ReactNode } from "react"

interface CustomTitleH1Props{
    children: ReactNode;
    className?: string;
}

export const CustomTitleH1: React.FC<CustomTitleH1Props> = ({children, className}) => {
    return <h1 className={`text-5xl flex items-center justify-center font-bold text-absolute-white ${className}`}>{children}</h1>
}