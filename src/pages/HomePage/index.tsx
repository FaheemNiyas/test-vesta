import MainLayout from "@/layouts/MainLayout";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        HomePage
        <div className="flex flex-col gap-16">
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
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;
