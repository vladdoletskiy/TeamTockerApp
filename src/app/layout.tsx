import { Ubuntu, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
	variable: "--font-roboto",
});

const ubuntu = Ubuntu({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
	variable: "--font-ubuntu",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${roboto.className} ${ubuntu.className}`}>
			<body>
				<div className="container">{children}</div>
			</body>
		</html>
	);
}
