"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faBriefcase,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Sidebar = () => {
	const [activeSection, setActiveSection] = useState(1);

	const handleMoveToSection = (index) => {
		if (typeof fullpage_api !== "undefined") {
			fullpage_api.moveTo(index);
			setActiveSection(index);
		}
	};

	useEffect(() => {
		if (typeof fullpage_api !== "undefined") {
			const updateActive = () =>
				setActiveSection(fullpage_api.getActiveSection().index + 1);
			fullpage_api.setAllowScrolling(true);
			window.addEventListener("scroll", updateActive);
			return () => window.removeEventListener("scroll", updateActive);
		}
	}, []);

	const menuItems = [
		{ id: 1, icon: faHome, label: "Home", anchor: "home" },
		{ id: 2, icon: faUser, label: "About", anchor: "about" },
		{ id: 3, icon: faFolderOpen, label: "Projects", anchor: "projects" },
		{ id: 4, icon: faBriefcase, label: "Experience", anchor: "experience" },
		{ id: 5, icon: faEnvelope, label: "Contact", anchor: "contact" },
	];

	return (
		<div className="hidden md:flex fixed z-40 left-0 top-1/4 bg-gray-900/90 backdrop-blur-md h-[55vh] w-16 flex-col justify-between items-center p-4 rounded-e-3xl shadow-xl border border-gray-700">
			<ul className="flex flex-col justify-evenly items-center h-full space-y-2 text-gray-300">
				{menuItems.map((item) => (
					<li key={item.id} data-menuanchor={item.anchor}>
						<button
							onClick={() => handleMoveToSection(item.id)}
							title={item.label}
							className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
								activeSection === item.id
									? "bg-blue-500 text-white shadow-md"
									: "hover:bg-gray-700 hover:text-white"
							}`}
						>
							<FontAwesomeIcon icon={item.icon} className="text-lg" />
							<span className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-gray-100 text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md">
								{item.label}
							</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
