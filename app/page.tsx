import ContactView from "@/components/pages/contact";
import EducationView from "@/components/pages/education";
import ExperienceView from "@/components/pages/experience";
import { Hero } from "@/components/pages/hero/Hero";
import Skill from "@/components/pages/skill";
import WorkView from "@/components/pages/work";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="h-full w-full mx-auto max-w-[1280px]">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skill />

        <Section id="experience" className="min-h-screen">
          <div className="flex flex-col lg:flex-row pt-0 md:pt-60 lg:pt-0">
            <ExperienceView />
            <EducationView />
          </div>
        </Section>

        <WorkView />
        <ContactView />
      </div>
    </main>
  );
}
