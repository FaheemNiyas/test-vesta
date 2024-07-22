import Carousel from "@/components/organisms/Carousel";
import LandingPageCard from "@/components/organisms/LandingPage/LandingPageCard";
import ProviderCard from "@/components/organisms/LandingPage/ProviderCard";
import { LaunchArrowIcon, Metamask, Phantom, TrustWallet, WalletConnect } from "@/constants";
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
    { id: 1, logo: <ProviderCard image={Metamask}  /> },
    { id: 2, logo: <ProviderCard image={TrustWallet}  /> },
    { id: 3, logo: <ProviderCard image={WalletConnect}  /> },
    { id: 4, logo: <ProviderCard image={Phantom}  /> },
    { id: 1, logo: <ProviderCard image={Metamask}  /> },
    { id: 2, logo: <ProviderCard image={TrustWallet}  /> },
    { id: 3, logo: <ProviderCard image={WalletConnect}  /> },
    { id: 4, logo: <ProviderCard image={Phantom}  /> },
    
  ];

  return (
    <div className="flex flex-col w-full h-[890px] items-center p-4 pt-10 md:p-8 bg-[url('/assets/landing-bg.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col xl:max-w-[1100px] w-full gap-10 pt-20">
        <div>
          <div className="flex flex-row gap-10  items-center justify-between">
            <div className="text-[#05F691] font-bold lg:text-[128px] text-[100px] leading-[0.7]">
              {" "}
              VESTA
            </div>
            <div className="text-white font-bold lg:text-[128px] text-[100px] leading-[0.7]">
              PROPERTY
            </div>
          </div>
          <div className="flex flex-row gap-10  items-center justify-between">
            <div className="text-white font-bold lg:text-[128px] text-[100px] leading-[0.8] italic">
              EXCHANGE
            </div>
            <p className="text-[#fff] font-light text-[16px] leading-none w-full">
              {" "}
              Get a passive income by investing in NFT for blockchain base
              yield-generating rental properties starting just at $50.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 items-center justify-start w-full">
          <button className="bg-gradient-to-r to-[#077546] from-[#0AC073] py-3 px-10 rounded-full">
            Browse NFT
          </button>
          <button className="flex flex-row items-center justify-center gap-5 bg-transparent border border-white text-white py-3 px-10 rounded-full">
            Apply For Launch <img src={LaunchArrowIcon} />
          </button>
        </div>
        <div className=" w-5/6">
          <Carousel slideList={nftList} slidesPerView={3}/>
        </div>
        <div className=" w-full">
          <Carousel slideList={providerList} slidesPerView={4} autoplay={true}/>
        </div>
      </div>
    </div>
  );
}
