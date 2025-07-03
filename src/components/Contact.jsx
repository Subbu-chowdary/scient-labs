"use client";

import React, { useState, useCallback, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import Section from "./Section";

// Utility
const cn = (...classes) => classes.filter(Boolean).join(" ");

// GlowingEffect (inline)
const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }) => {
    const containerRef = useRef(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef(0);

    const handleMove = useCallback(
      (e) => {
        if (!containerRef.current) return;
        if (animationFrameRef.current)
          cancelAnimationFrame(animationFrameRef.current);

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;
          if (e) lastPosition.current = { x: mouseX, y: mouseY };

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");
          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;
          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          import("motion").then(({ animate }) =>
            animate(currentAngle, newAngle, {
              duration: movementDuration,
              ease: [0.16, 1, 0.3, 1],
              onUpdate: (value) => {
                element.style.setProperty("--start", String(value));
              },
            })
          );
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;
      const handleScroll = () => handleMove();
      const handlePointerMove = (e) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current)
          cancelAnimationFrame(animationFrameRef.current);
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={{
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "5",
            "--gradient":
              variant === "white"
                ? `repeating-conic-gradient(from 236.84deg at 50% 50%, var(--black), var(--black) calc(25% / var(--repeating-conic-gradient-times)))`
                : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                   radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                   radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
                   radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                   repeating-conic-gradient(
                     from 236.84deg at 50% 50%,
                     #dd7bbb 0%,
                     #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                     #5a922c calc(50% / var(--repeating-conic-gradient-times)),
                     #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                     #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                   )`,
          }}
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

// === Contact Component ===
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const { name, email, phone, company, message } = formData;

      const subject = encodeURIComponent(`New Contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:info@scient-labs.com?subject=${subject}&body=${body}`;
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Section id="contact" title="Contact Us" bgColor="bg-[#0A0A0A] text-white">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Form Card */}
        <div className="relative rounded-2xl border border-white/[0.08] p-5 md:p-6">
          <GlowingEffect
            glow
            disabled={false}
            spread={40}
            proximity={64}
            inactiveZone={0.01}
          />
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            {["name", "email", "phone", "company"].map((field) => (
              <div
                key={field}
                className="relative rounded-lg border border-white/10 px-2 py-1"
              >
                <GlowingEffect
                  glow
                  disabled={false}
                  spread={80}
                  blur={16}
                  proximity={80}
                  inactiveZone={0.1}
                  borderWidth={2}
                />
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field.charAt(0).toUpperCase() +
                    field.slice(1) +
                    (field === "company" ? " Name" : "")
                  }
                  className="relative z-10 w-full bg-transparent text-white placeholder-white/70 p-3 rounded-lg focus:outline-none"
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
            <div className="relative rounded-lg border border-white/10 px-2 py-1">
              <GlowingEffect
                glow
                disabled={false}
                spread={30}
                proximity={48}
                inactiveZone={0.2}
                blur={8}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="relative z-10 w-full bg-transparent text-white placeholder-white/70 p-3 rounded-lg focus:outline-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
            >
              Send
            </motion.button>
          </form>
        </div>

        {/* Info Card */}
        <div className="relative rounded-2xl border border-white/[0.08] p-5 md:p-6 text-sm">
          <GlowingEffect
            glow
            disabled={false}
            spread={40}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="space-y-6 relative z-10 text-base md:text-lg text-justify leading-relaxed">
            <div className="flex items-start gap-4 text-justify">
              <FaPhoneAlt className="text-blue-400 mt-1 min-w-[20px]" />
              <span className="flex-1">+81 3-6822-2327</span>
            </div>
            <div className="flex items-start gap-4 text-justify">
              <FaEnvelope className="text-blue-400 mt-1 min-w-[20px]" />
              <span className="flex-1">info@scient-labs.com</span>
            </div>
            <div className="flex items-start gap-4 text-justify">
              <FaMapMarkerAlt className="text-blue-400 mt-1 min-w-[20px]" />
              <span className="flex-1">
                Minato-ku Shibaura 2-14-13, Kose Building 161, 5F-508,
                <br />
                Tokyo 108-0023.
              </span>
            </div>
            <div className="flex items-start gap-4 text-justify">
              <FaLinkedin
                className="text-blue-400 mt-1 min-w-[20px]"
                size={20}
              />
              <a
                href="https://www.linkedin.com/company/scient-labs-llc/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-blue-400 hover:text-blue-500"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12 rounded-md overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.692258636147!2d139.74844447627765!3d35.6432562316384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b2f42110c71%3A0xd8ef597d64c942c1!2z44CSMTA4LTAwMjMg5p2x5Lqs6YO95riv5Yy65Y2X5bel5Y2X5Yy65Luj44CB6KW_5Z-O77yR77yR77yR!5e0!3m2!1sja!2sjp!4v1719310089374!5m2!1sja!2sjp"
          width="100%"
          height="360"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </Section>
  );
};

export default Contact;
