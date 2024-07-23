import Carousel from "@/components/organisms/Carousel";
import CompanyCard from "@/components/organisms/LandingPage/CompanyCard";
import {
  ComIcon1,
  ComIcon2,
  ComIcon3,
  ComIcon4,
  ComIcon5,
  ComIcon6,
  ComIcon7,
  ComIcon8,
} from "@/constants";
import React from "react";

export default function TrendingCompanies() {
  const nftList = [
    { id: 1, logo: <CompanyCard companyIcon={ComIcon1} /> },
    { id: 2, logo: <CompanyCard companyIcon={ComIcon2} /> },
    { id: 3, logo: <CompanyCard companyIcon={ComIcon3} /> },
    { id: 4, logo: <CompanyCard companyIcon={ComIcon4} /> },
    { id: 5, logo: <CompanyCard companyIcon={ComIcon5} /> },
    { id: 6, logo: <CompanyCard companyIcon={ComIcon6} /> },
    { id: 7, logo: <CompanyCard companyIcon={ComIcon7} /> },
    { id: 8, logo: <CompanyCard companyIcon={ComIcon8} /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 py-40">
      <div className="text-center text-[55px] font-medium font-['Inter'] headline-gradient-1 w-fit">
        Trending Companies
      </div>
      <div className="w-full ">
        <Carousel slideList={nftList} slidesPerView={7} navigation={true} />
      </div>
    </div>
  );
}
