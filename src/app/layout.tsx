import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserContextProvider } from "@/context/user-context";

export const metadata: Metadata = {
	title: "Dogs Next",
	description: "Rede social para cães",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<UserContextProvider>
				<body className={type_second.variable}>
					<div className='App'>
						<Header />
						<main className='AppBody'>{children}</main>
						<Footer />
					</div>
				</body>
			</UserContextProvider>
		</html>
	);
}
