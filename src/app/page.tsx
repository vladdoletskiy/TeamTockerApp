import Link from "next/link";
import IntroAppPage from "./introApp/page";

export default async function Home() {
	return (
		<div className="w-full">
			<IntroAppPage />
		</div>
	);
}
