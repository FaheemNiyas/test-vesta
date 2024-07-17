import Button from "@/components/atoms/Button";
import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserCompliance = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout title="" subtitle="">
        <OptionalCard
          title="User Compliance"
          isSkip={false}
          subTitle=""
          step={3}
          isSteps={false}
        >
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 md:text-[12px] text-[8px] font-medium text-gray-900 dark:text-gray-300 "
            >
              By connecting your wallet and using Vesta, you agree to our Term
              of service and Pririvacy Policy on our platform
            </label>
          </div>
          <Button
            className="mt-8 bg-transparent border border-[#FFFFFF66] !text-white !rounded-full md:py-2 md:text-[16px] text-[14px] font-semibold "
            text="Cancel"
            type="submit"
            fullWidth
            variant="custom"
          />
          <Button
            className="mt-8 bg-white !text-black !rounded-full md:py-2 md:text-[16px] text-[14px] font-semibold "
            text="Agree & Sign Up"
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

export default UserCompliance;
