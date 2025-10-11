import Link from "next/link";
import { ReactNode } from "react";
import { FiLoader } from "react-icons/fi";

interface LinkButtonProps {
  routerLink?: string;
  children: ReactNode;
  loading?: boolean;
  color?: "primary" | "secondary";
  href?: string;
  startIcon?: ReactNode;
  className?: string;
  [key: string]: any;
}

export const LinkButton = ({
  routerLink,
  href,
  children,
  loading,
  startIcon,
  color = "secondary",
  className = "",
  ...rest
}: LinkButtonProps) => {
  const baseStyle = `
    inline-flex items-center justify-center gap-2
    px-4 py-2 text-sm font-medium rounded-lg transition-all
    disabled:opacity-60 disabled:cursor-not-allowed
  `;

  const colorStyle =
    color === "primary"
      ? "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500"
      : "bg-gray-800/50 hover:bg-gray-700/55 text-white cursor-pointer";

  const content = (
    <button disabled={loading} className={`${baseStyle} ${colorStyle} ${className}`} {...rest}>
      {startIcon && <span className="text-base">{startIcon}</span>}
      <span>{children}</span>
      {loading && <FiLoader className="animate-spin ml-2 text-sm" aria-label="loading" />}
    </button>
  );

  if (routerLink) {
    return (
      <Link href={routerLink} passHref>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};
