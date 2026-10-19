import Image from "next/image";

const images = [
  { src: "/houses/house-1.webp", alt: "Investment property 1" },
  { src: "/houses/house-2.webp", alt: "Investment property 2" },
  { src: "/houses/house-3.webp", alt: "Investment property 3" },
  { src: "/houses/house-4.webp", alt: "Investment property 4" },
  { src: "/houses/house-5.webp", alt: "Investment property 5" },
];

// Duplicate the list so the marquee loop is seamless
const track = [...images, ...images];

export function PortfolioCarousel() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold leading-tight text-[#1a4fa0] sm:text-4xl">
          Investment opportunities with Leaving a Legacy Investments
        </h2>

        {/* Sub-copy */}
        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-gray-600 sm:text-base">
          At Leaving a Legacy Investments, you can invest in multi-family
          properties with a minimum commitment ranging from $25K to $50K. Reach
          out to us for detailed information on our current investment
          opportunities.
        </p>
      </div>

      {/* ── Marquee strip — full bleed so images can scroll edge-to-edge ── */}
      <div className="mt-12 w-full overflow-hidden">
        {/*
          The inner track is twice as wide as needed.
          The CSS animation slides it left by exactly 50% (= one full set of images),
          then instantly resets — creating a seamless infinite loop.
        */}
        <div className="flex animate-marquee gap-4 will-change-transform">
          {track.map((img, i) => (
            <div
              key={i}
              className="relative h-56 w-72 shrink-0 overflow-hidden rounded-lg sm:h-64 sm:w-80 lg:h-72 lg:w-96"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
