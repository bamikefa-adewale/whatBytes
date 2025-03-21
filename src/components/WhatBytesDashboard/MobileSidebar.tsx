"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import { SidebarLinks } from "../ui/SidebarLinks";
import Image from "next/image";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logo =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1742487684/whatbytesLogo_oz2htv.jpg";
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-3  rounded-md"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay (Backdrop) */}
      <div
        className={` ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 w-72 h-full bg-white border-r shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {" "}
        <div className="flex justify-between px-3 mt-4 items-center">
          <div className="flex items-center">
            {" "}
            <Image
              src={logo}
              alt="whatbytes logo"
              width={50}
              height={50}
            />{" "}
            <span className="text-base font-semibold">WhatBytes</span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            // className="absolute top-4 right-4 p-2 rounded-md "
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2 mt-10">
          <SidebarLinks />
        </nav>
      </aside>
    </>
  );
};
