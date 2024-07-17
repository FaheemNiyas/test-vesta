import { VerificationStatusProps } from "@/types";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const VerificationStatus = ({
  imageSrc,
  imageAlt,
  secondaryTitle,
  secondaryText,
  buttonText,
  secondButtonText,
  onButtonClick,
  onSecondaryButtonClick,
}: VerificationStatusProps) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (/^\d*$/.test(value)) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to next input if current input has a value
        if (value && index < 5) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    };

  const handleKeyDown =
    (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && otp[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      }
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle OTP submission logic here
    console.log("OTP Submitted:", otp.join(""));
  };

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (/^\d{6}$/.test(text)) {
        const newOtp = text.split("");
        setOtp(newOtp);
        newOtp.forEach((digit, index) => {
          if (inputRefs.current[index]) {
            inputRefs.current[index]!.value = digit;
          }
        });
      } else {
        alert("Clipboard does not contain a valid 6-digit OTP");
      }
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
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
      {buttonText && (
        <button
          className="w-11/12 h-12 px-4 py-2.5 bg-stone-400 bg-opacity-10 rounded-xl flex justify-center items-center"
          onClick={onButtonClick}
        >
          <span className="text-base font-medium leading-7 text-center text-stone-200 font-Inter">
            {buttonText}
          </span>
        </button>
      )}

      {secondButtonText && (
        <button
          className="flex items-center justify-center w-11/12 h-12 px-4 py-2 bg-stone-400 bg-opacity-10 rounded-xl"
          onClick={onSecondaryButtonClick}
        >
          <span className="text-base font-medium leading-7 text-center text-stone-200 font-Inter">
            {secondButtonText}
          </span>
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-4 space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={handleChange(index)}
              onKeyDown={handleKeyDown(index)}
              className="w-12 h-12 text-lg text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              maxLength={1}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={handlePasteFromClipboard}
          className="w-full px-4 py-2 mb-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Paste from Clipboard
        </button>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VerificationStatus;
