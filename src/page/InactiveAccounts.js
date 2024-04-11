import React from 'react'
import InactiveAccounts_IMG from '../assets/SVG/inactive-account.svg'

const InactiveAccounts = () => {
    return (
        <div className='Inactive_Accounts'>
            <img src={ InactiveAccounts_IMG} />
            <p>You have no inactive account</p>
        </div>
    )
}

export default InactiveAccounts
