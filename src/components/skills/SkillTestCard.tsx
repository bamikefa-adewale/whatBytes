"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { UpdateScoreModal } from "../WhatBytesDashboard/UpdateScoreModal";
import { CustomButton } from "../ui/CustomButton";

export const SkillTestCard = () => {
  const [showModal, setShowModal] = useState(false);
  const toggle = (showModal: boolean) => {
    return setShowModal(showModal);
  };
  const HtmlLogo =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1742488254/html5_xenq6g.png";

  return (
    <>
      <Card>
        <CardContent className="p-4 md:p-6 flex items-start justify-between flex-col sm:flex-row gap-4">
          <div className="flex gap-4">
            <div className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
              <div className="bg-orange-100 p-2 rounded">
                <Image
                  src={HtmlLogo}
                  alt="HTML5 Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-normal">
                Hyper Text Markup Language
              </h2>
              <p className="text-gray-600 mt-1 text-sm md:text-xl font-semibold">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
          </div>
          <CustomButton
            className="lg:py-3  lg:px-8  hover:bg-gray-400 text-white border-2 border-black text-2xl"
            onClick={() => toggle(true)}
          >
            update
          </CustomButton>
        </CardContent>
      </Card>

      {/* Modal Component */}
      <UpdateScoreModal open={showModal} onClose={toggle} />
    </>
  );
};
