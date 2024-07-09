import { authApi, authApi2 } from "./api.service";
import { useMutation } from "react-query";

type RegisterData = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  role: "USER";
};

type ForgotPasswordData = {
  email: string;
};

type ResetPasswordData = {
  token: string;
  password: string;
  confirmPassword: string;
};

type EmailVerifyCodeData = {
  email: string;
};

type VerifyData = {
  code: string;
  email: string;
};

type LoginData = {
  email: string;
  password: string;
};

type QuestionaryData = {
  email: string;
  responses: {
    [questionId: string]: string;
  };
};

export const useRegisterUser = () => {
  return useMutation((userData: RegisterData) =>
    authApi.post("/register", userData)
  );
};

export const useEmailVerifyCode = () => {
  return useMutation((userData: EmailVerifyCodeData) =>
    authApi.post("/email-verifycode", userData)
  );
};

export const useVerifyUser = () => {
  return useMutation((userData: VerifyData) =>
    authApi.post("/verify", userData)
  );
};

export const useLoginUser = () => {
  return useMutation((userData: LoginData) => authApi.post("/login", userData));
};

export const useForgotPassword = () => {
  return useMutation((userData: ForgotPasswordData) =>
    authApi.post("/forgot-password", userData)
  );
};

export const useResetPassword = () => {
  return useMutation((userData: ResetPasswordData) =>
    authApi.post(`/reset-password?token=${userData.token}`, {
      password: userData.password,
      confirmPassword: userData.confirmPassword,
    })
  );
};

export const useSocialMediaLogin = () => {
  return useMutation((provider: string) => authApi.get(`/by/${provider}`));
};

export const useSocialMediaLoginCallback = () => {
  return useMutation((provider: string) =>
    authApi.get(`/${provider}/callback`)
  );
};

export const useLoginSuccess = () => {
  return useMutation(() => authApi.get("/login/success"));
};

export const useLogoutUser = () => {
  return useMutation(() => authApi.get("/logout"));
};

export const useQuestionary = () => {
  return useMutation((userData: QuestionaryData) =>
    authApi2.post("/questionary/save", userData)
  );
};
