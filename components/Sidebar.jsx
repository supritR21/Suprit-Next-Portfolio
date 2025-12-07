"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ activeSection }) {
  const handleMoveToSection = (index) => {
    if (typeof fullpage_api !== "undefined") {
      fullpage_api.moveTo(index);
    }
  };

  const menuItems = [
    { id: 1, icon: faHome, label: "Home" },
    { id: 2, icon: faUser, label: "About" },
    { id: 3, icon: faFolderOpen, label: "Projects" },
    { id: 4, icon: faBriefcase, label: "Experience" },
    { id: 5, icon: faEnvelope, label: "Contact" },
  ];

  return (
    <div className="hidden md:flex fixed z-40 left-0 top-1/4 bg-gray-900/90 h-[55vh] w-16 flex-col justify-between items-center p-4 rounded-e-3xl shadow-xl border border-gray-700">
      <ul className="flex flex-col justify-evenly items-center h-full space-y-2 text-gray-300">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleMoveToSection(item.id)}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                ${
                  activeSection === item.id
                    ? "bg-blue-500 text-white shadow-lg scale-110"
                    : "hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
