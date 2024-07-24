import Carousel from "@/components/organisms/Carousel";
import LandingPageCard from "@/components/organisms/LandingPage/LandingPageCard";
import ProviderCard from "@/components/organisms/LandingPage/ProviderCard";
import {
  LaunchArrowIcon,
  Metamask,
  Phantom,
  TrustWallet,
  WalletConnect,
} from "@/constants";
import React from "react";

export default function LandingPage() {
  const nftList = [
    { id: 1, logo: <LandingPageCard /> },
    { id: 2, logo: <LandingPageCard /> },
    { id: 3, logo: <LandingPageCard /> },
    { id: 4, logo: <LandingPageCard /> },
    { id: 5, logo: <LandingPageCard /> },
    { id: 6, logo: <LandingPageCard /> },
  ];

  const providerList = [
    { id: 1, logo: <ProviderCard image={Metamask} /> },
    { id: 2, logo: <ProviderCard image={TrustWallet} /> },
    { id: 3, logo: <ProviderCard image={WalletConnect} /> },
    { id: 4, logo: <ProviderCard image={Phantom} /> },
    { id: 1, logo: <ProviderCard image={Metamask} /> },
    { id: 2, logo: <ProviderCard image={TrustWallet} /> },
    { id: 3, logo: <ProviderCard image={WalletConnect} /> },
    { id: 4, logo: <ProviderCard image={Phantom} /> },
  ];

  return (
    <div className="flex flex-col w-full md:h-[890px] items-center p-0 md:pt-10 md:p-8 md:bg-[url('/assets/landing-bg.png')] bg-[url('/assets/landing-bg-mobile.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col xl:max-w-[1100px] w-full md:gap-10 gap-5 pt-20">
        <div className="flex flex-col px-4 md:gap-0 gap-5">
          <div className="flex flex-row items-center md:justify-between md:gap-10 gap-2">
            <div className="text-[#05F691] font-bold xl:text-[128px] lg:text-[115px] md:text-[100px] text-[32px] leading-[0.7]">
              {" "}
              VESTA
            </div>
            <div className="text-white font-bold xl:text-[128px] lg:text-[115px] md:text-[100px] text-[32px] leading-[0.7]">
              PROPERTY
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:items-center md:justify-between md:gap-10 gap-3">
            <div className="text-white font-bold xl:text-[128px] lg:text-[115px] md:text-[100px] text-[32px] leading-[0.8] italic">
              EXCHANGE
            </div>
            <p className="text-[#fff] font-light md:text-[16px] leading-none w-full text-[10px]">
              {" "}
              Get a passive income by investing in NFT for<br className="block md:hidden"/> blockchain base
              yield-generating rental properties starting just at $50.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start w-full md:gap-10 gap-5 px-4">
          <button className="bg-gradient-to-r to-[#077546] from-[#0AC073] md:py-3 md:px-10 px-5 py-2 rounded-full md:text-[16px] text-[10px]">
            Browse NFT
          </button>
          <button className="flex flex-row items-center justify-center md:gap-5 gap-2 md:px-10 md:py-3 px-3 py-2 text-white bg-transparent border border-white rounded-full md:text-[16px] text-[10px]">
            Apply For Launch <img alt="LaunchArrowIcon" src={LaunchArrowIcon} className="w-5 md:w-auto" />
          </button>
        </div>
        <div className="lg:block hidden w-5/6 ">
          <Carousel slideList={nftList} slidesPerView={3} />
        </div>
        <div className="block lg:hidden w-full ">
          <Carousel slideList={nftList} slidesPerView={2.2} />
        </div>
        <div className="w-full lg:block hidden">
          <Carousel
            slideList={providerList}
            slidesPerView={4}
            autoplay={true}
          />
        </div>
        <div className="w-full block lg:hidden">
          <Carousel
            slideList={providerList}
            slidesPerView={3}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
}
