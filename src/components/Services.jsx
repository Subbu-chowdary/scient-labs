// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Section from "./Section";
// import telecom from "../assets/towergif.gif";
// import ossbss from "../assets/OSSBSSsystem.png";

// const cn = (...classes) => classes.filter(Boolean).join(" ");

// const PinPerspective = ({ title }) => (
//   <motion.div className="pointer-events-none w-72 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
//     <div className="w-full h-full -mt-7 flex-none inset-0">
//       <div className="absolute top-0 inset-x-0 flex justify-center">
//         <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-900 py-0.5 px-4 ring-1 ring-white/10">
//           <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
//             {title}
//           </span>
//         </div>
//       </div>

//       <div
//         style={{
//           perspective: "1000px",
//           transform: "rotateX(70deg) translateZ(0)",
//         }}
//         className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//       >
//         {[0, 2, 4].map((delay) => (
//           <motion.div
//             key={delay}
//             initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
//             animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
//             transition={{ duration: 6, repeat: Infinity, delay }}
//             className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
//           />
//         ))}
//       </div>

//       {/* animated beam */}
//       <>
//         <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
//         <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
//         <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
//         <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
//       </>
//     </div>
//   </motion.div>
// );

// const PinContainer = ({ children, title, className, containerClassName }) => {
//   const [transform, setTransform] = useState(
//     "translate(-50%,-50%) rotateX(0deg)"
//   );

//   return (
//     <div
//       className={cn(
//         "relative group/pin z-50 cursor-default",
//         containerClassName
//       )}
//       onMouseEnter={() =>
//         setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)")
//       }
//       onMouseLeave={() =>
//         setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)")
//       }
//     >
//       <div
//         style={{
//           perspective: "1000px",
//           transform: "rotateX(70deg) translateZ(0deg)",
//         }}
//         className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//       >
//         <div
//           style={{ transform }}
//           className="absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl shadow-lg bg-white text-black transition duration-700 overflow-hidden w-[320px] aspect-[4/3] -translate-x-1/2 -translate-y-1/2"
//         >
//           <div className={cn("relative z-50", className)}>{children}</div>
//         </div>
//       </div>
//       <PinPerspective title={title} />
//     </div>
//   );
// };

// const Services = () => {
//   const services = [
//     {
//       title: "Telecom Network Solutions",
//       desc: "Design, deployment, and optimization services for 4G/5G RAN, Core, and IoT networks.",
//       image: telecom,
//     },
//     {
//       title: "OSS & BSS Integration",
//       desc: "Engineering support for IMS, VoLTE, VoNR, and OSS/BSS cloud-native solutions.",
//       image: ossbss,
//     },
//     {
//       title: "Telecom Testing & Validation",
//       desc: "Conformance, field/lab simulations, protocol and carrier acceptance testing.",
//       image: "/images/services/testing.jpg",
//     },
//     {
//       title: "RF & Network Consulting",
//       desc: "RF benchmarking, optimization, and network planning for max performance.",
//       image: "/images/services/rf.jpg",
//     },
//   ];

//   return (
//     <Section
//       id="services"
//       title="Our Services"
//       bgColor="bg-black"
//       className="text-white min-h-screen"
//     >
//       <div className="flex items-center justify-center min-h-[100vh]">
//         <div className="flex flex-wrap justify-center items-stretch gap-x-12 gap-y-16 px-4">
//           {services.map((service, index) => (
//             <PinContainer
//               key={index}
//               title={service.title}
//               containerClassName="w-[320px] flex-1"
//             >
//               <div className="flex flex-col tracking-tight text-black w-full h-full p-4">
//                 <motion.img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-[45%] object-cover rounded-lg mb-3"
//                   whileHover={{ scale: 1.05 }}
//                 />
//                 <div className="flex flex-col justify-between flex-1">
//                   <div>
//                     <h3 className="font-bold text-lg md:text-xl">
//                       {service.title}
//                     </h3>
//                     <p className="mt-1 text-sm md:text-base text-gray-700">
//                       {service.desc}
//                     </p>
//                   </div>
//                   {/* No button or link */}
//                 </div>
//               </div>
//             </PinContainer>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Services;
// //

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

// Import images
import telecom from "../assets/towergif.gif";
import ossbss from "../assets/OSSBSSsystem.png";
import testing from "../assets/workingman.jpg";
import tele5g from "../assets/testing.webp";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const PinPerspective = ({ title }) => (
  <motion.div className="pointer-events-none w-72 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
    <div className="w-full h-full -mt-7 flex-none inset-0">
      <div className="absolute top-0 inset-x-0 flex justify-center">
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-900 py-0.5 px-4 ring-1 ring-white/10">
          <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
            {title}
          </span>
        </div>
      </div>

      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        {[0, 2, 4].map((delay) => (
          <motion.div
            key={delay}
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
            transition={{ duration: 6, repeat: Infinity, delay }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        ))}
      </div>

      {/* animated beam */}
      <>
        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
        <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
        <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
      </>
    </div>
  </motion.div>
);

const PinContainer = ({ children, title, className, containerClassName }) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-default",
        containerClassName
      )}
      onMouseEnter={() =>
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)")
      }
      onMouseLeave={() =>
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)")
      }
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className="absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl shadow-lg bg-white text-black transition duration-700 overflow-hidden w-[320px] min-h-[420px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className={cn("relative z-50 w-full h-full", className)}>
            {children}
          </div>
        </div>
      </div>
      <PinPerspective title={title} />
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Telecom Network Solutions",
      desc: "Design, deployment, and optimization services for 4G/5G RAN, Core, and IoT networks.",
      image: tele5g,
    },
    {
      title: "OSS & BSS Integration",
      desc: "Engineering support for IMS, VoLTE, VoNR, and OSS/BSS cloud-native solutions.",
      image: ossbss,
    },
    {
      title: "Telecom Testing & Validation",
      desc: "Conformance, field/lab simulations, protocol and carrier acceptance testing.",
      image: testing,
    },
    {
      title: "RF & Network Consulting",
      desc: "RF benchmarking, optimization, and network planning for max performance.",
      image: telecom,
    },
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      bgColor="bg-black"
      className="text-white min-h-screen"
    >
      <div className="flex items-center justify-center min-h-[100vh]">
        <div className="flex flex-wrap justify-center items-stretch gap-x-12 gap-y-16 px-4">
          {services.map((service, index) => (
            <PinContainer
              key={index}
              title={service.title}
              containerClassName="w-[320px] flex-1"
            >
              <div className="flex flex-col h-full w-full text-black">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.03 }}
                />
                <div className="flex flex-col justify-between flex-1 overflow-hidden">
                  <h3 className="font-semibold text-base md:text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
