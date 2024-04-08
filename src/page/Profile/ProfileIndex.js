import React, { useState } from 'react'
import Personalinformation from './Personalinformation'
import PROFILE_BG_INM from '../../assets/SVG/Profile_BG.svg'
import { Assets } from '../../assets'
import ChangePassword from './ChangePassword'
import Verificationcenter from './Verificationcenter'


const ProfileIndex = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='profile_page'>
            <div className='profile_page_bg'>
                <img src={PROFILE_BG_INM} />
            </div>
            <div className='profile_User'>
                <div className='profile_User_cont'>
                    <img src={Assets.PROFILE_USER} />
                    <div className='profile_User_name'>
                        <h3>Gerry Barron</h3>
                        <p>gerrybarron@gmail.com</p>
                    </div>
                </div>
                <button>Edit profile picture</button>
            </div>

            <div className="Account_tabs ">
                <ul>
                    <li className={activeTab === 0 ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick(0)}>
                        Personal information
                    </li>
                    <li className={activeTab === 1 ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick(1)}>
                        Change password
                    </li>
                    <li className={activeTab === 2 ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick(2)}>
                        Verification center
                    </li>
                </ul>
                <div className="Account_tabs_perent">
                    <div className='Account_tabs_content_box'>
                        {
                            activeTab === 0 &&
                            <Personalinformation />
                        }
                        {
                            activeTab === 1 &&
                            <ChangePassword />
                        }
                        {
                            activeTab === 2 &&
                            <Verificationcenter />
                        }
                    </div>

                </div>
            </div>

        </div>

    )
}

export default ProfileIndex
