import React, { useState } from 'react'
import TradingAnalytics from './TradingAnalytics'
import DonutChart from './donutChart'
import TradingHistory from './TradingHistory'
import DetailedStats from './DetailedStats'


const TradingOverview = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='TradingOverview_page'>
              <div className='Heading'>Trending Overview</div>
            <div className="Account_tabs ">
                <ul>
                    <li className={activeTab === 0 ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick(0)}>
                        Detailed Stats
                    </li>
                    <li className={activeTab === 1 ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick(1)}>
                        Analytics
                    </li>
                </ul>
                <div className="Account_tabs_perent">
                    <div className='Account_tabs_content_box'>
                        {
                            activeTab === 0 &&
                            <DetailedStats />
                        }
                        {
                            activeTab === 1 &&

                            <div>
                                <div className='Tranding_chart'>
                                    <TradingAnalytics />
                                    <DonutChart />
                                </div>
                                <TradingHistory />
                            </div>
                        }
                    </div>

                </div>
            </div>

        </div>

    )
}

export default TradingOverview
