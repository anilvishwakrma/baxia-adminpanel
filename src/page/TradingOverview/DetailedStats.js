import React from 'react';
import TEBAL_Q from '../../assets/SVG/table_q.svg';

const DetailedStats = () => {
    const Detailed = [
        { id: 1, name: 'Equity', icons: TEBAL_Q, price: '$0' },
        { id: 2, name: 'Balance', icons: TEBAL_Q, price: '$0' },
        { id: 3, name: 'Profitability', icons: TEBAL_Q, price: '', className: 'line_bg_color' }, // Added className property
        { id: 4, name: 'Avg. Winning trade', icons: TEBAL_Q, price: '$0' },
        { id: 5, name: 'Avg. Losing trade', icons: TEBAL_Q, price: '$0' },
        { id: 6, name: 'Trades', icons: TEBAL_Q, price: '$0' },
        { id: 7, name: 'Lots', icons: TEBAL_Q, price: '$0' },
        { id: 7, name: 'Avg. RRR', icons: TEBAL_Q, price: '$0' },
    ];
    const Detailed1 = [
        { id: 1, name: 'Equity', icons: TEBAL_Q, price: '$0' },
        { id: 2, name: 'Balance', icons: TEBAL_Q, price: '$0' },
        { id: 3, name: 'Profitability', icons: TEBAL_Q, price: '$0'}, // Added className property
        { id: 4, name: 'Avg. Winning trade', icons: TEBAL_Q, price: '$0' },
        { id: 5, name: 'Avg. Losing trade', icons: TEBAL_Q, price: '$0' },
        { id: 6, name: 'Trades', icons: TEBAL_Q, price: '$0' },
        { id: 7, name: 'Lots', icons: TEBAL_Q, price: '$0' },
        { id: 7, name: 'Avg. RRR', icons: TEBAL_Q, price: '$0' },
    ];
    const Detailed2 = [
        { id: 1, name: 'Equity', icons: TEBAL_Q, price: '$0' },
        { id: 2, name: 'Balance', icons: TEBAL_Q, price: '$0' },
        { id: 3, name: 'Profitability', icons: TEBAL_Q, price: '$0', }, // Added className property
        { id: 4, name: 'Avg. Winning trade', icons: TEBAL_Q, price: '$0' },
        { id: 5, name: 'Avg. Losing trade', icons: TEBAL_Q, price: '$0' },
        { id: 6, name: 'Trades', icons: TEBAL_Q, price: '$0' },
        { id: 7, name: 'Lots', icons: TEBAL_Q, price: '$0' },
        { id: 7, name: 'Avg. RRR', icons: TEBAL_Q, price: '$0' },
    ];

    return (
        <div className='DetailedStats'>
            <div className='DetailedStats_grid'>
                <div className='DetailedStats_grid_box'>
                    <ul>
                        {Detailed.map((item, index) => (
                            <li key={item.id} className={`DetailedStats_grid_box_items ${item.id === 3 ? 'line_bg_color' : ''}`}>
                                <p>{item.name} <img src={item.icons} alt={item.name} /></p>
                                <b>{item.price}</b>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className='DetailedStats_grid_box'>
                    <ul>
                        {Detailed1.map((item, index) => (
                            <li key={item.id} className='DetailedStats_grid_box_items'>
                                <p>{item.name} <img src={item.icons} alt={item.name} /></p>
                                <b>{item.price}</b>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='DetailedStats_grid_box'>
                    <ul>
                        {Detailed2.map((item, index) => (
                            <li key={item.id} className='DetailedStats_grid_box_items'>
                                <p>{item.name} <img src={item.icons} alt={item.name} /></p>
                                <b>{item.price}</b>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='Trading_History'>
                <div className='Consistency_History'>
                    <div className='Heading'>Trading History</div>
                    <table>
                        <tr className='Consistency_History_table-heading'>
                            <th>SN</th>
                            <th>open time</th>
                            <th>open price</th>
                            <th>close price</th>
                            <th>profit</th>
                            <th>lots</th>
                            <th>commission</th>
                            <th>swap</th>
                            <th>symbol</th>
                            <th>type</th>
                            <th>details</th>
                        </tr>
                        <tr>
                            <td>SN </td>
                            <td>Open time </td>
                            <td>Open price </td>
                            <td>Close price </td>
                            <td>Profit </td>
                            <td>lots </td>
                            <td>Commission </td>
                            <td>Swap </td>
                            <td>$ </td>
                            <td>Type </td>
                            <td>Details </td>
                        </tr>
                        <tr>
                            <td>SN </td>
                            <td>Open time </td>
                            <td>Open price </td>
                            <td>Close price </td>
                            <td>Profit </td>
                            <td>lots </td>
                            <td>Commission </td>
                            <td>Swap </td>
                            <td>$ </td>
                            <td>Type </td>
                            <td>Details </td>
                        </tr>
                        <tr>
                            <td>SN </td>
                            <td>Open time </td>
                            <td>Open price </td>
                            <td>Close price </td>
                            <td>Profit </td>
                            <td>lots </td>
                            <td>Commission </td>
                            <td>Swap </td>
                            <td>$ </td>
                            <td>Type </td>
                            <td>Details </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DetailedStats;
