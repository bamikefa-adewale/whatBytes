import { BarChart3, File } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-80 border-r lg:block hidden">
      <nav className="p-4 space-y-2">
        <Link
          href="#"
          className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <BarChart3 className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 p-3 text-blue-600 bg-blue-50 rounded-lg font-medium"
        >
          <div className="h-5 w-5 flex items-center justify-center text-blue-600">
            <span className="h-4 w-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
              <span className="h-1 w-1 bg-blue-600 rounded-full"></span>
            </span>
          </div>
          <span>Skill Test</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <File className="h-5 w-5" />
          <span>Internship</span>
        </Link>
      </nav>
    </aside>
  );
};
