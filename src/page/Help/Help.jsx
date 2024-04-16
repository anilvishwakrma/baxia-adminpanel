import React from "react";
import { helpData } from "./helpData";
import { useNavigate } from "react-router-dom";

export default function Help() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row pb-3 mt-0 d-flex align-items-center">
        <div className="col-lg-6">
          <h4 className="sub-m">Explore Baxia FAQ for all your queries </h4>
        </div>
        <div className="col-lg-6">
          <div className="search-input position-relative">
            <i className="fa-solid fa-magnifying-glass" />
            <input
              className="form-control rounded-pill"
              placeholder="Search for articles..."
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {helpData.map((item) => (
          <div
            className="col-lg-6 col-md-6"
            onClick={() => navigate("/Help/" + item.name)}
          >
            <div className="card muted-card card5 mb-3">
              <div className="card-body">
                <div className="row d-flex align-items-center">
                  <div className="col-1">
                    <div className="svg-cover">{item.svg}</div>
                  </div>
                  <div className="col-11 ps-4">
                    <h5 className="m-0 fw-bold ps-3">{item.name}</h5>
                    <div className="links ps-3">
                      <a className="wb-color-1">by Baxia</a>
                      <a>• 1 article</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
