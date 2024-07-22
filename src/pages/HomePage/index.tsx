import MainLayout from "@/layouts/MainLayout";
import LandingPage from "./Components/LandingPage";
import CollectionComponent from "./Components/CollectionComponent";
import SearchBox from "./Components/SearchBox";
import DetailsSection1 from "./Components/DetailsSection1";
import DetailsSection2 from "./Components/DetailsSection2";
import { useLoginSuccess } from "@/services/auth.service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
          }
        },
        onError: (error) => {
          console.log(error);
        },
      });
    }
  }, []);

  console.log("Rikas");

  return (
    <>
      <div>Rikas</div>
      <MainLayout>
        <LandingPage />
        <CollectionComponent />
        <SearchBox />
        <DetailsSection1 />
        <DetailsSection2 />
        {/* <div className="flex flex-col gap-16">
          <div>
            w3m-button <w3m-button />
          </div>
          <div>
            w3m-account-button <w3m-account-button />
          </div>
          <div>
            w3m-connect-button <w3m-connect-button />
          </div>
          <div>
            w3m-network-button <w3m-network-button />
          </div>
        </div> */}
      </MainLayout>
    </>
  );
};

export default HomePage;
