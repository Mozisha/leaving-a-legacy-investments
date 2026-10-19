"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { mainNav } from "@/lib/site";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

/** Dropdown for the Resources nav item on desktop */
function DesktopDropdown({
  label,
  children,
}: {
  label: string;
  children: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  const isActive = children.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"));

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          isActive
            ? "text-[#1a4fa0] border-b-2 border-[#1a4fa0] pb-0.5"
            : "text-gray-700 hover:text-[#1a4fa0]",
        )}
      >
        {label}
        {/* Caret icon */}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={cn("transition-transform", open && "rotate-180")}
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute left-0 top-full z-50 mt-2 w-44 rounded-sm border border-foreground/10 bg-white py-1 shadow-md"
        >
          {children.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a4fa0] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/** A plain desktop nav link with active underline */
function DesktopNavLink({ label, href }: { label: string; href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors",
          isActive
            ? "text-[#1a4fa0] border-b-2 border-[#1a4fa0] pb-0.5"
            : "text-gray-700 hover:text-[#1a4fa0]",
        )}
      >
        {label}
      </Link>
    </li>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/lali-logo.webp"
            alt="Leaving a Legacy Investments"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  label={item.label}
                  children={item.children}
                />
              ) : (
                <DesktopNavLink
                  key={item.href}
                  label={item.label}
                  href={item.href}
                />
              ),
            )}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <MobileNav />
      </div>
    </header>
  );
}
