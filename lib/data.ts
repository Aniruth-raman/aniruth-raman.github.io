import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    company: "Wipro Technologies",
    location: "Chennai, Tamil Nadu",
    description:
      "I work as a Senior Software Engineer, leveraging my expertise in Java, Spring Boot, microservices, and other technologies to develop and implement software solutions that meet business requirements.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "MBA in Fintech",
    location: "Birla Institute of Technical Sciences, Pilani",
    // description:
    //   "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "Software Engineer",
    company: "TATA Consultancy Services",
    location: "Chennai, Tamil Nadu",
    description:
      "I gained experience in software development using Java, Spring Boot, microservices, Python, and JavaScript, contributing to the design, development, and implementation of software solutions.",
    //   "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2024",
  },
  {
    title: "B.Tech - Information and Communication Technology",
    location: "SASTRA Deemed University, Thanjavur",
    // description:
    //   "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",

  // Frameworks and Libraries
  "Django",
  "Flask",
  "FASTAPI",
  "SpringBoot",
  "React",
  "Next.js",
  "Node.js",
  "Bootstrap",
  "Tailwind",
  "Redux",
  "Framer Motion",

  // Databases
  "MySQL",
  "PostgreSQL",
  "MongoDB",

  // Cloud Platforms
  "Google Cloud",
  "Microsoft Azure",

  // Other Technologies
  "Microservices",
  "Docker",
  "Git",
] as const;
