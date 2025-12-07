import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
	title: "Suprit Raj | Portfolio",
	description:
		"I’m Suprit Raj — a passionate Full Stack & AI Developer, building innovative web solutions and AI-powered systems. Currently pursuing B.Tech in Computer Science at NIT Patna.",
	author: "Suprit Raj",
	metadataBase: new URL("https://supritraj.me"),
	siteUrl: "https://supritraj.me",
	applicationName: "Suprit Raj Portfolio",
	keywords: [
		"Suprit Raj",
		"Suprit",
		"Suprit NIT Patna",
		"Suprit Raj Portfolio",
		"Suprit Full Stack Developer",
		"Suprit AI Developer",
		"Suprit Raj GitHub",
		"NIT Patna Developer",
		"Full Stack Developer India",
		"AI Engineer Portfolio",
		"React Next.js Developer",
		"Generative AI Developer",
		"LangChain Developer",
	],
	openGraph: {
		type: "website",
		url: "https://supritraj.me",
		title: "Suprit Raj | Portfolio",
		site_name: "Suprit Raj Portfolio",
		description:
			"Hi, I'm Suprit Raj — Full Stack & AI Developer from NIT Patna. I create modern web apps, RAG systems, and intelligent solutions using Next.js, Node.js, and AI frameworks.",
		images: [
			{
				url: "/og-image-suprit.png",
				alt: "Suprit Raj Portfolio Preview",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Suprit Raj | Full Stack & AI Developer",
		description:
			"Portfolio of Suprit Raj — Full Stack & AI Developer specializing in Next.js, Node.js, and Generative AI. Building smart, scalable, and efficient web applications.",
		creator: "@supritraj",
		images: ["/og-image-suprit.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-white text-black antialiased">
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
