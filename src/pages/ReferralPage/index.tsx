import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import AuthLayout from "@/layouts/AuthLayout";
import StepLayout from "@/layouts/StepLayout";

const ReferralPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const skipStep = () => {
    navigate("/");
  };

  let content;
  let stepTitle;
  let stepSubtitle;
  let layoutTitle;
  let layoutSubTitle;

  switch (step) {
    case 1:
      content = <Step1 />;
      stepTitle = "Code";
      stepSubtitle = "";
      layoutTitle = "Have you been invited by someone?";
      layoutSubTitle = "Paste this code into the line to be their referral.";
      break;
    case 2:
      content = <Step2 />;
      stepTitle = "";
      stepSubtitle = "";
      layoutTitle = "Referral Added Successful";
      layoutSubTitle = "Add an extra layer of security to your account";
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
          {step === 2 ? (
            content
          ) : (
            <StepLayout stepTitle={stepTitle} stepSubtitle={stepSubtitle}>
              {content}
            </StepLayout>
          )}
        </div>
        {step === 1 && (
          <div className="mt-4 text-right">
            <button
              onClick={skipStep}
              className="cursor-pointer hover:underline"
            >
              Skip it for now
            </button>
          </div>
        )}
      </AuthLayout>
    </>
  );
};

export default ReferralPage;
