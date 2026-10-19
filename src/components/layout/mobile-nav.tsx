"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  function closeAll() {
    setMenuOpen(false);
    setResourcesOpen(false);
  }

  return (
    <div className="lg:hidden">
      {/* Hamburger / close button */}
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {menuOpen ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Slide-down drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-gray-200 bg-white px-4 pb-4 pt-2 shadow-md"
        >
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => {
              if (item.children) {
                // Resources accordion
                const isActive = item.children.some(
                  (c) => pathname === c.href || pathname.startsWith(c.href + "/"),
                );
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={resourcesOpen}
                      onClick={() => setResourcesOpen((v) => !v)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium",
                        isActive
                          ? "text-[#1a4fa0]"
                          : "text-gray-700 hover:bg-gray-100 hover:text-[#1a4fa0]",
                      )}
                    >
                      {item.label}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                        className={cn(
                          "transition-transform",
                          resourcesOpen && "rotate-180",
                        )}
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

                    {resourcesOpen && (
                      <ul className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-gray-200 pl-3">
                        {item.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeAll}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm font-medium",
                                  childActive
                                    ? "text-[#1a4fa0]"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-[#1a4fa0]",
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              // Plain link
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href + "/"));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-base font-medium",
                      isActive
                        ? "text-[#1a4fa0]"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[#1a4fa0]",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
