import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import OtpInput from "@/components/molecules/OtpInput";
import { VerificationStatusProps } from "@/types";
import { FormEvent } from "react";
import { VestaRoundedLogo } from "@/constants";
import { useVerifyUser, useEmail2FAVerifyCode } from "@/services/auth.service";
import { useToast } from "@/providers/ToastProvider";
import { useNavigate } from "react-router-dom";

const VerificationStatus = ({
  secondaryTitle,
  secondaryText,
}: VerificationStatusProps) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState<number>(154); // 2 minutes and 34 seconds
  const [loading, setLoading] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const verifyUserMutation = useVerifyUser();
  const { success, error } = useToast();
  const emailVerifyCodeMutation = useEmail2FAVerifyCode();
  const navigate = useNavigate();

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpassword = (await handlePasteFromClipboard()) as string[];

    verifyUserMutation.mutate(
      {
        code: otpassword?.join("") || "",
        email: localStorage.getItem("email") || "",
      },
      {
        onSuccess: (res) => {
          success("Email verified successfully");
          console.log("res", res);
          localStorage.getItem("jwt") && localStorage.removeItem("jwt");
          localStorage.setItem("jwt", res.data.data.jwt);
          setLoading(false);
          navigate("/profile");
        },
        onError: (err) => {
          error("Failed");
          console.error("Error:", err);
          setLoading(false);
        },
      }
    );
  };

  const handlePasteFromClipboard = () => {
    return new Promise((resolve, reject) => {
      navigator.clipboard
        .readText()
        .then((text) => {
          if (/^[0-9a-zA-Z]{6}$/.test(text)) {
            const newOtp = text.split("");
            setOtp(newOtp);
            resolve(newOtp);
          } else {
            alert("Clipboard does not contain a valid 6-digit OTP");
            reject();
          }
        })
        .catch((err) => {
          console.error("Failed to read clipboard contents: ", err);
          reject();
        });
    });
  };

  const handleResendCode = () => {
    const email = localStorage.getItem("email") || "";
    emailVerifyCodeMutation.mutate(
      { email, isSignup: false },
      {
        onSuccess: () => {
          success("Email sent successfully");
          setLoading(false);
        },
        onError: (err) => {
          error("Failed");
          console.error("Error:", err);
          setLoading(false);
        },
      }
    );
    setTimer(154); // Reset the timer
  };

  return (
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full w-full sm:w-[480px] bg-[#1C355D]/80 rounded-2xl shadow border border-[#FFFFFF4D] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
      <div className="flex items-center justify-center space-x-4">
        <img
          alt="VestaRoundedLogo"
          src={VestaRoundedLogo}
          className="w-20 h-20 bg-white rounded-full"
        />
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
          type="submit"
          bgColor={"bg-white"}
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
