import Button from "@/components/atoms/Button";
import InputField from "@/components/atoms/InputField";
import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReferralLinkPage = () => {
  const [formData, setFormData] = useState({ referralLink: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Have you been invited by someone?"
        subtitle="If you have referral links from friend, please input here"
      >
        <OptionalCard
          title="Referral Link"
          isSkip={true}
          subTitle="Paste their referral link into the field below."
          step={1}
          onSkipNow={() => navigate("/security-option")}
        >
          <InputField
            contentClass={""}
            type="text"
            name="referralLink"
            placeholder="Input Referral Link Here"
            label={""}
            id={""}
            required
            value={formData.referralLink}
            onChange={handleInputChange}
          />
          <Button
            className="mt-8 bg-white !text-black !rounded-full md:py-3 text-[16px] font-semibold "
            text="Use Referral"
            type="submit"
            fullWidth
            variant="custom"
            onClick={() => navigate("/security-option")}
          />
        </OptionalCard>
      </AuthLayout>
    </div>
  );
};

export default ReferralLinkPage;
