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
    <div className="hidden md:flex fixed z-40 left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg h-auto w-14 flex-col justify-center items-center py-5 rounded-r-2xl gap-1">
      {menuItems.map((item) => (
        <div key={item.id} className="group relative flex items-center">
          <button
            onClick={() => handleMoveToSection(item.id)}
            title={item.label}
            className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 my-0.5
              ${
                activeSection === item.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              }
            `}
          >
            <FontAwesomeIcon icon={item.icon} className="text-sm" />
          </button>
          {/* Tooltip */}
          <span className="absolute left-12 px-2.5 py-1 rounded-lg bg-slate-800 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none shadow-lg">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}