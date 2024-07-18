import React, { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import AuthForm from "@/components/organisms/AuthForm";
import { useNavigate } from "react-router-dom";
import InputField from "@/components/atoms/InputField";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Handle login logic
    setLoading(false);
  };

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Welcome Back"
        subtitle="Sign in & check out what you miss out in the platform!"
      >
        <AuthForm
          title="Sign In To Your Account"
          subTitle="Already registered?"
          subTitleButton="Register here"
          subTitleButtonTwo="Connect Wallet"
          onSubtitleButtonClick={() => navigate("/sign-up")}
          onSubtitleButtonTwoClick={() => navigate("/sign-up")}
          isLogin={true}
          showSocialLogin={true}
          formFields={
            <>
              <InputField
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                label={""}
                id={""}
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                label={""}
                id={""}
              />
            </>
          }
          onSubmit={handleFormSubmit}
          loading={loading}
          additionalLinks={
            <button
              onClick={() => navigate("/forgot-password")}
              className="flex items-center justify-center pt-4 text-xs font-medium underline text-primary sm:text-sm"
            >
              Forgot password?
            </button>
          }
        />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
