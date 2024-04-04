import React, { useState } from 'react'
import MEDAL_IMG from '../assets/SVG/Icons/madel.svg'

const WellcomeTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="Account_tabs">
                <ul>
                    <li className={activeTab === 0 ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick(0)}>
                        Active accounts
                    </li>
                    <li className={activeTab === 1 ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick(1)}>
                        Inactive accounts
                    </li>
                    <li className={activeTab === 2 ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick(2)}>
                        Breached accounts
                    </li>
                </ul>
                <div className="Account_tabs_perent">
                    <div className='Account_tabs_content_box'>
                        {
                            activeTab === 0 &&
                            <div className='Account_tabs_content'>
                                <div className='Free_dashboard_tour_login'>
                                    <img src={MEDAL_IMG} />
                                    <h2>Free dashboard tour - Login : <span>123456</span></h2>
                                    <p>You are given a demo account to experience the dashboard</p>
                                    <button>Dashboard</button>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>

            {/* <Tabs tabs={tabs} /> */}
        </div>
    )
}

export default WellcomeTabs