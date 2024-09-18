import clsx from "clsx";
import styles from "./ExperienceTimeline.module.css";

import Subsection from "@/components/Subsection";

const experiences = [
  {
    company: "Glo",
    role: "Front End Developer",
    year: 2023,
    stack: ["Next JS", "React", "TypeScript", "Storybook", "Vercel"],
    description:
      "As a member of the Web Team, I led the site rewrite from Ember to Next.js at Glo. My responsibilities included implementing and overseeing a comprehensive component library for the new site. I managed deployments and environments using Vercel and played a pivotal role in developing critical features for member retention, such as class watching streaks.",
  },
  {
    company: "Parsley Health",
    role: "Front End / Lead Developer",
    year: 2019,
    stack: ["Gatsby", "React", "TypeScript", "Sanity.io", "Node"],
    description:
      "At Parsley, I was a crucial part of the Web Team, tasked with implementing numerous new features across the marketing site, checkout experience, and the company’s main platform. I played a key role in migrating the entire site from Wordpress to Gatsby with React, leading the blog migration. Additionally, I spearheaded the site redesign and earned a promotion to Lead Developer of the Web Team.",
  },
  {
    company: "Wondersauce",
    role: "Front End Developer",
    year: 2018,
    stack: ["React", "Drupal", "Storybook"],
    description:
      "As a contractor for an agency, my role involved servicing a client in the beauty industry at Wondersauce. I conducted maintenance on a headless Drupal CMS utilized by a React Front End, implementing new features for video streams, and overseeing watch duties during mass video streams.",
  },
  {
    company: "Avantica",
    role: "Full Stack Developer",
    year: 2017,
    stack: ["React", "TypeScript", "Groovy on Grails"],
    description:
      "Working as a contractor for an agency, I collaborated with a client that developed a Marketing tool to analyze public opinion on web articles. My responsibilities included developing features for advanced searches using a Groovy on Grails Back End. I constructed specific filters and sorting mechanisms for searches and resolved UI bugs on the main site and platform.",
  },
  {
    company: "First Factory",
    role: "Full Stack Developer",
    year: 2016,
    stack: ["Angular", "Node", "Sass"],
    description:
      "Within the web team at First Factory, I primarily supported a student loan startup focused on refinancing and loan completion guidance. My tasks involved addressing bugs and implementing minor features across their multiple form experiences.",
  },
];

export default function ExperienceTimeline() {
  const experienceTimelineClasses = clsx(styles.timeline, "col-span-12");
  const nodeClass = clsx(styles.nodess, "col-span-2");
  return (
    <Subsection className={experienceTimelineClasses}>
      {experiences.map(({ year, role, company, stack, description }) => (
        <>
          <div className={nodeClass} key={`${company}:${role}:node`}>
            <span className="text-md font-bold m-auto">{year}</span>
          </div>
          <div className="col-span-10 h-[330px]" key={`${company}:${role}:exp`}>
            <p className="text-lg font-bold">{role}</p>
            <h3 className="text-3xl font-bold">{company}</h3>
            <p className="text-sm italic mt-2">{stack.join(" / ")}</p>
            <p className="text-sm mt-3">{description}</p>
          </div>
        </>
      ))}
    </Subsection>
  );
}
