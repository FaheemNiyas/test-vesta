import React from "react";

export default function LiveAuctionCard() {
  return (
    <>
      <div className="w-[333px] h-[485px] p-5 bg-[#ffffff14] rounded-[20px] shadow border border-[#ffffff1a] backdrop-blur-[15px] flex-col justify-center items-center gap-5 md:flex hidden">
        <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-5 flex">
          <div className=" justify-between items-start flex-row w-full  flex">
            <div className="w-fit flex-col justify-center items-start gap-[4.14px] flex">
              <div className=" text-white text-sm font-medium font-['Poppins'] leading-tight">
                Current bid
              </div>
              <div className="justify-start items-center gap-[4.14px] flex">
                <img
                  src="/assets/ethereum.png"
                  className="w-[16.57px] h-[16.57px] relative"
                />
                <div className="text-right text-[#05f691] text-base font-semibold font-['Poppins'] leading-[24.86px]">
                  3.2 ETH
                </div>
              </div>
            </div>
            <button className="px-[20.72px] py-[8.29px] bg-[#05f691] rounded-[20.72px] flex-col justify-center items-center gap-[10.36px] flex">
              <div className="text-slate-800 text-base font-semibold font-['Inter'] leading-[24.86px]">
                Place bid
              </div>
            </button>
          </div>
          <img
            className="self-stretch grow shrink basis-0 rounded-[15px]"
            src="/assets/live-auction-demo.png"
          />
          <div className="justify-center items-center gap-[50px] flex">
            <div className="h-[52px] justify-start items-center gap-5 flex">
              <div className="w-[147px] flex-col justify-center items-start gap-[5px] flex">
                <div className="flex-col justify-center items-start gap-[5px] flex">
                  <div className="text-white text-sm font-semibold font-['Poppins']">
                    Luxury Homes #23
                  </div>
                  <div className="pr-[11px] justify-start items-center flex">
                    <div className="self-stretch justify-start items-center gap-[9px] flex">
                      <img
                        className="w-[26px] h-[26px] rounded-[100px] border border-white"
                        src="/assets/user-icon-demo.png"
                      />
                      <div className="opacity-70 text-white text-[13px] font-medium font-['Poppins']">
                        Creators Name
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-end gap-[5px] flex">
              <div className="text-right text-[#05f691] text-sm font-medium font-['Poppins']">
                156 Offer
              </div>
              <div className="justify-start items-start flex">
                <img
                  className="w-[33.15px] h-[33.15px] rounded-full border border-[#05f691] !mr-[-10px]"
                  src="/assets/user-icon-demo.png"
                />
                <img
                  className="w-[33.15px] h-[34.22px] rounded-full shadow border border-[#05f691] !mr-[-10px]"
                  src="/assets/user-icon-demo.png"
                />
                <img
                  className="w-[33.15px] h-[33.15px] rounded-full shadow border border-[#05f691] !mr-[-10px]"
                  src="/assets/user-icon-demo.png"
                />
                <img
                  className="w-[33.15px] h-[33.15px] rounded-full shadow border border-[#05f691] !mr-[-10px]"
                  src="/assets/user-icon-demo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[200px] h-[310px] p-3 bg-[#ffffff15] rounded-[10px] shadow border border-[#ffffff57] backdrop-blur-[7.50px] flex-col justify-center items-center gap-3 flex md:hidden">
        <div className="self-stretch justify-start items-start gap-2 flex">
          <div className="grow shrink basis-0 flex-col justify-center items-start flex">
            <div className="text-white text-xs font-medium font-['Inter'] leading-tight">
              Current bid
            </div>
            <div className="justify-start items-center gap-0.5 flex">
              <img  src="/assets/ethereum.png" className="w-4 h-4 relative" />
              <div className="text-right text-[#05f691] text-sm font-semibold font-['Inter']">
                3.2 ETH
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-[106px] rounded-lg"
          src="/assets/live-auction-demo.png"
        />
        <div className="self-stretch h-[79px] flex-col justify-center items-center flex">
          <div className="self-stretch justify-start items-center gap-2.5 flex">
            <div className="flex-col justify-center items-start gap-0.5 flex">
              <div className="text-white text-xs font-medium font-['Inter'] leading-tight">
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
          <div className="self-stretch h-[41px] flex-col justify-center items-end gap-[5px] flex">
            <div className="text-right text-[#05f691] text-[9px] font-medium font-['Inter'] leading-none tracking-tight">
              156 Offer
            </div>
            <div className="justify-start items-start flex">
              <img
                className="w-5 h-5 rounded-full border border-[#05f691] !mr-[-5px]"
                src="/assets/user-icon-demo.png"
              />
              <img
                className="w-5 h-5 rounded-full shadow border border-[#05f691] !mr-[-5px]"
                src="/assets/user-icon-demo.png"
              />
              <img
                className="w-5 h-5 rounded-full shadow border border-[#05f691] !mr-[-5px]"
                src="/assets/user-icon-demo.png"
              />
              <img
                className="w-5 h-5 rounded-full shadow border border-[#05f691] !mr-[-5px]"
                src="/assets/user-icon-demo.png"
              />
            </div>
          </div>
        </div>
        <button className="self-stretch h-7 px-[20.72px] py-1 bg-[#05f691] rounded-[20.72px] flex-col justify-center items-center gap-[10.36px] flex">
          <div className="text-[#152743] text-xs font-medium font-['Inter'] leading-tight">
            Place bid
          </div>
        </button>
      </div>
    </>
  );
}
