// src/pages/Authentication/UserCompliance.tsx
// This page ensures that users comply with necessary regulations and requirements.

import Button from "@/components/atoms/Button";
import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";
import { useToast } from "@/providers/ToastProvider";
import { useUserUpdate } from "@/services/auth.service";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserCompliance = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const useUserUpdateMutation = useUserUpdate();
  const { success, error } = useToast();

  const onSubmit = () => {
    if (checked) {
      useUserUpdateMutation.mutate(
        {
          email: localStorage.getItem("email") || "",
          termsAndConditions: true,
        },
        {
          onSuccess: () => {
            success("User registration fully completed");
            navigate("/");
          },
          onError: (e) => {
            error(e.message || "Failed to complete registration");
            console.error(e);
          },
        }
      );
    }
  };

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
              onChange={(e) => {
                console.log("e target:::", e.target.checked);
                console.log("e:::", e);
                setChecked(e.target.checked);
              }}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 md:text-[12px] text-[8px] font-medium text-gray-900 dark:text-gray-300 "
            >
              By connecting your wallet and using Vesta, you agree to our Term
              of service and Privacy Policy on our platform
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
            onClick={onSubmit}
          />
        </OptionalCard>
      </AuthLayout>
    </div>
  );
};

export default UserCompliance;
