import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "@/components/atoms/InputField";
import Button from "@/components/atoms/Button";

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      navigate("/sign-up", { state: { email } });
    } else {
      setError("Invalid email address");
    }
  };

  return (
    <form className="w-full mt-4 sm:mt-6" onSubmit={handleEmailSubmit}>
      <div className="flex flex-col gap-2">
        <InputField
          contentClass={""}
          type="email"
          name="email"
          placeholder="Email address"
          label={""}
          id={""}
          required
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {error && (
        <span className="ml-2 text-sm font-medium text-red-500">{error}</span>
      )}
      <Button
        className="mt-8 rounded-3xl"
        text="Continue"
        type="submit"
        fullWidth
        variant="primary"
      />
    </form>
  );
};

export default EmailInput;
