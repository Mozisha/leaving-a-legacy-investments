"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const allWebinars = [
  {
    episode: 20,
    thumbnail: "/webinar-thumbnails/20.png",
    youtubeUrl: "https://youtu.be/JgXEmLVFof0?si=jhXIJbqhueismTTT",
  },
  {
    episode: 19,
    thumbnail: "/webinar-thumbnails/19.png",
    youtubeUrl: "https://youtu.be/Qursc27Ak3U?si=nSAGMX6HMexJWaED",
  },
  {
    episode: 18,
    thumbnail: "/webinar-thumbnails/18.png",
    youtubeUrl: "https://youtu.be/AKZ0o9FBPjc?si=lWc-sz7nGCwdQv9T",
  },
  {
    episode: 17,
    thumbnail: "/webinar-thumbnails/17.png",
    youtubeUrl: "https://youtu.be/Umoy7hnWKvo?si=yWyoQMX3I1b_Krq4",
  },
  {
    episode: 16,
    thumbnail: "/webinar-thumbnails/16.png",
    youtubeUrl: "https://youtu.be/p--iwtmGZLw?si=JwCtFbvrr67OPOTo",
  },
  {
    episode: 15,
    thumbnail: "/webinar-thumbnails/15.png",
    youtubeUrl: "https://youtu.be/mv-G92hSZQo?si=ZoIlizxi5YuA3GQR",
  },
  {
    episode: 14,
    thumbnail: "/webinar-thumbnails/14.png",
    youtubeUrl: "https://youtu.be/ulcpqMkkH6E?si=meSEX-L4_j3HwmSH",
  },
  {
    episode: 13,
    thumbnail: "/webinar-thumbnails/13.png",
    youtubeUrl: "https://youtu.be/nFqFizY5Z5o?si=5kXTR6Th3MrwSVUU",
  },
  {
    episode: 12,
    thumbnail: "/webinar-thumbnails/12.png",
    youtubeUrl: "https://youtu.be/OG-DHonj5Zc?si=LSyPKX7q2xXtQOvZ",
  },
  {
    episode: 11,
    thumbnail: "/webinar-thumbnails/11.png",
    youtubeUrl: "https://youtu.be/pGFolvXa_g4?si=hwvSWjo1utexUyIg",
  },
  {
    episode: 10,
    thumbnail: "/webinar-thumbnails/10.png",
    youtubeUrl: "https://youtu.be/37zj5EhyOeY?si=nWP4wXkRbC_XjiIx",
  },
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
      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {visible.map(({ episode, thumbnail, youtubeUrl }) => (
          <div
            key={episode}
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Thumbnail */}
            <div className="relative h-24 w-full overflow-hidden sm:h-52">
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
            <div className="flex flex-1 flex-col gap-1 p-2 sm:gap-3 sm:p-5">
              <span className="w-fit rounded-full bg-[#ddeaf7] px-1.5 py-0.5 text-[10px] font-semibold text-[#1a4fa0] sm:px-3 sm:py-1 sm:text-xs">
                Episode {episode}
              </span>
              <h3 className="text-[11px] font-bold leading-tight text-[#0d1b3e] sm:text-base">
                Capital Conversations — Ep. {episode}
              </h3>
              <div className="mt-auto">
                <Link
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1 rounded bg-[#1a4fa0] px-1.5 py-1 text-[10px] font-semibold text-white transition-opacity hover:opacity-90 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="hidden h-3 w-3 shrink-0 sm:block sm:h-4 sm:w-4" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="hidden sm:inline">Watch on </span>YouTube
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-2 sm:mt-12 sm:gap-4">
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className="inline-flex items-center gap-1 rounded border border-[#1a4fa0] px-3 py-1.5 text-xs font-semibold text-[#1a4fa0] transition-colors hover:bg-[#ddeaf7] disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page indicators */}
        <div className="flex items-center gap-1 sm:gap-2">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-label={`Page ${p}`}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-colors sm:h-9 sm:w-9 sm:text-sm",
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
          className="inline-flex items-center gap-1 rounded border border-[#1a4fa0] px-3 py-1.5 text-xs font-semibold text-[#1a4fa0] transition-colors hover:bg-[#ddeaf7] disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="hidden sm:inline">Next</span>
          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true">
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
