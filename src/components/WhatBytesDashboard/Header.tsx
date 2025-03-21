import Image from "next/image";
import React from "react";
import { MobileSidebar } from "./MobileSidebar";

export const Header = () => {
  const profile =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1741016876/Bamtech_blusza.jpg";
  const logo =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1742487684/whatbytesLogo_oz2htv.jpg";
  return (
    <header className="border-b flex items-center justify-between sm:gap-10 lg:px-6 px-2 py-3 ">
      <MobileSidebar />

      <div className="flex items-center gap-2 cursor-pointer">
        <div className="font-bold text-2xl flex items-center">
          <div className="flex flex-col items-center mr-2">
            <Image src={logo} alt="whatbytes logo" width={50} height={50} />
          </div>
          WhatBytes
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 cursor-pointer  border-2 rounded-xl  p-2">
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <Image
              src={profile}
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="font-semibold hidden md:block ">Rahil Siddique</span>
        </div>
      </div>
    </header>
  );
};
