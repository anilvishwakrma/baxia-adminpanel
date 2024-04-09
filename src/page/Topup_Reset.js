import React, { useState } from 'react'

const Topup_Reset = () => {

    return (
        <div className='Topup_Reset'>
            <div className='Consistency_History'>
                <div className='Topup_Reset_heading'>
                    <div className='Heading'>Top-up & Reset</div>
                    <div className='Topup_Reset_fillter_select'>
                        <select>
                            <option>Select filter</option>
                            <option>Select filter</option>
                        </select>
                        <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.257 1.16178C10.5221 0.894329 10.5201 0.46263 10.2527 0.197554C9.98524 -0.0675222 9.55354 -0.0655961 9.28846 0.201856L7.7 1.80455C7.05533 2.455 6.61166 2.90119 6.23572 3.2031C5.87055 3.49637 5.63598 3.59698 5.42591 3.62375C5.29401 3.64057 5.16054 3.64057 5.02863 3.62375C4.81856 3.59698 4.584 3.49637 4.21882 3.2031C3.84289 2.90119 3.39922 2.455 2.75455 1.80456L1.16608 0.201856C0.901007 -0.0655955 0.469308 -0.0675214 0.201856 0.197555C-0.0655962 0.46263 -0.0675221 0.89433 0.197554 1.16178L1.81463 2.79335C2.42367 3.40787 2.92144 3.91013 3.36496 4.26631C3.82617 4.6367 4.2943 4.90482 4.85622 4.97645C5.1026 5.00785 5.35194 5.00785 5.59833 4.97645C6.16025 4.90482 6.62838 4.6367 7.08958 4.26631C7.5331 3.91012 8.03087 3.40788 8.63991 2.79336L10.257 1.16178Z" fill="#0A0A0A" />
                        </svg>
                    </div>
                </div>
                <table>
                    <tr className='Consistency_History_table-heading'>
                        <th>requested at</th>
                        <th>request type</th>
                        <th>charge</th>
                        <th>status</th>
                        <th>action date</th>
                        <th>noted</th>
                    </tr>
                    <tr>
                        <td>Requested at </td>
                        <td>Request type</td>
                        <td>Charge</td>
                        <td>Status</td>
                        <td>Action date</td>
                        <td>Noted</td>
                    </tr>
                    <tr>
                        <td>Requested at </td>
                        <td>Request type</td>
                        <td>Charge</td>
                        <td>Status</td>
                        <td>Action date</td>
                        <td>Noted</td>
                    </tr>
                    <tr>
                        <td>Requested at </td>
                        <td>Request type</td>
                        <td>Charge</td>
                        <td>Status</td>
                        <td>Action date</td>
                        <td>Noted</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Topup_Reset
