import React from 'react'
import PROFILE_BG_INM from '../../assets/SVG/Profile_BG.svg'
import { Assets } from '../../assets'

const Personalinformation = () => {

    return (
        <div className='profile_page'>
            <div className='profile_page_heding'>Personal information</div>
            <div className='profile_User_information'>
                <div className='profile_User_from'>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>First name</span>
                            <div className='FaEye_password'>
                                <input placeholder='First name' type='text' />
                            </div>
                        </div>
                        <div className='input_group'>
                            <span>Postal code</span>
                            <div className='FaEye_password'>
                                <input placeholder='Enter pastal code' type='text' />
                            </div>
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Last name </span>
                            <div className='FaEye_password'>
                                <input placeholder='Last name ' type='text' />
                            </div>
                        </div>
                        <div className='input_group'>
                            <span>Country</span>
                            <div className='FaEye_password'>
                                <input placeholder='Enter country' type='text' />
                            </div>
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Street </span>
                            <div className='FaEye_password'>
                                <input placeholder='Enter street ' type='text' />
                            </div>
                        </div>
                        <div className='input_group'>
                            <span>City </span>
                            <div className='FaEye_password'>
                                <input placeholder='Enter city' type='text' />
                            </div>
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Phone number  </span>
                            <div className='FaEye_password'>
                                <input placeholder='Enter phone number' type='text' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personalinformation