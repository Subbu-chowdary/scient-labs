// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { motion, useTransform, useScroll, useSpring } from "framer-motion";

// // Utility: classNames merge
// const cn = (...classes) => classes.filter(Boolean).join(" ");

// // ✅ TracingBeam Component
// const TracingBeam = ({ children, className }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const contentRef = useRef(null);
//   const [svgHeight, setSvgHeight] = useState(0);

//   useEffect(() => {
//     if (contentRef.current) {
//       setSvgHeight(contentRef.current.offsetHeight);
//     }
//   }, []);

//   const y1 = useSpring(
//     useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
//     {
//       stiffness: 500,
//       damping: 90,
//     }
//   );

//   const y2 = useSpring(
//     useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
//     {
//       stiffness: 500,
//       damping: 90,
//     }
//   );

//   return (
//     <motion.div
//       ref={ref}
//       className={cn("relative mx-auto max-w-6xl px-2 sm:px-4", className)}
//     >
//       <div className="absolute top-3 -left-4 md:-left-10">
//         <motion.div
//           transition={{ duration: 0.2, delay: 0.5 }}
//           animate={{
//             boxShadow:
//               scrollYProgress.get() > 0
//                 ? "none"
//                 : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//           }}
//           className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
//         >
//           <motion.div
//             transition={{ duration: 0.2, delay: 0.5 }}
//             animate={{
//               backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
//               borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
//             }}
//             className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
//           />
//         </motion.div>

//         <svg
//           viewBox={`0 0 20 ${svgHeight}`}
//           width="20"
//           height={svgHeight}
//           className="ml-4 block"
//           aria-hidden="true"
//         >
//           <motion.path
//             d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
//             fill="none"
//             stroke="#9091A0"
//             strokeOpacity="0.16"
//           />
//           <motion.path
//             d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
//             fill="none"
//             stroke="url(#gradient)"
//             strokeWidth="1.25"
//             className="motion-reduce:hidden"
//           />
//           <defs>
//             <motion.linearGradient
//               id="gradient"
//               gradientUnits="userSpaceOnUse"
//               x1="0"
//               x2="0"
//               y1={y1}
//               y2={y2}
//             >
//               <stop stopColor="#3b82f6" stopOpacity="0" />
//               <stop stopColor="#3b82f6" />
//               <stop offset="0.325" stopColor="#60a5fa" />
//               <stop offset="1" stopColor="#a5b4fc" stopOpacity="0" />
//             </motion.linearGradient>
//           </defs>
//         </svg>
//       </div>

//       <div ref={contentRef}>{children}</div>
//     </motion.div>
//   );
// };

// // ✅ About Section using TracingBeam
// const About = () => {
//   return (
//     <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white">
//       <TracingBeam>
//         <div className="flex flex-col gap-2">
//           {dummyContent.map((item, index) => (
//             <div
//               key={`content-${index}`}
//               className="min-h-[70vh] flex flex-col justify-center px-2 sm:px-4 md:px-6"
//             >
//               <h2 className="bg-blue-600 text-white rounded-full text-sm w-fit px-2 py-1 mb-1">
//                 {item.badge}
//               </h2>
//               <p className="text-xl md:text-2xl font-semibold mb-1">
//                 {item.title}
//               </p>
//               <div className="text-base md:text-lg prose prose-invert max-w-full">
//                 {item.image && (
//                   <img
//                     src={item.image}
//                     alt="thumbnail"
//                     className="rounded-lg mb-2 object-cover w-full h-auto max-h-[300px] md:max-h-[400px]"
//                   />
//                 )}
//                 {item.description}
//               </div>
//             </div>
//           ))}
//         </div>
//       </TracingBeam>
//     </div>
//   );
// };

// // ✅ Sample Data
// const dummyContent = [
//   {
//     title: "Collaborative Editing",
//     description: (
//       <>
//         <p>
//           Work together in real time with your team, clients, and stakeholders.
//           Collaborate on documents, share ideas, and make decisions quickly.
//         </p>
//         <p>
//           See changes as they happen. No more confusion about the latest version
//           of your project.
//         </p>
//       </>
//     ),
//     badge: "Realtime",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540",
//   },
//   {
//     title: "Version Control Built-In",
//     description: (
//       <>
//         <p>
//           You're always working on the most recent version of your project.
//           Eliminate manual updates.
//         </p>
//         <p>
//           Stay aligned, in sync, and avoid the chaos of scattered updates and
//           team confusion.
//         </p>
//       </>
//     ),
//     badge: "Versioning",
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540",
//   },
//   {
//     title: "Launch with Confidence",
//     description: (
//       <>
//         <p>
//           Plan, preview, and publish confidently. Your launch process should be
//           just as seamless as your workflow.
//         </p>
//       </>
//     ),
//     badge: "Launch",
//     image:
//       "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506",
//   },
// ];

