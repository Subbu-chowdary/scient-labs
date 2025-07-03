// // "use client";

// // import React, { useEffect, useId, useState } from "react";
// // import Particles, { initParticlesEngine } from "@tsparticles/react";
// // import { loadSlim } from "@tsparticles/slim";
// // import { motion, useAnimation } from "framer-motion";

// // // Utility
// // const cn = (...classes) => classes.filter(Boolean).join(" ");

// // // SparklesCore (inline)
// // const SparklesCore = ({
// //   id,
// //   className,
// //   background,
// //   minSize,
// //   maxSize,
// //   speed,
// //   particleColor,
// //   particleDensity,
// // }) => {
// //   const [init, setInit] = useState(false);
// //   const controls = useAnimation();
// //   const generatedId = useId();

// //   useEffect(() => {
// //     initParticlesEngine(async (engine) => {
// //       await loadSlim(engine);
// //     }).then(() => setInit(true));
// //   }, []);

// //   const particlesLoaded = async (container) => {
// //     if (container) {
// //       controls.start({
// //         opacity: 1,
// //         transition: { duration: 1 },
// //       });
// //     }
// //   };

// //   return (
// //     <motion.div animate={controls} className={cn("opacity-0", className)}>
// //       {init && (
// //         <Particles
// //           id={id || generatedId}
// //           className="h-full w-full"
// //           particlesLoaded={particlesLoaded}
// //           options={{
// //             background: {
// //               color: {
// //                 value: background || "#000000",
// //               },
// //             },
// //             fullScreen: { enable: false, zIndex: 1 },
// //             fpsLimit: 120,
// //             particles: {
// //               color: { value: particleColor || "#ffffff" },
// //               move: {
// //                 enable: true,
// //                 speed: { min: 0.1, max: 1 },
// //                 direction: "none",
// //                 outModes: { default: "out" },
// //               },
// //               number: {
// //                 value: particleDensity || 120,
// //                 density: {
// //                   enable: true,
// //                   width: 400,
// //                   height: 400,
// //                 },
// //               },
// //               opacity: {
// //                 value: { min: 0.1, max: 1 },
// //                 animation: {
// //                   enable: true,
// //                   speed: speed || 4,
// //                   startValue: "random",
// //                 },
// //               },
// //               size: {
// //                 value: { min: minSize || 1, max: maxSize || 3 },
// //               },
// //               shape: { type: "circle" },
// //             },
// //             detectRetina: true,
// //           }}
// //         />
// //       )}
// //     </motion.div>
// //   );
// // };

// // // ✅ Home Component
// // const Home = () => {
// //   return (
// //     <div className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4">
// //       {/* Sparkles */}
// //       <div className="absolute inset-0 flex items-center justify-center z-0">
// //         <div className="relative w-[22rem] h-[10rem] sm:w-[28rem] sm:h-[12rem]">
// //           <SparklesCore
// //             background="transparent"
// //             minSize={0.4}
// //             maxSize={1}
// //             particleDensity={1200}
// //             className="w-full h-full"
// //             particleColor="#FFFFFF"
// //           />
// //           <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_200px_at_center,transparent_20%,white)]" />
// //         </div>
// //       </div>

// //       {/* Gradients */}
// //       <div className="absolute z-10 top-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto">
// //         <div className="relative w-full h-10">
// //           <div className="absolute inset-x-10 top-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
// //           <div className="absolute inset-x-10 top-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto" />
// //           <div className="absolute inset-x-40 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
// //           <div className="absolute inset-x-40 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />
// //         </div>
// //       </div>

// //       {/* Foreground content */}
// //       <div className="relative z-20 text-center max-w-3xl w-full px-4">
// //         <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tight text-white leading-tight">
// //           Scient Labs
// //         </h1>
// //         <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-xl mx-auto">
// //           Innovate. Transform. Succeed.
// //           <br />
// //           We craft technology that empowers.
// //         </p>
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           className="mt-8 bg-white text-blue-600 font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
// //         >
// //           Discover More
// //         </motion.button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// "use client";

// import React, { useEffect, useId, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { motion, useAnimation } from "framer-motion";

// // Utility to combine class names
// const cn = (...classes) => classes.filter(Boolean).join(" ");

// // SparklesCore Component
// const SparklesCore = ({
//   id,
//   className,
//   background,
//   minSize,
//   maxSize,
//   speed,
//   particleColor,
//   particleDensity,
// }) => {
//   const [init, setInit] = useState(false);
//   const controls = useAnimation();
//   const generatedId = useId();

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => setInit(true));
//   }, []);

//   const particlesLoaded = async (container) => {
//     if (container) {
//       controls.start({ opacity: 1, transition: { duration: 1 } });
//     }
//   };

