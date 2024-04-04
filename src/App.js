

import React, { useState } from 'react';
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from './page/Account';
import Sitebar from './page/Sitebar';
import Accountoverview from './page/Accountoverview';


const App = () => {

    return (
        <BrowserRouter>
            <Sitebar >
                <Routes>
                    <Route path="/" element={<Account />} />
                    <Route path="/Accountoverview" element={<Accountoverview />} />
                </Routes>
            </Sitebar>
        </BrowserRouter>
    )
}

export default App
