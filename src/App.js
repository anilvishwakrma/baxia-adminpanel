import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './page/Account';
import Sitebar from './page/Sitebar';
import './assets/css/style.css'
import Accountoverview from './page/Accountoverview';
import ProfileIndex from './page/Profile/ProfileIndex';
import TradingOverview from './page/TradingOverview/TradingOverview';
import Topup_Reset from './page/Topup_Reset';
import CompetitionIndex from './Component/CompetitionIndex';

const App = () => {
    return (
        <BrowserRouter basename="/Dev/baxia">
            <Sitebar>
                <Routes>
                    <Route path="/" element={<Account />} />
                    <Route path="/Accountoverview" element={<Accountoverview />} />
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
