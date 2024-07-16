import React from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import AuthForm from "../../../components/organisms/AuthForm";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative h-min-screen pt-30">
        <AuthLayout
          title="Let’s get started"
          subtitle="Create your account to start investing today"
        >
          <AuthForm
            title="Create your account"
            buttonText="Login"
            subTitle="Signing up will create new account using this email"
            isLogin={false}
            onSubtitleButtonTwoClick={() => navigate("/referral")}
          />
        </AuthLayout>
      </div>
    </>
  );
};

export default Profile;
