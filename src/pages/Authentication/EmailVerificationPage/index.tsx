// src/pages/Authentication/EmailVerificationPage.tsx
// This page handles email verification for users after registration.

import VerificationStatus from "@/components/organisms/EmailVerify";
import { VestaRoundedLogo } from "@/constants";

import AuthLayout from "@/layouts/AuthLayout";
import { useToast } from "@/providers/ToastProvider";
import { useVerifyUser, useEmailVerifyCode } from "@/services/auth.service";

import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const EmailVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const [verify, setVerify] = useState(false);
  const navigate = useNavigate();
  const verifyMutation = useVerifyUser();
  const { success, error } = useToast();

  const emailVerifyCodeMutation = useEmailVerifyCode();

  const registeredEmail = localStorage.getItem("registeredEmail") || "";

  useEffect(() => {
    if (!searchParams.get("email") || !searchParams.get("code")) {
      return;
    }

    setVerify(true);
    verifyMutation.mutate(
      {
        code: encodeURI(searchParams.get("code")!),
        email: encodeURI(searchParams.get("email")!),
      },
      {
        onSuccess: (res) => {
          console.log(res);
          success("Email verification successful!");
          navigate("/email-verify", { replace: true });
        },
        onError: (err) => {
          const errorMessage = "Error verifying email. Please try again.";
          error(errorMessage);
          console.error(err);
        },
      }
    );
  }, []);

  const resendVerificationCode = () => {
    const email = localStorage.getItem("registeredEmail") || "";
    if (email) {
      emailVerifyCodeMutation.mutate(
        { email: email, isSignup: false },
        {
          onSuccess: (res) => {
            console.log(res);
            success("Verification code resent successfully!");
          },
          onError: (err) => {
            console.log(err);
            error("Error resending the verification code. Please try again.");
          },
        }
      );
    } else {
      error("No email address found for verification.");
    }
  };

  return (
    <>
      {verify && <div />}
      <AuthLayout
        title="Email Verification"
        subtitle="Verify your email for account creation"
      >
        <VerificationStatus
          imageSrc={VestaRoundedLogo}
          imageAlt={"successIcon"}
          secondaryTitle={"Enter Code"}
          secondaryText={
            !verifyMutation.isSuccess
              ? `A one time authentication code has been sent to ${registeredEmail}`
              : ""
          }
          buttonText={
            !verifyMutation.isSuccess ? "I didn’t receive an email" : ""
          }
          onButtonClick={resendVerificationCode}
          secondButtonText={verifyMutation.isSuccess ? "Login" : ""}
          onSecondaryButtonClick={() => {
            if (verifyMutation.isSuccess) {
              navigate("/auth");
            }
          }}
        />
      </AuthLayout>
    </>
  );
};

export default EmailVerificationPage;
