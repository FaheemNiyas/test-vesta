import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { useState } from "react";

import Button from "@/components/atoms/Button";
import InputField from "@/components/atoms/InputField";

type IFormInput = {
  code: string;
};

const Step1 = () => {
  const { control, handleSubmit, formState } = useForm<IFormInput>({});
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full p-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col gap-6 mt-6">
            <Controller
              name="code"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <InputField
                  label="Paste here:"
                  type="text"
                  placeholder="Code"
                  id="textInput"
                  inputProps={field}
                  error={formState.errors.code ? "Code" : ""}
                />
              )}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 mt-6">
            <Button
              text={loading ? "Loading..." : "SAVE"}
              width="w-full"
              type="submit"
              bgColor={"bg-primary"}
              variant="custom"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
