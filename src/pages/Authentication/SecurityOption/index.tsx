import React from "react";
import Button from "@/components/atoms/Button";
import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";

const SecurityOption: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Security Option"
        subtitle="Authentication method for your account login"
      >
        <OptionalCard
          title="Authentication Preference"
          isSkip={true}
          subTitle="Paste their referral link into the field below."
          step={2}
          onSkipNow={() => navigate("/connect-wallet")}
        >
          <div className="w-full bg-[#223F6C] p-3 md:p-7 rounded-3xl shadow-md">
            <div className="flex flex-row">
              <div className="w-1/6">
                <img alt="img" className="w-10 h-10 bg-white" />
              </div>
              <div className="flex flex-col w-auto gap-2 px-3 md:gap-5 ">
                <div className="md:text-[15px] text-[12px]">
                  Google Authenticator
                </div>
                <div className="text-[#FFFFFFB8] md:text-[12px] text-[8px]">
                  We recommend using Google Authenticator. Please download the
                  app from{" "}
                  <a className="text-[#05F691] underline">Google Play Store</a>{" "}
                  or <a className="text-[#05F691] underline">Apple App Store</a>{" "}
                  on your mobile device.
                </div>
              </div>
              <div className="flex flex-col justify-center w-1/6">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    aria-label="Toggle switch"
                  />
                  <div className="relative md:block hidden w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className="relative block md:hidden w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
          <Button
            className="mt-8 bg-white !text-black !rounded-full md:py-5 text-[16px] font-semibold "
            text="Continue"
            type="submit"
            fullWidth
            variant="custom"
            onClick={() => navigate("/google-authentication")}
          />
        </OptionalCard>
      </AuthLayout>
    </div>
  );
};

export default SecurityOption;
