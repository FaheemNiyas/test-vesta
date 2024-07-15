import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import AuthForm from "@/components/organisms/AuthForm";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Welcome Back"
        subtitle="Sign in & check out what you miss out in the platform!"
      >
        <AuthForm
          title="Sign In To Your Account"
          buttonText="Login"
          subTitle="Already registered?"
          subTitleButton="Register here"
          subTitleButtonTwo="Connect Wallet"
          onSubtitleButtonClick={() => navigate("/sign-up")}
          onSubtitleButtonTwoClick={() => navigate("/sign-up")}
          isLogin={true}
        />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
