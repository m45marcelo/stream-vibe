interface CustomButtomProps {
	title: string;
	isPrimary: boolean;
	className: string;
	icon?: string;
}

export const CustomButtom: React.FC<CustomButtomProps> = ({
	title,
	isPrimary,
	className,
	icon,
}) => {
	return (
		<button
			type="button"
			className={
				isPrimary
					? `${className} text-absolute-white bg-red-45`
					: `${className} border border-black-15 bg-black-8  text-absolute-white`
			}
		>
			{icon ? (
				<span className="flex gap-1">
					<img alt="imagem icone" src={icon} className="h-6" />
					{title}
				</span>
			) : (
				<span className="flex gap-1">{title}</span>
			)}
		</button>
	);
};
