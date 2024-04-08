import React, { useState } from 'react'
import Prizepool from './Prizepool';
import Competition_BG from '../../assets/SVG/PrizeBG.svg'
import CLOSE from '../../assets/SVG/close_modal.svg'
import Rules from './Rules';
const CompetitionTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>

            <div class="modal fade" id="CompetitionModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable Competition_MOdal">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='March_competition_Prize_and_Rules' style={{ background: `url(${Competition_BG})` }}>
                                <div className='March_competition_Prize_BG'>
                                    <h2>March competition Prize and Rules</h2>
                                    <img src={CLOSE} data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="March_competition_Prize_Tabs ">
                                    <ul>
                                        <li className={activeTab === 0 ? 'tab active' : 'tab'}
                                            onClick={() => handleTabClick(0)}>
                                            Prize pool
                                        </li>
                                        <li className={activeTab === 1 ? 'tab active' : 'tab'}
                                            onClick={() => handleTabClick(1)}>
                                            Rules
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="March_competition_Prize_Tabs_constent">
                                {
                                    activeTab === 0 &&
                                    <Prizepool />
                                }
                                {
                                    activeTab === 1 &&
                                    <Rules />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompetitionTabs
