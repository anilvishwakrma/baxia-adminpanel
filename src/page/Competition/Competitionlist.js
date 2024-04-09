import React from 'react'
import { Assets } from '../../assets'
import CompetitionTabs from './CompetitionTabs'
import Participating from '../../page/Competition/Participating'

const Competitionlist = ({ CompetitionModal, participat }) => {

    const Competitionlist = [
        { name: 'March competition', pending: 'Upcoming', date: '15 Feb , 2024 to 20 Feb , 2024' },
        { name: 'March competition', pending: 'Upcoming', date: '15 Feb , 2024 to 20 Feb , 2024' },
        { name: 'March competition', pending: 'Upcoming', date: '15 Feb , 2024 to 20 Feb , 2024' },
        { name: 'March competition', pending: 'Upcoming', date: '15 Feb , 2024 to 20 Feb , 2024' },
        { name: 'March competition', pending: 'Upcoming', date: '15 Feb , 2024 to 20 Feb , 2024' },
        { name: 'March competition', pending: 'Upcoming', date: '15 Feb , 2024 to 20 Feb , 2024' },
    ]


    return (
        <div className='Competition_list'>
            <div className='Competition_list_box'>
                {Competitionlist.map((item, index) => {
                    return (
                        <div key={index} className='Competition_list_box_items'>
                            <div className='Competition_list_box_items_padding'>
                                <div className='Competition_list_items_name_box'>
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" fill="#FFF9D9" />
                                        <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#FFD700" />
                                        <path d="M31.6217 26.2803C31.7479 25.8791 32.2521 25.8791 32.3783 26.2803C32.7077 27.3275 33.6668 28.0686 34.7837 28.0686C34.8925 28.0686 34.9623 28.1009 35.0142 28.1424C35.0735 28.1898 35.1298 28.2671 35.162 28.3695C35.227 28.5763 35.171 28.7673 35.0061 28.8911C34.124 29.5531 33.7709 30.7078 34.0987 31.7499C34.1708 31.9791 34.0892 32.1616 33.9428 32.2715C33.8679 32.3277 33.7897 32.3522 33.7246 32.3542C33.6683 32.356 33.5931 32.3429 33.498 32.2715C32.6071 31.6029 31.3928 31.6029 30.502 32.2715C30.4069 32.3429 30.3316 32.356 30.2754 32.3542C30.2102 32.3522 30.1321 32.3277 30.0571 32.2715C29.9107 32.1616 29.8291 31.9791 29.9012 31.7499C30.229 30.7078 29.8759 29.5531 28.9938 28.8911C28.8289 28.7673 28.7729 28.5763 28.838 28.3695C28.8702 28.2671 28.9265 28.1898 28.9857 28.1424C29.0377 28.1009 29.1074 28.0686 29.2163 28.0686C30.3331 28.0686 31.2923 27.3275 31.6217 26.2803Z" fill="#FFD700" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6496 17.1697C27.8786 16.7704 29.3536 16.7706 31.7709 16.771H32.2294C34.6466 16.7706 36.1217 16.7704 37.3507 17.1697C39.8306 17.9755 41.7748 19.9198 42.5806 22.3997L42.5928 22.4377H43.0067C48.2563 22.4377 50.5113 29.099 46.3413 32.2878L46.3262 32.2993L42.8394 34.7734C42.7093 34.8657 42.5748 34.9514 42.4363 35.0301C42.4212 35.0696 42.4058 35.1091 42.3899 35.1485C42.028 36.0475 41.3215 37.1263 40.642 37.8174C39.5347 38.9436 38.3888 39.443 36.559 40.2405L36.4374 40.2935C35.6492 40.6371 34.8522 40.9488 34.1122 41.1762C33.7618 41.2839 33.408 41.3779 33.0626 41.4462V45.1044H37.6668C38.2536 45.1044 38.7293 45.5801 38.7293 46.1669C38.7293 46.7537 38.2536 47.2294 37.6668 47.2294H26.3335C25.7467 47.2294 25.271 46.7537 25.271 46.1669C25.271 45.5801 25.7467 45.1044 26.3335 45.1044H30.9376V41.4462C30.5923 41.3779 30.2385 41.2839 29.888 41.1762C29.148 40.9488 28.3511 40.6371 27.5629 40.2935L27.4413 40.2405C25.6114 39.443 24.4655 38.9436 23.3582 37.8174C22.6788 37.1263 21.9723 36.0475 21.6103 35.1485C21.594 35.108 21.5781 35.0674 21.5627 35.0268C21.4271 34.9516 21.2957 34.8689 21.169 34.779L17.6742 32.2993L17.6591 32.2878C13.4891 29.099 15.7442 22.4377 20.9937 22.4377H21.4074L21.4196 22.3997C22.2254 19.9198 24.1697 17.9755 26.6496 17.1697ZM21.0678 24.5627H20.9937C17.7823 24.5627 16.3993 28.6303 18.9358 30.5889L21.0493 32.0885C21.0208 31.4053 21.0208 30.6417 21.0209 29.7562L21.021 27.6313C21.0209 26.3857 21.0209 25.3916 21.0678 24.5627ZM42.951 32.0886L45.0646 30.5889C47.6011 28.6303 46.2182 24.5627 43.0067 24.5627H42.9325C42.9794 25.3915 42.9793 26.3858 42.9793 27.6311L42.9793 29.7575C42.9794 30.6425 42.9795 31.4057 42.951 32.0886ZM34.4054 25.6427C33.6554 23.2583 30.3446 23.2583 29.5946 25.6427C29.5321 25.8412 29.3675 25.9436 29.2163 25.9436C26.701 25.9436 25.8165 29.1633 27.7183 30.5907C27.862 30.6986 27.9382 30.9086 27.8742 31.1123C27.5082 32.2758 27.9791 33.3689 28.7816 33.9711C29.589 34.577 30.7831 34.7174 31.7775 33.9711C31.9126 33.8697 32.0874 33.8697 32.2224 33.9711C33.2169 34.7174 34.411 34.577 35.2184 33.9711C36.0208 33.3689 36.4918 32.2758 36.1258 31.1123C36.0617 30.9086 36.1379 30.6986 36.2817 30.5907C38.1835 29.1633 37.299 25.9436 34.7837 25.9436C34.6325 25.9436 34.4678 25.8412 34.4054 25.6427Z" fill="#FFD700" />
                                    </svg>
                                    <div className='Competition_list_items_name_box_name_1'>
                                        <p className='Competition_list_items_name_heding'>
                                            <spna>{item.name}</spna>
                                            <spna className='pending_name_box'>{item.pending}</spna>
                                        </p>
                                        <p>
                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.1875 10.5C5.1875 10.1893 5.43934 9.9375 5.75 9.9375H10.25C10.5607 9.9375 10.8125 10.1893 10.8125 10.5C10.8125 10.8107 10.5607 11.0625 10.25 11.0625H5.75C5.43934 11.0625 5.1875 10.8107 5.1875 10.5Z" fill="#0A0A0A" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 0.9375C6.06066 0.9375 6.3125 1.18934 6.3125 1.5V2.44545C6.81443 2.4375 7.37213 2.4375 7.99171 2.4375H8.00829C8.62787 2.4375 9.18557 2.4375 9.6875 2.44545V1.5C9.6875 1.18934 9.93934 0.9375 10.25 0.9375C10.5607 0.9375 10.8125 1.18934 10.8125 1.5V2.48519C11.9464 2.55627 12.8176 2.74001 13.5348 3.26111C13.9009 3.52711 14.2229 3.84907 14.4889 4.21518C15.0903 5.04292 15.2423 6.07566 15.2905 7.48074C15.3125 8.12365 15.3125 8.87168 15.3125 9.74174V9.75826C15.3125 10.6283 15.3125 11.3764 15.2905 12.0193C15.2423 13.4243 15.0903 14.4571 14.4889 15.2848C14.2229 15.6509 13.9009 15.9729 13.5348 16.2389C12.7071 16.8403 11.6743 16.9923 10.2693 17.0405C9.62631 17.0625 8.87822 17.0625 8.00809 17.0625H7.96605C6.58865 17.0625 5.50896 17.0625 4.65236 16.9697C3.7782 16.875 3.06992 16.6783 2.46518 16.2389C2.09907 15.9729 1.77711 15.6509 1.51111 15.2848C1.07174 14.6801 0.875005 13.9718 0.780296 13.0976C0.687489 12.241 0.687494 11.1613 0.6875 9.78394L0.6875 9.7417C0.6875 8.87166 0.6875 8.12364 0.709526 7.48074C0.757666 6.07566 0.909722 5.04292 1.51111 4.21518C1.77711 3.84907 2.09907 3.52711 2.46518 3.26111C3.18242 2.74001 4.05356 2.55627 5.1875 2.48519V1.5C5.1875 1.18934 5.43934 0.9375 5.75 0.9375ZM5.1875 3.61294C4.16596 3.68319 3.57633 3.84439 3.12643 4.17126C2.85583 4.36786 2.61786 4.60583 2.42126 4.87643C2.09439 5.32633 1.93319 5.91596 1.86294 6.9375H14.1371C14.0668 5.91596 13.9056 5.32633 13.5787 4.87643C13.3821 4.60583 13.1442 4.36786 12.8736 4.17126C12.4237 3.84439 11.834 3.68319 10.8125 3.61294V3.75C10.8125 4.06066 10.5607 4.3125 10.25 4.3125C9.93934 4.3125 9.6875 4.06066 9.6875 3.75V3.57059C9.19281 3.56254 8.63567 3.5625 8 3.5625C7.36433 3.5625 6.80719 3.56254 6.3125 3.57059V3.75C6.3125 4.06066 6.06066 4.3125 5.75 4.3125C5.43934 4.3125 5.1875 4.06066 5.1875 3.75V3.61294ZM14.1794 8.0625H1.82059C1.81254 8.55719 1.8125 9.11432 1.8125 9.75C1.8125 11.1687 1.81327 12.1875 1.89875 12.9765C1.98309 13.7549 2.14444 14.2426 2.42126 14.6236C2.61786 14.8942 2.85583 15.1321 3.12643 15.3287C3.50744 15.6056 3.9951 15.7669 4.77353 15.8512C5.56249 15.9367 6.58132 15.9375 8 15.9375C8.63626 15.9375 9.19384 15.9375 9.68887 15.9294C9.69214 15.5734 9.70322 15.3113 9.74059 15.0754C10.0329 13.2301 11.4801 11.7829 13.3254 11.4906C13.5613 11.4532 13.8234 11.4421 14.1794 11.4389C14.1875 10.9438 14.1875 10.3863 14.1875 9.75C14.1875 9.11432 14.1875 8.55719 14.1794 8.0625ZM14.1369 12.5646C13.8332 12.5681 13.6551 12.5774 13.5014 12.6017C12.1375 12.8178 11.0678 13.8875 10.8517 15.2514C10.8274 15.4051 10.8181 15.5832 10.8146 15.8869C11.8348 15.8166 12.424 15.6554 12.8736 15.3287C13.1442 15.1321 13.3821 14.8942 13.5787 14.6236C13.9054 14.174 14.0666 13.5848 14.1369 12.5646Z" fill="#0A0A0A" />
                                            </svg>
                                            <span className='datename_box'>Date:</span>
                                            <spna className='list_items_name_box_date'>{item.date}</spna>
                                        </p>
                                    </div>
                                </div>
                                <div className='Contestants_Competition_list'>
                                    <div className='Contestants_Competition_list_img'>
                                        <img src={Assets.IMG_1_SCROLL} />
                                        <img src={Assets.IMG_2_SCROLL} />
                                        <img src={Assets.IMG_3_SCROLL} />
                                    </div>
                                    <p><span><b>40,000+</b></span> <span>Contestants</span></p>
                                </div>
                                <div className='Prize_Pool_competition'>
                                    <h3>Prize Pool</h3>
                                    <p><b>$ 10,000+</b> Cash & <b>$1.50M</b> worth of challenge amount</p>
                                </div>
                                <div className='competition_Time_until_start'>
                                    <p>Time until start (GMT +02.00)</p>
                                    <ul>
                                        <li><b>15</b><span>Days</span> </li>
                                        <li><b>10</b><span>Hours</span> </li>
                                        <li><b>25</b><span>Min</span> </li>
                                        <li><b>35</b><span>Sec</span> </li>
                                    </ul>
                                </div>
                                <div className='competition_button'>
                                    <button data-bs-toggle="modal" data-bs-target="#CompetitionModal">Details</button>
                                    <button data-bs-toggle="modal" data-bs-target="#participat" className='Register_button'>Register</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='pagination'>
                <div className='next_Previous'>
                    <p>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.10655 1.27741C5.35172 1.03442 5.35348 0.638695 5.11049 0.393531C4.86751 0.148366 4.47178 0.146601 4.22662 0.389587L2.73101 1.87191C2.1677 2.4302 1.7073 2.88649 1.3808 3.29305C1.04127 3.71582 0.795498 4.14493 0.729843 4.66003C0.701055 4.88588 0.701055 5.11444 0.729843 5.3403C0.795498 5.85539 1.04128 6.28451 1.3808 6.70728C1.7073 7.11384 2.16769 7.57012 2.731 8.1284L4.22662 9.61074C4.47178 9.85372 4.86751 9.85196 5.11049 9.6068C5.35348 9.36163 5.35172 8.96591 5.10655 8.72292L3.63741 7.26683C3.04117 6.67588 2.63216 6.26918 2.35541 5.92458C2.08658 5.58983 1.99436 5.37481 1.96981 5.18225C1.9544 5.06134 1.9544 4.93899 1.96981 4.81808C1.99436 4.62551 2.08658 4.4105 2.35541 4.07575C2.63216 3.73114 3.04117 3.32444 3.63741 2.7335L5.10655 1.27741Z" fill="#858585" />
                        </svg>
                        Previous</p>
                    <ul>
                        <li className='active'>1</li>
                        <li className=''>2</li>
                        <li className=''>3</li>
                        <li className=''>...</li>
                        <li className=''>6</li>
                    </ul>
                    <p>Next
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.77322 0.389587C1.52805 0.146601 1.13233 0.148366 0.889343 0.393531C0.646357 0.638695 0.648122 1.03442 0.893286 1.27741L2.36243 2.73349C2.95867 3.32444 3.36767 3.73114 3.64442 4.07575C3.91326 4.4105 4.00548 4.62551 4.03003 4.81808C4.04544 4.93899 4.04544 5.06134 4.03003 5.18225C4.00548 5.37481 3.91326 5.58983 3.64442 5.92457C3.36767 6.26918 2.95867 6.67588 2.36243 7.26683L0.893286 8.72292C0.648122 8.96591 0.646357 9.36163 0.889343 9.6068C1.13233 9.85196 1.52805 9.85372 1.77322 9.61074L3.26883 8.12842C3.83214 7.57013 4.29253 7.11384 4.61904 6.70728C4.95856 6.28451 5.20434 5.85539 5.26999 5.3403C5.29878 5.11444 5.29878 4.88588 5.26999 4.66003C5.20434 4.14493 4.95856 3.71582 4.61904 3.29305C4.29253 2.88648 3.83214 2.4302 3.26882 1.87191L1.77322 0.389587Z" fill="#0A0A0A" />
                        </svg>
                    </p>
                </div>
            </div>
            <Participating />
            <CompetitionTabs />
        </div>
    )
}

export default Competitionlist