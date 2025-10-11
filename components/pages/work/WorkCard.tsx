import React from "react";
import { WorkListType } from "@/utils/types";
import { getTools } from "@/helper/common.fn";
import { FaEye, FaGithub } from "react-icons/fa";
import NextImage from "@/components/ui/NextImage";
import { LinkButton } from "@/components/ui/Button";

interface WorkCardProps {
  index: number;
  workList: WorkListType[];
}

const WorkCard = ({ index, workList }: WorkCardProps) => {
  const workDetails = workList?.[index];
  if (!workDetails) return null;

  return (
    <div
      className={`flex flex-col md:flex-row gap-10 bg-secondary-main rounded-xl p-4 md:p-8 ${
        index % 2 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        <NextImage
          src={workDetails?.img}
          alt={workDetails.name}
          className="aspect-[16/9]"
          height={"auto"}
        />
      </div>
      <Details index={index} workList={workList} />
    </div>
  );
};

const Details = ({ index, workList }: { index: number; workList: WorkListType[] }) => {
  const workDetails = workList?.[index];
  if (!workDetails) return null;

  return (
    <div className="flex flex-1 flex-col justify-between text-white">
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-2">{workDetails?.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4">{workDetails?.description}</p>

      {/* Credentials */}
      {workDetails?.credential && (
        <div className="text-gray-400 mb-4 space-y-1">
          <div className="flex gap-1 text-sm">
            <span className="font-medium text-gray-300">User:</span>
            <span>{workDetails.credential.username}</span>
          </div>
          <div className="flex gap-1 text-sm">
            <span className="font-medium text-gray-300">Pass:</span>
            <span>{workDetails.credential.password}</span>
          </div>
        </div>
      )}

      {/* Tools */}
      <div className="flex flex-wrap items-center gap-3 text-gray-400 pb-3">
        {workDetails?.tools?.map((tool, i) => (
          <div key={i} className="flex items-center gap-1">
            {getTools(tool)}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-3">
        {workDetails?.source?.live && (
          <LinkButton href={workDetails.source.live} startIcon={<FaEye />}>
            Live
          </LinkButton>
        )}
        <LinkButton href={workDetails.source.github} startIcon={<FaGithub />}>
          Source
        </LinkButton>
      </div>
    </div>
  );
};

export default WorkCard;
