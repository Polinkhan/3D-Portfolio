import { getLocalDateString, getMonthDiff } from "@/helper/common";
import { ExperienceListTypes } from "@/utils/types";

const ExperienceTimeline = ({ ExperienceList }: { ExperienceList: ExperienceListTypes[] }) => {
  return (
    <div className="relative">
      {ExperienceList?.map(
        (
          { companyLogo, companyName, companyLocation, companyUrl, totalWorkTime, experiences },
          i
        ) => {
          return (
            <div key={i} className="my-10">
              {/* Company Header */}
              <div className="flex items-start mb-6 relative">
                {/* Logo */}
                <div className="flex flex-col items-center justify-center mr-6 my-auto">
                  <img src={companyLogo} alt={companyName} className="w-24 mr-[-24px]" />
                </div>

                {/* Company Content */}
                <div className="flex flex-col gap-1">
                  <a
                    href={companyUrl}
                    className="text-gray-100 hover:text-purple-400 hover:underline"
                  >
                    {companyName}
                  </a>
                  <span className="text-sm">
                    {getMonthDiff(totalWorkTime.from, totalWorkTime.to)}
                  </span>
                  <span className="text-sm text-gray-500">{companyLocation}</span>
                </div>
              </div>

              {/* Experiences */}
              <div className="ml-24">
                {experiences?.map(({ designation, workTime, workType }, j) => {
                  const isLast = j + 1 === experiences.length;

                  const WorkTimeFrom = getLocalDateString(workTime.from);
                  const WorkTimeTo = getLocalDateString(workTime.to);
                  const monthDiff = getMonthDiff(workTime.from, workTime.to);

                  return (
                    <div key={designation} className="flex items-start relative mb-6 last:mb-0">
                      {/* Timeline Dot and Line */}
                      <div className="flex flex-col items-center mr-6">
                        {/* Dot */}
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shadow-lg">
                          <img src="/images/work.svg" alt="work icon" className="h-6 w-6" />
                        </div>
                        {/* Connector Line */}
                        {!isLast && (
                          <div className="h-10 w-0.5 bg-gray-300 mt-4 rounded-full"></div>
                        )}
                      </div>

                      {/* Experience Content */}
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-100">{designation}</span>
                        <span className="text-xs">{workType}</span>
                        <span className="text-xs text-gray-400">
                          {`${WorkTimeFrom} - ${WorkTimeTo} (${monthDiff})`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ExperienceTimeline;
