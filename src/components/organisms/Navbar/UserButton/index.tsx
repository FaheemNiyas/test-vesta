// components/UserButton.tsx
import React from "react";
import { UserProfile } from "@/constants";
import UserDropdown from "./UserDropdown";

const UserButton = () => {
  return (
    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li className="relative group !cursor-pointer">
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
        <UserDropdown />
      </li>
    </ul>
  );
};

export default UserButton;
