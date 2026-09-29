"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "bg-amber-500 text-black font-semibold shadow-md shadow-amber-500/20 hover:bg-amber-400 hover:shadow-amber-500/30"
          : "font-medium text-zinc-400 hover:text-white hover:bg-zinc-800"
      } transition-all duration-200 px-5 py-2.5 rounded-2xl`}
    >
      {children}
    </Link>
  );
}
