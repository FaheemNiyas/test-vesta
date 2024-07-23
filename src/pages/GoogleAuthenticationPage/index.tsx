import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";
import { useState } from "react";
import OtpInput from "@/components/molecules/OtpInput";
import { useVerifyGoogleAuth } from "@/services/auth.service";
import { useNavigate } from "react-router-dom";

const GoogleAuthenticationPage = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isCorrect, setCorrect] = useState<boolean | null>(null);
  const useVerifyGAuthMutation = useVerifyGoogleAuth();
  const navigate = useNavigate();
  const loginParam = new URLSearchParams(window.location.search).get("login");

  const handleSubmit = (pin: string) => {
    useVerifyGAuthMutation.mutate(
      { email: localStorage.getItem("email") || "", verificationCode: pin },
      {
        onSuccess: (res) => {
          console.log(res);
          setCorrect(true);

          if (loginParam === "true") {
            navigate("/");
          } else {
            navigate("/connect-wallet");
          }
        },
        onError: (error) => {
          console.log(error);
          setCorrect(false);
        },
      }
    );
  };

  const handleOtpChange = (value: string[]) => {
    setOtp(value);
    setCorrect(null);
    if (!value.includes("")) {
      handleSubmit(value.join(""));
    }
  };

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Scan QR code using an authenticator app"
        subtitle="Use your google authenticator"
      >
        <OptionalCard title="" isSkip={false} subTitle="" step={2}>
          {/* QR COde */}
          <img
            alt="img"
            className="w-[130px] h-[130px] bg-white"
            src={localStorage.getItem("googleAuth") || ""}
          />
          <div className="mt-4">
            <OtpInput
              value={otp}
              onChange={handleOtpChange}
              isCorrect={isCorrect}
            />
          </div>
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
          <div className="text-center md:text-[12px] text-[8px] text-[#FFFFFFB8]">
            Can’t scan?
            <br /> Click text below to copy the key into your google
            authenticator app: cydg38f7c4b46cry87eysxb6y8s7yb87dsxy87dxyxydx
          </div>
          <div className="w-full bg-[#223F6C] p-3 md:p-7 rounded-3xl">
            <div className="flex flex-row items-center justify-center">
              <div className="w-1/5">
                <img alt="img" className="w-10 h-10 bg-white" />
              </div>
              <div className="flex flex-col w-auto gap-2 px-3 md:gap-5">
                <div className="md:text-[15px] text-[8px] text-[#FFFFFFB8]">
                  Losing authentication method without exporting your private
                  keys will result in account access loss
                </div>
              </div>
            </div>
          </div>
        </OptionalCard>
      </AuthLayout>
    </div>
  );
};

export default GoogleAuthenticationPage;
