import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { CSSProperties } from "react";

interface NextImageProps {
  alt: string;
  src: string;
  height?: number | "auto";
  width?: number;
  className?: string;
  style?: CSSProperties;
}

const NextImage = ({ style, src, alt, height, width, className }: NextImageProps) => {
  height = height || 350;
  return (
    <div
      style={{ height, width }}
      className={cn("rounded-[6px] overflow-hidden relative flex flex-col", className)}
    >
      <Image
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={alt}
        src={src}
        style={style}
        className="object-cover"
      />
    </div>
  );
};

export default NextImage;
