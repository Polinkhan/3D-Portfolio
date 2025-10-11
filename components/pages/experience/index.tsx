import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import { ExperienceDataType } from "@/utils/types";
import Section from "@/components/ui/Section";
import { getData } from "@/helper/common";

export const dynamic = "force-dynamic";

export const ExperienceView = () => {
  const data = getData("experience") as ExperienceDataType;

  if (!data) return;
  return (
    <Section
      noSection
      headerText={data?.header}
      headerSubText={data.label}
      className="pt-0 flex-1 "
    >
      <ExperienceTimeline ExperienceList={data.experienceList} />
    </Section>
  );
};

export default ExperienceView;
