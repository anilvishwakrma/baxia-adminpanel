import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import DODET from '../../assets/SVG/tree_do_Do.svg'
import SERCH from '../../assets/SVG/search.svg'

const DonutChart = () => {
    const [series1, setSeries1] = useState([30, 30, 30, 30]);
    const [options1, setOptions1] = useState({
        chart: {
            type: 'donut',
            events: {
                render: function (event) {
                    var chart = event.target;

                    // Get chart width and height
                    var width = chart.chartWidth,
                        height = chart.chartHeight;

                    // Draw custom border for each segment
                    chart.series[0].points.forEach(function (point) {
                        var color = point.color,
                            startAngle = point.startAngle,
                            endAngle = point.endAngle,
                            innerRadius = point.shapeArgs.innerR,
                            outerRadius = point.shapeArgs.r;

                        // Calculate the coordinates for the path of the border
                        var path = [
                            'M',
                            Math.cos(startAngle) * innerRadius + width / 2,
                            Math.sin(startAngle) * innerRadius + height / 2,
                            'L',
                            Math.cos(startAngle) * outerRadius + width / 2,
                            Math.sin(startAngle) * outerRadius + height / 2,
                            'A',
                            outerRadius,
                            outerRadius,
                            0,
                            0,
                            1,
                            Math.cos(endAngle) * outerRadius + width / 2,
                            Math.sin(endAngle) * outerRadius + height / 2,
                            'L',
                            Math.cos(endAngle) * innerRadius + width / 2,
                            Math.sin(endAngle) * innerRadius + height / 2,
                            'A',
                            innerRadius,
                            innerRadius,
                            0,
                            0,
                            0,
                            Math.cos(startAngle) * innerRadius + width / 2,
                            Math.sin(startAngle) * innerRadius + height / 2,
                            'Z'
                        ];

                        // Create or update the custom border path
                        if (!point.customBorder) {
                            point.customBorder = chart.renderer.path(path)
                                .attr({
                                    'stroke-width': 1,
                                    stroke: color,
                                    fill: 'none',
                                    'zIndex': 1000
                                })
                                .add();
                        } else {
                            point.customBorder.attr({
                                d: path
                            });
                        }
                    });
                }
            }
        },
        labels: ['US30', 'XAUUSD', 'USDCD', 'EURUSD'],
        dataLabels: {
            enabled: false, // Setting this to false will remove the percentage labels
        },
        colors: ['#0A0A0A', '#FFD700', '#FFFFFF', '#008000'],
        legend: {
            show: false, // Hide the default legend
        },
        plotOptions: {
            pie: {
                innerSize: '60%', // Adjust inner size to create a donut chart
                borderWidth: 10,
                borderRadius: 20 // Remove default border
            }
        }
    });

    const handleCheckboxChange = (event, index) => {
        const updatedSeries = [...series1];
        updatedSeries[index] = event.target.checked ? 30 : 0; // Change 30 to the desired value when checked
        setSeries1(updatedSeries);
    };

    return (
        <div className='Graph_chaet'>
            <div className='Graph_chaet_heding'>
                <h3>Graph</h3>
                <img src={DODET} />
            </div>
            <div className='grapg_serch'>
                <img src={SERCH} />
                <input placeholder='Search' />
            </div>
            <div className='Reset_All_grapd_div'><p className='Reset_All_grapd'>Reset All</p></div>
            <div>
                <div className='check_box_grapg'>
                    <div class="check_grpg_box">
                        <input type="checkbox" id="checkbox_1" onChange={(e) => handleCheckboxChange(e, 0)} />
                        <label for="checkbox_1"></label>
                        <span for="checkbox_1">US30</span>
                    </div>
                    <div class="check_grpg_box">
                        <input type="checkbox" id="checkbox_2" onChange={(e) => handleCheckboxChange(e, 1)} />
                        <label for="checkbox_2"></label>
                        <span for="checkbox_2">XAUUSD</span>
                    </div>
                    <div class="check_grpg_box">
                        <input type="checkbox" id="checkbox_3" onChange={(e) => handleCheckboxChange(e, 2)} />
                        <label for="checkbox_3"></label>
                        <span for="checkbox_3">USDCD</span>
                    </div>
                    <div class="check_grpg_box">
                        <input type="checkbox" id="checkbox_4" onChange={(e) => handleCheckboxChange(e, 3)} />
                        <label for="checkbox_4"></label>
                        <span for="checkbox_4">EURUSD</span>
                    </div>
                </div>
                <div className='USDCD_grapg'>
                    <Chart options={options1} series={series1} type="donut" />
                    <div className='USDCD_grapg_srcal'>
                        <span style={{ background: '#0A0A0A' }}></span>
                        <p>US30</p>
                    </div>
                    <div className='USDCD_grapg_srcal'>
                        <span style={{ background: '#FFD700' }}></span>
                        <p>XAUUSD</p>
                    </div>
                    <div className='USDCD_grapg_srcal'>
                        <span style={{ background: '#FFFFFF' }}></span>
                        <p>USDCD</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DonutChart;
