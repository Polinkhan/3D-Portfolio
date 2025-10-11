import React from "react";

const SkillCetegoryLabel = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-2 relative">
      <span
        className="absolute top-0.5 w-1.5 h-5 rounded-full 
         bg-gradient-to-b from-purple-500/75 to-cyan-500/75"
      ></span>
      <h4 className="font-semibold pl-3">{name}</h4>
    </div>
  );
};

export default SkillCetegoryLabel;
