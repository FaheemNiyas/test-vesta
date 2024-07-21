import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import AuthForm from "@/components/organisms/AuthForm";
import InputField from "@/components/atoms/InputField";
import { useRegisterUser } from "@/services/auth.service";
import { useToast } from "@/providers/ToastProvider";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const useRegisterMutation = useRegisterUser();
  const { success, error } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    useRegisterMutation.mutate(
      { ...formData, role: "USER" },
      {
        onSuccess: () => {
          setLoading(false);
          success("User details saved successfully");
          navigate("/referral-link");
        },
        onError: (err) => {
          console.error("Error:", err);
          error("Failed");
          setLoading(false);
        },
      }
    );
  };

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Personal Information"
        subtitle="Fill in your personal information"
      >
        <AuthForm
          title="Create your account"
          subTitle="Signing up will create new account using this email"
          subTitleButton=""
          subTitleButtonTwo=""
          onSubtitleButtonClick={() => {}}
          onSubtitleButtonTwoClick={() => navigate("/referral")}
          isLogin={false}
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
                type="text"
                name="fname"
                placeholder="First Name"
                value={formData.fname}
                onChange={handleInputChange}
                required
                label={""}
                id={""}
              />
              <InputField
                type="text"
                name="lname"
                placeholder="Last Name"
                value={formData.lname}
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
        />
      </AuthLayout>
    </div>
  );
};

export default Profile;
