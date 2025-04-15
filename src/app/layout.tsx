import "./globals.css";
import { Ubuntu, Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
	variable: "--font-roboto",
	display: "swap",
});

const ubuntu = Ubuntu({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
	variable: "--font-ubuntu",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${roboto.variable} ${ubuntu.variable}`}>
			<body>{children}</body>
		</html>
	);
}
