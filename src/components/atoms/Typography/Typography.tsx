import { mergeCls } from "@/utils";
import { HTMLAttributes } from "react";

export type TypographyVariant = "title" | "subtitle" | "body";

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  color?: string;
  align?: "start" | "center" | "end" | "justify";
  component?: React.ElementType;
  variant?: TypographyVariant;
};

const Typography = ({
  color,
  className,
  align = "start",
  variant = "body",
  component: Component = "p",
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={mergeCls("", className, {
        "text-left": align === "start",
        "text-center": align === "center",
        "text-right": align === "end",
        "text-justify": align === "justify",
        "text-lg": variant === "title",
        "text-md": variant === "subtitle",
        "text-sm": variant === "body",
      })}
      {...props}
    />
  );
};

export default Typography;
