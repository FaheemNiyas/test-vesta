import { useState } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { UserProfile, VestaLogo, WalletIcon } from "@/constants";

const Navbar = () => {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onConnectClick = async () => {
    open();
  };

  const navComponents = [
    {
      id: "1",
      title: "Stats",
      items: [
        { id: "1", item: "Dashboard", route: "/dashboard", icon: "" },
        { id: "2", item: "Analytics", route: "/analytics", icon: "" },
        { id: "3", item: "Swap", route: "/swap", icon: "" },
        { id: "4", item: "On /Off Ramp", route: "/ramp", icon: "" },
        { id: "5", item: "Rankings", route: "/rankings", icon: "" },
        { id: "6", item: "Activity", route: "/activity", icon: "" },
      ],
    },
    {
      id: "2",
      title: "Marketplace",
      items: [
        { id: "1", item: "Browse NFT", route: "/browse-nft", icon: "" },
        { id: "2", item: "Collection", route: "/collection", icon: "" },
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
        { id: "1", item: "News", route: "/news", icon: "" },
        { id: "2", item: "Career", route: "/career", icon: "" },
        { id: "3", item: "Learn More", route: "/learn-more", icon: "" },
      ],
    },
  ];

  return (
    <nav className="bg-[#1C355D] fixed w-full z-20 top-0 start-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#FFFFFF0D] focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={VestaLogo} className="h-8 w-50" alt="Vesta Logo" />
        </a>

        <div className="flex gap-2 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {isConnected ? (
            <w3m-button />
          ) : (
            <>
              <button
                type="button"
                onClick={onConnectClick}
                className="hidden md:flex flex-row justify-center items-center gap-5 rounded-full text-sm px-10 py-2 text-center bg-[#05F691] text-black"
              >
                <img alt="img" src={WalletIcon} className="w-5 h-5" /> Connect
              </button>

              <button
                type="button"
                onClick={onConnectClick}
                className="md:hidden flex flex-row justify-center items-center gap-5 rounded-full text-sm py-2 text-center bg-[#ffffff00] text-black"
              >
                <img src={WalletIcon} alt="img" className="w-5 h-5 " />
              </button>
            </>
          )}
          <div className="flex gap-2 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex flex-row justify-center items-center gap-5 rounded-full text-sm px-3 py-2 text-center bg-[#234272] text-white"
            >
              John435
              <img
                alt="img"
                src={UserProfile}
                className="w-5 h-5 rounded-full"
              />
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navComponents.map((navComponent, index) => {
              return (
                <li className="relative group !cursor-pointer" key={index}>
                  <a
                    href={!navComponent.items.length && navComponent.route}
                    className="flex flex-row justify-center items-center py-2 px-3 text-white text-[16px] hover:text-[#05F691]"
                  >
                    {navComponent.title}
                  </a>

                  {navComponent.items?.length !== 0 && (
                    <div className="md:absolute md:left-[-30px] hidden group-hover:block">
                      <div className="w-[180px] h-7 bg-transparent" />
                      <ul className="md:bg-[#1C355D] p-2 w-[190px] rounded-md md:shadow-lg">
                        {navComponent.items?.map((item, index) => {
                          return (
                            <li key={index}>
                              <a
                                href={item.route}
                                className="flex flex-row gap-3 py-2 px-3 text-white text-[16px] hover:text-[#05F691] hover:bg-[#FFFFFF0D] rounded-md"
                              >
                                <img className="w-5 h-5 bg-white" alt="" />{" "}
                                {item.item}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
