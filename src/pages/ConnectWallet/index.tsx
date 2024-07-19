import React, { useEffect } from "react";
import OptionalCard from "@/components/organisms/OptionalCard";
import AuthLayout from "@/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

const ConnectWallet: React.FC = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      navigate("/questionary");
    }
  }, [isConnected, navigate]);

  return (
    <div className="relative h-min-screen pt-30">
      <AuthLayout
        title="Security Option"
        subtitle="Authentication method for your account login"
      >
        <OptionalCard
          title="Authentication Preference"
          isSkip={true}
          subTitle="Paste their referral link into the field below."
          step={3}
          onSkipNow={() => navigate("/questionary")}
        >
          <div className="flex items-center justify-center py-4">
            <w3m-button balance="show" label="Connect Wallet" />
          </div>
        </OptionalCard>
      </AuthLayout>
    </div>
  );
};

export default ConnectWallet;
