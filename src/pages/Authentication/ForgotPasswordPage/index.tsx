import AuthLayout from "@/layouts/AuthLayout";
import StepLayout from "@/layouts/StepLayout";

import { useState } from "react";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  let content;
  let stepTitle;
  let stepSubtitle;
  let layoutTitle;
  let layoutSubTitle;

  switch (step) {
    case 1:
      content = <Step1 onNext={nextStep} />;
      stepTitle = "Enter Your Email";
      stepSubtitle = "Enter your email address to continue";
      layoutTitle = "Password Reset";
      layoutSubTitle = "Reset your Password";
      break;
    case 2:
      content = <Step2 onNext={nextStep} />;
      stepTitle = "Enter Code";
      stepSubtitle =
        "Enter the 6-digit authentication code we just sent to your email address: dha*****@info****.net";
      layoutTitle = "Password Reset";
      layoutSubTitle = "Reset your Password";
      break;
    case 3:
      content = <Step3 onNext={nextStep} />;
      stepTitle = "Enter Code";
      stepSubtitle =
        "Enter the 6-digit authentication code we just sent to your email address: dha*****@info****.net";
      layoutTitle = "Password Reset";
      layoutSubTitle = "Reset your Password";
      break;
    case 4:
      content = <Step4 />;
      stepTitle = "Password Changed Successfully";
      stepSubtitle = "";
      layoutTitle = "Password Changed Successfully";
      layoutSubTitle = "";
      break;
    default:
      content = <div>Unknown Step</div>;
      stepTitle = "Error";
      stepSubtitle = "An error has occurred";
      layoutTitle = "Error";
      layoutSubTitle = "";
  }

  return (
    <>
      <AuthLayout title={layoutTitle} subtitle={layoutSubTitle}>
        <div className="flex flex-col px-4 sm:px-8 md:px-32 lg:px-48 xl:px-64 2xl:max-w-screen-2xl 2xl:mx-auto">
          {step === 4 ? (
            content
          ) : (
            <StepLayout stepTitle={stepTitle} stepSubtitle={stepSubtitle}>
              {content}
            </StepLayout>
          )}
        </div>
      </AuthLayout>
    </>
  );
};

export default ForgotPasswordPage;
