import React from 'react';
import Chart from 'react-apexcharts';

const state = {
    series: [
        {
            name: 'Equity',
            data: [
                [new Date('1 Jan 2017 GMT').getTime(), 1000],
                [new Date('5 Jan 2017 GMT').getTime(), 5000],
                [new Date('10 Jan 2017 GMT').getTime(), 4000],
                [new Date('15 Jan 2017 GMT').getTime(), 6000],
                [new Date('20 Jan 2017 GMT').getTime(), 7000],
                [new Date('25 Jan 2017 GMT').getTime(), 8000],
                [new Date('31 Jan 2017 GMT').getTime(), 2000],
            ],
        },
        {
            name: 'Balance',
            data: [
                [new Date('1 Jan 2017 GMT').getTime(), 4000],
                [new Date('5 Jan 2017 GMT').getTime(), 3000],
                [new Date('10 Jan 2017 GMT').getTime(), 2500],
                [new Date('15 Jan 2017 GMT').getTime(), 3500],
                [new Date('20 Jan 2017 GMT').getTime(), 5000],
                [new Date('25 Jan 2017 GMT').getTime(), 8000],
                [new Date('31 Jan 2017 GMT').getTime(), 9000],
            ],
        },
    ],
    options: {
        chart: {
            type: 'area',
            height: 350,
            stacked: true,
            events: {
                selection: function (chart, e) {
                    console.log(new Date(e.xaxis.min));
                },
            },
        },
        colors: ['#FFD700', '#858585'], // Yellow for Equity, #858585 for Balance
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            colors: ['#FFD700', '#858585'], // Yellow for Equity, #858585 for Balance
            width: 2, // Width of the line border
            opacity: 0.2, // Opacity of the line border (20%)
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical', // Set gradient type to vertical
                shadeIntensity: 1,
                opacityFrom: 0.7, // Adjust opacity as needed
                opacityTo: 0,
                stops: [0, 100],
            },
            colors: ['#FFD700', '#CED4DC'], // Yellow for Equity, different gradient for Balance
        },
        markers: {
            size: 4, // Size of the data points
            colors: ['#FFD700', '#858585'], // Yellow for Equity, #858585 for Balance
            strokeColors: '#fff', // Color of the data point stroke
            strokeWidth: 2, // Width of the data point stroke
            hover: {
                size: 7, // Size of the data points on hover
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            customHTML: function () {
                return `
                <div style="display: flex; align-items: center;">
                    <div style="width: 16px; height: 16px; background: none;">
                        <img src="/static/images/icons/Category.svg" alt="Equity Icon" style="width: 100%; height: 100%;">
                    </div>
                    <div style="margin-left: 5px;">Equity</div>
                </div>
                <div style="display: flex; align-items: center;">
                    <div style="width: 16px; height: 16px; background: none;">
                        <img src="/static/images/icons/Category1.svg" alt="Balance Icon" style="width: 100%; height: 100%;">
                    </div>
                    <div style="margin-left: 5px;">Balance</div>
                </div>
            `;
            },
        },
        xaxis: {
            type: 'datetime',
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                let tooltipContent = '<div style="background-color: #0A0A0A; color: white; padding: 12px 30px 12px 15px; border-radius: 5px; width:102px; height:66px; display: flex; justify-content: center; align-items: flex-start; flex-direction:column; gap:10px; ">';
                w.globals.series.map((serie, index) => {
                    tooltipContent += `<div style="font-size:12px; display:flex; align-items:center; text-align:center; height:16px; gap:10px; "> 
                    <img style="width:16px; height:16px; " src='/static/images/icons/${w.globals.seriesNames[index] === "Equity" ? "BoldColor" : "CategoryWhite"}.png' alt='Bold'/> ${serie[dataPointIndex]}</div>`;
                });
                tooltipContent += '</div>';
                return tooltipContent;
            }
        }
    },
};

