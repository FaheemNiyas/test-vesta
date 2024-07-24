import { CartIcon, CreatorLogo, LuxuryHome1 } from "@/constants";
import React from "react";

export default function LandingPageCard() {
  return (
    <>
    <div className="w-[273px] h-[265px] relative md:block hidden">
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
    <div className="w-[136px] h-[124px] relative block md:hidden">
    <div className="w-[131.97px] h-[77.24px] left-[2.21px] top-[29.27px] absolute">
        <div className="w-[131.97px] h-[77.24px] left-0 top-0 absolute bg-gradient-to-l from-yellow-400 to-emerald-400 rounded-[15px]" />
    </div>
    <div className="w-[131.97px] h-[109px] left-[2.03px] top-0 absolute">
        <div className="w-[131.97px] h-[77.24px] left-0 top-[31.27px] absolute">
            <div className="w-[131.97px] h-[77.24px] left-0 top-0 absolute bg-gradient-to-l from-yellow-400 to-emerald-400 rounded-[15px]" />
        </div>
        <img className="w-[131.52px] h-[109px] left-[0.46px] top-0 absolute rounded-bl-[15px] rounded-br-[15px]"  src={LuxuryHome1} />
    </div>
    <div className="w-[136px] h-[34.50px] left-0 top-[89.50px] absolute">
        <div className="w-[136px] h-[34.50px] left-0 top-0 absolute">
            <div className="w-[136px] h-[34.50px] left-0 top-0 absolute">
                <div className="w-[136px] h-[34.50px] left-0 top-0 absolute">
                    <div className="w-[136px] h-[34.50px] left-0 top-0 absolute opacity-95 bg-blue-950 rounded-lg shadow border-r border-t border-b border-white" />
                    <div className="w-[58.78px] h-[23.50px] left-[5.98px] top-[7px] absolute justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[56.50px] flex-col justify-center items-start gap-[2.50px] inline-flex">
                            <div className="h-[23.50px] flex-col justify-center items-start gap-[2.50px] flex">
                                <div className="text-white text-[5.50px] font-semibold font-['Poppins']">Luxury Homes #23</div>
                                <div className="pr-[5px] pb-[5px] justify-start items-center inline-flex">
                                    <div className="self-stretch justify-start items-center gap-[4.50px] inline-flex">
                                        <img className="w-2 h-2 rounded-[50px] border border-white"  src={CreatorLogo}/>
                                        <div className="opacity-70 text-white text-[5px] font-medium font-['Poppins']">Creators Name</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[23.73px] h-[23.82px] left-[106.61px] top-[5.60px] absolute bg-white/opacity-5 rounded-full border border-white backdrop-blur-[10px] p-1" >
                <img src={CartIcon} />
                </div>
            </div>
            <div className="w-[38.86px] h-[23.50px] left-[59.28px] top-[8px] absolute flex-col justify-center items-end gap-[2.50px] inline-flex">
                <div className="h-[23.50px] flex-col justify-center items-end gap-[2.50px] flex">
                    <div className="text-white text-[5.50px] font-semibold font-['Poppins']">1.23 ETH</div>
                    <div className="pl-[11.50px] pb-[5px] justify-end items-center inline-flex">
                        <div className="self-stretch justify-end items-center gap-[4.50px] inline-flex">
                            <div className="opacity-70 text-white text-[5px] font-medium font-['Poppins']">Floor Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[12.95px] h-[13px] left-[112.09px] top-[10.50px] absolute flex-col justify-start items-start inline-flex" />
    </div>
</div>
    </>
  );
}
