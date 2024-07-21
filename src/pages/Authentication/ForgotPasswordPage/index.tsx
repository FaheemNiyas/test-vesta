import { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import OptionalCard from "@/components/organisms/OptionalCard";
import Button from "@/components/atoms/Button";
import InputField from "@/components/atoms/InputField";
import { useForgotPassword } from "@/services/auth.service";
import { useToast } from "@/providers/ToastProvider";

const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const useForgotPasswordMutation = useForgotPassword();
  const { success, error } = useToast();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      useForgotPasswordMutation.mutate(formData, {
        onSuccess: () => {
          success("Reset link sent successfully");
        },
        onError: (e) => {
          console.error("Error sending reset link:", e);
          error("An error occurred. Please try again later.");
        },
      });
    } catch (error) {
      console.error("Error sending reset link:", error);
      alert("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Forgot Password"
        subtitle="Enter your registered email and we will send you a link to change your password."
      >
        <OptionalCard title="Enter Email" isSkip={false} isSteps={false}>
          <form onSubmit={handleSubmit} className="w-full">
            <InputField
              contentClass="Enter Email"
              type="email"
              name="email"
              placeholder="Enter Email"
              label=""
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <Button
              className="mt-8 bg-white !text-black !rounded-full md:py-3 text-[16px] font-semibold"
              text={isSubmitting ? "Sending..." : "Send Link"}
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

export default ForgotPasswordPage;
