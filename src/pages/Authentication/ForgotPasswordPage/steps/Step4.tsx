import VerificationStatus from '@/components/organisms/EmailVerify';
import { SuccessIcon } from '@/constants';

const Step4 = () => {
  const resendVerificationCode = () => {
    console.log('Verification');
  };

  const secondaryTitleMessage = 'Password Changed';

  return (
    <div className="flex items-center justify-center w-full p-4">
      <VerificationStatus
        imageSrc={SuccessIcon}
        imageAlt={'SuccessIcon'}
        secondaryTitle={secondaryTitleMessage}
        secondaryText={
          'In next step You have enable two factor authentication to your account.'
        }
        buttonText={'Add Your Wallet'}
        onButtonClick={resendVerificationCode}
      />
    </div>
  );
};

export default Step4;
