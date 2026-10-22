"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const allWebinars = [
  {
    episode: 9,
    thumbnail: "/webinar-thumbnails/capital-conversations-9.webp",
    youtubeUrl: "https://youtu.be/FclWTX7_iGs?si=VPoXP5YKetVe7zCu",
  },
  {
    episode: 8,
    thumbnail: "/webinar-thumbnails/capital-conversations-8.webp",
    youtubeUrl: "https://youtu.be/vI4HNeyNrbY?si=HjynsJNGnCK9nDpu",
  },
  {
    episode: 7,
    thumbnail: "/webinar-thumbnails/capital-conversations-7.webp",
    youtubeUrl: "https://youtu.be/Yhak_RQ4BBU?si=-k5tAnbOnogW7K65",
  },
  {
    episode: 6,
    thumbnail: "/webinar-thumbnails/capital-conversations-6.webp",
    youtubeUrl: "https://youtu.be/0iUvpXWOiuM?si=bfOWsQuHqsSyY2SB",
  },
  {
    episode: 5,
    thumbnail: "/webinar-thumbnails/capital-conversations-5.webp",
    youtubeUrl: "https://youtu.be/fiIyoB3Fots",
  },
  {
    episode: 4,
    thumbnail: "/webinar-thumbnails/capital-conversations-4.webp",
    youtubeUrl: "https://youtu.be/6VxTtnOHQFc?si=n95f7wU405k6Fy9J",
  },
  {
    episode: 3,
    thumbnail: "/webinar-thumbnails/capital-conversations-3.webp",
    youtubeUrl: "https://youtu.be/dYHHG4UKIV8",
  },
  {
    episode: 2,
    thumbnail: "/webinar-thumbnails/capital-conversations-2.webp",
    youtubeUrl: "https://youtu.be/LQtkXwB9lbE",
  },
  {
    episode: 1,
    thumbnail: "/webinar-thumbnails/capital-conversation-1.webp",
    youtubeUrl: "https://youtu.be/J-vUezGuaLA",
  },
];

const PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(allWebinars.length / PER_PAGE);

function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
        <svg
          viewBox="0 0 24 24"
          fill="#1a4fa0"
          className="h-6 w-6 translate-x-0.5"
          aria-hidden="true"
        >
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    </div>
  );
}

export function WebinarGrid() {
  const [page, setPage] = useState(1);

  const start = (page - 1) * PER_PAGE;
  const visible = allWebinars.slice(start, start + PER_PAGE);

  function goTo(next: number) {
    setPage(next);
    // Scroll back up to the top of the grid smoothly
    document.getElementById("webinar-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div id="webinar-grid">
      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {visible.map(({ episode, thumbnail, youtubeUrl }) => (
          <div
            key={episode}
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Thumbnail */}
            <div className="relative h-36 w-full overflow-hidden sm:h-52">
              <Image
                src={thumbnail}
                alt={`Capital Conversations Episode ${episode}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
              <PlayIcon />
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-5">
              <span className="w-fit rounded-full bg-[#ddeaf7] px-3 py-1 text-xs font-semibold text-[#1a4fa0]">
                Episode {episode}
              </span>
              <h3 className="text-base font-bold text-[#0d1b3e]">
                Capital Conversations — Ep. {episode}
              </h3>
              <div className="mt-auto">
                <Link
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1 rounded bg-[#1a4fa0] px-2 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className="inline-flex items-center gap-2 rounded border border-[#1a4fa0] px-5 py-2.5 text-sm font-semibold text-[#1a4fa0] transition-colors hover:bg-[#ddeaf7] disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Previous
        </button>

        {/* Page indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-label={`Page ${p}`}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                p === page
                  ? "bg-[#1a4fa0] text-white"
                  : "border border-gray-200 text-gray-500 hover:border-[#1a4fa0] hover:text-[#1a4fa0]",
              )}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(page + 1)}
          disabled={page === TOTAL_PAGES}
          aria-label="Next page"
          className="inline-flex items-center gap-2 rounded border border-[#1a4fa0] px-5 py-2.5 text-sm font-semibold text-[#1a4fa0] transition-colors hover:bg-[#ddeaf7] disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent"
        >
          Next
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Page count text */}
      <p className="mt-4 text-center text-xs text-gray-400">
        Page {page} of {TOTAL_PAGES} · {allWebinars.length} episodes
      </p>
    </div>
  );
}
