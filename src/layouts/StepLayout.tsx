import StepIndicator from "@/components/atoms/StepIndicator";

type StepLayoutProps = {
  children: React.ReactNode;
  onSkip?: () => void;
  stepTitle: string;
  stepSubtitle: string;
  currentStep?: number;
};

const StepLayout = ({
  children,
  stepTitle,
  stepSubtitle,
  currentStep,
}: StepLayoutProps) => {
  return (
    <div className="z-50 p-4 md:p-8">
      <div className="p-4 px-4 border rounded-lg shadow-md border-primary bg-gradient-to-br from-slate-800/10 to-stone-300/10">
        <div className="flex flex-col py-8 md:py-16">
          <div className="flex flex-col items-center gap-6">
            <div className="text-4xl font-semibold text-white capitalize font-poppins">
              {stepTitle}
            </div>
            <div className="text-base font-semibold capitalize text-white/50 font-poppins">
              {stepSubtitle}
            </div>
            {currentStep && <StepIndicator currentStep={currentStep} />}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default StepLayout;
