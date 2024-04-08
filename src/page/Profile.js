import React from 'react'
import PROFILE_BG_INM from '../assets/SVG/Profile_BG.svg'
import { Assets } from '../assets'

const Profile = () => {
   
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
            <div className='profile_User_information'>
                <div className='profile_User_from'>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>First name</span>
                            <input placeholder='First name' type='text' />
                        </div>
                        <div className='input_group'>
                            <span>Postal code</span>
                            <input placeholder='Enter pastal code' type='text' />
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Last name </span>
                            <input placeholder='Last name ' type='text' />
                        </div>
                        <div className='input_group'>
                            <span>Country</span>
                            <input placeholder='Enter country' type='text' />
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Street </span>
                            <input placeholder='Enter street ' type='text' />
                        </div>
                        <div className='input_group'>
                            <span>City </span>
                            <input placeholder='Enter city' type='text' />
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Phone number  </span>
                            <input placeholder='Enter phone number' type='text' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile