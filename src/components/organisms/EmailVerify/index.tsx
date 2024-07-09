import { VerificationStatusProps } from '@/types';

const VerificationStatus = ({
  imageSrc,
  imageAlt,
  secondaryTitle,
  secondaryText,
  buttonText,
  secondButtonText,
  onButtonClick,
  onSecondaryButtonClick,
}: VerificationStatusProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm p-8 space-y-8 border shadow bg-gradient-to-br from-slate-800/40 to-stone-300/30 rounded-2xl border-primary">
      <div className="flex items-center justify-center space-x-4">
        <div className="relative w-32 h-32 bg-white border border-white rounded-full md:w-32 md:h-32 bg-opacity-5 border-opacity-20">
          <img
            alt={imageAlt}
            className="absolute w-1/2 h-1/2 top-1/4 left-1/4"
            src={imageSrc}
          />
        </div>
      </div>
      <div className="space-y-4 text-center text-white">
        <h2 className="text-lg md:text-lg lg:text-lg font-semibold font-['Poppins']">
          {secondaryTitle}
        </h2>
        {secondaryText && (
          <p className="text-sm font-light leading-normal md:text-sm lg:text-xs font-Inter text-opacity-70">
            {secondaryText}
          </p>
        )}
      </div>
      {buttonText && (
        <button
          className="w-11/12 h-12 px-4 py-2.5 bg-stone-400 bg-opacity-10 rounded-xl flex justify-center items-center"
          onClick={onButtonClick}
        >
          <span className="text-base font-medium leading-7 text-center text-stone-200 font-Inter">
            {buttonText}
          </span>
        </button>
      )}

      {secondButtonText && (
        <button
          className="flex items-center justify-center w-11/12 h-12 px-4 py-2 bg-stone-400 bg-opacity-10 rounded-xl"
          onClick={onSecondaryButtonClick}
        >
          <span className="text-base font-medium leading-7 text-center text-stone-200 font-Inter">
            {secondButtonText}
          </span>
        </button>
      )}
    </div>
  );
};

export default VerificationStatus;
