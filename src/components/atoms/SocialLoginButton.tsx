import React from "react";

interface SocialLoginButtonProps {
  iconSrc: string;
  altText: string;
  buttonText: string;
  textColor: string;
  bgClass: string;
  onClick: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  iconSrc,
  altText,
  buttonText,
  bgClass,
  textColor,
  onClick,
}) => {
  return (
    <button
      className={`${bgClass} rounded-xl flex justify-center items-center px-4 py-[10px] w-full mt-4 gap-4`}
      onClick={onClick}
    >
      <img src={iconSrc} alt={altText} className="w-4 h-4 min-h-4 min-w-4" />
      <span className={`${textColor} text-base font-medium font-Inter`}>
        {buttonText}
      </span>
    </button>
  );
};

export default SocialLoginButton;
