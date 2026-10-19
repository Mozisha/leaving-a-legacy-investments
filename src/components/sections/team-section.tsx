import Image from "next/image";

const team = [
  {
    name: "Phya",
    role: "Founder & Owner, Leaving a Legacy Investments",
    image: "/phya.webp",
  },
];

export function TeamSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Meet the
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0d1b3e] sm:text-4xl">
            Leaving a Legacy Investments Team
          </h2>
        </div>

        {/* Team grid — centred single card, expands naturally if more members added */}
        <ul
          className="mt-14 flex flex-wrap justify-center gap-10"
          aria-label="Team members"
        >
          {team.map(({ name, role, image }) => (
            <li
              key={name}
              className="flex w-64 flex-col items-center rounded-xl bg-white p-8 shadow-sm"
            >
              {/* Avatar — gold ring */}
              <div className="relative h-44 w-44 shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c8a84b] via-[#e8c96d] to-[#c8a84b] p-[5px]">
                  <div className="h-full w-full rounded-full bg-white p-[3px]">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-[#d4a84b]">
                      <Image
                        src={image}
                        alt={`${name} — ${role}`}
                        fill
                        sizes="176px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Name & role */}
              <p className="mt-5 text-lg font-bold text-[#1a4fa0]">{name}</p>
              <p className="mt-1 text-center text-sm font-medium text-gray-500">
                {role}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
