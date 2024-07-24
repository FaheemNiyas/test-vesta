import React from "react";

export default function ProviderCard({image}: {image:string}) {
  return (
    <div
      className={
        "md:h-[100px] md:w-full h-[50px] w-[100px] justify-center items-center flex flex-col"
      }
    >
      <img
        src={image}
        className={
          "object-contain md:h-[100px] md:w-[200px] h-[50px] w-[150px] justify-center items-center"
        }
        alt={"logos"}
      />
    </div>
  );
}
