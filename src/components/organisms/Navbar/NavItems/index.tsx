import React from 'react';

interface NavItem {
  id: string;
  title: string;
  items: { id: string; item: string; route: string; icon: string }[];
  route?: string;
}

interface NavItemsProps {
  navComponents: NavItem[];
}

const NavItems: React.FC<NavItemsProps> = ({ navComponents }) => (
  <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
    {navComponents.map((navComponent, index) => (
      <li className="relative group !cursor-pointer" key={index}>
        <a
          href={!navComponent.items.length ? navComponent.route : undefined}
          className="flex flex-row justify-center items-center py-2 px-3 text-white text-[16px] hover:text-[#05F691]"
        >
          {navComponent.title}
        </a>
        {navComponent.items.length > 0 && (
          <div className="md:absolute md:left-[-30px] hidden group-hover:block">
            <div className="w-[180px] h-7 bg-transparent" />
            <ul className="md:bg-[#1C355D] p-2 w-[190px] rounded-md md:shadow-lg">
              {navComponent.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.route}
                    className="flex flex-row gap-3 py-2 px-3 text-white text-[16px] hover:text-[#05F691] hover:bg-[#FFFFFF0D] rounded-md filter brightness-[0] invert-[1] hover:filter-none"
                  >
                    <img src={item.icon} className="w-5 h-5 " alt={item.item} /> {item.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ))}
  </ul>
);

export default NavItems;
