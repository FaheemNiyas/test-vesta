type StepIndicatorProps = {
  currentStep: number;
};

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const steps = [1, 2, 3, 4];
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center px-4">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center ${
              currentStep >= step ? "bg-primary" : "bg-slate-gray"
            } text-white`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
