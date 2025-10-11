import React from "react";
import WorkCard from "./WorkCard";
import { WorkDataType } from "@/utils/types";
import Section from "@/components/ui/Section";
import { getData } from "@/helper/common";

const WorkView = () => {
  const data = getData("work") as WorkDataType;

  if (!data) return;
  return (
    <Section id="work" headerText={data.header} headerSubText={data.label}>
      <div className="flex flex-col gap-4">
        {data.workList.map((_: any, i: any) => (
          <WorkCard key={i} index={i} workList={data.workList} />
        ))}
      </div>
    </Section>
  );
};

export default WorkView;
