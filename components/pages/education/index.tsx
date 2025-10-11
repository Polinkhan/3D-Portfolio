import React from "react";
import Section from "@/components/ui/Section";
import EducationTimeline from "./EducationTimeline";
import { EducationDataType } from "@/utils/types";
import { getData } from "@/helper/common";

const EducationView = () => {
  const data = getData("education") as EducationDataType;

  if (!data) return;
  return (
    <Section
      noSection
      headerText={data.header}
      headerSubText={data.label}
      className="pt-0 flex-1 justify-start"
    >
      <EducationTimeline EducationList={data.educationList} />
    </Section>
  );
};

export default EducationView;
