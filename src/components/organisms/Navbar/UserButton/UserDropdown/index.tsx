import React from "react";
import UserButtonItem from "../UserButtonItem";
import { LogOutIcon, MediaKitIcon, NotificationIcon, ProfileIcon, SecurityIcon, SettingsIcon, SupportIcon } from "@/constants";

const UserDropdown: React.FC = () => {
  const onLogout = async () => {
    console.log("log-out");
  };

  const connectComponents = [
    { id: "1", item: "Profile", route: "/profile", icon: ProfileIcon },
    { id: "2", item: "Notification", route: "/notification", icon: NotificationIcon },
    { id: "3", item: "Settings", route: "/settings", icon: SettingsIcon },
    { id: "4", item: "Security", route: "/security", icon: SecurityIcon },
    { id: "5", item: "Media Kit", route: "/media-kit", icon: MediaKitIcon },
    { id: "6", item: "Support", route: "/support", icon: SupportIcon },
    { id: "7", item: "Log Out", route: "#", onClick: onLogout, icon: LogOutIcon, className: "text-[#FF4B4B] text-[#FF4B4B] filter-none hover:filter" },
  ];

  return (
    <div className="md:absolute md:left-[-30px] hidden group-hover:block">
      <div className="w-[180px] h-7 bg-transparent" />
      <ul className="md:bg-[#1C355D] p-2 w-[190px] rounded-md md:shadow-lg">
        {connectComponents.map((item, idx) => (
          <UserButtonItem key={idx} item={item} className={item.className}/>
        ))}
      </ul>
    </div>
  );
};

export default UserDropdown;
