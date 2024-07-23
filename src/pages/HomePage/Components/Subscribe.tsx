import React from "react";

export default function Subscribe() {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center pb-40">
      <div className="headline-gradient-1 text-[55px] font-medium font-['Inter']">
        Get More Updates
      </div>
      <div className="text-white text-xl font-normal font-['Inter']">
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks{" "}
      </div>

      <div className="w-[609.15px] h-[50px] flex-col justify-start items-start gap-2.5 flex">
        <div className="w-[609.15px] h-[50px] relative">
          <div className="flex flex-row justify-end items-center max-w-[609.15px] h-[50px] bg-slate-800 rounded-[116.73px] border border-white backdrop-blur-[11.67px]">
            <input placeholder={"Input Your Email..."} className="w-full h-full rounded-[116.73px] px-5 bg-transparent text-zinc-500 text-lg font-normal font-['Inter']"/>
            <div className="w-[171px] h-11 px-[57.54px] py-[15.69px] bg-emerald-400 rounded-[101.51px] justify-center items-center gap-[10.46px] flex">
              <div className="text-center text-slate-800 text-xl font-semibold font-['Poppins']">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
