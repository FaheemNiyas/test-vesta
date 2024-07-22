import React, { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import AuthForm from "@/components/organisms/AuthForm";
import { useNavigate } from "react-router-dom";
import InputField from "@/components/atoms/InputField";
import { useLoginUser } from "@/services/auth.service";
import { useToast } from "@/providers/ToastProvider";
import { useCookies } from "react-cookie";
import useUserStore from "@/store/user";
import useProfileStore from "@/store/profile";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [_, setCookie] = useCookies(["JwtToken"]);
  const userState = useUserStore();
  const profileStore = useProfileStore();
  const loginMutation = useLoginUser();
  const { success, error } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    loginMutation.mutate(formData, {
      onSuccess: (res) => {
        if (res?.data?.data?.token) {
          setCookie("JwtToken", res?.data?.data?.token);
          userState.setData(res?.data?.data);
          const userData = res?.data?.data;
          profileStore.setId(userData.id);
          profileStore.setFName(userData.fname || "");
          profileStore.setLName(userData.lname || "");
          profileStore.setProfileImage(userData.profileImage || null);
          navigate("/");
          success("Login successful!");
        } else {
          error("Login failed! Please try again.");
        }
        setLoading(false);
      },
      onError: (err: any) => {
        console.log("err : ", err);
        const errorMessage =
          err?.response?.data?.error ||
          "Login failed! Please check your credentials.";
        error(errorMessage);
        setLoading(false);
      },
    });
  };

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Welcome Back"
        subtitle="Sign in & check out what you miss out in the platform!"
      >
        <AuthForm
          title="Sign In To Your Account"
          subTitle="Already registered?"
          subTitleButton="Register here"
          subTitleButtonTwo="Connect Wallet"
          onSubtitleButtonClick={() => navigate("/sign-up")}
          onSubtitleButtonTwoClick={() => navigate("/sign-up")}
          isLogin={true}
          isSubmit={true}
          showSocialLogin={true}
          formFields={
            <>
              <InputField
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                label={""}
                id={""}
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                label={""}
                id={""}
              />
            </>
          }
          onSubmit={handleFormSubmit}
          loading={loading}
          additionalLinks={
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/forgot-password")}
                className="flex items-center justify-center pt-4 text-xs font-medium underline text-primary sm:text-sm"
              >
                Forgot password?
              </button>
            </div>
          }
        />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
