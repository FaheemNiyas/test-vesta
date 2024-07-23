import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "./components/atoms/Spinner";

// Lazy load pages to improve performance by splitting the bundle
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
const Profile = lazy(() => import("./pages/Authentication/Profile/Profile"));
const GoogleAuthenticationPage = lazy(
  () => import("./pages/GoogleAuthenticationPage")
);
const SecurityOption = lazy(
  () => import("./pages/Authentication/SecurityOption")
);
const ConnectWallet = lazy(
  () => import("./pages/Authentication/ConnectWallet")
);
const UserCompliance = lazy(
  () => import("./pages/Authentication/UserCompliance")
);
const Questionary = lazy(() => import("./pages/Authentication/Questionary"));
const ReferralLinkPage = lazy(() => import("./pages/ReferralLinkPage"));
const ResetPasswordPage = lazy(
  () => import("./pages/Authentication/ResetPasswordPage")
);
const Career = lazy(() => import("./pages/Community/Career"));
const LearnMore = lazy(() => import("./pages/Community/LearnMore"));
const News = lazy(() => import("./pages/Community/News"));
const Launchpad = lazy(() => import("./pages/Launchpad"));
const BrowseNFT = lazy(() => import("./pages/Marketplace/BrowseNFT"));
const Collection = lazy(() => import("./pages/Marketplace/Collection"));
const Activity = lazy(() => import("./pages/Stats/Activity"));
const Analytics = lazy(() => import("./pages/Stats/Analytics"));
const Dashboard = lazy(() => import("./pages/Stats/Dashboard"));
const OnOffRamp = lazy(() => import("./pages/Stats/OnOffRamp"));
const Rankings = lazy(() => import("./pages/Stats/Rankings"));
const Swap = lazy(() => import("./pages/Stats/Swap"));
const Success = lazy(() => import("./pages/Authentication/Success"));

const App = () => {
  return (
    <BrowserRouter>
      {/* Suspense component is used to show a fallback spinner while pages are being lazy loaded */}
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
          <Route path="/success" element={<Success />} />

          {/* Stats Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/ramp" element={<OnOffRamp />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/activity" element={<Activity />} />

          {/* Marketplace Routes */}
          {/* ProtectedRoute component ensures that these routes are only accessible to authenticated users */}
          <Route element={<ProtectedRoute />}>
            <Route path="/browse-nft" element={<BrowseNFT />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/launchpad" element={<Launchpad />} />
          </Route>

          {/* Community Routes */}
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/learn-more" element={<LearnMore />} />

          {/* Main Routes */}
          {/* ProtectedRoute component ensures that these routes are only accessible to authenticated users */}
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<UserProfile />} />
          </Route>

          {/* Fallback Route */}
          {/* If no other routes match, the NotFoundPage component is displayed */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
