import React from "react";
import { OptionalCardProps } from "@/types";


const OptionalCard: React.FC<OptionalCardProps> = ({
  children,
  title,
  subTitle,
  isSkip,
  onSkipNow
}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full w-full sm:w-[580px] bg-[#1C355D]/80 rounded-2xl shadow border border-[#FFFFFF4D] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <img className="bg-white w-20 h-20 rounded-full" />
        {title && <div className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins']">
          {title}
        </div>}
        <div className="flex flex-col items-center justify-center ">
          {subTitle && <span className="text-xs font-medium text-white text-opacity-70 sm:text-sm font-Inter pb-3">
            {subTitle}
          </span>}
          <div className="flex flex-row justify-center gap-5">
            <img className="bg-white w-5 h-5 rounded-full" />
            <img className="bg-white w-5 h-5 rounded-full" />
            <img className="bg-white w-5 h-5 rounded-full" />
          </div>
        </div>

        {children}

        {isSkip && (
          <button onClick={onSkipNow} className="flex flex-row w-full justify-center gap-4 mt-4 sm:mt-6">
            <span className="text-xs font-medium text-white text-opacity-70 sm:text-sm font-Inter">
              Skip for now
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default OptionalCard;
