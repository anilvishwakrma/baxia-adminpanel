import React from "react";
import WellcomeTabs from "../Component/WellcomeTabs";
import Welcome_BG from "../assets/SVG/Welcome_BG.svg";

const Account = () => {
  return (
    <div className="">
      <div
        className="wellcome_section"
        style={{ background: `url(${Welcome_BG})` }}
      >
        <div className="Welcome_to_Baxia ">
          <h1>Welcome to Baxia </h1>
          <p>
            Complete the challenge phases, Harness your trading skills, Unlock
            your Baxia account
          </p>
        </div>
        <button className="Welcome_to_Baxia_button">Create new account</button>
      </div>
      <WellcomeTabs />
    </div>
  );
};

export default Account;
