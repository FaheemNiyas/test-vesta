import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import AuthForm from "@/components/organisms/AuthForm";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Let’s get started"
        subtitle="Create your account to start investing today"
      >
        <AuthForm
          title="Create your account"
          buttonText="Login"
          subTitle="Already registered?"
          subTitleButton="Login Here"
          subTitleButtonTwo="Connect Wallet"
          onSubtitleButtonClick={() => navigate("/login")}
          onSubtitleButtonTwoClick={() => navigate("/sign-up")}
          isLogin={false}
        />
      </AuthLayout>
    </div>
  );
};

export default SignupPage;
