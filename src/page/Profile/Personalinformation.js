import React, { useState } from 'react'
import PROFILE_BG_INM from '../../assets/SVG/Profile_BG.svg'
import Down_arrow from '../../assets/SVG/Arrow_dawon_dail.svg'
import { Assets } from '../../assets'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Personalinformation = () => {

    // dailcode select  =====>
    const [dailcodeselect, setDailcodeselect] = useState(false);
    const [dailcodeoption, setDailcodeoption] = useState(null);
    const [searchDailcode, setSearchDailcode] = useState('');
    const DialcodeToggle = () => {
        setDailcodeselect(!dailcodeselect);
    };
    const handleDailcode = (dialCode) => {
        setDailcodeoption(dialCode);
        setDailcodeselect(false);
        // console.log('Selected Dial Code:', dialCode);
    };

    const dialcodelist = [
        { code: '+1', flag: Assets.FLAGE, },
        { code: '+1', flag: Assets.FLAGE, },
        { code: '+1', flag: Assets.FLAGE, },
        { code: '+1', flag: Assets.FLAGE, },
    ]

    return (
        <div className='profile_page'>
            <div className='profile_page_heding'>Personal information</div>
            <div className='profile_User_information'>
                <div className="custom-dropdown">

                </div>
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
                            <div className='FaEye_password dail_code_static'>
                                <div className='dail_code_static_box'>
                                    <p><img src={Assets.FLAGE} /></p>
                                    <p>    <img className='dail_code_static_box_Down_arrow' src={Down_arrow} /></p>
                                    <p> <div className='border_skskaks'></div></p>
                                    <p>+1</p>
                                </div>
                                <input placeholder='Enter phone number' type='text' />
                            </div>
                        </div>
                    </div>
                    {/* <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Phone number  </span>
                            <div className='FaEye_password dail_Phone_code_box'>
                                <div className="dail_Phone_code_Toggle" onClick={DialcodeToggle}>
                                    <span>{dailcodeoption ? `${dailcodeoption.code}` : '+91'}</span>
                                    {dailcodeoption && dailcodeoption.flag && (
                                        <span className='dail_Phone_code_flaf_img'>
                                            <img src={dailcodeoption.flag} alt="Flag" />
                                        </span>
                                    )}
                                    <span className='dail_Down_arrow'>{dailcodeselect ? <img src={Down_arrow} /> : <img src={Down_arrow} />}</span>
                                </div>
                                {dailcodeselect && (
                                    <div className="dail_Phone_code">
                                        <input
                                            type="search"
                                            placeholder="Search code"
                                            value={searchDailcode}
                                            onChange={(e) => setSearchDailcode(e.target.value)}
                                        />
                                        <ul className="dail_Phone_code_drop">
                                            {dialcodelist
                                                .filter(item => item.code.toLowerCase().includes(searchDailcode.toLowerCase()))
                                                .map((item, index) => (
                                                    <li key={index} onClick={() => handleDailcode(item)}>
                                                        <span><img src={item.flag} /></span>
                                                        <span>{item.code}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                                <input placeholder='Enter phone number' type='text' />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Personalinformation