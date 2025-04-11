import { Button } from "../ui";

export const MainButton = ({ children }: { children: React.ReactNode }) => {
	return (
		<Button className="bg-gradient-to-r from-[#BF61E1] to-[#5E27FF] flex w-[332px] h-[56px] rounded-[12px] justify-center items-center gap-[10px] flex-shrink-0 text-center text-[16px]">
			{children}
		</Button>
	);
};
