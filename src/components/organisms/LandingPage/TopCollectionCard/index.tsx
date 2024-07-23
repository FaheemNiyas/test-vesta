import React from "react";

export default function TopCollectionCard() {
  return (
    <div className="w-[260px] h-[436px] p-5 bg-white/opacity-5 rounded-[20px] shadow border border-white/opacity-30 backdrop-blur-[15px] flex-col justify-center items-center gap-5 flex">
      <img
        className="self-stretch h-[156px] rounded-[15px]"
        src="/assets/top-collection-demo.png"
      />
      <div className="self-stretch justify-start items-center gap-5 flex">
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] flex">
          <div className="self-stretch text-white text-base font-semibold font-['Poppins']">
            Luxury Homes #23
          </div>
          <div className=" justify-start items-center flex">
            <div className="self-stretch justify-start items-center gap-[9px] flex">
              <img
                className="w-[26px] h-[26px] rounded-[100px] border border-white"
                src="/assets/user-icon-demo.png"
              />
              <div className="opacity-70 text-white text-[13px] font-medium font-['Poppins']">
                Company Name
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className=" px-[3px] w-full justify-between items-start gap-5 flex flex-row">
          <div className=" text-white text-xl font-semibold font-['Poppins']">
            1.31 ETH
          </div>
          <div className="w-[104px] self-stretch text-right text-white text-xl font-semibold font-['Poppins']">
            $220.000
          </div>
        </div>
        <div className=" px-[3px] justify-between w-full items-start gap-10 flex flex-row">
          <div className=" text-white text-sm font-medium font-['Poppins']">
            Floor Price{" "}
          </div>
          <div className="self-stretch text-right text-green-500 text-sm font-medium font-['Poppins']">
            +5.6%
          </div>
        </div>
      </div>
      <div className="self-stretch h-14 px-[3px] bg-[#ffffff2c] rounded-[10px] justify-center items-start gap-1 flex">
        <div className="w-[158px] self-stretch flex-col justify-center items-start flex">
          <div className="text-white text-[11px] font-medium font-['Poppins']">
            Annual Rental Return
          </div>
          <div className="text-white text-[11px] font-medium font-['Poppins']">
            Projected Value Growth
          </div>
        </div>
        <div className="w-[46px] self-stretch flex-col justify-center items-end flex">
          <div className="text-right text-white text-[11px] font-medium font-['Poppins']">
            11.4%
          </div>
          <div className="text-right text-white text-[11px] font-medium font-['Poppins']">
            15%
          </div>
        </div>
      </div>
    </div>
  );
}
