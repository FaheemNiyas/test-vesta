// src/pages/HomePage.tsx
// This is the main landing page of the application.

import MainLayout from "@/layouts/MainLayout";
import LandingPage from "./Components/LandingPage";
import CollectionComponent from "./Components/CollectionComponent";
import SearchBox from "./Components/SearchBox";
import DetailsSection1 from "./Components/DetailsSection1";
import DetailsSection2 from "./Components/DetailsSection2";
import { useLoginSuccess } from "@/services/auth.service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailsSection3 from "./Components/DetailsSection3";
import DetailsSection4 from "./Components/DetailsSection4";
import TrendingCompanies from "./Components/TrendingCompanies";
import TrendingNFT from "./Components/TrendingNFT";
import LiveAuction from "./Components/LiveAuction";
import TopCollection from "./Components/TopCollection";
import UpcomingMint from "./Components/UpcomingMint";
import Subscribe from "./Components/Subscribe";

const HomePage = () => {
  const useLoginSuccessMutation = useLoginSuccess();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isLoginSuccess = urlParams.get("success");

    if (isLoginSuccess === "true") {
      useLoginSuccessMutation.mutate(undefined, {
        onSuccess: (data) => {
          console.log(data);
          if (data.data.data.profile.status === "PENDING") {
            localStorage.setItem("email", data.data.data.profile.email);
            localStorage.setItem("jwt", data.data.data.token);
            navigate("/profile");
          } else if (
            data.data.data.profile.twoFactorAuthentication === true &&
            data.data.data.profile.status === "APPROVED"
          ) {
            localStorage.setItem("email", data.data.data.profile.email);
            localStorage.setItem("jwt", data.data.data.token);
            navigate("/google-authentication?login=true");
          }
        },
        onError: (error) => {
          console.log(error);
        },
      });
    }
  }, []);

  return (
    <>
      <MainLayout>
        <LandingPage />
        <CollectionComponent />
        <SearchBox />
        <DetailsSection1 />
        <DetailsSection2 />
        <DetailsSection3 />
        <DetailsSection4 />
        <TrendingCompanies />
        <TrendingNFT />
        <LiveAuction />
        <TopCollection />
        <UpcomingMint />
        <Subscribe />
      </MainLayout>
    </>
  );
};

export default HomePage;
