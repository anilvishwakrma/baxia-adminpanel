import React, { useState } from 'react'
import Competitionlist from '../page/Competition/Competitionlist';
import Competition_BG from '../assets/SVG/Competitio_n_IMG.svg'

const CompetitionIndex = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className='Competition_page'>
      <div className='Competition_BG' style={{ background: `url(${Competition_BG})` }}>
        <div>
        <h2>Baxia Monthly Competitions</h2>
        <p>Win big every month in Baxia’s free trading competition, Unleash your trading potential, win cash prizes and earn challenge account. Register now</p>
        </div>
      </div>
      <div className="Account_tabs ">
        <ul>
          <li className={activeTab === 0 ? 'tab active' : 'tab'}
            onClick={() => handleTabClick(0)}>
            Competition list
          </li>
          <li className={activeTab === 1 ? 'tab active' : 'tab'}
            onClick={() => handleTabClick(1)}>
            Upcoming
          </li>
          <li className={activeTab === 2 ? 'tab active' : 'tab'}
            onClick={() => handleTabClick(2)}>
            In Progress
          </li>
          <li className={activeTab === 3 ? 'tab active' : 'tab'}
            onClick={() => handleTabClick(3)}>
            Finished
          </li>
        </ul>
        <div className="Account_tabs_perent">
          <div className='Account_tabs_content_box'>
            {
              activeTab === 0 &&
              <Competitionlist />
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default CompetitionIndex
