import React, { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/organisms/AuthForm";
import InputField from "@/components/atoms/InputField";

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
      navigate("/email-verification", { state: { email } });
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
        <AuthForm
          title="Create your account"
          subTitle="Already registered?"
          subTitleButton="Login Here"
          subTitleButtonTwo="Connect Wallet"
          onSubtitleButtonClick={() => navigate("/login")}
          onSubtitleButtonTwoClick={() => {}}
          isLogin={false}
          showSocialLogin={true}
          formFields={
            <>
              <InputField
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                required
                label={""}
                id={""}
              />
            </>
          }
          onSubmit={handleEmailSubmit}
          loading={false}
          additionalLinks={
            error && (
              <span className="ml-2 text-sm font-medium text-red-500">
                {error}
              </span>
            )
          }
        />
      </AuthLayout>
    </div>
  );
};

export default SignupPage;
