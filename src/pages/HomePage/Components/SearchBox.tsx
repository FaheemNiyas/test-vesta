import { SearchIcon } from "@/constants";
import React from "react";

export default function SearchBox() {
  const filters = [
    "All",
    "Residental",
    "Industrial",
    "Retail",
    "Hospitality",
    "Healthcare",
  ];
  return (
    <div className="w-fit h-[263px] bg-[#1C355D] absolute left-0 right-0 mx-auto top-[1450px] rounded-2xl flex flex-col justify-between py-10">
      <div className="text-white text-xl font-normal font-['Poppins'] leading-tight w-full text-center">
        Popular In Last 7 Days
      </div>
      <div className="flex flex-row justify-between w-full px-10 gap-10">
        {filters.map((filter) => (
          <button className="flex flex-row items-center justify-center bg-transparent border border-white text-white py-3 px-10 rounded-full">
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-row justify-between w-full px-10 gap-10">
      <div className="flex flex-row justify-between w-full  h-[50px] bg-slate-800 rounded-[100px]">
        <input
          placeholder="Search NFT by Keywords..."
          className="w-full h-[50px] bg-slate-800 rounded-[100px] px-10"
        />
        <img src={SearchIcon} className="p-2" alt="search-icon" />
      </div>
      </div>
    </div>
  );
}
