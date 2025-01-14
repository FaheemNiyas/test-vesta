import SocialLoginButton from "@/components/atoms/SocialLoginButton";
import { appleIcon, facebookIcon, googleIcon, twitterIcon } from "@/constants";

const SocialLogin = () => {
  const handleSocialLogin = (provider: string) => {
    window.location.href = `${
      import.meta.env.VITE_AUTH_API_URI || "http://localhost:3000"
    }/api/v1/auth/by/${provider}`;
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <SocialLoginButton
        iconSrc={googleIcon}
        altText="Google"
        buttonText="Continue with Google"
        textColor="text-black"
        onClick={() => handleSocialLogin("google")}
        bgClass={"bg-white"}
      />
      <SocialLoginButton
        iconSrc={appleIcon}
        altText="Apple"
        buttonText="Continue with Apple"
        textColor="text-black"
        onClick={() => handleSocialLogin("apple")}
        bgClass={"bg-white"}
      />
      <SocialLoginButton
        iconSrc={facebookIcon}
        altText="Facebook"
        buttonText="Continue with Facebook"
        textColor="text-black"
        onClick={() => handleSocialLogin("facebook")}
        bgClass={"bg-white"}
      />
      <SocialLoginButton
        iconSrc={twitterIcon}
        altText="Twitter"
        buttonText="Continue with Twitter"
        textColor="text-black"
        onClick={() => handleSocialLogin("twitter")}
        bgClass={"bg-white"}
      />
    </div>
  );
};

export default SocialLogin;
