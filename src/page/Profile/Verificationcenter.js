import React from 'react'
import IMG from '../../assets/SVG/Verificationcenter.svg'

const Verificationcenter = () => {
    return (
        <div className='Verification_center'>
            <img src={IMG} />
            <h3>No account selected</h3>
            <p>Please note that no account has been selected. Before proceeding, Kindly select the appropriate account or contact our support team for assistance.</p>
        </div>
    )
}

export default Verificationcenter