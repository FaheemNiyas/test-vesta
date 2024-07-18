import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import OtpInput from "@/components/molecules/OtpInput";
import { VerificationStatusProps } from "@/types";
import { FormEvent } from "react";

const VerificationStatus = ({
  imageSrc,
  imageAlt,
  secondaryTitle,
  secondaryText,
}: VerificationStatusProps) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState<number>(154); // 2 minutes and 34 seconds
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock validation for OTP
    const correctOtp = "123456";
    setIsCorrect(otp.join("") === correctOtp);
    console.log("OTP Submitted:", otp.join(""));
  };

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (/^\d{6}$/.test(text)) {
        const newOtp = text.split("");
        setOtp(newOtp);
      } else {
        alert("Clipboard does not contain a valid 6-digit OTP");
      }
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleResendCode = () => {
    // Handle resend code logic here
    console.log("Resend Code Clicked");
    setTimer(154); // Reset the timer
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm p-8 space-y-8 border shadow bg-gradient-to-br from-slate-800/40 to-stone-300/30 rounded-2xl border-primary">
      <div className="flex items-center justify-center space-x-4">
        <div className="relative w-32 h-32 bg-white border border-white rounded-full md:w-32 md:h-32 bg-opacity-5 border-opacity-20">
          <img
            alt={imageAlt}
            className="absolute w-1/2 h-1/2 top-1/4 left-1/4"
            src={imageSrc}
          />
        </div>
      </div>
      <div className="space-y-4 text-center text-white">
        <h2 className="text-lg md:text-lg lg:text-lg font-semibold font-['Poppins']">
          {secondaryTitle}
        </h2>
        {secondaryText && (
          <p className="text-sm font-light leading-normal md:text-sm lg:text-xs font-Inter text-opacity-70">
            {secondaryText}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <OtpInput value={otp} onChange={setOtp} isCorrect={isCorrect} />

        {!otp.includes("") && isCorrect === false && (
          <div className="flex flex-row text-[12px] items-center justify-start gap-2 text-[#FF3737] w-full !mt-2">
            <img
              alt="Error"
              className="w-[20px] h-[20px] bg-[#FF3737] rounded-full"
            />
            Wrong code, try again!
          </div>
        )}
        {!otp.includes("") && isCorrect === true && (
          <div className="flex flex-row text-[12px] items-center justify-start gap-2 text-[#05F691] w-full !mt-2">
            <img
              alt="Success"
              className="w-[20px] h-[20px] bg-[#05F691] rounded-full"
            />
            The code is right
          </div>
        )}

        <Button
          text={"Paste from Clipboard"}
          width="w-full"
          type="button"
          bgColor={"bg-white"}
          onClick={handlePasteFromClipboard}
          variant="custom"
          textColor="text-black"
          className="rounded-3xl"
        />

        <div className="mt-4 text-center text-white">
          <span>
            Expires in {formatTime(timer)}
            <span
              className="pl-2 cursor-pointer text-primary"
              onClick={handleResendCode}
            >
              Resend Code
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default VerificationStatus;
