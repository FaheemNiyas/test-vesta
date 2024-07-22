import React, { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/organisms/AuthForm";
import InputField from "@/components/atoms/InputField";
import { useEmail2FAVerifyCode } from "@/services/auth.service";
import { useToast } from "@/providers/ToastProvider";

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailVerifyCodeMutation = useEmail2FAVerifyCode();
  const navigate = useNavigate();
  const { success } = useToast();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setLoading(true);

      emailVerifyCodeMutation.mutate(
        { email, isSignup: true },
        {
          onSuccess: () => {
            success("Email sent successfully");
            localStorage.setItem("email", email);
            setLoading(false);
            navigate("/email-verification", { state: { email } });
          },
          onError: (err) => {
            setError("Failed");
            console.error("Error:", err);
            setLoading(false);
          },
        }
      );
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
          onSubtitleButtonTwoClick={() => navigate("/connect-wallet")}
          isLogin={false}
          isSubmit={false}
          showSocialLogin={true}
          formFields={
            <>
              <InputField
                type="register-email"
                name="register-email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                required
                label=""
                id=""
                onSubmit={handleEmailSubmit}
              />
            </>
          }
          onSubmit={handleEmailSubmit}
          loading={loading}
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
