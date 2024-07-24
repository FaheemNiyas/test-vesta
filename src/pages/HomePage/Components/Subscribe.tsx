import React from "react";

export default function Subscribe() {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center md:pb-40 pb-20">
      <div className="headline-gradient-1 leading-normal text-2xl md:text-[55px] font-medium font-['Inter']">
        Get More Updates
      </div>
      <div className="text-white text-sm text-center md:text-xl font-normal font-['Inter'] md:px-0 px-10">
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks{" "}
      </div>

      <div className="w-full h-[50px] flex-col justify-center items-center gap-2.5 flex">
        <div className="md:w-[609.15px] w-[335px] h-[50px] relative">
          <div className="flex flex-row justify-end items-center  md:h-[50px] bg-slate-800 rounded-[116.73px] border border-white backdrop-blur-[11.67px] p-1">
            <input placeholder={"Input Your Email..."} className="w-full h-full rounded-[116.73px] px-5 bg-transparent text-zinc-500 text-[10px] md:text-lg font-normal font-['Inter'] py-2"/>
            <button className="md:w-[171px] md:h-11 px-5 md:px-[57.54px] py-[5px] md:py-[15.69px] bg-[#05f691] rounded-[101.51px] justify-center items-center gap-[10.46px] flex">
              <div className="text-center text-slate-800 text-[11px] md:text-xl font-medium md:font-semibold font-['Poppins']">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
