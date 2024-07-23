// components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Logo from "../Logo";
import MenuButton from "./MenuButton";
import ConnectButton from "../ConnectButton";
import UserButton from "./UserButton";
import NavItems from "./NavItems";
import {
  ActivityIcon,
  AnalyticsIcon,
  BrowsNFTIcon,
  CareerIcon,
  CollectionIcon,
  DashboardIcon,
  LearnMoreIcon,
  NewsIcon,
  RampIcon,
  RankingIcon,
  SwapIcon,
} from "@/constants";
import useUserStore from "@/store/user";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const { isConnected } = useAccount();
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userState = useUserStore();
  const [cookies] = useCookies(["JwtToken"]);

  const isUnAuthorized = () => {
    const JwtToken = cookies.JwtToken;

    if (userState.data != null && JwtToken != null) {
      setIsLogin(true);
      return false;
    } else {
      setIsLogin(false);
      return true;
    }
  };

  useEffect(() => {
    isUnAuthorized();
  }, []);

  const navComponents = [
    {
      id: "1",
      title: "Stats",
      items: [
        {
          id: "1",
          item: "Dashboard",
          route: "/dashboard",
          icon: DashboardIcon,
        },
        {
          id: "2",
          item: "Analytics",
          route: "/analytics",
          icon: AnalyticsIcon,
        },
        { id: "3", item: "Swap", route: "/swap", icon: SwapIcon },
        { id: "4", item: "On /Off Ramp", route: "/ramp", icon: RampIcon },
        { id: "5", item: "Rankings", route: "/rankings", icon: RankingIcon },
        { id: "6", item: "Activity", route: "/activity", icon: ActivityIcon },
      ],
    },
    {
      id: "2",
      title: "Marketplace",
      items: [
        {
          id: "1",
          item: "Browse NFT",
          route: "/browse-nft",
          icon: BrowsNFTIcon,
        },
        {
          id: "2",
          item: "Collection",
          route: "/collection",
          icon: CollectionIcon,
        },
      ],
    },
    {
      id: "3",
      title: "Launchpad",
      route: "/launchpad",
      items: [],
    },
    {
      id: "4",
      title: "Community",
      items: [
        { id: "1", item: "News", route: "/news", icon: NewsIcon },
        { id: "2", item: "Career", route: "/career", icon: CareerIcon },
        {
          id: "3",
          item: "Learn More",
          route: "/learn-more",
          icon: LearnMoreIcon,
        },
      ],
    },
  ];

  return (
    <nav className="bg-[#1C355D] fixed w-full z-20 top-0 start-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Logo />
        <div className="flex gap-2 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {isConnected ? <w3m-button /> : <ConnectButton isLogin={isLogin} />}
          {isLogin && <UserButton />}
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <NavItems navComponents={navComponents} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
