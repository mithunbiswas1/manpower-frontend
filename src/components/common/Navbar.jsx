"use client";

import { useState } from "react";
import Link from "next/link"; // Import Link
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonPrimary } from "../custom/ButtonPrimary";

import logo from "@/resource/logo.jpeg";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  {
    name: "Services",
    subMenu: [
      { name: "Demo 1", path: "#" },
      { name: "Demo 2", path: "#" },
      { name: "Demo 3", path: "#" },
      { name: "Demo 4", path: "#" },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
  { name: "Reach Us", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(null);

  const closeAllMenus = () => {
    setDrawerOpen(false);
    setSubmenuOpen(null);
    setDesktopSubmenuOpen(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
    setSubmenuOpen(null);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-semibold">
        <div className="_max_width">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div>
              <Link href="/" onClick={closeAllMenus}>
                <Image
                  src={logo}
                  height={184}
                  width={768}
                  className="h-12 w-full"
                  alt="Company Logo"
                />
              </Link>
            </div>

            {/* Center: Nav Items (Desktop) */}
            <div className="hidden md:flex space-x-8 text-gray-700 font-semibold">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() =>
                    item.subMenu && setDesktopSubmenuOpen(idx)
                  }
                  onMouseLeave={() =>
                    item.subMenu && setDesktopSubmenuOpen(null)
                  }
                >
                  {item.subMenu ? (
                    <>
                      <button className="flex items-center gap-1">
                        {item.name}
                        <ChevronDown size={16} />
                      </button>
                      <AnimatePresence>
                        {desktopSubmenuOpen === idx && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-2 left-0 min-w-48 bg-white shadow-lg rounded-md p-2 z-40 "
                          >
                            {item.subMenu.map((sub, subIdx) => (
                              <Link
                                key={subIdx}
                                href={sub.path}
                                onClick={closeAllMenus}
                                className="block py-2 px-3 hover:bg-primary hover:text-white cursor-pointer rounded"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.path} onClick={closeAllMenus}>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Appointment (Desktop) */}
            <div className="hidden md:block">
              <ButtonPrimary>Make Appointment</ButtonPrimary>
            </div>

            {/* Hamburger (Mobile) */}
            <div className="md:hidden">
              <button onClick={toggleDrawer} className="text-primary">
                {drawerOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-40 shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="text-xl font-bold text-primary">MyClinic</div>
              <button onClick={toggleDrawer}>
                <X size={28} className="text-primary" />
              </button>
            </div>

            <ul className="space-y-4 text-gray-800 text-lg font-semibold">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  {item.subMenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setSubmenuOpen(submenuOpen === idx ? null : idx)
                        }
                        className="flex justify-between items-center w-full"
                      >
                        {item.name}
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            submenuOpen === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {submenuOpen === idx && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 mt-2 space-y-2 text-base text-gray-700 overflow-hidden"
                          >
                            {item.subMenu.map((sub, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  href={sub.path}
                                  onClick={closeAllMenus}
                                  className="block cursor-pointer hover:text-secondary"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={closeAllMenus}
                      className="block w-full text-left"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}

              <ButtonPrimary className="w-full">Know more</ButtonPrimary>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
