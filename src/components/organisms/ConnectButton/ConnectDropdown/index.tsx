import React from "react";
import ConnectButtonItem from "../ConnectButtonItem";
import { ConnectIcon, LoginIcon, RegisterIcon } from "@/constants";

interface ConnectDropdownProps {
  onConnectClick: () => void;
}

const ConnectDropdown: React.FC<ConnectDropdownProps> = ({ onConnectClick }) => {
  const connectComponents = [
    { id: "1", item: "Login", route: "/login", icon: LoginIcon },
    { id: "2", item: "Register", route: "/sign-up", icon: RegisterIcon },
    { id: "3", item: "Connect", route: "#", onClick: onConnectClick, icon: ConnectIcon },
  ];

  return (
    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li className="relative group !cursor-pointer">
        <button
          type="button"
          className="hidden md:flex flex-row justify-center items-center gap-5 rounded-full text-sm px-10 py-2 text-center bg-[#05F691] text-black"
        >
          Connect
        </button>
        <div className="md:absolute md:left-[-30px] hidden group-hover:block">
          <div className="w-[180px] h-7 bg-transparent" />
          <ul className="md:bg-[#1C355D] p-2 w-[190px] rounded-md md:shadow-lg">
            {connectComponents.map((item, idx) => (
              <ConnectButtonItem key={idx} item={item} />
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default ConnectDropdown;
