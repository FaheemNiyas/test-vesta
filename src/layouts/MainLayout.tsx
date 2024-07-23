import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { HomeLayoutProps } from "@/types";

const MainLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="">
        <div className="flex items-center h-16 px-4">
          <Navbar />
          {/* <div className="flex items-center ml-auto space-x-4">
            <Search />
            <UserNav />
          </div> */}
        </div>
      </header>
      <main className="flex-1 space-y-4 ">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
