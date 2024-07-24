import React from "react";

export default function TrendingNFTCard() {
  return (
    <>
      {/* ----desktop---- */}
      <div className="md:flex hidden flex-col w-full justify-center items-center gap-2">
        <div className="w-[333px] h-[485px] p-5 bg-[#ffffff10] rounded-[20px] shadow border border-[#ffffff50] backdrop-blur-[15px] flex-col justify-center items-center gap-5 flex">
          <img
            className="self-stretch grow shrink basis-0 rounded-[15px]"
            src="/assets/trending-nft-1.png"
          />
          <div className="self-stretch justify-start items-center gap-5 flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] flex">
              <div className="self-stretch text-white text-[22px] font-semibold font-['Poppins']">
                Luxury Homes #23
              </div>
              <div className="justify-start items-center flex">
                <div className="flex-row w-full justify-start items-center gap-[9px] flex">
                  <img
                    className="w-[26px] h-[26px] rounded-[100px] border border-white"
                    src="/assets/user-icon-demo.png"
                  />
                  <div className="opacity-70 w-full text-white text-[13px] font-medium font-['Poppins']">
                    Creator Name
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-14 px-[3px] justify-center items-start gap-10 flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center flex">
              <div className="self-stretch grow shrink basis-0 text-white text-xl font-semibold font-['Poppins']">
                1.31 ETH
              </div>
              <div className="self-stretch grow shrink basis-0 text-white text-sm font-medium font-['Poppins']">
                Floor Price{" "}
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-end flex">
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-end flex">
                <div className="self-stretch grow shrink basis-0 justify-end items-start flex">
                  <div className="w-[104px] self-stretch text-right text-white text-xl font-semibold font-['Poppins']">
                    $220.000
                  </div>
                  <div className="w-[49px] text-right text-green-500 text-sm font-medium font-['Poppins']">
                    +5.6%
                  </div>
                </div>
                <div className="self-stretch text-right text-green-500 text-sm font-medium font-['Poppins']">
                  156 Holders
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-14 px-[3px] bg-[#ffffff35]  rounded-[10px] justify-center items-start gap-[30px] flex">
            <div className="w-[198px] self-stretch flex-col justify-center items-start flex">
              <div className="text-white text-sm font-medium font-['Poppins']">
                Annual Rental Return
              </div>
              <div className="text-white text-sm font-medium font-['Poppins']">
                Projected Value Growth
              </div>
            </div>
            <div className="w-[46px] self-stretch flex-col justify-center items-center flex">
              <div className="text-right text-white text-sm font-medium font-['Poppins']">
                11.4%
              </div>
              <div className="text-right text-white text-sm font-medium font-['Poppins']">
                15%
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------mobile---- */}
      <div className="h-[242.50px] p-2 bg-[#ffffff0f] rounded-[10px] shadow border border-white backdrop-blur-[7.50px] flex-col justify-center items-center gap-1.5 flex md:hidden">
        <img
          className="self-stretch h-[106px] rounded-lg"
          src="/assets/trending-nft-1.png"
        />
        <div className="self-stretch justify-start items-center gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-[2.50px] flex">
            <div className="self-stretch text-white text-xs font-medium font-['Inter'] leading-tight">
              Luxury Homes #23
            </div>
            <div className="justify-start items-center gap-[4.50px] flex">
              <img
                className="w-3.5 h-3.5 rounded-[50px] border border-white"
                src="/assets/user-icon-demo.png"
              />
              <div className="opacity-70 text-white text-[9px] font-light font-['Inter'] leading-none tracking-tight">
                Company Name
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[1.50px] justify-between items-center flex">
          <div className="flex-col justify-center items-start flex">
            <div className="text-white text-[10px] font-medium font-['Inter'] leading-none tracking-tight">
              1.31 ETH
            </div>
            <div className="text-white text-[9px] font-light font-['Inter'] leading-none tracking-tight">
              Floor Price{" "}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-end flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-end flex">
              <div className="grow shrink basis-0 justify-end items-start gap-1 flex">
                <div className="w-[52px] self-stretch text-right text-white text-[10px] font-medium font-['Inter'] leading-none tracking-tight">
                  $220.000
                </div>
                <div className="text-right text-[#23fe00] text-[9px] font-medium font-['Inter'] leading-none tracking-tight">
                  +5.6%
                </div>
              </div>
              <div className="text-right text-[#23fe00] text-[9px] font-light font-['Inter'] leading-none tracking-tight">
                156 Holders
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 bg-white/20 rounded-[5px] justify-center items-start gap-[15px] flex">
          <div className="flex-col justify-center items-start flex p-1">
            <div className="text-white text-[9px] font-medium font-['Inter'] leading-none tracking-tight">
              Annual Rental Return
            </div>
            <div className="text-white text-[9px] font-medium font-['Inter'] leading-none tracking-tight">
              Projected Value Growth
            </div>
          </div>
          <div className="flex-col justify-center items-center flex p-1">
            <div className="text-right text-white text-[9px] font-medium font-['Inter'] leading-none tracking-tight">
              11.4%
            </div>
            <div className="text-right text-white text-[9px] font-medium font-['Inter'] leading-none tracking-tight">
              15%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
