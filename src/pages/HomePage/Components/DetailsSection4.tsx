import {
  EarnIcon,
  FindingIcon,
  PropertyListIcon,
  VerifiedExpertsIcon,
} from "@/constants";
import React from "react";

export default function DetailsSection4() {
  const managementComponets = [
    {
      id: "1",
      title: "Finding and checking a NFT",
      description:
        "Real estate experts find and check a NFT with a high annualized rent yield property.",
      icon: FindingIcon,
    },
    {
      id: "1",
      title: "Property lists to the marketplace",
      description:
        "The property is listed on the marketplace as NFT and investors purchase it in fractions.",
      icon: PropertyListIcon,
    },
    {
      id: "1",
      title: "Verified experts manage properties",
      description:
        "Local RE partners conduct the purchase of the property, find tenants and manage it. No your time needed.",
      icon: VerifiedExpertsIcon,
    },
    {
      id: "1",
      title: "Just sit back and earn",
      description:
        "Investors get stable rental income in proportion to the amount of fractions they own. ",
      icon: EarnIcon,
    },
  ];
  return (
    <div className="flex flex-col w-full bg-[#1C355D] p-20 items-center">
      <div>
        <div className=" flex-col justify-start items-center gap-[5px] flex">
          <div className="justify-start items-start gap-[15px] flex">
            <div className="headline-gradient-1 text-4xl font-medium font-['Inter']">
              Zero Paperwork
            </div>
            <div className=" text-white text-4xl font-medium font-['Inter']">
              and no landlord
            </div>
          </div>
          <div className=" text-white text-4xl font-medium font-['Inter']">
            management headache
          </div>
        </div>
        <div className="flex flex-row gap-[100px] px-20 mt-20">
          {managementComponets.map((component, index) => (
            <div key={index} className="flex flex-col gap-3 w-1/4">
              <img src={component.icon} width={50} />
              <div className="text-white text-xl font-semibold font-['Poppins'] leading-normal">
                {component.title}
              </div>
              <div className="text-white text-base font-light font-['Inter'] leading-[24.86px]">
                {component.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
