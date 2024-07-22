import { CartIcon, CreatorLogo, LuxuryHome1 } from "@/constants";
import React from "react";

export default function LandingPageCard() {
  return (
    <div className="w-[273px] h-[265px] relative">
      <div className="w-[264.92px] h-[154.47px] left-[4.44px] top-[75.54px] absolute">
        <div className="w-[264.92px] h-[154.47px] left-0 top-0 absolute bg-gradient-to-l from-yellow-400 to-emerald-400 rounded-[30px]" />
      </div>
      <div className="w-[265px] h-[235px] left-[4px] top-0 absolute">
        <img
          className="w-[264px] h-[218px] left-[1px] top-[17px] absolute rounded-bl-[30px] rounded-br-[30px]"
          src={LuxuryHome1}
        />
      </div>
      <div className="w-[273px] h-[69px] left-0 top-[196px] absolute">
        <div className="w-[273px] h-[69px] left-0 top-0 absolute">
            <div className="w-[273px] h-[69px] flex pt-[1px] pb-[1px] pr-[1px] bg-gradient-to-br to-[#FFFFFF00] from-[#FFFFFF] rounded-[15px] shadow">

          <div className="w-full h-full  opacity-95 bg-blue-950 rounded-[15px]  " />
            </div>
          <div className="w-[118px] h-12 left-[12px] top-[14px] absolute justify-start items-center gap-5 inline-flex">
            <div className="w-[113px] flex-col justify-center items-start gap-[5px] inline-flex">
              <div className="h-12 flex-col justify-center items-start gap-[5px] flex">
                <div className="text-white text-[11px] font-semibold font-['Poppins']">
                  Luxury Homes #23
                </div>
                <div className="pr-[11px] pb-2.5 justify-start items-center inline-flex">
                  <div className="self-stretch justify-start items-center gap-[9px] inline-flex">
                    <img
                      className="w-4 h-4 rounded-[100px] border border-white"
                      src={CreatorLogo}
                    />
                    <div className="opacity-70 text-white text-[10px] font-medium font-['Poppins']">
                      Creators Name
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[47.64px] h-[47.64px] left-[214px] top-[11.19px] absolute bg-white/opacity-5 rounded-full border border-white backdrop-blur-[20px] flex items-center justify-center p-2">
            <img src={CartIcon} />
          </div>
        </div>
        <div className="w-[78px] h-12 left-[119px] top-[16px] absolute flex-col justify-center items-end gap-[5px]">
          <div className="h-12 flex-col justify-center items-end gap-[5px] flex">
            <div className="text-white text-[11px] font-semibold font-['Poppins']">
              1.23 ETH
            </div>
            <div className="pl-[23px] pb-[11px] justify-end items-center inline-flex">
              <div className="self-stretch justify-end items-center gap-[9px] inline-flex">
                <div className="opacity-70 text-white text-[10px] font-medium font-['Poppins']">
                  Floor Price
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
