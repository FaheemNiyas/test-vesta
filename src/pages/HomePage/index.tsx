import MainLayout from "@/layouts/MainLayout";
import LandingPage from "./Components/LandingPage";
import CollectionComponent from "./Components/CollectionComponent";
import SearchBox from "./Components/SearchBox";
import DetailsSection1 from "./Components/DetailsSection1";
import DetailsSection2 from "./Components/DetailsSection2";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <LandingPage />
        <CollectionComponent />
        <SearchBox/>
        <DetailsSection1/>
        <DetailsSection2/>
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
