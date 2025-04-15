import Image from "next/image";

export const IntroSlide = ({
	title,
	subtitle,
	bg,
}: {
	title: string;
	subtitle: string;
	bg: string;
}) => (
	<div className="relative w-full h-full">
		<div className="absolute top-0 left-0 right-0 bottom-0">
			<Image
				src={bg}
				alt="Background"
				layout="fill"
				objectFit="cover"
				quality={100}
				priority
			/>
		</div>

		<div className="relative top-[20%] z-10 items-center h-full text-center text-white">
			<div>
				<h2 className="text-5xl font-bold font-ubuntu">{title}</h2>
				<p className="text-xl pt-8 px-10 font-roboto">{subtitle}</p>
			</div>
		</div>
	</div>
);
