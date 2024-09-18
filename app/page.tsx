import DualSection, { Left, Right } from "@/components/DualSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import SkillsGrid from "@/components/SkillsGrid/SkillsGrid";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Section theme="secondary" className="pt-80 pb-12" id="hero">
        <h1 className="col-span-7 col-start-6 text-right text-4xl font-bold">
          Hello! My name is Kevyn,
          <br /> and I’m a Web Developer
        </h1>
      </Section>

      <Section paddingY id="about">
        <SectionTitle className="col-span-3 text-right">About Me</SectionTitle>
        <p className="col-span-8 col-start-5 text-md">
          Having had the opportunity to collaborate with multiple US companies
          over the last 7 years, I've honed my skills across various web
          technologies, primarily focusing on Front End tools. However, I've
          also undertaken Full Stack responsibilities in specific roles
          throughout my career.
          <br />
          <br />
          My passion lies in crafting clean code and implementing astute
          practices. Continuously seeking ways to enhance existing codebases and
          elevate the development experience is ingrained in my approach.
          <br />
          <br />
          Working within industries like functional tele-health and online
          fitness has granted me deep insights into optimal productivity. I
          thrive when I'm deeply engaged with my projects, seeking a profound
          understanding of their workings. For me, it's more than just coding;
          it's about actively participating and contributing meaningfully to
          each project.
        </p>
      </Section>

      <Section paddingY theme="secondary" id="experience">
        <SectionTitle className="col-span-12 mb-20">Experience</SectionTitle>
        <ExperienceTimeline />
      </Section>

      <Section paddingY theme="tertiary" id="skills">
        <SectionTitle className="col-span-12 mb-20">Skills</SectionTitle>
        <SkillsGrid />
      </Section>

      <DualSection id="contact">
        <Left className="col-span-5">
          <SectionTitle className="col-span-12 mb-20">Contact</SectionTitle>
          <p></p>
        </Left>
        <Right theme="secondary" className="col-span-7 pt-4">
          <ContactForm className="col-span-6 col-start-2" />
        </Right>
      </DualSection>
    </main>
  );
}
