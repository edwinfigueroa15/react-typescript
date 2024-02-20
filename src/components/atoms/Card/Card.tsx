import { mergeCls } from "@/utils";
import { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  color?: string;
};

const Card = ({ color, className, ...props }: CardProps) => {
  return (
    <div
      className={mergeCls(
        "rounded-lg border-solid border-2 border-green p-3",
        className
      )}
      {...props}
    />
  );
};

export default Card;
