import React, { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import Button from "@/components/atoms/Button";
import InputField from "@/components/InputField";

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      navigate("/profile", { state: { email } });
    } else {
      setError("Invalid email address");
    }
  };

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Let’s get started"
        subtitle="Create your account to start investing today"
      >
        <div className="flex justify-center">
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full w-full sm:w-[480px] bg-[#1C355D]/80 rounded-2xl shadow border border-[#FFFFFF4D] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <form className="w-full mt-4 sm:mt-6" onSubmit={handleEmailSubmit}>
              <div className="flex flex-col gap-2">
                <InputField
                  contentClass={""}
                  type="email"
                  name="email"
                  placeholder="Email address"
                  label={""}
                  id={""}
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              {error && (
                <span className="ml-2 text-sm font-medium text-red-500">
                  {error}
                </span>
              )}
              <Button
                className="mt-8 rounded-3xl"
                text="Continue"
                type="submit"
                fullWidth
                variant="primary"
              />
            </form>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default SignupPage;
