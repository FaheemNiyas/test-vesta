import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Spinner } from "./components/atoms/Spinner";

import Profile from "./pages/Authentication/Profile/Profile";
import GoogleAuthenticationPage from "./pages/GoogleAuthenticationPage";
import SecurityOption from "./pages/Authentication/SecurityOption";
import ConnectWallet from "./pages/ConnectWallet";
import UserCompliance from "./pages/UserCompliance";
import Questionary from "./pages/Questionary";
import ReferralLinkPage from "./pages/ReferralLinkPage";
import ResetPasswordPage from "./pages/Authentication/ResetPasswordPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/Authentication/LoginPage"));
const SignupPage = lazy(() => import("./pages/Authentication/SignupPage"));
const ForgotPasswordPage = lazy(
  () => import("./pages/Authentication/ForgotPasswordPage")
);
const EmailVerificationPage = lazy(
  () => import("./pages/Authentication/EmailVerificationPage")
);

const TwoStepVerificationPage = lazy(
  () => import("./pages/Authentication/TwoStepVerificationPage")
);

const UserProfile = lazy(() => import("./pages/UserProfile"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const ProtectedRoute = lazy(() => import("./middleware/ProtectedRoute"));

const App = () => {
  // const isUnderMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[50vh]">
              <Spinner />
            </div>
          }
        >
          <Routes>
            {/* Authentication Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route
              path="/email-verification"
              element={<EmailVerificationPage />}
            />
            <Route
              path="/two-step-verification"
              element={<TwoStepVerificationPage />}
            />
            <Route
              path="/google-authentication"
              element={<GoogleAuthenticationPage />}
            />
            <Route path="/security-option" element={<SecurityOption />} />
            <Route path="/connect-wallet" element={<ConnectWallet />} />
            <Route path="/user-compliance" element={<UserCompliance />} />
            <Route path="/questionary" element={<Questionary />} />

            <Route path="/referral-link" element={<ReferralLinkPage />} />

            {/* Main Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/user-profile" element={<UserProfile />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
    //   <div className="flex flex-col min-h-screen">
    //   {isUnderMaintenance ? (
    //     <Routes>
    //       <Route path="*" element={<MaintenancePage />} />
    //     </Routes>
    //   ) : (
    //     <>
    //       <div className="pb-8">
    //         <Navbar />
    //       </div>
    //       <div className={'gradient-container-left'} />
    //       <div className={'gradient-container-right'} />
    //       <div className="flex-grow">
    //         <Suspense
    //           fallback={
    //             <div className="flex items-center justify-center h-[50vh]">
    //               <Spinner />
    //             </div>
    //           }
    //         >
    //           <Routes>
    //             <Route path="/" element={<HomePage />} />
    //             <Route path="/login" element={<LoginPage />} />
    //             {/* ProtectedRoute */}
    //             <Route element={<ProtectedRoute />}>
    //               <Route
    //                 path="/user-profile"
    //                 element={<UserProfile />}
    //               />
    //             </Route>
    //             <Route path="*" element={<NotFoundPage />} />
    //           </Routes>
    //         </Suspense>
    //       </div>
    //       <>
    //         <div className="">
    //           <section className="px-4 py-4 pt-4 sm:px-4 sm:py-4">
    //             <Footer />
    //           </section>
    //         </div>
    //       </>
    //     </>
    //   )}
    // </div>
  );
};

export default App;
