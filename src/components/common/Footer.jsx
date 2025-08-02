"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import {
  Info,
  Wrench,
  Home,
  User,
  BookOpenCheck,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Users,
  Briefcase,
  Phone,
} from "lucide-react";

// Social with Lucide icons
const Social = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61577258648302",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/aussie-hvac",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@aussiehvaccleaning",
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/aussie_hvac_services/",
    label: "Instagram",
  },
];

// Footer content
const footerSections = [
  {
    title: "About Us",
    content: {
      description:
        "At Al Shahara Group, we believe that people are the foundation of every successful operation. Based in the heart of the Gulf, we specialize in providing skilled and reliable manpower solutions across a range.",
      badge: "#1 Man Power Services",
    },
  },
  {
    title: "Useful Links",
    links: [
      { icon: <Home size={16} />, name: "Home", href: "/" },
      { icon: <Info size={16} />, name: "About Us", href: "/about-us" },
      {
        icon: <Wrench size={16} />,
        name: "Services",
        href: "/services",
      },
      {
        icon: <BookOpenCheck size={16} />,
        name: "Projects",
        href: "/projects",
      },
      { icon: <Users size={16} />, name: "Clients", href: "/clients" },
      { icon: <Phone size={16} />, name: "Reach Us", href: "/contact" },
    ],
  },
  {
    title: "Man Power Solutions",
    links: [
      {
        icon: <User size={16} />,
        name: "Skilled Technicians",
        href: "#",
      },
      {
        icon: <Briefcase size={16} />,
        name: "Trained Professionals",
        href: "#",
      },
      {
        icon: <Users size={16} />,
        name: "Certified Team",
        href: "#",
      },
      {
        icon: <Wrench size={16} />,
        name: "Expert Staff",
        href: "#",
      },
    ],
  },
  {
    title: "Follow Us",
    isSocial: true,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_bottom,_#13151B,_#13151B)] text-white py-12 px-6">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerSections.map((section, index) => (
          <div key={index} className="lg:mx-auto">
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              className="text-xl font-semibold mb-4 text-center md:text-left"
            >
              {section.title}
            </motion.h3>

            {section.content && (
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                className="text-center md:text-left"
              >
                <p className="mt-4 text-gray-400">
                  {section.content.description}
                </p>
                <div className="mt-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {section.content.badge}
                  </span>
                </div>
              </motion.div>
            )}

            {!section.isSocial && section.links && (
              <motion.ul
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                className="space-y-2 text-gray-400 flex flex-col items-center md:items-start"
              >
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 hover:text-white transition-all"
                  >
                    {link.icon}
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </motion.ul>
            )}

            {section.isSocial && (
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                className="flex gap-4 justify-center md:justify-start mt-2"
              >
                {Social.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={idx}
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-white hover:text-yellow-400 transition-colors duration-200" />
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="mt-12 text-center text-gray-500 text-sm"
      >
        &copy; {new Date().getFullYear()} Al Shahara Group. All rights reserved.
        | Design and Developed by{" "}
        <a href="#" className="underline">
          Anik Group Of Companines
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
