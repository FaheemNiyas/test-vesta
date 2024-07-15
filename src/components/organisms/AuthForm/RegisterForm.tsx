import InputField from "@/components/atoms/InputField";
import { passwordValidation } from "@/components/hoc/auth/passwordValidation";
import { useToast } from "@/providers/ToastProvider";
import { useRegisterUser } from "@/services/auth.service";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type FormData = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "USER";
};

export default function RegisterForm() {
  const location = useLocation();
  const email = location.state?.email || "";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState({ msg: "", color: "red" });
  const registerMutation = useRegisterUser();

  const initialFormData: FormData = {
    fname: "",
    lname: "",
    email: email,
    password: "",
    confirmPassword: "",
    role: "USER",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const { success, error } = useToast();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      error("Passwords do not match!");
      return;
    }

    setLoading(true);

    if (
      validate.msg === "strong" ||
      validate.msg === "medium" ||
      validate.msg === "weak"
    ) {
      registerMutation.mutate(formData, {
        onSuccess: () => {
          localStorage.setItem("registeredEmail", formData.email);
          setFormData(initialFormData);
          success("Registration successful! Please check your email inbox.");
          setLoading(false);
          navigate("/email-verification");
        },
        onError: (err: any) => {
          const errorMessage =
            err?.response?.data?.message || "Registration failed!";
          error(errorMessage);
          console.error(err);
          setLoading(false);
        },
      });
    } else {
      setLoading(false);
      error("Your password is very weak!");
    }
  };

  useEffect(() => {
    if (formData.password.length !== 0) {
      const validationResponse = passwordValidation(formData.password);
      setValidate({
        msg: validationResponse.msg,
        color: validationResponse.color,
      });
    } else {
      setValidate({ msg: "", color: "red" });
    }
  }, [formData.password]);

  return (
    <form className="w-full mt-4 sm:mt-6" onSubmit={handleSubmit}>
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
          contentClass={""}
          type="text"
          name="fname"
          placeholder="First Name"
          label={""}
          id={""}
          required
          value={formData.fname}
          onChange={handleInputChange}
        />

        <InputField
          contentClass={""}
          type="text"
          name="lname"
          placeholder="Last Name"
          label={""}
          id={""}
          required
          value={formData.lname}
          onChange={handleInputChange}
        />

        <InputField
          type="password"
          name="password"
          placeholder="Create Password"
          label={""}
          id={""}
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          label={""}
          id={""}
          required
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      {validate.msg.length !== 0 && validate?.color === "red" && (
        <span className="ml-2 text-sm font-medium text-red-500 text-opacity-70 font-Inter">
          {"password is " + validate?.msg}
        </span>
      )}
      {validate.msg.length !== 0 && validate?.color === "yellow" && (
        <span className="ml-2 text-sm font-medium text-yellow-500 text-opacity-70 font-Inter">
          {"password is " + validate?.msg}
        </span>
      )}
      {validate.msg.length !== 0 && validate?.color === "green" && (
        <span className="ml-2 text-sm font-medium text-green-500 text-opacity-70 font-Inter">
          {"password is " + validate?.msg}
        </span>
      )}

      <div className="w-full mt-8">
        {loading && (
          <div className="w-full text-center text-white animate-pulse ">
            Please wait
          </div>
        )}
        {!loading && (
          <input
            type="submit"
            className="w-full h-10 text-black bg-white rounded-xl font-Inter"
            value="Submit Data"
          />
        )}
      </div>
    </form>
  );
}
