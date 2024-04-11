import React from 'react'
import InactiveAccounts_IMG from '../assets/SVG/inactive-account.svg'

const BreachedAccounts = () => {
    return (
        <div className='Inactive_Accounts'>
            <img src={InactiveAccounts_IMG} />
            <p>You have no Breached account</p>
        </div>
    )
}

export default BreachedAccounts
