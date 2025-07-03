// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   motion,
// // //   AnimatePresence,
// // //   useScroll,
// // //   useMotionValueEvent,
// // // } from "framer-motion";

// // // const NavBar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const { scrollYProgress } = useScroll();
// // //   const [visible, setVisible] = useState(true);

// // //   useEffect(() => {
// // //     const handleResize = () => window.innerWidth >= 960 && setIsOpen(false);
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   useMotionValueEvent(scrollYProgress, "change", (current) => {
// // //     if (typeof current === "number") {
// // //       const direction = current - scrollYProgress.getPrevious();
// // //       if (scrollYProgress.get() < 0.05) {
// // //         setVisible(true);
// // //       } else {
// // //         setVisible(direction < 0);
// // //       }
// // //     }
// // //   });

// // //   const navItems = [
// // //     { name: "Home", href: "#home" },
// // //     { name: "About", href: "#about" },
// // //     { name: "Services", href: "#services" },
// // //     { name: "Portfolio", href: "#portfolio" },
// // //     { name: "Contact", href: "#contact" },
// // //   ];

// // //   const handleScroll = (e, href) => {
// // //     e.preventDefault();
// // //     const element = document.querySelector(href);
// // //     element.scrollIntoView({ behavior: "smooth" });
// // //     setIsOpen(false);
// // //   };

// // //   return (
// // //     <AnimatePresence mode="wait">
// // //       <motion.nav
// // //         initial={{ opacity: 1, y: -100 }}
// // //         animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
// // //         transition={{ duration: 0.2 }}
// // //         className="fixed top-10 inset-x-0 mx-auto max-w-fit z-[5000] bg-gradient-to-r from-blue-700 to-blue-900 bg-opacity-90 backdrop-blur-lg rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-8 py-3 flex items-center justify-center space-x-4"
// // //       >
// // //         <motion.a
// // //           href="#home"
// // //           onClick={(e) => handleScroll(e, "#home")}
// // //           initial={{ opacity: 0, x: -20 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.5, delay: 0.2 }}
// // //           className="text-4xl font-extrabold text-white mr-6"
// // //         >
// // //           Scient Labs
// // //         </motion.a>
// // //         <div className="hidden md:flex space-x-4">
// // //           {navItems.map((item, idx) => (
// // //             <motion.a
// // //               key={`link-${idx}`}
// // //               href={item.href}
// // //               onClick={(e) => handleScroll(e, item.href)}
// // //               className="text-blue-100 hover:text-white transition-colors duration-300 font-medium text-lg"
// // //               whileHover={{ scale: 1.1 }}
// // //               whileTap={{ scale: 0.95 }}
// // //             >
// // //               {item.name}
// // //             </motion.a>
// // //           ))}
// // //         </div>
// // //         <div className="hidden md:flex items-center gap-x-2">
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="text-white font-semibold py-2 px-4 rounded-full border border-blue-200/20 text-lg relative"
// // //             onClick={() => alert("Log In clicked")}
// // //           >
// // //             <span>Log In</span>
// // //             <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
// // //           </motion.button>
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full text-lg"
// // //             onClick={() => alert("Sign In clicked")}
// // //           >
// // //             Sign In
// // //           </motion.button>
// // //         </div>
// // //         <button
// // //           className="md:hidden text-white hover:text-blue-100 focus:outline-none"
// // //           onClick={() => setIsOpen(!isOpen)}
// // //         >
// // //           <svg
// // //             className="h-8 w-8"
// // //             fill="none"
// // //             viewBox="0 0 24 24"
// // //             stroke="currentColor"
// // //           >
// // //             {isOpen ? (
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M6 18L18 6M6 6l12 12"
// // //               />
// // //             ) : (
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M4 6h16M4 12h16M4 18h16"
// // //               />
// // //             )}
// // //           </svg>
// // //         </button>
// // //       </motion.nav>
// // //       {isOpen && (
// // //         <motion.div
// // //           initial={{ height: 0, opacity: 0 }}
// // //           animate={{ height: "auto", opacity: 1 }}
// // //           exit={{ height: 0, opacity: 0 }}
// // //           transition={{ duration: 0.3 }}
// // //           className="md:hidden fixed top-20 inset-x-0 mx-auto max-w-fit bg-gradient-to-r from-blue-700 to-blue-900 bg-opacity-90 backdrop-blur-lg rounded-b-lg shadow-lg px-8 py-3"
// // //         >
// // //           <div className="flex flex-col space-y-2">
// // //             {navItems.map((item, idx) => (
// // //               <a
// // //                 key={`mobile-link-${idx}`}
// // //                 href={item.href}
// // //                 onClick={(e) => handleScroll(e, item.href)}
// // //                 className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
// // //               >
// // //                 {item.name}
// // //               </a>
// // //             ))}
// // //             <button
// // //               className="w-full text-white font-semibold py-2 px-4 rounded-full border border-blue-200/20 text-lg relative"
// // //               onClick={() => alert("Log In clicked")}
// // //             >
// // //               <span>Log In</span>
// // //               <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
// // //             </button>
// // //             <button
// // //               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full text-lg"
// // //               onClick={() => alert("Sign In clicked")}
// // //             >
// // //               Sign In
// // //             </button>
// // //           </div>
// // //         </motion.div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // };

// // // export default NavBar;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import {
// //   motion,
// //   AnimatePresence,
// //   useScroll,
// //   useMotionValueEvent,
// // } from "framer-motion";

// // const NavBar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const { scrollYProgress } = useScroll();
// //   const [visible, setVisible] = useState(true);

// //   useEffect(() => {
// //     const handleResize = () => window.innerWidth >= 960 && setIsOpen(false);
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   useMotionValueEvent(scrollYProgress, "change", (current) => {
// //     if (typeof current === "number") {
// //       const direction = current - scrollYProgress.getPrevious();
// //       if (scrollYProgress.get() < 0.05) {
// //         setVisible(true);
// //       } else {
// //         setVisible(direction < 0);
// //       }
// //     }
// //   });

// //   const navItems = [
// //     { name: "Home", href: "#home" },
// //     { name: "About", href: "#about" },
// //     { name: "Services", href: "#services" },
// //     { name: "Portfolio", href: "#portfolio" },
// //     { name: "Contact", href: "#contact" },
// //   ];

// //   const handleScroll = (e, href) => {
// //     e.preventDefault();
// //     const element = document.querySelector(href);
// //     element.scrollIntoView({ behavior: "smooth" });
// //     setIsOpen(false);
// //   };

// //   return (
// //     <AnimatePresence mode="wait">
// //       <motion.nav
// //         initial={{ opacity: 1, y: -100 }}
// //         animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
// //         transition={{ duration: 0.3 }}
// //         className="fixed top-8 inset-x-0 mx-auto max-w-fit z-[5000]
// //           bg-gradient-to-r from-[#1e3a8a]/60 via-[#2563eb]/60 to-[#1e3a8a]/60
// //           backdrop-blur-2xl
// //           border border-white/20
// //           rounded-full
// //           shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
// //           ring-1 ring-white/10
// //           px-8 py-3 flex items-center justify-center space-x-4
// //           transition-all duration-300 ease-in-out
// //           hover:ring-2 hover:ring-blue-400/30"
// //       >
// //         {/* Shine Overlay */}
// //         <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
// //           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-10 blur-lg animate-pulse" />
// //         </div>

// //         {/* Logo */}
// //         <motion.a
// //           href="#home"
// //           onClick={(e) => handleScroll(e, "#home")}
// //           initial={{ opacity: 0, x: -20 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.5, delay: 0.2 }}
// //           className="text-4xl font-extrabold text-white mr-6 relative z-10"
// //         >
// //           Scient Labs
// //         </motion.a>

// //         {/* Desktop Nav */}
// //         <div className="hidden md:flex space-x-6 relative z-10">
// //           {navItems.map((item, idx) => (
// //             <motion.a
// //               key={`link-${idx}`}
// //               href={item.href}
// //               onClick={(e) => handleScroll(e, item.href)}
// //               className="text-white/80 hover:text-white transition duration-300 font-medium text-lg"
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {item.name}
// //             </motion.a>
// //           ))}
// //         </div>

// //         {/* Buttons */}
// //         <div className="hidden md:flex items-center gap-x-3 ml-6 relative z-10">
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="text-white font-semibold py-2 px-4 rounded-full border border-white/20 text-sm"
// //             onClick={() => alert("Log In clicked")}
// //           >
// //             Log In
// //           </motion.button>
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full text-sm shadow-md"
// //             onClick={() => alert("Sign In clicked")}
// //           >
// //             Sign In
// //           </motion.button>
// //         </div>

// //         {/* Hamburger Menu */}
// //         <button
// //           className="md:hidden text-white hover:text-blue-100 ml-4 relative z-10"
// //           onClick={() => setIsOpen(!isOpen)}
// //         >
// //           <svg
// //             className="h-8 w-8"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             {isOpen ? (
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M6 18L18 6M6 6l12 12"
// //               />
// //             ) : (
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M4 6h16M4 12h16M4 18h16"
// //               />
// //             )}
// //           </svg>
// //         </button>
// //       </motion.nav>

// //       {/* Mobile Dropdown */}
// //       {isOpen && (
// //         <motion.div
// //           initial={{ height: 0, opacity: 0 }}
// //           animate={{ height: "auto", opacity: 1 }}
// //           exit={{ height: 0, opacity: 0 }}
// //           transition={{ duration: 0.3 }}
// //           className="md:hidden fixed top-[5.5rem] inset-x-0 mx-auto max-w-fit
// //             bg-white/10 backdrop-blur-2xl border border-white/20 ring-1 ring-white/10
// //             rounded-xl shadow-lg px-6 py-4 z-[4999]"
// //         >
// //           <div className="flex flex-col space-y-3">
// //             {navItems.map((item, idx) => (
// //               <a
// //                 key={`mobile-link-${idx}`}
// //                 href={item.href}
// //                 onClick={(e) => handleScroll(e, item.href)}
// //                 className="text-white/90 hover:text-white transition px-2 py-1 rounded-md text-base font-medium"
// //               >
// //                 {item.name}
// //               </a>
// //             ))}
// //             <button
// //               className="w-full text-white/90 font-semibold py-2 px-4 rounded-full border border-white/20 text-sm"
// //               onClick={() => alert("Log In clicked")}
// //             >
// //               Log In
// //             </button>
// //             <button
// //               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full text-sm shadow-md"
// //               onClick={() => alert("Sign In clicked")}
// //             >
// //               Sign In
// //             </button>
// //           </div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // export default NavBar;

// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleResize = () => window.innerWidth >= 960 && setIsOpen(false);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       const direction = current - scrollYProgress.getPrevious();
//       if (scrollYProgress.get() < 0.05) {
//         setVisible(true);
//       } else {
//         setVisible(direction < 0);
//       }
//     }
//   });

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const handleScroll = (e, href) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     element.scrollIntoView({ behavior: "smooth" });
//     setIsOpen(false);
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {/* Desktop Nav Only */}
//       <motion.nav
//         initial={{ opacity: 1, y: -100 }}
//         animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="hidden md:flex fixed top-8 inset-x-0 mx-auto max-w-fit z-[5000]
//           bg-gradient-to-r from-[#1e3a8a]/60 via-[#2563eb]/60 to-[#1e3a8a]/60
//           backdrop-blur-2xl border border-white/20 rounded-full shadow-lg
//           ring-1 ring-white/10 px-8 py-3 items-center justify-center space-x-4"
//       >
//         {/* Shine Overlay */}
//         <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-10 blur-lg animate-pulse" />
//         </div>

//         {/* Logo */}
//         <motion.a
//           href="#home"
//           onClick={(e) => handleScroll(e, "#home")}
//           className="text-4xl font-extrabold text-white mr-6 relative z-10"
//         >
//           Scient Labs
//         </motion.a>

//         {/* Desktop Nav */}
//         <div className="flex space-x-6 relative z-10">
//           {navItems.map((item, idx) => (
//             <motion.a
//               key={`link-${idx}`}
//               href={item.href}
//               onClick={(e) => handleScroll(e, item.href)}
//               className="text-white/80 hover:text-white transition duration-300 font-medium text-lg"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item.name}
//             </motion.a>
//           ))}
//         </div>

//         {/* Desktop Buttons */}
//         <div className="flex items-center gap-x-3 ml-6 relative z-10">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="text-white font-semibold py-2 px-4 rounded-full border border-white/20 text-sm"
//             onClick={() => alert("Log In clicked")}
//           >
//             Log In
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full text-sm shadow-md"
//             onClick={() => alert("Sign In clicked")}
//           >
//             Sign In
//           </motion.button>
//         </div>
//       </motion.nav>

//       {/* Mobile Hamburger Button Only */}
//       <button
//         className="fixed top-6 right-4 md:hidden text-white z-[5001]"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           )}
//         </svg>
//       </button>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <motion.div
//           initial={{ height: 0, opacity: 0 }}
//           animate={{ height: "auto", opacity: 1 }}
//           exit={{ height: 0, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden fixed top-[5rem] inset-x-0 mx-auto max-w-fit
//             bg-white/10 backdrop-blur-2xl border border-white/20 ring-1 ring-white/10
//             rounded-xl shadow-lg px-6 py-4 z-[4999]"
//         >
//           <div className="flex flex-col space-y-3">
//             {navItems.map((item, idx) => (
//               <a
//                 key={`mobile-link-${idx}`}
//                 href={item.href}
//                 onClick={(e) => handleScroll(e, item.href)}
//                 className="text-white/90 hover:text-white transition px-2 py-1 rounded-md text-base font-medium"
//               >
//                 {item.name}
//               </a>
//             ))}
//             <button
//               className="w-full text-white/90 font-semibold py-2 px-4 rounded-full border border-white/20 text-sm"
//               onClick={() => alert("Log In clicked")}
//             >
//               Log In
//             </button>
//             <button
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full text-sm shadow-md"
//               onClick={() => alert("Sign In clicked")}
//             >
//               Sign In
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default NavBar;

"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {/* Desktop Nav */}
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex fixed top-8 inset-x-0 mx-auto max-w-fit z-[5000]
          bg-gradient-to-r from-[#1e3a8a]/60 via-[#2563eb]/60 to-[#1e3a8a]/60
          backdrop-blur-2xl border border-white/20 rounded-full shadow-lg
          ring-1 ring-white/10 px-8 py-3 items-center justify-center space-x-4"
      >
        {/* Shine Overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-10 blur-lg animate-pulse" />
        </div>

        {/* Desktop Nav Links */}
        <div className="flex space-x-6 relative z-10">
          {navItems.map((item, idx) => (
            <motion.a
              key={`link-${idx}`}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-white/80 hover:text-white transition duration-300 font-medium text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Hamburger Button */}
      <button
        className="fixed top-6 right-4 md:hidden text-white z-[5001]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-[5rem] inset-x-0 mx-auto max-w-fit
            bg-white/10 backdrop-blur-2xl border border-white/20 ring-1 ring-white/10
            rounded-xl shadow-lg px-6 py-4 z-[4999]"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-white/90 hover:text-white transition px-2 py-1 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
