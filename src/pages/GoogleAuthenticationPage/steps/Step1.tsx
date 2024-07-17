import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { useState } from "react";
import InputField from "@/components/atoms/InputField";

import { StepProps } from "@/types";
import Button from "@/components/atoms/Button";
import { useForgotPassword } from "@/services/auth.service";
import { useToast } from "@/providers/ToastProvider";

type IFormInput = {
  email: string;
};

const Step1 = ({ onNext }: StepProps) => {
  const forgotPasswordMutation = useForgotPassword();
  const { control, handleSubmit, formState } = useForm<IFormInput>({});
  const [loading, setLoading] = useState(false);

  const { success, error } = useToast();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);

    forgotPasswordMutation.mutate(data, {
      onSuccess: () => {
        success("Email sent successfully");
        setLoading(false);

        onNext();
      },
      onError: (err: any) => {
        error("Failed");
        console.error("Error:", err);
        setLoading(false);
      },
    });
  };

  return (
    <div className="flex items-center justify-center w-full p-4 ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col gap-6 mt-6">
          <Controller
            name="email"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <InputField
                label="Email address"
                type="text"
                placeholder="Email address"
                id="emailInput"
                inputProps={field}
                error={formState.errors.email ? "Email address" : ""}
              />
            )}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 mt-6">
          <Button
            text={loading ? "Loading..." : "Send verification code"}
            width="w-full"
            type="button"
            bgColor={"bg-primary"}
            variant="custom"
          />
          <Button
            text={"Skip for now"}
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

export default Step1;
