import React, { useState } from 'react'

const Topup_Reset = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [options] = useState(['Select filter 1', 'Select filter 2', 'Select filter 3', 'Select filter 4']);
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, options.length - 1));
        }
    };
    const handleChange = (e) => {
        setSelectedIndex(parseInt(e.target.value, 10));
    };
    return (
        <div className='Topup_Reset'>
            <div className='Consistency_History'>
                <div className='Topup_Reset_heading'>
                    <div className='Heading'>Top-up & Reset</div>
                    
                    <select
                        value={selectedIndex}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={index}>{option}</option>
                        ))}
                    </select>
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
