import React from 'react'
import WellcomeTabs from '../Component/WellcomeTabs'


const Account = () => {
    return (
        <div className=''>
            <div className='wellcome_section'>
                <div className='Welcome_to_Baxia '>
                    <h1>Welcome to Baxia </h1>
                    <p>Complete the challenge phases, Harness your trading skills, Unlock your Baxia account</p>
                </div>
                <button className='Welcome_to_Baxia_button'>Create new account</button>
            </div>
            <WellcomeTabs />
        </div>
    )
}

export default Account
