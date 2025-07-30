import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Faq from "../components/Faq";
import ComingSoonPopup from "../components/feature";
import AboutUs from "../components/Aboutus";
import CoinLootyLoader from "../../Common/loader/CoinLootyLoader";
import { LoadingProvider } from "../../context/loading-context";
import { ToggleUSDProvider } from "../../context/ToggleUSDContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardHeader from "../components/userDdashboard/DashboardHeader";
import FooterMenu from "../components/userDdashboard/FooterMenu";
import UserSidebar from "../components/userDdashboard/UserSidebar";
import Home from "../pages/home";
import HomeNew from "../pages/homenew";
import ForgotPassword from "../pages/passwordForget";
import ResetPassword from "../pages/passwordForget/ResetPassword";
import ReferToFriend from "../pages/refer";
import Signup from "../pages/signup";
import SubUserSignup from "../pages/subUserSignup";
import Affiliates from "../pages/userDashboard/affiliates";
import Cashout from "../pages/userDashboard/cashout";
import UserDashboard from "../pages/userDashboard/dashboard";
import LeaderBoard from "../pages/userDashboard/leaderboard";
import AllOffers from "../pages/userDashboard/offers/AllOffer";
import UserProfile from "../pages/userDashboard/profile";
import Rewards from "../pages/userDashboard/rewards";
import AllSurvey from "../pages/userDashboard/surveys/AllSurvey";
import SurveyIframe from "../pages/userDashboard/surveys/SurveyIframe";
import VerifyOtp from "../pages/varifyOtp";
import { isAuthenticated } from "./helpers";
import Protected from "./protected";
import TermCondition from "../components/TermCondition";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ContactUs from "../components/ContactUs";

const Layout = () => {
  const location = useLocation();
  const excludedPaths = [
    "/dashboard",
    "/alloffers",
    "/cashout",
    "/userprofile",
    "/leaderboard",
    "/rewards",
    "/affiliates",
  ];
  const isExcluded = excludedPaths.includes(location.pathname);
  return (
    <>
      {!isExcluded && <Header />}
      <Outlet /> {/* This renders the nested route content */}
      {!isExcluded && <Footer />}
    </>
  );
};

const LayoutDashboard = () => {
  // const location = useLocation()
  // const excludedPaths = ['/dashboard', '/alloffers', '/cashout', '/userprofile', '/leaderboard', '/rewards','/affiliates'];
  // const isExcluded = excludedPaths.includes(location.pathname);
  return (
    <>
      <ToggleUSDProvider>
        <CoinLootyLoader></CoinLootyLoader>
        <DashboardHeader />
        <div className="main flex">
          <UserSidebar />
          <div className="dashboard-wrapper">
            <Outlet />
            <FooterMenu />
          </div>
        </div>
      </ToggleUSDProvider>
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<HomeNew />}
          loader={async () => await isAuthenticated()}
        />
        <Route
          path="signup"
          element={<Signup />}
          loader={async () => await isAuthenticated()}
        >
          {" "}
        </Route>
        <Route path="subuser/signup/:id" element={<SubUserSignup />}>
          {" "}
        </Route>
        <Route path="ref/:id" element={<ReferToFriend />}>
          {" "}
        </Route>
        <Route
          path="verifyotp"
          element={<VerifyOtp />}
          loader={async () => await isAuthenticated()}
        >
          {" "}
        </Route>
        <Route
          path="forgotpassword"
          element={<ForgotPassword />}
          loader={async () => await isAuthenticated()}
        >
          {" "}
        </Route>
        <Route
          path="resetpassword"
          element={<ResetPassword />}
          loader={async () => await isAuthenticated()}
        >
          {" "}
        </Route>
        <Route path="homeold" element={<Home />}>
          {" "}
        </Route>
        <Route path="termcondition" element={<TermCondition />}>
          {" "}
        </Route>
        <Route path="privacypolicy" element={<PrivacyPolicy />}>
          {" "}
        </Route>
        {/*  */}
        <Route path="faq" element={<Faq />}>
          {" "}
        </Route>
        <Route path="about-us" element={<AboutUs />}>
          {" "}
        </Route>
        <Route path="soon" element={<ComingSoonPopup />}>
          {" "}
        </Route>

        {/*  */}
        <Route path="contactus" element={<ContactUs />}>
          {" "}
        </Route>
        <Route
          path="*"
          element={<h1 className="text-3xl">Page not found</h1>}
        />
      </Route>
      <Route path="/" element={<LayoutDashboard />}>
        <Route element={<Protected />}>
          <Route path="dashboard" element={<UserDashboard />}>
            {" "}
          </Route>
          <Route path="alloffers" element={<AllOffers />}>
            {" "}
          </Route>
          <Route path="allsurveys" element={<AllSurvey />}>
            {" "}
          </Route>
          <Route path="survey/:id" element={<SurveyIframe />}>
            {" "}
          </Route>
          <Route path="userprofile" element={<UserProfile />}>
            {" "}
          </Route>
          <Route path="cashout" element={<Cashout />}>
            {" "}
          </Route>
          <Route path="leaderboard" element={<LeaderBoard />}>
            {" "}
          </Route>
          <Route path="rewards" element={<Rewards />}>
            {" "}
          </Route>
          <Route path="affiliates" element={<Affiliates />}>
            {" "}
          </Route>
        </Route>
      </Route>
    </>
  )
);

const Index = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Index;
