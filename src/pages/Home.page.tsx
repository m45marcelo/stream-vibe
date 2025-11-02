import { Header } from "../components/layout/Header/Header"

export const Home = () => {
	return (
		<div className="h-209">
            <Header/>
			<div className="h-174.75 bg-[url(./../assets/images/Container.png)] bg-center bg-no-repeat relative">
				<div className="h-[36.3125rem] w-full absolute top-0 bg-gradient-to-b from-[rgba(20,20,20,1)] to-[rgba(20,20,20,0)]" />
				<div className="h-[36.3125rem] w-full absolute bottom-0 bg-gradient-to-b from-[rgba(20,20,20,0)] to-[rgba(20,20,20,1)]" />
			</div>
		</div>
	);
};
