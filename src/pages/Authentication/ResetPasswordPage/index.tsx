import { useState, ChangeEvent, FormEvent } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import OptionalCard from "@/components/organisms/OptionalCard";
import Button from "@/components/atoms/Button";
import InputField from "@/components/atoms/InputField";
import { useResetPassword } from "@/services/auth.service";
import { useToast } from "@/providers/ToastProvider";
import { useNavigate } from "react-router-dom";

interface FormData {
  password: string;
  confirmPassword: string;
}

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const useResetPasswordMutation = useResetPassword();
  const { success } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // get token from query params
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (!token) {
      setError("Invalid reset link.");
      return;
    }

    try {
      useResetPasswordMutation.mutate(
        { ...formData, token },
        {
          onSuccess: () => {
            console.log("Password reset successful");
            success("Password reset successfully");
            navigate("/login");
          },
          onError: (e) => {
            console.error("Error resetting password:", e);
            setError("An error occurred. Please try again later.");
          },
        }
      );
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Reset Password"
        subtitle="Enter a new password and make sure to record it in a safe place."
      >
        <OptionalCard title="Enter New Password" isSkip={false} isSteps={false}>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              label=""
              id="password"
            />
            <InputField
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              label=""
              id="confirmPassword"
            />
            {error && <p className="mt-2 text-red-500">{error}</p>}
            <Button
              className="mt-8 bg-primary !text-black !rounded-full md:py-3 text-[16px] font-semibold"
              text={isSubmitting ? "Sending..." : "Confirm New Password"}
              type="submit"
              fullWidth
              variant="custom"
              disabled={isSubmitting}
            />
          </form>
        </OptionalCard>
      </AuthLayout>
    </div>
  );
};

export default ResetPasswordPage;
