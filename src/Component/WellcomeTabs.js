import React, { useState } from 'react'
import MEDAL_IMG from '../assets/SVG/Icons/madel.svg'
import LOGO from '../assets/SVG/Dis-Logo.svg'
import Discount_BG from '../assets/SVG/discount_BG.svg'
import Coupon_code_BG from '../assets/SVG/Coupon_code_BG.svg'
import InactiveAccounts from '../page/InactiveAccounts'
import BreachedAccounts from '../page/BreachedAccounts'

const WellcomeTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div >
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
                <div className='wellcome_tab_discount_grid'>
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
                            {
                                activeTab === 1 &&
                                <InactiveAccounts />
                            }
                            {
                                activeTab === 2 &&
                                <BreachedAccounts />
                            }
                        </div>
                    </div>
                    <div className='well_come_discount_conten_box'>
                        <div className='well_come_discount_box' style={{ background: `url(${Discount_BG})` }}>
                            <div className='well_come_discount_box_logo'>
                                <img src={LOGO} />
                                <h1>10% Discount</h1>
                                <div className='Discount_text_cont'>
                                    <h5>You will also get</h5>
                                    <p>Offer is applicable for all plans</p>
                                    <p>For crypto payment only</p>
                                </div>
                                <div className='Coupon_code_gb' >
                                    <div className='Coupon_code_gb_border' style={{ background: `url(${Coupon_code_BG})` }}>
                                    </div>
                                    <div className='Coupon_code_con'>
                                        <div>
                                            <p>Coupon code</p>
                                            <b>AD1234</b>
                                        </div>
                                    </div>
                                </div>
                                <div className='Discount_Offer_TIME'>
                                    <h3>Offer ends in</h3>
                                    <div className='Discount_Offer_TIME_grid'>
                                        <div className='Discount_Offer_TIME_items'>
                                            <p> <span>10</span> <span>Hours</span></p>
                                        </div>
                                        <div className='Discount_Offer_TIME_items'>
                                            <p> <span>25</span> <span>Min</span></p>
                                        </div>
                                        <div className='Discount_Offer_TIME_items'>
                                            <p> <span>35</span> <span>Sec</span></p>
                                        </div>
                                    </div>
                                    <button>Start challenge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Tabs tabs={tabs} /> */}
        </div>
    )
}

export default WellcomeTabs