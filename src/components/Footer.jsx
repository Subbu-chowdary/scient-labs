"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

const Footer = () => {
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000020",
    shape: "circle",
    backgroundColor: "#ffffff",
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

  const dots = [
    {
      start: { lat: 64.2008, lng: -149.4937 },
      end: { lat: 34.0522, lng: -118.2437 },
    },
    {
      start: { lat: 64.2008, lng: -149.4937 },
      end: { lat: -15.7975, lng: -47.8919 },
    },
    {
      start: { lat: -15.7975, lng: -47.8919 },
      end: { lat: 38.7223, lng: -9.1393 },
    },
    {
      start: { lat: 51.5074, lng: -0.1278 },
      end: { lat: 28.6139, lng: 77.209 },
    },
    {
      start: { lat: 28.6139, lng: 77.209 },
      end: { lat: 43.1332, lng: 131.9113 },
    },
    {
      start: { lat: 28.6139, lng: 77.209 },
      end: { lat: -1.2921, lng: 36.8219 },
    },
  ];

  return (
    <footer className="bg-white text-black w-full">
      {/* Full-width World Map */}
      <div className="w-full">
        <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            alt="world map"
            height="220"
            width="100%"
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
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity="1" />
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
                    transition={{ duration: 1, delay: 0.4 * i }}
                  />
                  {[start, end].map((point, j) => (
                    <g key={`${i}-${j}`}>
                      <circle cx={point.x} cy={point.y} r="2" fill="#0ea5e9" />
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="2"
                        fill="#0ea5e9"
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
      </div>

      {/* Footer Text */}
      <div className="pt-6 pb-6 text-center bg-white text-black">
        <p className="text-sm font-semibold">
          © 2025 Scient Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
