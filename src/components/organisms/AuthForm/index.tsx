import React from "react";
import { AuthFormProps } from "@/types";
import SocialLogin from "../SocialLogin";
import { VestaRoundedLogo } from "@/constants";

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subTitle,
  subTitleButton,
  subTitleButtonTwo,
  onSubtitleButtonClick,
  onSubtitleButtonTwoClick,
  isLogin,
  isSubmit,
  formFields,
  onSubmit,
  loading,
  additionalLinks,
  showSocialLogin,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full w-full sm:w-[480px] bg-[#1C355D]/80 rounded-2xl shadow border border-[#FFFFFF4D] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <img
          alt="VestaRoundedLogo"
          src={VestaRoundedLogo}
          className="w-20 h-20 bg-white rounded-full"
        />
        <div className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins']">
          {title}
        </div>
        <div className="flex items-center justify-center row-span-2 mt-2">
          <span className="text-xs font-medium text-white text-opacity-70 sm:text-sm font-Inter">
            {subTitle}
          </span>
          {subTitleButton && (
            <button
              onClick={onSubtitleButtonClick}
              className="ml-2 text-xs font-medium underline sm:text-sm font-Inter text-primary"
            >
              {subTitleButton}
            </button>
          )}
          {subTitleButtonTwo && (
            <>
              <div className="px-2">or</div>
              <button
                onClick={onSubtitleButtonTwoClick}
                className="text-xs font-medium underline sm:text-sm font-Inter text-primary"
              >
                {subTitleButtonTwo}
              </button>
            </>
          )}
        </div>

        {showSocialLogin && <SocialLogin />}

        <div className="flex flex-row w-full gap-4 mt-4 sm:mt-6">
          <div className="w-full h-px mt-3 bg-white bg-opacity-10"></div>
          <span className="text-xs font-medium text-white text-opacity-30 sm:text-sm font-Inter">
            or
          </span>
          <div className="w-full h-px mt-3 bg-white bg-opacity-10"></div>
        </div>

        <form className="w-full mt-4 sm:mt-6" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">{formFields}</div>
          {isSubmit && (
            <>
              {loading ? (
                <div className="py-4 text-center text-white">Please wait</div>
              ) : (
                <button
                  type="submit"
                  className="w-full h-10 mt-8 text-black bg-white rounded-3xl"
                >
                  {isLogin ? "Login" : "Submit Data"}
                </button>
              )}
            </>
          )}
          {additionalLinks}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
