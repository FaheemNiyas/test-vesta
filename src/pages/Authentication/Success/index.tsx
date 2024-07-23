import Button from "@/components/atoms/Button";
import { SuccessIcon } from "@/constants";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen pt-30">
      <AuthLayout title="" subtitle="">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full w-full sm:w-[580px] bg-[#1C355D]/80 rounded-2xl shadow border border-[#FFFFFF4D] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <div className="flex flex-col items-center gap-8 mb-4">
              <img
                alt="Vesta Rounded Logo"
                src={SuccessIcon}
                className="w-20 h-20 bg-white rounded-full"
              />
              <div className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins']">
                Account Creation Success
              </div>
            </div>

            <Button
              className="mt-8 bg-white !text-black rounded-full md:py-2 md:text-[16px] text-[14px] font-semibold"
              text="Welcome To Vesta"
              type="button"
              fullWidth
              variant="custom"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Success;