// export default About;
// About.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Section from "./Section";
import towerImg from "../assets/tower.jpeg";
import img5G from "../assets/5G.jpeg";
import cloud from "../assets/cloud.png";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto max-w-6xl px-2 sm:px-4", className)}
    >
      {/* Beam */}
      <div className="absolute top-3 -left-4 md:-left-10">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>

        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop stopColor="#3b82f6" />
              <stop offset="0.325" stopColor="#60a5fa" />
              <stop offset="1" stopColor="#a5b4fc" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

const About = () => {
  return (
    <Section
      id="about"
      title="About Us"
      bgColor="bg-black"
      className="text-white"
    >
      <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white">
        <TracingBeam>
          <div className="flex flex-col gap-2">
            {dummyContent.map((item, index) => (
              <div
                key={`content-${index}`}
                className="min-h-[70vh] flex flex-col justify-center px-2 sm:px-4 md:px-6"
              >
                <h2 className="bg-blue-600 text-white rounded-full text-sm w-fit px-3 py-1 mb-2">
                  {item.badge}
                </h2>
                <p className="text-2xl md:text-3xl font-semibold mb-2">
                  {item.title}
                </p>
                <div className="text-base md:text-lg leading-relaxed prose prose-invert max-w-full text-justify">
                  {item.image && (
                    <img
                      src={item.image}
                      alt="thumbnail"
                      className="rounded-lg mb-4 object-cover w-full h-auto max-h-[320px] md:max-h-[420px]"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Company Info Table */}
          <div className="overflow-x-auto w-full mt-6 text-[15px] md:text-base">
            <table className="w-full table-auto border border-gray-700 text-left">
              <tbody>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 font-medium">Name</th>
                  <td className="py-2 px-4">Scient Labs 合同会社</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 font-medium">Address</th>
                  <td className="py-2 px-4 text-justify">
                    Minato-ku, Shibaura 2-14–13, Kase Building161, 5F-508, Tokyo
                    108–0023.
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 font-medium">Establishment</th>
                  <td className="py-2 px-4">9th July, 2021</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 font-medium">Director</th>
                  <td className="py-2 px-4">Javvaji Nava Krishna Chaitanya</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 font-medium">Capital</th>
                  <td className="py-2 px-4">5,000,000 JPY</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 font-medium">Bank</th>
                  <td className="py-2 px-4">MUFG Bank, Ltd. and PayPay Bank</td>
                </tr>
                <tr className="border-b border-gray-700 align-top">
                  <th className="py-2 px-4 font-medium">Business</th>
                  <td className="py-2 px-4 space-y-1">
                    <ul className="list-disc pl-5 text-justify">
                      <li>IT–Telecom & Cloud</li>
                      <li>LTE, 5G, IoT–RAN & Core Network Consulting</li>
                      <li>IMS, VoLTE and VoNR</li>
                      <li>5G Service Intelligence NWDAF Engineering Support</li>
                      <li>
                        Testing – Field Testing, Carrier, Conformance, UE
                        validation
                      </li>
                      <li>RF Analysis, Benchmarking and Optimization</li>
                      <li>OSS & BSS Engineering Support</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="py-2 px-4 font-medium">Telephone</th>
                  <td className="py-2 px-4">+81 3-6822–2327</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TracingBeam>
      </div>
    </Section>
  );
};

const dummyContent = [
  {
    title: "Empowering Telecom Innovation",
    description: (
      <>
        <p>
          Scient Labs is at the forefront of IT–Telecom consulting, offering
          advanced solutions across LTE, 5G, and Cloud platforms.
        </p>
        <p>
          We combine domain expertise with robust engineering capabilities to
          deliver customized, future-ready solutions for global telecom
          operators.
        </p>
      </>
    ),
    badge: "Telecom Expertise",
    image: towerImg,
  },
  {
    title: "Cutting-Edge 5G & IoT Services",
    description: (
      <>
        <p>
          From RAN to Core Networks, we provide consulting across LTE, 5G, and
          IoT, enabling seamless deployment and optimization of next-gen
          wireless systems.
        </p>
        <p>
          Our engineers ensure scalability, low-latency, and performance
          integrity in dynamic telecom environments.
        </p>
      </>
    ),
    badge: "5G & IoT",
    image: img5G,
  },
  {
    title: "Reliable Testing & Network Intelligence",
    description: (
      <>
        <p>
          Our testing solutions cover Field Testing, Carrier Validation,
          Conformance, and RF Optimization—ensuring reliability and efficiency.
        </p>
        <p>
          We also support NWDAF engineering, helping clients gain real-time
          insights and analytics across their 5G services.
        </p>
      </>
    ),
    badge: "Testing & Analytics",
    image: cloud,
  },
];

export default About;
