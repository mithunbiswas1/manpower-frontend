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
  ShieldCheck,
} from "lucide-react";
import { SharedContactService } from "../shared/SharedContactService";

// Social with Lucide icons
const Social = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "#",
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
];

// Footer content
const footerSections = [
  {
    title: "About Us",
    content: {
      description:
        "At Al Shahara Group, we believe that people are the foundation of every successful operation. Based in the heart of the Gulf, we specialize in reliable manpower solutions across a range.",
      badge: "#1 Man Power Services",
    },
  },
  {
    title: "Useful Links",
    links: [
      // { icon: <Home size={16} />, name: "Home", href: "/" },
      // { icon: <Info size={16} />, name: "About Us", href: "/about-us" },
      // { icon: <Wrench size={16} />, name: "Services", href: "/get-service" },
      {
        icon: <BookOpenCheck size={16} />,
        name: "Projects",
        href: "/projects",
      },
      { icon: <Users size={16} />, name: "Clients", href: "/clients" },
      { icon: <User size={16} />, name: "Career", href: "/career" },
      // { icon: <Phone size={16} />, name: "Reach Us", href: "/reach-us" },
      {
        icon: <Info size={16} />,
        name: "Terms And Conditions",
        href: "/terms-conditions",
      },
      {
        icon: <ShieldCheck size={16} />,
        name: "Privacy- Policy",
        href: "/privacy-policy",
      },
    ],
  },
  {
    title: "Man Power Solutions",
    links: [
      {
        icon: <User size={16} />,
        name: "Warehouse & Packing Helpers",
        href: "/get-service",
      },
      {
        icon: <Briefcase size={16} />,
        name: "Cleaning Staff",
        href: "/get-service",
      },
      {
        icon: <Users size={16} />,
        name: "Construction Labour",
        href: "/get-service",
      },
      {
        icon: <Wrench size={16} />,
        name: "Hospitality Workers",
        href: "/get-service",
      },
      {
        icon: <BookOpenCheck size={16} />,
        name: "Factory & General Helpers",
        href: "/get-service",
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
    <footer className="">
      {/* <SharedContactService /> */}
      <div className="bg-[linear-gradient(to_bottom,_#13151B,_#13151B)] text-white py-12 px-6">
        <div className="_max_width grid grid-cols-1 md:grid-cols-4 gap-8">
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
                        <Icon className="w-6 h-6 text-white hover:text-secondary transition-colors duration-200" />
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
          &copy; {new Date().getFullYear()} Al Shahara Group. All rights
          reserved. | Powered by{" "}
          <a href="#" className="underline">
            TechKnowGram Limited
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
