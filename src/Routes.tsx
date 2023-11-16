import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Spellcheck = React.lazy(() => import("pages/Spellcheck"));
const PaidContent = React.lazy(() => import("pages/PaidContent"));
const GuestLogin = React.lazy(() => import("pages/GuestLogin"));
const LocationBasedAlerts = React.lazy(
  () => import("pages/LocationBasedAlerts"),
);
const EnableLinkedAccounts = React.lazy(
  () => import("pages/EnableLinkedAccounts"),
);
const DesktopNotification = React.lazy(
  () => import("pages/DesktopNotification"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/desktopnotification"
            element={<DesktopNotification />}
          />
          <Route
            path="/enablelinkedaccounts"
            element={<EnableLinkedAccounts />}
          />
          <Route
            path="/locationbasedalerts"
            element={<LocationBasedAlerts />}
          />
          <Route path="/guestlogin" element={<GuestLogin />} />
          <Route path="/paidcontent" element={<PaidContent />} />
          <Route path="/spellcheck" element={<Spellcheck />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
