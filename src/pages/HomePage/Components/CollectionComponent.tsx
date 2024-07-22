import { CollectionDemoIcon, LaunchArrowIcon, VerifyIcon } from "@/constants";
import React from "react";

export default function CollectionComponent() {
  return (
    <div className="bg-gradient-to-l to-[#05F691] from-[#EFE709] ">
      <div className="flex flex-col w-full min-h-[609px] bg-no-repeat bg-cover bg-[#08080836]  p-4 pt-10 md:p-8 bg-[url('/assets/collection-bg.png')]">
        <div className="flex flex-col w-full p-[75px]">
          <img src={CollectionDemoIcon} width={70} />
          <div className="flex flex-row items-center gap-5 text-white text-[40px] font-semibold font-['Inter'] leading-[88px]">
            Collection Name <img src={VerifyIcon} />
          </div>
          <div className="flex flex-row items-center gap-5 text-white text-xl font-semibold font-['Inter'] leading-normal">
            by Creator Name <img src={VerifyIcon} width={20} />
          </div>
          <div className="text-white text-xl font-semibold font-['Inter'] leading-normal mt-2">
            Floor Price 0.000014 ETH
          </div>
          <button className="flex flex-row w-fit items-center justify-center gap-3 bg-[#1F365B] text-white py-3 px-10 rounded-full mt-10">
            See Collection <img src={LaunchArrowIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
