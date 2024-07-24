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
    <div className=" z-10 max-w-fit gap-10 bg-[#1C355D] absolute left-0 right-0 mx-auto md:top-[1450px] top-[660px] rounded-2xl flex flex-col justify-between py-10">
      <div className="text-white text-xl font-normal font-['Poppins'] leading-tight w-full text-center">
        Popular In Last 7 Days
      </div>
      <div className="flex flex-row flex-wrap justify-between w-full gap-10 px-10">
        {filters.map((filter) => (
          <button
            key={filter}
            className="flex flex-row items-center justify-center px-10 py-3 text-white bg-transparent border border-white rounded-full"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-row justify-between w-full gap-10 px-10">
        <div className="flex flex-row justify-between w-full h-[50px] bg-slate-800 rounded-[100px]">
          <input
            placeholder="Search NFT by Keywords..."
            className="w-full h-[50px] bg-slate-800 rounded-[100px] px-10"
          />
          <img src={SearchIcon} className="p-2" alt="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
