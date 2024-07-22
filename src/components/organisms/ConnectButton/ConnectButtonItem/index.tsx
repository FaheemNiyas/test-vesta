import React from "react";

interface ConnectButtonItemProps {
  item: { id: string; item: string; route: string; icon: string; onClick?: () => void };
}

const ConnectButtonItem: React.FC<ConnectButtonItemProps> = ({ item }) => {
  return (
    <li>
      <a
        href={item.route}
        onClick={item.onClick}
        className="flex flex-row gap-3 py-2 px-3 text-white text-[16px] hover:text-[#05F691] hover:bg-[#FFFFFF0D] rounded-md filter brightness-[0] invert-[1] hover:filter-none"
      >
        <img src={item.icon} className="w-5 h-5 " alt={item.item} /> {item.item}
      </a>
    </li>
  );
};

export default ConnectButtonItem;