const TradingAnalytics = () => {
    return (
        <div className='TradingAnalytics_chart' style={{ height: '100%', width: '100%' }}>
            <div className='Trade_Growth_View_filter'>
                <h3>Trade Growth View</h3>
                <div className='Trade_Growth_View_filter_cont'>
                    <h3>Filter by date</h3>
                    <div className='Trade_Growth_View_filter_cont_calss'>
                        <div>
                            <span>Start date : </span>
                            <input type='text' />
                        </div>
                        <div>
                            <span>Start date : </span>
                            <input type='text' />
                        </div>
                    </div>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" y="0.25" width="43.5" height="43.5" rx="21.75" stroke="#858585" stroke-width="0.5" />
                        <path d="M18.875 23.6667C18.875 23.3216 19.1548 23.0417 19.5 23.0417H24.5C24.8452 23.0417 25.125 23.3216 25.125 23.6667C25.125 24.0119 24.8452 24.2917 24.5 24.2917H19.5C19.1548 24.2917 18.875 24.0119 18.875 23.6667Z" fill="#0A0A0A" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 13.0417C19.8452 13.0417 20.125 13.3216 20.125 13.6667V14.7173C20.6827 14.7084 21.3024 14.7084 21.9908 14.7084H22.0092C22.6976 14.7084 23.3173 14.7084 23.875 14.7173V13.6667C23.875 13.3216 24.1548 13.0417 24.5 13.0417C24.8452 13.0417 25.125 13.3216 25.125 13.6667V14.7614C26.3849 14.8404 27.3529 15.0445 28.1498 15.6235C28.5566 15.9191 28.9143 16.2768 29.2099 16.6836C29.8781 17.6033 30.047 18.7508 30.1005 20.312C30.125 21.0264 30.125 21.8575 30.125 22.8242V22.8426C30.125 23.8093 30.125 24.6405 30.1005 25.3548C30.047 26.916 29.8781 28.0635 29.2099 28.9832C28.9143 29.39 28.5566 29.7477 28.1498 30.0433C27.2301 30.7115 26.0826 30.8804 24.5214 30.9339C23.807 30.9584 22.9758 30.9584 22.009 30.9584H21.9623C20.4318 30.9584 19.2322 30.9584 18.2804 30.8553C17.3091 30.7501 16.5221 30.5315 15.8502 30.0433C15.4434 29.7477 15.0857 29.39 14.7901 28.9832C14.3019 28.3113 14.0833 27.5243 13.9781 26.553C13.875 25.6012 13.875 24.4016 13.875 22.8711L13.875 22.8242C13.875 21.8575 13.875 21.0263 13.8995 20.312C13.953 18.7508 14.1219 17.6033 14.7901 16.6836C15.0857 16.2768 15.4434 15.9191 15.8502 15.6235C16.6471 15.0445 17.6151 14.8404 18.875 14.7614V13.6667C18.875 13.3216 19.1548 13.0417 19.5 13.0417ZM18.875 16.0145C17.74 16.0925 17.0848 16.2716 16.5849 16.6348C16.2843 16.8533 16.0198 17.1177 15.8014 17.4183C15.4382 17.9182 15.2591 18.5734 15.181 19.7084H28.819C28.7409 18.5734 28.5618 17.9182 28.1986 17.4183C27.9802 17.1177 27.7157 16.8533 27.4151 16.6348C26.9152 16.2716 26.26 16.0925 25.125 16.0145V16.1667C25.125 16.5119 24.8452 16.7917 24.5 16.7917C24.1548 16.7917 23.875 16.5119 23.875 16.1667V15.9674C23.3253 15.9585 22.7063 15.9584 22 15.9584C21.2937 15.9584 20.6747 15.9585 20.125 15.9674V16.1667C20.125 16.5119 19.8452 16.7917 19.5 16.7917C19.1548 16.7917 18.875 16.5119 18.875 16.1667V16.0145ZM28.866 20.9584H15.134C15.125 21.5081 15.125 22.1271 15.125 22.8334C15.125 24.4097 15.1259 25.5418 15.2208 26.4184C15.3145 27.2833 15.4938 27.8251 15.8014 28.2485C16.0198 28.5492 16.2843 28.8136 16.5849 29.032C17.0083 29.3396 17.5501 29.5189 18.415 29.6126C19.2917 29.7076 20.4237 29.7084 22 29.7084C22.707 29.7084 23.3265 29.7084 23.8765 29.6994C23.8802 29.3039 23.8925 29.0127 23.934 28.7505C24.2587 26.7002 25.8668 25.0921 27.9171 24.7674C28.1793 24.7259 28.4704 24.7136 28.866 24.7099C28.875 24.1599 28.875 23.5404 28.875 22.8334C28.875 22.1271 28.875 21.5081 28.866 20.9584ZM28.8188 25.9607C28.4813 25.9646 28.2835 25.975 28.1126 26.002C26.5972 26.242 25.4086 27.4306 25.1686 28.946C25.1415 29.1169 25.1312 29.3148 25.1273 29.6522C26.2609 29.5741 26.9155 29.395 27.4151 29.032C27.7157 28.8136 27.9802 28.5492 28.1986 28.2485C28.5615 27.7489 28.7407 27.0943 28.8188 25.9607Z" fill="#0A0A0A" />
                    </svg>
                </div>
            </div>
            <Chart options={state.options} series={state.series} type="area" />
        </div>
    );
};

export default TradingAnalytics;
