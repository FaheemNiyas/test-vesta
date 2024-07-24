import { SearchIcon } from "@/constants";
import React from "react";

const SearchBox: React.FC = () => {
  const filters = [
    "All",
    "Residential",
    "Industrial",
    "Retail",
    "Hospitality",
    "Healthcare",
  ];
  return (
    <div className=" z-10 max-w-fit md:gap-10 gap-3 bg-[#1C355D] absolute left-0 right-0 mx-auto md:top-[1450px] top-[650px] rounded-2xl flex flex-col justify-between md:py-10 py-5 md:w-auto w-[90%]">
      <div className="text-white text-[10px] md:text-xl font-normal font-['Poppins'] leading-tight w-full text-center mb-3 md:mb-0">
        Popular In Last 7 Days
      </div>
      <div className="flex flex-row overflow-auto justify-between w-full md:gap-10 gap-3 md:px-10 px-3">
        {filters.map((filter) => (
          <button
            key={filter}
            className="flex flex-row items-center justify-center md:px-10 md:py-3 px-3 py-1 text-white bg-transparent border border-white rounded-full md:text-xl text-[9px]"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-row justify-between w-full gap-10 md:px-10 px-3">
        <div className="flex flex-row justify-between w-full md:h-[50px] h-[30px] bg-slate-800 rounded-[100px]">
          <input
            placeholder="Search NFT by Keywords..."
            className="w-full md:h-[50px] h-[30px] bg-slate-800 rounded-[100px] px-10 md:text-xl text-[10px]"
          />
          <img src={SearchIcon} className="p-2" alt="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
