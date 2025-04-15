import type { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";

type PropType = {
	slides: React.ReactNode[];
	options?: EmblaOptionsType;
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div className="embla__slide" key={index}>
							{slide}
						</div>
					))}
				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={"embla__dot".concat(
								index === selectedIndex ? " embla__dot--selected" : "",
							)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
