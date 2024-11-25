import React from "react";
import { cn } from "../utils/cn";
import RoundArrowButton from "./RoundArrowButton";

type BtnProps = {
  text: string;
  arrow?: boolean;
  lightMode?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({
  text,
  arrow = false,
  lightMode = true,
  className,
  onClick,
}: BtnProps) {
  return (
    <button
      className={cn(
        "rounded-custom-x-large relative py-[16px] h-[104px] w-[568px] px-[32px] flex justify-center items-center gap-4 text-primary border-[4px] border-primary",
        className,
        { "bg-primary-blue text-white border-none": lightMode }
      )}
      aria-label={text}
      onClick={onClick}
    >
      <div className="text-lg font-[400] h-full w-full text-center flex items-center justify-center">
        {text}
      </div>

      {arrow && (
        <div className="absolute right-7">
          <RoundArrowButton />
        </div>
      )}
    </button>
  );
}

export default Button;
