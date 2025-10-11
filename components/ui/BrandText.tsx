import React from "react";

interface BrandTextProps {
  children?: React.ReactNode;
  className?: string;
}

const BrandText = ({ children, className = "" }: BrandTextProps) => {
  if (!children) return null;

  return (
    <div className="flex flex-col">
      <h3 className={`relative text-3xl font-bold text-white ${className}`}>
        <span
          className="absolute top-[-8px] w-20 h-1.5 rounded-full 
         bg-gradient-to-r from-purple-500/75 to-cyan-500/75"
        ></span>
        {children}
      </h3>
    </div>
  );
};

export default BrandText;
