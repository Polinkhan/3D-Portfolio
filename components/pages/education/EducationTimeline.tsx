import { EducationListTypes } from "@/utils/types";

const EducationTimeline = ({ EducationList }: { EducationList: EducationListTypes[] }) => {
  return (
    <div className="relative my-10 ml-4">
      {EducationList?.map(
        ({ institutionName, degreeName, result, duration, institutionUrl }, i) => {
          const isLast = i + 1 === EducationList.length;
          return (
            <div key={degreeName} className="flex items-start relative">
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center mr-6">
                {/* Dot */}
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shadow-lg">
                  <img src="/images/educationCap.svg" alt="Education Cap" className="h-6 w-6" />
                </div>
                {/* Connector Line */}
                {!isLast && <div className="h-12 w-0.5 bg-gray-300 mt-4 rounded-full"></div>}
              </div>

              {/* Timeline Content */}
              <div className="mb-10">
                <div className="flex flex-col gap-1">
                  {institutionUrl ? (
                    <a
                      href={institutionUrl}
                      className="text-gray-100 hover:text-purple-400 hover:underline"
                    >
                      {institutionName}
                    </a>
                  ) : (
                    <span className="text-gray-100">{institutionName}</span>
                  )}
                  <span className="text-xs">{degreeName}</span>
                  <span className="text-xs">{result}</span>
                  <span className="text-xs text-gray-400">{duration}</span>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default EducationTimeline;
