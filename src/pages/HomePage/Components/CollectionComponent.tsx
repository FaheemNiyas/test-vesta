import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CollectionDemoIcon,
  LaunchArrowIcon,
  VerifyIcon,
} from "@/constants";

import Carousel from "@/components/organisms/Carousel";

// Define the props for the SlideContent component
interface SlideContentProps {
  collectionId: string;
  collectionName: string;
  creatorName: string;
  floorPrice: string;
  collectionImage: string;
  currentIndex: number;
  totalCollections: number;
}

const SlideContent: React.FC<SlideContentProps> = ({
  collectionId,
  collectionName,
  creatorName,
  floorPrice,
  collectionImage,
  currentIndex,
  totalCollections,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked");
    navigate(`/collections/${collectionId}`);
  };

  const renderDots = () => {
    return Array.from({ length: totalCollections }).map((_, index) => (
      <div
        key={index}
        className={`w-8 h-8 rounded-full ${
          index === currentIndex
            ? "bg-gradient-to-l to-[#05F691] from-[#EFE709] border-2 border-secondary"
            : "bg-secondary"
        }`}
      ></div>
    ));
  };

  return (
    <div className="bg-gradient-to-l to-[#05F691] from-[#EFE709]">
      <div className="flex flex-col w-full min-h-[609px] bg-no-repeat bg-cover bg-[#08080836] p-4 pt-10 md:p-8 bg-[url('/assets/collection-bg.png')]">
        <div className="flex flex-col w-full p-[75px]">
          <img src={collectionImage} width={70} alt="Collection" />
          <div className="flex flex-row items-center gap-5 text-white text-[40px] font-semibold font-['Inter'] leading-[88px]">
            {collectionName} <img src={VerifyIcon} alt="Verified" />
          </div>
          <div className="flex flex-row items-center gap-5 text-white text-xl font-semibold font-['Inter'] leading-normal">
            by {creatorName} <img src={VerifyIcon} width={20} alt="Verified" />
          </div>
          <div className="text-white text-xl font-semibold font-['Inter'] leading-normal mt-2">
            Floor Price {floorPrice} ETH
          </div>
          <button
            className="flex flex-row w-fit items-center justify-center gap-3 bg-[#1F365B] text-white py-3 px-10 rounded-full mt-10"
            onClick={handleClick}
          >
            See Collection <img src={LaunchArrowIcon} alt="Launch" />
          </button>
          <div className="flex mt-4 space-x-2">{renderDots()}</div>
        </div>
      </div>
    </div>
  );
};

const collections = [
  {
    collectionId: "1",
    collectionName: "Collection Name",
    creatorName: "Creator Name",
    floorPrice: "0.000014",
    collectionImage: CollectionDemoIcon,
  },
  {
    collectionId: "2",
    collectionName: "Collection Name 2",
    creatorName: "Creator Name 2",
    floorPrice: "0.000020",
    collectionImage: CollectionDemoIcon,
  },
  {
    collectionId: "3",
    collectionName: "Collection Name 3",
    creatorName: "Creator Name 3",
    floorPrice: "0.000030",
    collectionImage: CollectionDemoIcon,
  },
  {
    collectionId: "4",
    collectionName: "Collection Name 4",
    creatorName: "Creator Name 4",
    floorPrice: "0.000040",
    collectionImage: CollectionDemoIcon,
  },
];

const collectionsSlides = [
  {
    id: 1,
    logo: (
      <SlideContent
        {...collections[0]}
        currentIndex={0}
        totalCollections={collections.length}
      />
    ),
  },
  {
    id: 2,
    logo: (
      <SlideContent
        {...collections[1]}
        currentIndex={1}
        totalCollections={collections.length}
      />
    ),
  },
  {
    id: 3,
    logo: (
      <SlideContent
        {...collections[2]}
        currentIndex={2}
        totalCollections={collections.length}
      />
    ),
  },
  {
    id: 4,
    logo: (
      <SlideContent
        {...collections[3]}
        currentIndex={3}
        totalCollections={collections.length}
      />
    ),
  },
];

const CollectionComponent: React.FC = () => {
  return (
    <div className="relative">
      <Carousel slideList={collectionsSlides} slidesPerView={1} isFullScreen={true} navigation={true} />
    </div>
  );
};

export default CollectionComponent;
