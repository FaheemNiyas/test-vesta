import OTPInput from "@/components/atoms/OTPInput";
import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";
import { useState } from "react";

const GoogleAuthenticationPage = () => {
  const [isCorrect, setCorrect] = useState<boolean>(false);

  const handleSubmit = (pin: string) => {
    // handle api request here but I'm console logging it
    console.log(pin);
    setCorrect(pin === "000000");
  };
  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Scan QR code using an authenticator app"
        subtitle="Use your google authenticator"
      >
        <OptionalCard title="" isSkip={false} subTitle="" step={2}>
          <img alt="img" className="w-[130px] h-[130px] bg-white" />
          <OTPInput
            length={6}
            onComplete={handleSubmit}
            isCorrect={isCorrect}
          />

          <div className="text-center  md:text-[12px] text-[8px] text-[#FFFFFFB8]">
            Can’t scan?
            <br /> Click text below to copy the key into your google
            authenticator app : cydg38f7c4b46cry87eysxb6y8s7yb87dsxy87dxyxydx
          </div>
          <div className="w-full bg-[#223F6C] p-3 md:p-7 rounded-3xl">
            <div className="flex flex-row items-center justify-center">
              <div className="w-1/5">
                <img alt="img" className="w-10 h-10 bg-white" />
              </div>
              <div className="flex flex-col w-auto gap-2 px-3 md:gap-5 ">
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
