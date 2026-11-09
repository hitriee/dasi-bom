import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { academy, campaign, consultation, dashboard, navItems } from "./path";
import CampaignPage from "./pages/compaign_page";
import ConsultationPage from "./pages/consultation_page";
import AcademyPage from "./pages/academy_page";
import DashboardPage from "./pages/dashboard_page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={campaign} element={<CampaignPage />} />
        <Route path={consultation} element={<ConsultationPage />} />
        <Route path={academy} element={<AcademyPage />} />
        <Route path={dashboard} element={<DashboardPage />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
