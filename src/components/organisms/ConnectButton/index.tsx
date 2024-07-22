// components/ConnectButton.tsx
import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { WalletIcon } from "@/constants";
import ConnectDropdown from "./ConnectDropdown";

const ConnectButton = ({ isLogin }: { isLogin: boolean }) => {
  const { open } = useWeb3Modal();
  const onConnectClick = async () => {
    open();
  };

  return (
    <>
      {isLogin ? (
        <button
          type="button"
          onClick={onConnectClick}
          className="hidden md:flex flex-row justify-center items-center gap-5 rounded-full text-sm px-10 py-2 text-center bg-[#05F691] text-black"
        >
          <img alt="img" src={WalletIcon} className="w-5 h-5" /> Connect
        </button>
      ) : (
        <ConnectDropdown onConnectClick={onConnectClick} />
      )}
    </>
  );
};

export default ConnectButton;
