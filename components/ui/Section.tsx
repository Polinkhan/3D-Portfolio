import React from "react";
import BrandText from "./BrandText";

interface SectionProps {
  id?: string;
  className?: string;
  headerText?: string;
  headerSubText?: string;
  children?: React.ReactNode;
  noSection?: boolean;
}

const Section = ({
  id,
  children,
  headerText,
  headerSubText,
  noSection,
  className = "",
}: SectionProps) => {
  if (noSection) {
    return (
      <div
        className={`bg-secondary-dark text-white flex flex-col justify-center pt-16 pb-1 ${className}`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col pb-5 text-white ">
            {headerText && <BrandText>{headerText}</BrandText>}
            {headerSubText && (
              <p className={`text-sm font-normal text-gray-500`}>{headerSubText}</p>
            )}
          </div>
          {children}
        </div>
      </div>
    );
  }

  return (
    <section
      id={id}
      className={`bg-secondary-dark text-white flex flex-col justify-center pt-16 pb-1 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col pb-5 text-white ">
          {headerText && <BrandText>{headerText}</BrandText>}
          {headerSubText && <p className={`text-sm font-normal text-gray-500`}>{headerSubText}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
