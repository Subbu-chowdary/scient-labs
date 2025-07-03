"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

const Footer = () => {
  const svgRef = useRef(null);
  const { theme } = useTheme();

  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#ffffff40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const lineColor = "#0ea5e9";

  const dots = [
    { start: { lat: 64.2, lng: -149.5 }, end: { lat: 34.05, lng: -118.24 } },
    { start: { lat: 64.2, lng: -149.5 }, end: { lat: -15.79, lng: -47.89 } },
    { start: { lat: -15.79, lng: -47.89 }, end: { lat: 38.72, lng: -9.13 } },
    { start: { lat: 51.5, lng: -0.12 }, end: { lat: 28.61, lng: 77.2 } },
    { start: { lat: 28.61, lng: 77.2 }, end: { lat: 43.13, lng: 131.91 } },
  ];

  return (
    <footer className="bg-black text-white w-full">
      {/* Mini World Map */}
      <div className="w-full h-[200px] relative overflow-hidden">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          alt="world map"
          draggable={false}
        />
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
        >
          <defs>
            <linearGradient
              id="path-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {dots.map((dot, i) => {
            const start = projectPoint(dot.start.lat, dot.start.lng);
            const end = projectPoint(dot.end.lat, dot.end.lng);
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(start, end)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
                />
                {[start, end].map((point, j) => (
                  <g key={`${i}-${j}`}>
                    <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="2"
                      fill={lineColor}
                      opacity="0.5"
                    >
                      <animate
                        attributeName="r"
                        from="2"
                        to="8"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.5"
                        to="0"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Footer text */}
      <div className="py-4 text-center">
        <p className="text-sm font-semibold">
          © 2025 Scient Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
