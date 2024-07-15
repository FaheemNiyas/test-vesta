import React from "react";
import { AuthFormProps } from "@/types";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SocialLogin from "../SocialLogin";

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subTitle,
  subTitleButton,
  subTitleButtonTwo,
  onSubtitleButtonClick,
  onSubtitleButtonTwoClick,
  isLogin,
}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full w-full sm:w-[480px] bg-gradient-to-br from-slate-800/40 to-stone-300/30 rounded-2xl shadow border border-primary flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <div className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins']">
          {title}
        </div>
        <div className="flex items-center justify-center row-span-2 mt-2">
          <span className="text-xs font-medium text-white text-opacity-70 sm:text-sm font-Inter">
            {subTitle}
          </span>
          <button
            onClick={onSubtitleButtonClick}
            className="ml-2 text-xs font-medium underline sm:text-sm font-Inter text-primary"
          >
            {subTitleButton}
          </button>
          <div className="px-2">or</div>
          <button
            onClick={onSubtitleButtonTwoClick}
            className="text-xs font-medium underline sm:text-sm font-Inter text-primary"
          >
            {subTitleButtonTwo}
          </button>
        </div>

        <SocialLogin />

        <div className="flex flex-row w-full gap-4 mt-4 sm:mt-6">
          <div className="w-full h-px mt-3 bg-white bg-opacity-10"></div>
          <span className="text-xs font-medium text-white text-opacity-30 sm:text-sm font-Inter">
            or
          </span>
          <div className="w-full h-px mt-3 bg-white bg-opacity-10"></div>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthForm;
