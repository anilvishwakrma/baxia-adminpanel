import React from 'react'
import RENK_ICON from '../../assets/SVG/Renk.svg'
import RIGHT from '../../assets/SVG/2_right_arrow.svg'

const Prizepool = () => {
    const Stellar = [
        { renk: '2nd', cash: '$7000 in cash', step: 'Stellar 2-step 300k' },
        { renk: '1st', cash: '$7000 in cash', step: 'Stellar 2-step 300k' },
        { renk: '3rd', cash: '$7000 in cash', step: 'Stellar 2-step 300k' },
    ]
    return (
        <div className='Prizepool_modal'>
            <div className='Prizepool_reabk_box'>
                {Stellar.map((item, index) => {
                    return (
                        <div key={index} className='Prizepool_reabk_box_step'>
                            <div className='Prizepool_reabk_box_step_items'>
                                <div className='Prizepool_reabk_box_step_icons'>
                                    <div><button>{item.renk}</button></div>
                                    <img src={RENK_ICON} />
                                </div>
                                <div className='Prizepool_reabk_box_step_list'>
                                    <p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5ZM12.1691 6.1252C12.3763 5.89375 12.3567 5.53814 12.1252 5.33092C11.8938 5.1237 11.5381 5.14334 11.3309 5.3748L8.80404 8.19718C8.29202 8.76908 7.9472 9.15221 7.65239 9.39999C7.37155 9.63604 7.2066 9.6875 7.0625 9.6875C6.9184 9.6875 6.75345 9.63604 6.47261 9.39999C6.1778 9.1522 5.83298 8.76908 5.32096 8.19718L4.66908 7.46907C4.46186 7.23762 4.10625 7.21797 3.8748 7.42519C3.64334 7.63241 3.6237 7.98802 3.83092 8.21947L4.51065 8.97869C4.98754 9.51139 5.38531 9.95571 5.74876 10.2612C6.13324 10.5844 6.54794 10.8125 7.0625 10.8125C7.57705 10.8125 7.99176 10.5844 8.37624 10.2612C8.73969 9.95571 9.13746 9.51139 9.61435 8.9787L12.1691 6.1252Z" fill="#0A0A0A"></path></svg> <span>{item.cash}</span></p>
                                    <p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5ZM12.1691 6.1252C12.3763 5.89375 12.3567 5.53814 12.1252 5.33092C11.8938 5.1237 11.5381 5.14334 11.3309 5.3748L8.80404 8.19718C8.29202 8.76908 7.9472 9.15221 7.65239 9.39999C7.37155 9.63604 7.2066 9.6875 7.0625 9.6875C6.9184 9.6875 6.75345 9.63604 6.47261 9.39999C6.1778 9.1522 5.83298 8.76908 5.32096 8.19718L4.66908 7.46907C4.46186 7.23762 4.10625 7.21797 3.8748 7.42519C3.64334 7.63241 3.6237 7.98802 3.83092 8.21947L4.51065 8.97869C4.98754 9.51139 5.38531 9.95571 5.74876 10.2612C6.13324 10.5844 6.54794 10.8125 7.0625 10.8125C7.57705 10.8125 7.99176 10.5844 8.37624 10.2612C8.73969 9.95571 9.13746 9.51139 9.61435 8.9787L12.1691 6.1252Z" fill="#0A0A0A"></path></svg> <span>{item.step}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <table className='Prizepool_modal_table'>
                <tr className='Prizepool_table_heading'>
                    <th>Rank</th>
                    <th>Plan Name</th>
                    <th>Cash Prize</th>
                </tr>
                <tr>
                    <td>4th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>6th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>8th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>10th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>11th to 20th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>21st to 70th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>71st to 100th</td>
                    <td>Stellar 1-Step 50K</td>
                    <td>-</td>
                </tr>
            </table>
            <div className='cont_pipi_last'>
                <p>Between rankings 101 and 600, traders will be eligible to<b> receive a lottery coupon.</b> Once the competition concludes, 50 lucky winners will be chosen, and they will be awarded 6k accounts (Stellar 1-Step Challenge). The lottery results can be viewed within the dashboard.</p>
            </div>
        </div>
    )
}

export default Prizepool
