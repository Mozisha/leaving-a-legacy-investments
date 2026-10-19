import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    slug: "hickory-gardens",
    title: "Hickory Gardens",
    description: "48-unit affordable housing property in Hickory",
    image: "/houses/house-1.webp",
    href: "/portfolio/hickory-gardens",
  },
  {
    slug: "austin-ridge",
    title: "Austin Ridge",
    description: "Closed- 52 Units in Southern Pines NC",
    image: "/houses/house-2.webp",
    href: "/portfolio/austin-ridge",
  },
  {
    slug: "butterworth-flats",
    title: "Butterworth Flats & Odd Fellows Lofts",
    description: "64 Units + 17K SF Commercial | 100% Occupied | Petersburg, VA",
    image: "/houses/house-5.webp",
    href: "/portfolio/butterworth-flats",
  },
];

export function PortfolioCards() {
  return (
    <section className="bg-[#fdf8f0] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/*
          Layout mirrors the screenshot:
          - Two cards side-by-side in the first row
          - Third card alone on the left in the second row
          Uses CSS grid with explicit placement
        */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {properties.map((property, i) => (
            <Link
              key={property.slug}
              href={property.href}
              className={`group relative block overflow-hidden rounded-lg${
                i === 2 ? " sm:col-span-1" : ""
              }`}
              aria-label={`View project details for ${property.title}`}
            >
              {/* Background image */}
              <div className="relative h-52 w-full sm:h-60">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Blue overlay — matches the screenshot's solid blue tint */}
                <div className="absolute inset-0 bg-[#1a4fa0]/70 transition-opacity duration-300 group-hover:bg-[#1a4fa0]/80" />
              </div>

              {/* Card text — absolutely centred over the image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <h3 className="text-xl font-bold uppercase tracking-wide text-white drop-shadow sm:text-2xl">
                  {property.title}
                </h3>
                <p className="text-sm text-white/90">{property.description}</p>
                <span className="mt-2 inline-block border border-white px-5 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-white group-hover:text-[#1a4fa0]">
                  View Project Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
