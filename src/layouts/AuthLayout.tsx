import { AuthLayoutProps } from "@/types";

const AuthLayout = ({
  title,
  subtitle,
  children,
  wrapperClass = "",
  contentClass = "",
}: AuthLayoutProps) => {
  return (
    <div
      className={`w-full h-screen flex justify-center items-center px-4 py-16 ${wrapperClass}`}
    >
      <div
        className={`w-full max-w-5xl flex flex-col justify-center items-center gap-10 md:gap-16 ${contentClass}`}
      >
        <div className="space-y-4 text-center text-white">
          <h1 className="w-full m-auto text-3xl md:text-4xl lg:text-6xl font-semibold font-['Poppins']">
            {title}
          </h1>
          <p className="text-lg font-light leading-9 text-white/70 md:text-xl lg:text-2xl font-Inter text-opacity-70">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
