import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/atoms/Button";
import InputField from "@/components/atoms/InputField";
import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";

const ReferralLinkPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ referral: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleReferral = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Referral Link Submitted:", formData.referral);
  };

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Have you been invited by someone?"
        subtitle="If you have referral links from a friend, please input it here"
      >
        <OptionalCard
          title="Referral Link"
          isSkip={true}
          subTitle="Paste their referral link into the field below."
          step={1}
          onSkipNow={() => navigate("/security-option")}
        >
          <form onSubmit={handleReferral} className="w-full">
            <InputField
              type="text"
              name="referral"
              placeholder="Referral Link"
              value={formData.referral}
              onChange={handleInputChange}
              required
              label=""
              id="referral"
            />
            <Button
              className="mt-8 bg-white !text-black !rounded-full  text-[16px] font-semibold"
              text="Use Referral"
              type="submit"
              fullWidth
              variant="custom"
            />
          </form>
        </OptionalCard>
      </AuthLayout>
    </div>
  );
};

export default ReferralLinkPage;
