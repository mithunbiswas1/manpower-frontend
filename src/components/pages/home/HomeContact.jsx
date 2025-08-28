import { PhoneCall, Mail, FileText, FilePenIcon, FileDown } from "lucide-react";
import Link from "next/link";

export const HomeContact = () => {
  return (
    <section>
      {/* <div className="flex justify-center mb-12">
        <ButtonPrimary link="/about">Know More</ButtonPrimary>
      </div> */}
      <div className="_max_width pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <PhoneCall className="w-10 h-10  mb-2 text-gray-500" />
          <p className="text-lg">Call Us</p>
          <a
            href="tel:+97143535837"
            className="font-semibold text-xl mt-1 tracking-wide hover:underline text-gray-500"
          >
            04-3535837
          </a>
        </div>

        <div className="flex flex-col items-center mt-8 md:mt-0">
          <Mail className="w-10 h-10  mb-2 text-gray-500" />
          <p className="text-lg">Email Us</p>
          <a
            href="mailto:info@alsaharagroup.com"
            className="font-semibold text-xl mt-1 tracking-wide hover:underline text-gray-500"
          >
            info@alsaharagroup.com
          </a>
        </div>

        <div className="flex flex-col items-center mt-8 md:mt-0">
          <FileText className="w-10 h-10  mb-2 text-gray-500" />
          <p className="text-lg">Reach Us</p>
          <Link
            href="/reach-us"
            rel="noopener noreferrer"
            className="font-semibold text-xl text-gray-500 mt-1 tracking-wide hover:underline"
          >
            Book Online
          </Link>
        </div>

        <div className="flex flex-col items-center mt-8 md:mt-0">
          <FileDown className="w-10 h-10  mb-2 text-gray-500" />
          <p className="text-lg">Download Profile</p>
          <Link
            href="#"
            rel="noopener noreferrer"
            className="font-semibold text-xl text-gray-500 mt-1 tracking-wide hover:underline"
          >
            Download
          </Link>
        </div>
      </div>
    </section>
  );
};
