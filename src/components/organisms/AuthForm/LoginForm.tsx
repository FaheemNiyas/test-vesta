import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import InputField from "@/components/atoms/InputField";
import { useToast } from "@/providers/ToastProvider";
import { useLoginUser } from "@/services/auth.service";
import useUserStore from "@/store/user";
import useProfileStore from "@/store/profile";
import Button from "@/components/atoms/Button";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [_, setCookie] = useCookies(["JwtToken"]);
  const userState = useUserStore();
  const profileStore = useProfileStore();
  const navigate = useNavigate();
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
    <form className="w-full mt-4 sm:mt-6" onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-2">
        <InputField
          contentClass={""}
          type="email"
          name="email"
          placeholder="Email address"
          label={""}
          id={""}
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          label={""}
          id={""}
          required
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      {!loading && (
        <Button
          className="mt-8 rounded-3xl"
          text="Login"
          type="submit"
          fullWidth
          variant="primary"
        />
      )}
      {loading && (
        <div className="py-4 text-center text-white">please wait</div>
      )}

      <Link
        to={"/forgot-password"}
        className="flex items-center justify-center pt-4 text-xs font-medium underline text-primary sm:text-sm"
      >
        Forgot password?
      </Link>
    </form>
  );
};

export default LoginForm;
