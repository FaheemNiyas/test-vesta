export interface HomeLayoutProps {
  children: React.ReactNode;
}

export interface SwiperProps {
  slidesPerView: number;
  slideList: {
    id: number;
    logo: React.JSX.Element;
  }[];
  pagination?: boolean;
  navigation?: boolean;
  autoplay?: boolean;
  isFullScreen?: boolean;
}

export type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  wrapperClass?: string;
  contentClass?: string;
};

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
  value: string;
  required: boolean;
  wrapperClass?: string;
  contentClass?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e?: React.FormEvent) => void;
  doneIcon?: string;
}

export type ButtonTypes = {
  label?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: string;
  onClick?: () => void;
  paddingX?: number;
  options?: string;
  type?: "button" | "submit" | "reset" | undefined;
  buttonText?: string;
};

export type UserDate = {
  name: string;
  email: string;
  role: string;
};

export type UserState = {
  status?: boolean;
  data?: UserDate;
  message?: string;
  token?: string;

  setStatus: (value: boolean) => void;
  setData: (value: UserDate | undefined) => void;
  setMessage: (value: string) => void;
  setToken: (value: string) => void;
};

export interface AuthFormProps {
  title: string;
  subTitle?: string;
  subTitleButton?: string;
  subTitleButtonTwo?: string;
  onSubtitleButtonClick?: () => void;
  onSubtitleButtonTwoClick?: () => void;
  isLogin: boolean;
  isSubmit: boolean;
  formFields: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  additionalLinks?: React.ReactNode;
  showSocialLogin?: boolean;
}

export interface OptionalCardProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  step?: number;
  onSkipNow?: () => void;
  isSteps?: boolean;
  isSkip: boolean;
}

export type VerificationStatusProps = {
  imageSrc: string;
  imageAlt: string;
  secondaryTitle: string;
  secondaryText?: string;
  buttonText?: string;
  secondButtonText?: string;
  onButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
};

export type PopupModalProps = {
  type?: "SUCCESS" | "ERROR" | "LOADING";
  title?: string;
  description?: any;
  buttonNameLeft?: string;
  buttonNameRight?: string;
  buttonActionLeft?: any;
  buttonActionRight?: any;
};
export type StepProps = {
  onNext: () => void;
};
