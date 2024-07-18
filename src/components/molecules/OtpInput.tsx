import { ChangeEvent, KeyboardEvent, useRef, useState, useEffect } from "react";

interface OtpInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  isCorrect: boolean | null;
}

const OtpInput = ({ value, onChange, isCorrect }: OtpInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(value);

  useEffect(() => {
    setOtp(value);
  }, [value]);

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (/^\d*$/.test(newValue)) {
        const newOtp = [...otp];
        newOtp[index] = newValue;
        setOtp(newOtp);
        onChange(newOtp);

        // Move focus to next input if current input has a value
        if (newValue && index < 5) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    };

  const handleKeyDown =
    (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && otp[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      }
    };

  return (
    <div className="flex justify-center py-4 mb-4 space-x-2">
      {otp.map((digit, index) => (
        <div key={index} className="flex flex-col items-center">
          <label htmlFor={`otp-input-${index}`} className="sr-only">
            {`Digit ${index + 1}`}
          </label>
          <input
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            onChange={handleChange(index)}
            onKeyDown={handleKeyDown(index)}
            className={`w-12 h-12 text-lg text-center border rounded-md shadow-sm focus:outline-none ${
              !otp.includes("") && isCorrect === true
                ? "border-[#05F691] text-[#05F691]"
                : !otp.includes("") && isCorrect === false
                ? "border-[#FF3737] text-[#FF3737]"
                : "border-gray-300"
            }`}
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
            placeholder="-"
            title={`Digit ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default OtpInput;
