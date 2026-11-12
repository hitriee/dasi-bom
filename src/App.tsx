import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { academy, campaign, consultation, dashboard } from "./utils/path";
import CampaignPage from "./pages/compaign_page";
import ConsultationPage from "./pages/consultation_page";
import AcademyPage from "./pages/academy_page";
import DashboardPage from "./pages/dashboard_page";
import IndexPage from "./pages/index_page";
import ScrollToTop from "./utils";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path={campaign} element={<CampaignPage />} />
        <Route path={consultation} element={<ConsultationPage />} />
        <Route path={academy} element={<AcademyPage />} />
        <Route path={dashboard} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
