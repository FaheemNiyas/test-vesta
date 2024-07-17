import Button from "@/components/atoms/Button";
import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";
import { useNavigate } from "react-router-dom";

const ConnectWallet = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Connect Wallet"
        subtitle="Would you like to connect wallet now?"
      >
        <OptionalCard title="" isSkip={true} subTitle="" step={3} onSkipNow={() => navigate("/user-compliance")}>
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-['Poppins']">
            Why Connect Wallet?
          </div>
          <div className="flex flex-col items-center justify-center ">
            <span className="text-xs font-medium text-white text-opacity-70 sm:text-sm font-Inter pb-3 text-center">
              You can’t do any investment or transaction if you haven’t
              connected into any wallet
            </span>
          </div>

          <Button
            className="mt-8 bg-white !text-black !rounded-full md:py-3 md:text-[16px] text-[14px] font-semibold "
            text="Metamask"
            type="submit"
            fullWidth
            variant="custom"
            onClick={() => navigate("/google-authentication")}
          />

          <Button
            className="mt-8 bg-white !text-black !rounded-full md:py-2 md:text-[16px] text-[14px] font-semibold "
            text="Wallet Connect"
            type="submit"
            fullWidth
            variant="custom"
            onClick={() => navigate("/google-authentication")}
          />
          <Button
            className="mt-8 bg-white !text-black !rounded-full md:py-2 md:text-[16px] text-[14px] font-semibold "
            text="Coinbase Wallet"
            type="submit"
            fullWidth
            variant="custom"
            onClick={() => navigate("/google-authentication")}
          />
          <Button
            className="mt-8 bg-white !text-black !rounded-full md:py-2 md:text-[16px] text-[14px] font-semibold "
            text="Trust Wallet"
            type="submit"
            fullWidth
            variant="custom"
            onClick={() => navigate("/user-compliance")}
          />
          <Button
            className="!mt-10  !text-black !rounded-full md:py-2 md:text-[16px] text-[14px] font-semibold "
            text="Don’t Have Wallet? Create Now"
            type="submit"
            fullWidth
            variant="primary"
            onClick={() => navigate("/user-compliance")}
          />
        </OptionalCard>
      </AuthLayout>
    </div>
  );
};

export default ConnectWallet;
