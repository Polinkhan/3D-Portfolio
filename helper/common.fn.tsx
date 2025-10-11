import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiExpress,
  SiSocketdotio,
  SiTypescript,
  SiPrisma,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";
import { RiNextjsLine } from "react-icons/ri";
import Image from "next/image";

export const getTools = (name: string) => {
  const baseClass =
    "flex items-center gap-1 text-gray-300 text-sm bg-gray-600/50 pl-2.5 pr-3 py-1.5 rounded-full";

  switch (name) {
    case "react-native":
      return (
        <div className={baseClass}>
          <FaReact className="text-cyan-400" />
          <span>React Native</span>
        </div>
      );

    case "react":
      return (
        <div className={baseClass}>
          <FaReact className="text-cyan-400" />
          <span>React</span>
        </div>
      );

    case "node-js":
      return (
        <div className={baseClass}>
          <FaNodeJs className="text-green-500" />
          <span>Node JS</span>
        </div>
      );

    case "express-js":
      return (
        <div className={baseClass}>
          <SiExpress className="text-gray-400" />
          <span>Express JS</span>
        </div>
      );

    case "my-sql":
      return (
        <div className={baseClass}>
          <GrMysql className="text-blue-500" />
          <span>MySQL</span>
        </div>
      );

    case "web-socket":
      return (
        <div className={baseClass}>
          <SiSocketdotio className="text-gray-400" />
          <span>Web Socket</span>
        </div>
      );

    case "firebase":
      return (
        <div className={baseClass}>
          <IoLogoFirebase className="text-amber-400" />
          <span>Firebase</span>
        </div>
      );

    case "typescript":
      return (
        <div className={baseClass}>
          <SiTypescript className="text-blue-600" />
          <span>TypeScript</span>
        </div>
      );

    case "python":
      return (
        <div className={baseClass}>
          <AiOutlinePython className="text-yellow-400" />
          <span>Python</span>
        </div>
      );

    case "next-js":
      return (
        <div className={baseClass}>
          <RiNextjsLine className="text-black dark:text-white" />
          <span>Next JS</span>
        </div>
      );

    case "prisma":
      return (
        <div className={baseClass}>
          <SiPrisma className="text-indigo-400" />
          <span>Prisma</span>
        </div>
      );

    case "pytorch":
      return (
        <div className={baseClass}>
          <SiPytorch className="text-orange-500" />
          <span>Pytorch</span>
        </div>
      );

    case "tensorflow":
      return (
        <div className={baseClass}>
          <SiTensorflow className="text-orange-400" />
          <span>Tensorflow</span>
        </div>
      );

    case "tensorflow-js":
      return (
        <div className={baseClass}>
          <SiTensorflow className="text-orange-400" />
          <span>Tensorflow JS</span>
        </div>
      );

    case "box-sdk":
      return (
        <div className={baseClass}>
          <Image src="/images/box.svg" alt="Box SDK" width={16} height={16} />
          <span>Box SDK</span>
        </div>
      );

    default:
      return <></>;
  }
};
