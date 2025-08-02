"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Services", "About", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [pendingRoute, setPendingRoute] = useState(null);
  const router = useRouter();

  const handleNavigate = (route) => {
    setPendingRoute(route);
    closeMenu(); // trigger nav closing flow
  };

  const handleExitComplete = () => {
    if (pendingRoute) {
      router.push(pendingRoute);
      setPendingRoute(null);
    }
  };

  const handleFullScreenEnter = () => {
    if (isOpening) {
      setShowMenuItems(true);
      setIsOpening(false);
    }
  };

  const openMenu = () => {
    setIsOpening(true);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setShowMenuItems(false); // start menu item fade-out
    // wait for <ul> exit (handled in <AnimatePresence>)
  };

  const handleMenuItemsExitComplete = () => {
    setIsOpen(false); // close full-screen only after <ul> has exited
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent shadow-md">
        <button onClick={openMenu} className="text-yellow-400">
          <Menu size={28} />
        </button>

        <div className="text-xl font-bold tracking-wide text-yellow-400">
          MyClinic
        </div>

        <button
          onClick={() => router.push("/appointment")}
          className="bg-blue-600 text-yellow-400 px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Make Appointment
        </button>
      </nav>

      <AnimatePresence onExitComplete={handleExitComplete}>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white text-yellow-400 flex flex-col justify-center items-center z-50"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={handleFullScreenEnter}
          >
            <button
              onClick={closeMenu}
              className="absolute top-5 left-5 text-yellow-400"
            >
              <X size={32} />
            </button>

            {/* Nested AnimatePresence to animate <ul> separately */}
            <AnimatePresence onExitComplete={handleMenuItemsExitComplete}>
              {showMenuItems && (
                <motion.ul
                  className="space-y-6 text-3xl font-semibold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => handleNavigate(`/${item.toLowerCase()}`)}
                      >
                        {item}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
