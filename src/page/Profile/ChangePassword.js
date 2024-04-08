import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PROFILE_BG_INM from '../../assets/SVG/Profile_BG.svg';
import { Assets } from '../../assets';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='profile_page'>
            <div className='profile_page_heding'>Change Password</div>
            <div className='profile_User_information'>
                <div className='profile_User_from'>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Current password</span>
                            <div className='FaEye_password'>
                                <input
                                    placeholder='Enter your current password'
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                                {showCurrentPassword ? (
                                    <FaEye onClick={toggleConfirmPasswordVisibility} />
                                ) : (
                                    <FaEyeSlash onClick={toggleConfirmPasswordVisibility} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>New password</span>
                            <div className='FaEye_password'>
                                <input
                                    placeholder='Enter your new password'
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                {showNewPassword ? (
                                    <FaEye onClick={toggleConfirmPasswordVisibility} />
                                ) : (
                                    <FaEyeSlash onClick={toggleConfirmPasswordVisibility} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <div className='input_group'>
                            <span>Confirm password</span>
                            <div className='FaEye_password'>
                                <input
                                    placeholder='Confirm your password'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {showConfirmPassword ? (
                                    <FaEye onClick={toggleConfirmPasswordVisibility} />
                                ) : (
                                    <FaEyeSlash onClick={toggleConfirmPasswordVisibility} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='profile_User_information_input'>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
