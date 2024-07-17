import React, { useRef, useState } from "react";

type InputProps = {
  length?: number;
  isCorrect: boolean;
  onComplete: (pin: string) => void;
};

const OTPInput = ({ isCorrect, length = 4, onComplete }: InputProps) => {
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
    }
  };

  return (
    <>
      <div className={`grid grid-cols-6 gap-5`}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={OTP[index]}
            onChange={(e) => handleTextChange(e.target.value, index)}
            ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
            className={`border border-solid border-[#FFFFFF33] ${!OTP.includes("") && isCorrect && "border-[#05F691] text-[#05F691]"} ${!OTP.includes("") && !isCorrect && "border-[#FF3737] text-[#FF3737]"} bg-[#152743] md:rounded-xl rounded-md border-border-slate-500 text-center md:p-5 min-w-10 min-h-14 text-[24px]  outline-none`}
          />
        ))}
      </div>
      {!OTP.includes("") && !isCorrect && <div className="flex flex-row text-[12px] items-center justify-start gap-2 text-[#FF3737] w-full !mt-2">
        {" "}
        <img className="w-[20px] h-[20px] bg-[#FF3737] rounded-full " />
        Wrong code, try again !
      </div>}
      {!OTP.includes("") && isCorrect && <div className="flex flex-row text-[12px] items-center justify-start gap-2 text-[#05F691] w-full !mt-2">
        {" "}
        <img className="w-[20px] h-[20px] bg-[#05F691] rounded-full " />
        The code is right
      </div>}
    </>
  );
};

export default OTPInput;
