import React from "react";
import { getData } from "@/helper/common";
import Section from "@/components/ui/Section";
import { SkillDataType } from "@/utils/types";
import SkillIconWithLabel from "./SkillIconWIthLabel";
import SkillCetegoryLabel from "./SkillCetegoryLabel";

const Skill = () => {
  const data = getData("skill") as SkillDataType;
  if (!data) return null;

  return (
    <Section
      id="skills"
      headerText={data?.header}
      headerSubText={data?.label}
      className="min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.categories.map((category, i) => {
          const SelectedSkills = data.skillList.filter((item) => category === item.category);

          return (
            <div key={i} className="flex flex-col gap-2 ">
              {/* Category Header */}
              <SkillCetegoryLabel name={category} />
              {/* Skill icons */}
              <div className="flex flex-wrap gap-4">
                {SelectedSkills.map((skill) => (
                  <SkillIconWithLabel key={skill.label} {...skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skill;
