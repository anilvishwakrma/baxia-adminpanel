import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./page/Account";
import Sitebar from "./page/Sitebar";
import Accountoverview from "./page/Accountoverview";
import BillingEvaluation from "./page/Billing/BillingEvaluation.jsx";
import BillingExpress from "./page/Billing/BillingExpress.jsx";
import BillingFreeTrial from "./page/Billing/BillingFreeTrial.jsx";
import BillingHistory from "./page/Billing/BillingHistory.jsx";
import BillingStellarChallenge from "./page/Billing/BillingStellarChallenge.jsx";
import Utilites from "./page/Utilites.jsx";
import Symbols from "./page/Symbol.jsx";
import NewCalender from "./page/NewCalender.jsx";
import Infinity from "./page/Infinity/Infinity.jsx";
import Certificates from "./page/Certificates.jsx";
import Help from "./page/Help/Help.jsx";
import HelpDetails from "./page/Help/HelpDetails.jsx";
import InfinityDashboard from "./page/Infinity/InfinityDashboard.jsx";
import InfinityHistory from "./page/Infinity/InfinityHistory.jsx";
import ProfileIndex from "./page/Profile/ProfileIndex.js";
import TradingOverview from "./page/TradingOverview/TradingOverview.js";
import CompetitionIndex from "./Component/CompetitionIndex.js";
import Topup_Reset from "./page/Topup_Reset.js";
import Payment from "./page/Billing/Payment.jsx";

const App = () => {
  return (
    <BrowserRouter basename="/Dev/baxia">
      <Sitebar>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/Accountoverview" element={<Accountoverview />} />
          <Route
            path="/Billing/stellar-challenge"
            element={<BillingStellarChallenge />}
          />
          <Route path="/Billing/evaluation" element={<BillingEvaluation />} />
          <Route path="/Billing/express" element={<BillingExpress />} />
          <Route path="/Billing/free-trial" element={<BillingFreeTrial />} />
          <Route path="/Billing/history" element={<BillingHistory />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Utilities" element={<Utilites />} />
          <Route path="/Symbols" element={<Symbols />} />
          <Route path="/News-calender" element={<NewCalender />} />
          <Route path="/Infinity/activities" element={<Infinity />} />
          <Route path="/Infinity/dashboard" element={<InfinityDashboard />} />
          <Route path="/Infinity/history" element={<InfinityHistory />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Help/:name" element={<HelpDetails />} />
          <Route path="/Certificates" element={<Certificates />} />{" "}
          <Route path="/Profile" element={<ProfileIndex />} />
          <Route path="/TradingOverview" element={<TradingOverview />} />
          <Route path="/Topup_Reset" element={<Topup_Reset />} />
          <Route path="/Competition" element={<CompetitionIndex />} />
        </Routes>
      </Sitebar>
    </BrowserRouter>
  );
};

export default App;
