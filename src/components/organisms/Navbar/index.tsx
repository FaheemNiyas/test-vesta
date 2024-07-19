import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  async function onConnectClick() {
    open();
  }

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
      items:[],
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
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#FFFFFF0D] focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className="h-8 w-50 bg-white" alt="Vesta Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          {isConnected ? (
            <w3m-button />
          ) : (
            <button
              type="button"
              onClick={onConnectClick}
              className="rounded-full text-sm px-4 py-2 text-center bg-[#05F691] text-black"
            >
              Connect
            </button>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navComponents.map((navComponent, index) => {
              return (
                <li className="relative group !cursor-pointer" key={index}>
                  <a
                    href={!navComponent.items.length && navComponent.route}
                    className="flex flex-row justify-center items-center py-2 px-3 text-white text-[16px] hover:text-[#05F691] "
                  >
                    {navComponent.title}
                  </a>

                  {navComponent.items?.length !== 0 && <div className="absolute left-[-30px] hidden group-hover:block">
                    <div className="w-[180px] h-7 bg-transparent" />
                    <ul className="bg-[#1C355D] p-2 w-[190px] rounded-md shadow-lg ">
                      {navComponent.items?.map((item, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={item.route}
                              className="flex flex-row gap-3 py-2 px-3 text-white text-[16px] hover:text-[#05F691] hover:bg-[#FFFFFF0D] rounded-md"
                            >
                              <img className="w-5 h-5 bg-white" /> {item.item}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>}
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
