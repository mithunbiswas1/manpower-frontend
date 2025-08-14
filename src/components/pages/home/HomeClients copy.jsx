import Image from "next/image";
import { ButtonSeeAll } from "@/components/custom/ButtonSeeAll";

import AlQabdahLogo from "@/resource/clients.png";
import StrabagLogo from "@/resource/clients.png";
import ShapoorjiLogo from "@/resource/clients.png";
import DutcoLogo from "@/resource/clients.png";

export const HomeClients = () => {
  const clientLogos = [
    AlQabdahLogo,
    StrabagLogo,
    ShapoorjiLogo,
    DutcoLogo,
    AlQabdahLogo,
    StrabagLogo,
    ShapoorjiLogo,
    DutcoLogo,
    AlQabdahLogo,
    StrabagLogo,
    ShapoorjiLogo,
    DutcoLogo,
  ];

  return (
    <section className="_max_width bg-white py-20 text-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Clients</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        “Our clients are always pampered with quality advice and follow-ups
        concerning our services, making Tabasco a truly exceptional experience
        and yet another reason to work with us!”
      </p>
      <ButtonSeeAll href="/projects" text="See our Projects" />

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6 2xl:gap-7 items-center justify-center mx-auto">
        {clientLogos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center p-4">
            <Image
              src={logo}
              alt={`Client ${idx + 1}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
