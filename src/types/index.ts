export interface HomeLayoutProps {
  children: React.ReactNode;
}

export type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  wrapperClass?: string;
  contentClass?: string;
};

export type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name?: string;
  value?: string;
  wrapperClass?: string;
  contentClass?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: any;
  error?: string;
};

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
  buttonText?: string;
  subTitleButton?: string;
  subTitleButtonTwo?: string;
  onSubtitleButtonClick?: () => void;
  onSubtitleButtonTwoClick?: () => void;
  isLogin: boolean;
}

export interface OptionalCardProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
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
