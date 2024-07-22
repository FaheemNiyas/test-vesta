import React, { useState } from "react";
import { InputFieldProps } from "@/types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "./Button";

const InputField = ({
  label,
  type,
  placeholder,
  id,
  name,
  value,
  required,
  wrapperClass = "",
  contentClass = "",
  onChange,
  onSubmit,
  doneIcon,
}: InputFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  if (type === "file") {
    return (
      <div className="flex items-center justify-start w-full gap-4">
        <label
          htmlFor={id}
          className={`${wrapperClass} flex-grow flex flex-col justify-start items-start gap-1`}
        >
          <span className="text-xs font-medium leading-tight text-white text-opacity-70 font-Inter">
            {label}
          </span>
          <div
            className={`${contentClass} relative w-full px-4 py-3 bg-white bg-opacity-5 rounded-3xl border border-white border-opacity-10 text-white text-opacity-30 text-sm font-medium font-Inter cursor-pointer`}
          >
            {placeholder}
            <input
              id="fileInput"
              type={type}
              name={name}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={onChange}
            />
          </div>
        </label>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-start w-full gap-4">
      <label
        htmlFor={id}
        className={`${wrapperClass} flex-grow flex flex-col justify-start items-start gap-1`}
      >
        <span className="text-xs font-medium leading-tight text-white text-opacity-70 font-Inter">
          {label}
        </span>
        <div className="relative w-full">
          <input
            id={id}
            type={isPasswordVisible ? "text" : type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            required={required}
            className={`${contentClass} w-full px-4 py-3 bg-white bg-opacity-5 rounded-3xl border border-white border-opacity-10 text-sm font-medium font-Inter`}
            disabled={type === "verified-email"}
          />
          {type === "password" && (
            <button
              type="button"
              className="absolute text-white transform -translate-y-1/2 right-3 top-1/2 text-opacity-70"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
          {type === "register-email" && onSubmit && (
            <Button
              text="Next"
              width="w-[101px]"
              textColor="text-slate-800"
              className="absolute !py-1 text-secondary font-bold transform -translate-y-1/2 right-2 top-1/2 text-opacity-70"
              variant="gradient"
              onClick={onSubmit}
            />
          )}
          {type === "verified-email" && doneIcon && (
            <img
              src={doneIcon}
              alt="Done"
              className="absolute transform -translate-y-1/2 cursor-pointer right-2 top-1/2"
              onClick={onSubmit}
              style={{ width: "24px", height: "24px" }}
            />
          )}
        </div>
      </label>
    </div>
  );
};

export default InputField;
