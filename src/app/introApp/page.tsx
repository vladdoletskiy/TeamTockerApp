"use client";

import type { EmblaOptionsType } from "embla-carousel";
import { EmblaCarousel } from "@/components/shared";
import { IntroSlide } from "@/components/shared";
import { Button } from "@/components/ui";

export default function IntroAppPage() {
	const OPTIONS: EmblaOptionsType = { align: "start" };

	const slides = [
		<IntroSlide
			key="1"
			title="Відстежуй"
			subtitle="За допомогою додатку, 
ти зможеш відстежувати 
прогрес спортсменів"
			bg="/bgIntroApp/look.png"
		/>,
		<IntroSlide
			key="2"
			title="Мотивуй"
			subtitle="Додаток, який допоможе зробити тренувальнй процес цікавішим для спортсменів 
та продуктивнішим для тренера"
			bg="/bgIntroApp/motivation.png"
		/>,
		<IntroSlide
			key="3"
			title="Оптимізуй"
			subtitle="Додаток - для професійних тренерів, який допоможе оптимізувати тренувальну діяльність і перетворити
 її в організований бізнес процес."
			bg="/bgIntroApp/optimization.png"
		/>,
	];

	return (
		<div className="w-full">
			<Button
				variant="ghost"
				className="absolute z-10 text-white font-bold right-2 top-4"
			>
				Пропустити
			</Button>
			<EmblaCarousel slides={slides} options={OPTIONS} />
		</div>
	);
}
