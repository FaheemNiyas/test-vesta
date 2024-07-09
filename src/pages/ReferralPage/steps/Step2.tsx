import VerificationStatus from "@/components/organisms/EmailVerify";
import { SuccessIcon } from "@/constants";

import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();

  const resendVerificationCode = () => {
    navigate("/");
  };

  const secondaryTitleMessage = "Referral Added";

  return (
    <div className="flex items-center justify-center w-full p-4">
      <VerificationStatus
        imageSrc={SuccessIcon}
        imageAlt={"SuccessIcon"}
        secondaryTitle={secondaryTitleMessage}
        secondaryText={
          "You can manage your preferences from the Settings section of the app."
        }
        buttonText={"Continue"}
        onButtonClick={resendVerificationCode}
      />
    </div>
  );
};

export default Step2;
