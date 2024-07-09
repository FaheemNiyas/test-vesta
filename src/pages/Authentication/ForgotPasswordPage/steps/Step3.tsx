import { useState } from "react";
import InputField from "@/components/atoms/InputField";

import { Controller, useForm } from "react-hook-form";
import { useToast } from "@/providers/ToastProvider";
import { StepProps } from "@/types";
import { useResetPassword } from "@/services/auth.service";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "@/components/atoms/Button";
import { passwordValidation } from "@/components/hoc/auth/passwordValidation";

type IFormInput = {
  password: string;
  confirmPassword: string;
};

const Step3 = ({ onNext }: StepProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const { success, error } = useToast();
  const navigate = useNavigate();
  const resetPasswordMutation = useResetPassword();
  const { control, handleSubmit, formState } = useForm<IFormInput>();
  const [validate, setValidate] = useState({ msg: "", color: "red" });

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    const data = passwordValidation(newPassword);
    setValidate(data);
  };

  const onSubmit = (data: IFormInput) => {
    console.log("Form data:", data);
    if (!token) {
      error("Reset Token is missing.");
      return;
    }

    if (
      validate.msg === "strong" ||
      validate.msg === "medium" ||
      validate.msg === "weak"
    ) {
      resetPasswordMutation.mutate(
        {
          token,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
        {
          onSuccess: () => {
            success("Password Reset Successfully");
            console.log("Password reset successfully");
            navigate("/auth", { replace: true });
          },
          onError: (err) => {
            error("Failed");
            console.error("Error:", err);
          },
        }
      );
    } else {
      error("Your password very weak!");
    }
  };

  return (
    <div className="flex items-center justify-center w-full p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col gap-6 mt-6">
          <Controller
            name="password"
            rules={{ required: true }}
            control={control}
            render={({ field }: any) => (
              <InputField
                label="New Password"
                type="password"
                placeholder="Type Here"
                id="passwordInput"
                inputProps={{
                  ...field,
                  onChange: (e: any) => {
                    field.onChange(e);
                    handlePasswordChange(e);
                  },
                }}
                error={formState.errors.password ? "Password" : ""}
              />
            )}
          />
          {validate.msg.length !== 0 && validate?.color === "red" && (
            <span className="ml-2 text-sm font-medium text-red-500 text-opacity-70 font-Inter">
              {"password is " + validate?.msg}
            </span>
          )}
          {validate.msg.length !== 0 && validate?.color === "yellow" && (
            <span className="ml-2 text-sm font-medium text-yellow-500 text-opacity-70 font-Inter">
              {"password is " + validate?.msg}
            </span>
          )}
          {validate.msg.length !== 0 && validate?.color === "green" && (
            <span className="ml-2 text-sm font-medium text-green-500 text-opacity-70 font-Inter">
              {"password is " + validate?.msg}
            </span>
          )}
          <Controller
            name="confirmPassword"
            rules={{ required: true }}
            control={control}
            render={({ field }: any) => (
              <InputField
                label="Confirm New Password"
                type="password"
                placeholder="Confirm Password"
                id="confirmPasswordInput"
                inputProps={field}
                error={
                  formState.errors.confirmPassword ? "Confirm Password" : ""
                }
              />
            )}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 mt-6">
          <Button
            text="Submit"
            width="w-full"
            type="submit"
            bgColor="bg-primary"
            variant="custom"
          />
          <Button
            text={"I didn’t receive a message"}
            width="w-full"
            type="button"
            bgColor={"bg-[#0A0013]"}
            variant="custom"
          />
          <Button
            text={"Test3"}
            width="w-full"
            type="button"
            bgColor={"bg-[#0A0013]"}
            variant="custom"
            onClick={() => {
              onNext();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Step3;