//   return (
//     <motion.div animate={controls} className={cn("opacity-0", className)}>
//       {init && (
//         <Particles
//           id={id || generatedId}
//           className="w-full h-full"
//           particlesLoaded={particlesLoaded}
//           options={{
//             background: {
//               color: { value: background || "transparent" },
//             },
//             fullScreen: { enable: false },
//             fpsLimit: 120,
//             particles: {
//               color: { value: particleColor || "#ffffff" },
//               move: {
//                 enable: true,
//                 speed: { min: 0.1, max: 1.2 },
//                 direction: "none",
//                 outModes: { default: "out" },
//               },
//               number: {
//                 value: particleDensity || 1500,
//                 density: {
//                   enable: true,
//                   width: 400,
//                   height: 400,
//                 },
//               },
//               opacity: {
//                 value: { min: 0.3, max: 1 },
//                 animation: {
//                   enable: true,
//                   speed: speed || 4,
//                   startValue: "random",
//                 },
//               },
//               size: {
//                 value: { min: minSize || 0.3, max: maxSize || 1.1 },
//               },
//               shape: { type: "circle" },
//             },
//             detectRetina: true,
//           }}
//         />
//       )}
//     </motion.div>
//   );
// };

// // ✅ Home Component
// const Home = () => {
//   return (
//     <div className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4">
//       {/* Particle Background - Naturally Spread */}
//       <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
//         <div className="relative w-full h-[60vh] sm:h-[70vh]">
//           <SparklesCore
//             background="transparent"
//             minSize={0.1} // ⬅ smaller size
//             maxSize={0.7} // ⬅ smaller size
//             particleDensity={1200}
//             className="absolute inset-0 w-full h-full"
//             particleColor="#ffffff"
//           />
//           {/* Soft radial mask to blend edges */}
//           <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
//         </div>
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 text-center max-w-3xl w-full px-4">
//         <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tight text-white leading-tight">
//           Scient Labs
//         </h1>

//         {/* Gradient underline under logo */}
//         <div className="relative h-12 mt-3">
//           <div className="absolute inset-x-10 top-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-4/5 blur-md mx-auto" />
//           <div className="absolute inset-x-10 top-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/5 mx-auto" />
//           <div className="absolute inset-x-20 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-1/2 blur-sm mx-auto" />
//           <div className="absolute inset-x-20 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 mx-auto" />
//         </div>

//         <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-xl mx-auto">
//           Innovate. Transform. Succeed.
//           <br />
//           We craft technology that empowers.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-8 bg-white text-blue-600 font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
//         >
//           Discover More
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";

import React, { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import Section from "./Section"; // Adjust the import based on your project
import logo1 from "../assets/ScientLabs_Finalized_Logo_V1.3.png";
import etsiLogo from "../assets/ETS-MEMBER-Logo.jpg";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className="w-full h-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "transparent" },
            },
            fullScreen: { enable: false },
            fpsLimit: 120,
            particles: {
              color: { value: particleColor || "#ffffff" },
              move: {
                enable: true,
                speed: { min: 0.1, max: 1.2 },
                direction: "none",
                outModes: { default: "out" },
              },
              number: {
                value: particleDensity || 1200,
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
              },
              opacity: {
                value: { min: 0.3, max: 1 },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  startValue: "random",
                },
              },
              size: {
                value: { min: minSize || 0.3, max: maxSize || 1.1 },
              },
              shape: { type: "circle" },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

const Home = () => {
  return (
    <Section id="home" bgColor="bg-black" className="text-white h-screen">
      {/* Logos Row */}
      <div className="absolute top-0 left-0 w-full px-4 py-4 z-50">
        <div className="flex items-center justify-between gap-6 sm:gap-10">
          <img
            src={logo1}
            alt="Scient Labs Logo"
            className="h-16 sm:h-20 md:h-16 object-contain"
          />
          <img
            src={etsiLogo}
            alt="ETSI Member Logo"
            className="h-16 sm:h-20 md:h-16 object-contain"
          />
        </div>
      </div>

      {/* Particle Background */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            background="transparent"
            minSize={0.1}
            maxSize={0.7}
            particleDensity={1200}
            className="absolute inset-0"
            particleColor="#ffffff"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
        </div>

        {/* Foreground Text */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tight text-white leading-tight">
            Scient Labs
          </h1>

          {/* Gradient underline */}
          <div className="relative h-12 mt-3">
            <div className="absolute inset-x-10 top-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-4/5 blur-md mx-auto" />
            <div className="absolute inset-x-10 top-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/5 mx-auto" />
            <div className="absolute inset-x-20 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-1/2 blur-sm mx-auto" />
            <div className="absolute inset-x-20 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 mx-auto" />
          </div>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-xl mx-auto">
            Innovate. Transform. Succeed.
            <br />
            We craft technology that empowers.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const target = document.getElementById("about");
              if (target) {
                window.scrollTo({
                  top: target.offsetTop - 50, // Optional offset for fixed header
                  behavior: "smooth",
                });
              }
            }}
            className="mt-8 bg-white text-blue-600 font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
          >
            Discover More
          </motion.button>
        </div>
      </div>
    </Section>
  );
};

export default Home;
