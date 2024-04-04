import React from 'react'
import LOGO_SIC from '../assets/SVG/Icons/madel.svg'

const Discount = () => {
    return (
        <div className='Discount'>
            <div className='Discount_logo'>
                <img src={LOGO_SIC} />
            <h1>10% Discount</h1>
            <h5>You will also get</h5>
            <p>Offer is applicable for all plans</p>
            <p>For crypto payment only</p>
            </div>
        </div>
    )
}

export default Discount