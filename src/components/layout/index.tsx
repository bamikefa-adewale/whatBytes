import { Sidebar } from "@/components/WhatBytesDashboard/Sidebar";
import React, { FC, ReactNode } from "react";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="flex md:flex-row flex-col">
      <Sidebar />
      <section className="flex-1">{children}</section>
    </main>
  );
};

export default MainLayout;
interface MainLayoutProps {
  children: ReactNode;
}
