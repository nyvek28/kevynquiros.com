import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Input } from "@/components/Input";
import { Section } from "@/components/Section";
import { NavigationDropdown } from "@/components/NavigationDropdown";
import Link from "next/link";
import React from "react";

const EXPERIENCES = [
  {
    position: "Senior Front End Engineer",
    company: "Glo",
    period: "2023 - Present",
    summary: "Developed and maintained a yoga streaming platform with live streaming, video-on-demand, and interactive features. Led the implementation of key features, such as gamification via streak widgets and user dashboards with interactive calendars and gallery views, enhancing platform engagement and value. Played a significant role in establishing the foundation and first deployment for a premium feature, built with React, as part of a broader migration from Ember to Next.js",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Ember",
      "Node",
      "Figma",
      "Vercel",
      "AWS",
      "Datadog",
      "Segment"
    ]
  },
  {
    position: "Senior / Lead Front End Engineer",
    company: "Parsley Health",
    period: "2019 - 2023",
    summary: "Maintained and developed features for the Parsley Health platform, including patient and doctor dashboards, telemedicine, and internal tools. Led the team through the implementation of a full website redesign and successfully migrated the blog from WordPress to React. Developed a small command-line tool in Go to automate migration of content from WordPress to Sanity CMS, reducing manual work.",
    technologies: [
      "React",
      "Gatsby",
      "TypeScript",
      "Node",
      "Go",
      "GraphQL",
      "Storybook",
      "Sanity CMS",
      "Google Cloud",
    ]
  },
  {
    position: "Full Stack Web Engineer",
    company: "Wondersouce",
    period: "2019",
    summary: "Maintained a single-page application (SPA) built with React, Node.js, and Drupal as the content management system. Contributed to the development of a new component library, replacing the outdated jQuery-based version.",
    technologies: [
      "React",
      "Redux",
      "Apollo",
      "Styled Components",
      "Node",
      "Drupal",
      "Storybook",
      "jQuery",
    ]
  },
  {
    position: "Full Stack Web Engineer",
    company: "Avantica",
    period: "2018",
    summary: "Worked on a public relations search engine built with React and a Groovy on Grails backend. Made significant contributions by resolving bugs and implementing full-stack features, including tag management and search sanitization.",
    technologies: [
      "React",
      "Groovy",
      "Grails",
      "SASS"
    ]
  },
  {
    position: "Front End Engineer",
    company: "First Factory",
    period: "2016 - 2017",
    summary: "Collaborated with multiple clients to develop and maintain their websites. Worked with a team to build a student loan management web app using AngularJS and Node.js. Contributed to the development of a banking platform built with vanilla JavaScript and jQuery.",
    technologies: [
      "AngularJS",
      "Javascript",
      "Node",
      "jQuery",
    ]
  },
]

export default function Home() {
  return (
    <main className="grid grid-cols-12 auto-cols-fr gap-x-5 relative md:px-section-x">

      <div className="fixed top-0 left-0 w-[39%] h-screen bg-secondary-bg hidden md:block rounded-r-3xl" />

      <Section className="col-span-12 md:sticky top-[70px] md:col-span-4 left-section-x bg-secondary-bg">
        <Heading className="mb-2 mt-10 md:mt-0">Kevyn Quirós</Heading>
        <Text size="xl" className="mb-3">Senior Front End Engineer</Text>
        <Text italic className="font-light">
          Creating intuitive and user friendly experiences for the world wide web.
        </Text>

        <div className="relative mt-28 hidden md:block">
          <Link href="#about" className="flex flex-row items-center uppercase text-xs font-bold mb-2" >
            <div className="border-t border-[black] w-12 mr-3" />
            About
          </Link>
          <Link href="#experience" className="flex flex-row items-center uppercase text-xs font-bold mb-2" >
            <div className="border-t border-[black] w-12 mr-3" />
            Experience
          </Link>
          <Link href="#contact" className="flex flex-row items-center uppercase text-xs font-bold" >
            <div className="border-t border-[black] w-12 mr-3" />
            Contact
          </Link>
        </div>
      </Section>

      <NavigationDropdown items={[
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
      ]} />

      <Section id="about" className="md:col-span-7 md:col-start-6 col-span-12 md:pt-[70px] pt-5 pb-6">
        <Text className="mb-3">
          Driven by a fascination with systems and problem-solving, I began my journey in software engineering in 2015. Since then, I’ve had the privilege of developing software for various industries, working with both legacy and modern technologies. My expertise lies in building intuitive, high-performance user interfaces, with a strong emphasis on a CSS-First approach.
        </Text>
        <Text className="mb-3">
          JavaScript has been central to my career, and I’m adept at navigating both its strengths and challenges. I’m passionate about writing clean, maintainable code, inspired by programming classics like "Clean Code" and "Don’t Make Me Think."
        </Text>
        <Text className="mb-3">
          Outside of work, I enjoy writing music, biking, practicing yoga, and spending time with family and friends.
        </Text>
      </Section>

      <Section id="experience" className="col-span-full md:col-span-7 md:col-start-6 grid grid-cols-subgrid">
        <Heading as="h2" className="col-span-12 md:col-span-6 mb-6">Experience</Heading>

        {EXPERIENCES.map((exp) => (
          <>
            <Text as="span" className="col-span-12 md:col-span-2 pt-2">{exp.period}</Text>
            <div className="col-span-12 md:col-span-4 mb-8">
              <Heading className="mb-2" as="h4">{exp.position} · {exp.company}</Heading>
              <Text>{exp.summary}</Text>
              {exp?.technologies && (
                <div className="flex gap-x-1 gap-y-2 flex-wrap mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Text
                      as="span"
                      key={i}
                      className="bg-primary-text text-[white] text-xxs tracking-widest py-2 px-4 rounded-full"
                    >
                      {tech}
                    </Text>
                  ))}
                </div>
              )}
            </div>
          </>
        ))}

      </Section>

      <Section id="contact" className="col-span-full md:col-span-6 md:col-start-6 mb-10">
        <h2 className="mb-7">Let's Talk</h2>
        <form className="flex flex-col">
          <Input label="Name" className="mb-5" />
          <Input label="Email" className="mb-5" />
          <Input label="Message" type="textarea" className="mb-4" />
          <button className="bg-primary-text text-[white] uppercase p-3 rounded-md max-w-32 tracking-wide" type="submit">Submit</button>
        </form>
      </Section>

    </main>
  );
}
