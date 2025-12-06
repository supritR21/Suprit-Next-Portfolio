"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const [isMobile, setIsMobile] = useState(false);

	const handleItemClick = () => {
		setIsNavOpen(false);
	};

	const navVariant = {
		open: {
			clipPath: `circle(2000px at calc(100% - 40px) 40px)`,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
		closed: {
			clipPath: "circle(0px at calc(100% - 120px) 35px)",
			transition: {
				delay: 0.4,
				type: "spring",
				stiffness: 400,
				damping: 30,
			},
		},
	};

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const itemVariants = {
		open: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1 + 0.2,
				type: "spring",
				stiffness: 300,
				damping: 30,
			},
		}),
		closed: {
			opacity: 0,
			y: 40,
			transition: { duration: 0.2 },
		},
	};

	return (
		<motion.div
			className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden backdrop-blur-md"
			variants={navVariant}
			animate={isNavOpen ? "open" : "closed"}
			initial={false}
		>
			<div className="absolute inset-0 bg-gray-900 bg-opacity-95" />
			<div className="relative flex flex-col items-center justify-center text-center space-y-8 z-50">
				<motion.h1
					className="text-5xl md:text-6xl font-bold text-white tracking-wide"
					variants={itemVariants}
					animate={isNavOpen ? "open" : "closed"}
				>
					Menu
				</motion.h1>

				{[
					{ label: "Home", href: "/#home" },
					{ label: "About", href: "/about" },
					{ label: "Projects", href: "/projects" },
					{ label: "Experience", href: "/#experience" },
					{ label: "Contact", href: "/#contact" },
				].map((item, i) => (
					<motion.div
						key={item.label}
						custom={i}
						variants={itemVariants}
						animate={isNavOpen ? "open" : "closed"}
					>
						<Link
							href={item.href}
							onClick={handleItemClick}
							className="text-2xl md:text-3xl font-semibold text-gray-200 hover:text-white transition-colors duration-200"
						>
							{item.label}
						</Link>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navRef = useRef(null);

	const toggleNav = () => setIsNavOpen(!isNavOpen);

	return (
		<>
			<nav
				ref={navRef}
				className={`fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-6 md:px-20 transition-all duration-300 ${
					isNavOpen
						? "bg-gray-900 bg-opacity-80 backdrop-blur-lg"
						: "backdrop-blur-md bg-white/70 shadow-sm"
				}`}
			>
				<Link href="/" className="flex items-center">
					<h1
						className={`text-2xl font-bold tracking-tight transition-colors ${
							isNavOpen ? "text-white" : "text-gray-900"
						}`}
					>
						Suprit<span className="text-blue-600">Raj</span>
					</h1>
				</Link>

				{/* Hamburger Button */}
				<button
					className="relative z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
					onClick={toggleNav}
					aria-label="Toggle Navigation Menu"
				>
					<span
						className={`w-8 h-1 bg-current rounded-full transition-all duration-300 ${
							isNavOpen ? "rotate-45 translate-y-2 bg-white" : "bg-gray-900"
						}`}
					/>
					<span
						className={`w-8 h-1 bg-current rounded-full transition-all duration-300 ${
							isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-gray-900"
						}`}
					/>
				</button>
			</nav>

			{/* Navigation Overlay */}
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};

export default Navbar;
