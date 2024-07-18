import { useState, ChangeEvent, FormEvent } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import OptionalCard from "@/components/organisms/OptionalCard";
import Button from "@/components/atoms/Button";
import InputField from "@/components/atoms/InputField";

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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your API call to reset the password
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: formData.password }),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message, redirect to login page)
        alert("Password reset successfully.");
      } else {
        // Handle error
        const errorData = await response.json();
        setError(errorData.message || "Failed to reset password.");
      }
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
