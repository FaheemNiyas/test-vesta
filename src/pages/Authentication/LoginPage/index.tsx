import React from 'react';
import AuthLayout from '@/layouts/AuthLayout';
import AuthForm from '@/components/organisms/AuthForm';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Login"
        subtitle="Create your account to start investing today"
      >
        <AuthForm
          title="Login to your account"
          buttonText="Login"
          subTitle="Already have an account?"
          subTitleButton="Sign in here"
          onSubtitleButtonClick={() => navigate('/sign-up')}
          isLogin={true}
        />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
