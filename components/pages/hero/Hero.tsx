"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { getData } from "@/helper/common";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { HomeDataType } from "@/utils/types";

export const Hero = () => {
  const data = getData("home") as HomeDataType;

  return (
    <header
      className="relative flex flex-col h-screen w-full"
      role="banner"
      aria-label="Hero section introducing Polin Khan"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col lg:flex-row items-center justify-start lg:justify-between px-3 sm:px-8 xl:px-0 mt-16 lg:mt-0 w-full z-[20]"
      >
        <div className=" flex flex-col gap-4 lg:gap-5 text-start">
          <Header className="flex lg:hidden" />

          <div>
            <ImageConnent className="flex lg:hidden" />
            <HeilightText className="flex lg:hidden" />
          </div>

          <Header className="hidden lg:flex" />

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-sm lg:text-lg text-gray-400 my-5 md:max-w-[600px]"
          >
            {data.description}
          </motion.p>

          <div className="flex flex-row justify-center lg:justify-start gap-5">
            <motion.a
              href="#skills"
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full sm:w-[180px]"
            >
              View Skills
            </motion.a>

            <motion.a
              download
              href="/Polin_Khan_CV.pdf"
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full sm:w-[180px]"
              aria-label="Download Polin Khan's CV"
            >
              Download CV
            </motion.a>
          </div>
        </div>

        <div>
          <ImageConnent className="hidden lg:flex" />
          <HeilightText className="hidden lg:flex" />
        </div>
      </motion.div>
    </header>
  );
};

const HeilightText = ({ className }: { className?: string }) => {
  const { heilightText } = getData("home") as HomeDataType;

  return (
    <motion.div
      variants={slideInFromTop}
      className={cn(
        "py-[8px] pl-[8px] pr-[12px] border border-[#7042f88b] opacity-[0.9]] flex items-center max-w-max rounded-full mx-auto",
        className
      )}
    >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h3 className="Welcome-text text-[10px] lg:text-[14px]">{heilightText}</h3>
    </motion.div>
  );
};

const Header = ({ className }: { className?: string }) => {
  const { header } = getData("home") as HomeDataType;

  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      className={cn(
        "flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto",
        className
      )}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center lg:text-start">
        {header.start}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {header.colored}
        </span>
        {header.end}
      </h1>
    </motion.div>
  );
};

const ImageConnent = ({ className }: { className?: string }) => {
  return (
    <motion.div
      variants={slideInFromRight(0.8)}
      className={cn(
        "relative flex justify-center items-center mx-auto w-full max-w-[300px] sm:max-w-[400px] aspect-square",
        className
      )}
    >
      {/* Main Image (fluid & responsive) */}
      <div className="relative w-full h-full z-10">
        <Image
          src="/polinkhan.png"
          alt="Polin Khan, Software Engineer"
          fill
          priority
          draggable={false}
          className="object-contain select-none"
        />
      </div>

      {/* Background SVG */}
      <img
        src="/hero-bg.svg"
        alt=""
        draggable={false}
        className="absolute w-[150%] h-[150%] select-none object-cover"
      />

      {/* Glowing Pulse Effect */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[60%] rounded-full shadow-[0_0_20px_rgba(180,120,255,0.7),0_0_40px_rgba(120,80,255,1)] animate-pulse" />
    </motion.div>
  );
};
