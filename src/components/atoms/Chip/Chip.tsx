import { mergeCls } from "@/utils";
import { HTMLAttributes } from "react";

export type ChipProps = HTMLAttributes<HTMLDivElement> & {
  color?: string;
};

const Chip = ({ color, className, ...props }: ChipProps) => {
  return (
    <div className={mergeCls("rounded-sm inline", className)} {...props} />
  );
};

export default Chip;
