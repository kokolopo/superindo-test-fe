"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const SidebarMenu = ({
  href,
  children,
  title,
}: {
  href: string;
  children: React.ReactNode;
  title: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathname == href && "shadow-xl"
      } flex items-center space-x-4 rounded-md py-2 px-4 hover:shadow-xl hover:cursor-pointer`}
    >
      <div
        className={`${
          pathname == href
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-gray-200"
            : "bg-slate-100"
        } p-2 rounded-md shadow-lg`}
      >
        {children}
      </div>
      <div
        className={`${
          pathname == href ? "font-semibold" : "text-gray-500"
        } text-sm`}
      >
        {title}
      </div>
    </Link>
  );
};

export default SidebarMenu;
