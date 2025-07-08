// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import Section from "./Section";
// // // import PortfolioModal from "./PortfolioModal";

// // // const Portfolio = () => {
// // //   const [selectedProject, setSelectedProject] = useState(null);
// // //   const projects = [
// // //     {
// // //       title: "Project One",
// // //       description:
// // //         "A revolutionary mobile app enhancing user engagement with seamless performance.",
// // //     },
// // //     {
// // //       title: "Project Two",
// // //       description:
// // //         "AI-powered analytics platform for real-time business insights.",
// // //     },
// // //     {
// // //       title: "Project Three",
// // //       description: "Scalable e-commerce solution with modern UI/UX design.",
// // //     },
// // //   ];

// // //   return (
// // //     <Section id="portfolio" title="Our Portfolio" bgColor="bg-gray-100">
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //         {projects.map((project, index) => (
// // //           <motion.div
// // //             key={index}
// // //             className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
// // //             whileHover={{ scale: 1.05 }}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5, delay: index * 0.2 }}
// // //             onClick={() => setSelectedProject(project)}
// // //           >
// // //             <h3 className="text-xl font-semibold text-gray-900">
// // //               {project.title}
// // //             </h3>
// // //             <p className="mt-2 text-gray-600">
// // //               {project.description.substring(0, 100)}...
// // //             </p>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //       <PortfolioModal
// // //         project={selectedProject}
// // //         isOpen={!!selectedProject}
// // //         onClose={() => setSelectedProject(null)}
// // //       />
// // //     </Section>
// // //   );
// // // };

// // // export default Portfolio;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Section from "./Section"; // Adjust the import based on your project structure

// const Timeline = ({ data }) => {
//   const ref = useRef(null);
//   const containerRef = useRef(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <Section id="portfolio" bgColor="bg-black" className="text-white">
//       <div
//         className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
//         ref={containerRef}
//       >
//         <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-left text-black dark:text-white leading-tight">
//             Company Timeline
//           </h1>
//           <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base md:text-lg text-left">
//             Milestones and achievements along our journey.
//           </p>
//         </div>

//         <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-start pt-10 md:pt-40 md:gap-10"
//             >
//               <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
//                 <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                   <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//                 </div>
//                 <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
//                   {item.title}
//                 </h3>
//               </div>

//               <div className="relative pl-20 pr-4 md:pl-4 w-full">
//                 <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
//                   {item.title}
//                 </h3>
//                 {item.content}
//               </div>
//             </div>
//           ))}

//           <div
//             style={{ height: height + "px" }}
//             className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
//           >
//             <motion.div
//               style={{
//                 height: heightTransform,
//                 opacity: opacityTransform,
//               }}
//               className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// const Portfolio = () => {
//   const timelineData = [
//     {
//       title: "2023 June",
//       content: (
//         <p className="text-neutral-600 dark:text-neutral-300">
//           Wxbunka Asia Pacific Research grant received for 5G IoT system and
//           solution development
//         </p>
//       ),
//     },
//     {
//       title: "2023 June",
//       content: (
//         <p className="text-neutral-600 dark:text-neutral-300">
//           Scient Labs becomes an{" "}
//           <span className="text-sky-500 font-medium">ETSI member</span>
//         </p>
//       ),
//     },
//     {
//       title: "2023 October",
//       content: (
//         <p className="text-neutral-600 dark:text-neutral-300">
//           JICA Friendship 2.0 Japan industry and IIT Hyderabad university
//           collaborative research proposal has been accepted.
//         </p>
//       ),
//     },
//     {
//       title: "2024 May",
//       content: (
//         <p className="text-neutral-600 dark:text-neutral-300">
//           Delivered an oral presentation at the CNIOT international conference
//           for the 5G-enabled EDGE IoT sensor system and environmental monitoring
//           solution.{" "}
//           <a
//             href="https://dl.acm.org/"
//             target="_blank"
//             className="text-cyan-400 font-medium underline"
//           >
//             ACM Digital Library
//           </a>
//         </p>
//       ),
//     },
//     {
//       title: "2024 September",
//       content: (
//         <p className="text-neutral-600 dark:text-neutral-300">
//           Our member is one of the speakers for{" "}
//           <span className="text-sky-500 font-medium">ETSI</span> Accessibility
//           and Interoperability of Emergency Communications and for Answering of
//           Emergency Communications project.
//         </p>
//       ),
//     },
//     {
//       title: "2024 October",
//       content: (
//         <p className="text-neutral-600 dark:text-neutral-300">
//           In <span className="text-cyan-400 font-medium">CEATEC</span> Japan
//           exhibition event, we delivered research collaboration work with IIT
//           Hyderabad presentation in an online seminar conference.
//         </p>
//       ),
//     },
//   ];

//   return <Timeline data={timelineData} />;
// };

// export default Portfolio;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";

const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <Section id="portfolio" bgColor="bg-black" className="text-white">
      <div
        className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-left text-black dark:text-white leading-tight">
            Company Timeline
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg md:text-xl text-left">
            Milestones and achievements along our journey.
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-semibold text-neutral-400 dark:text-neutral-400">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400 dark:text-neutral-400">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}

          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Portfolio = () => {
  const timelineData = [
    {
      title: "2023 June",
      content: (
        <p className="text-lg md:text-xl text-justify text-neutral-600 dark:text-neutral-300">
          Wxbunka Asia Pacific Research grant received for 5G IoT system and
          solution development.
        </p>
      ),
    },
    {
      title: "2023 June",
      content: (
        <p className="text-lg md:text-xl text-justify text-neutral-600 dark:text-neutral-300">
          Scient Labs becomes an{" "}
          <a
            href="https://www.etsi.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 font-medium underline"
          >
            ETSI member
          </a>
          .
        </p>
      ),
    },

    {
      title: "2023 October",
      content: (
        <p className="text-lg md:text-xl text-justify text-neutral-600 dark:text-neutral-300">
          JICA Friendship 2.0 Japan industry and IIT Hyderabad university
          collaborative research proposal has been accepted.
        </p>
      ),
    },
    {
      title: "2024 May",
      content: (
        <p className="text-lg md:text-xl text-justify text-neutral-600 dark:text-neutral-300">
          Delivered an oral presentation at the CNIOT international conference
          for the 5G-enabled EDGE IoT sensor system and environmental monitoring
          solution.{" "}
          <a
            href="https://dl.acm.org/doi/10.1145/3670105.3670178"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-medium underline"
          >
            ACM Digital Library
          </a>
        </p>
      ),
    },
    {
      title: "2024 September",
      content: (
        <p className="text-lg md:text-xl text-justify text-neutral-600 dark:text-neutral-300">
          Our member is one of the speakers for{" "}
          <span className="text-sky-500 font-medium">ETSI</span> Accessibility
          and Interoperability of Emergency Communications and for Answering of
          Emergency Communications project.{" "}
          <a
            href="https://www.etsi.org/events/2412-stf642-webinar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-medium underline"
          >
            View Webinar
          </a>
        </p>
      ),
    },
    {
      title: "2024 October",
      content: (
        <p className="text-lg md:text-xl text-justify text-neutral-600 dark:text-neutral-300">
          In <span className="text-cyan-400 font-medium">CEATEC</span> Japan
          exhibition event, we delivered research collaboration work with IIT
          Hyderabad presentation in an online seminar conference.{" "}
          <a
            href="https://www.ceatec.com/ja/conference/detail.html?id=2661"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-medium underline"
          >
            View Conference
          </a>
        </p>
      ),
    },
  ];
  return <Timeline data={timelineData} />;
};

export default Portfolio;
