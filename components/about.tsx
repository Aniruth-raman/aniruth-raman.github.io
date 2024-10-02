"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a software engineer with over 5 years of experience, I'm passionate
        about building <span className="font-medium">innovative</span> and{" "}
        <span className="font-medium">impactful</span> applications. My
        expertise lies in crafting efficient and scalable solutions, leveraging
        my proficiency in{" "}
        <span className="font-medium">Java, Python, and JavaScript</span>.{" "}
        <span className="italic">I thrive on tackling</span> complex technical
        challenges and delivering seamless user experiences. I'm constantly
        seeking opportunities to learn and adapt in this rapidly evolving field,
        and I'm eager to contribute my skills and experience to a dynamic
        product company where I can make a real impact.
      </p>
      <p>
        When I'm not immersed in code, I enjoy exploring new movies and TV
        series, which helps me recharge and gain fresh perspectives. I'm always
        looking for new opportunities to learn and grow as a developer.
      </p>
    </motion.section>
  );
}
