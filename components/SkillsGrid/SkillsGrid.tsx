import clsx from "clsx";
import Subsection from "../Subsection";

const skills = [
  {
    name: "React",
    level: "Senior",
    description:
      "My development approach revolves heavily around modular design. React holds a central place in my workflow—it's been the cornerstone of my career, making it my strongest library. I possess a deep understanding of its intricacies, common patterns, and crucially, its pitfalls.",
    featured: true,
  },
  {
    name: "Javascript",
    level: "Senior",
    description:
      "JavaScript stands as my primary language of choice for most tasks. Its vast community offers a wealth of proven use cases, making it my go-to for anything JS-related.",
    featured: true,
  },
  {
    name: "CSS",
    level: "Senior",
    description:
      "Among the trio of core web elements, CSS holds a special place for me. I view it as a meticulously crafted tool, and as such, my primary focus is always on CSS-first approaches. Proficiency in CSS can take a design surprisingly far without the need to delve into a JS file.",
    featured: true,
  },
  {
    name: "NextJS",
    level: "Mid",
    description:
      "Over the past year, Next.js has been my primary framework for site development. My close familiarity with it has allowed me to navigate its environment, particularly Vercel, which, in my experience, significantly accelerates both development and delivery times.",
    featured: true,
  },

  {
    name: "Node",
    level: "Mid",
  },
  {
    name: "Tailwind",
    level: "Mid",
  },
  {
    name: "Typescript",
    level: "Mid",
  },
  {
    name: "Git",
    level: "Senior",
  },
  {
    name: "Scrum",
    level: "Mid",
  },
  {
    name: "Golang",
    level: "Junior",
  },
  {
    name: "SEO",
    level: "Mid",
  },
  {
    name: "GraphQL",
    level: "Junior",
  },
];

export default function SkillsGrid() {
  return (
    <Subsection>
      {skills.map(({ name, level, featured, description }) => {
        const key = name + level;
        const skillClasses = clsx({
          "col-span-6 pr-2 mb-12": featured,
          "col-span-4 mb-16": !featured,
        });
        return (
          <div className={skillClasses} key={key}>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-sm italic mt-2">Level: {level}</p>
            {description && <p className="text-sm mt-4">{description}</p>}
          </div>
        );
      })}
    </Subsection>
  );
}
