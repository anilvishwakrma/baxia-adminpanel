import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Enroll from "../../Component/Enroll";

export default function BillingStellarChallenge() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState({
    id: 1,
    name: "",
    feePrice: "",
    price: 6000,
  });
  const plans = [
    {
      id: 1,
      name: "Stellar 2-step challenge",
      feePrice: 59,
      price: 6000,
    },
    {
      id: 2,
      name: "Stellar 2-step challenge",
      feePrice: 119,
      price: 15000,
    },
    {
      id: 3,
      name: "Stellar 2-step challenge",
      feePrice: 199,
      price: 25000,
    },
    {
      id: 4,
      name: "Stellar 2-step challenge",
      feePrice: 299,
      price: 50000,
    },
    {
      id: 5,
      name: "Stellar 2-step challenge",
      feePrice: 519,
      price: 100000,
    },
    {
      id: 6,
      name: "Stellar 2-step challenge",
      feePrice: 999,
      price: 200000,
    },
  ];
  return (
    <div>
      <section className="head-section pt-0">
        <div className="container-fluid mb-3 px-lg-0">
          <div className="row">
            <div className="col-lg-12">
              <h5>Billing Payment Method</h5>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-12 nav-m">
              <Link
                to="/Billing/stellar-challenge"
                className={
                  (pathname === "/Billing/stellar-challenge" ||
                    pathname === "/Billing/evaluation" ||
                    pathname === "/Billing/express" ||
                    pathname === "/Billing/free-trial") &&
                  "active"
                }
              >
                My Plan
              </Link>
              <Link
                to="/Billing/history"
                className={pathname === "/Billing/history" && "active"}
              >
                Payment history
              </Link>
            </div>
          </div>
          <div className="bdr-dashed mt-3" />
        </div>
      </section>

      <div className="row pb-3">
        <div className="col-lg-12">
          <h4 className="sub-m">Plans &amp; Pricing</h4>
        </div>
      </div>

      <div className="card card-m">
        <div className="card-body">
          <div className="row">
            {/* 3 */}
            <div className="col-lg-3">
              <ul className="ps-0">
                <li
                  className={
                    pathname === "/Billing/stellar-challenge" && "active-li"
                  }
                  onClick={() => navigate("/Billing/stellar-challenge")}
                >
                  <a>Stellar challenge</a>
                </li>
                <li
                  className={pathname === "/Billing/evaluation" && "active-li"}
                  onClick={() => navigate("/Billing/evaluation")}
                >
                  <a>Evaluation</a>
                </li>
                <li
                  className={pathname === "/Billing/express" && "active-li"}
                  onClick={() => navigate("/Billing/express")}
                >
                  <a>Express</a>
                </li>
                <li
                  className={pathname === "/Billing/free-trial" && "active-li"}
                  onClick={() => navigate("/Billing/free-trial")}
                >
                  <a>Free trial</a>
                </li>
              </ul>
            </div>
            {/* 5 */}
            <div className="col-lg-5 px-lg-5">
              {plans.length
                ? plans.map((item, index) => (
                    <div
                      key={index}
                      className="check-div mb-2"
                      onClick={() => setCurrentPlan(item)}
                    >
                      <label
                        htmlFor={item.name + item.id}
                        className={`row d-flex align-items-center ${
                          item.id === currentPlan?.id && `active`
                        }`}
                      >
                        <div className="col-7">
                          <p className="m-0">{item.name}</p>
                          <p className="m-0 fw-bold">
                            One Time Fee ${item.feePrice}
                          </p>
                        </div>
                        <div className="col-5">
                          <div className="form-check px-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              checked={item.id === currentPlan?.id}
                              id={item.name + item.id}
                              defaultValue="option1"
                            />
                            <span className="form-check-label">
                              ${item.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </label>
                    </div>
                  ))
                : null}
              {/* <div className="check-div mb-2">
                <label
                  htmlFor="exampleRadios22"
                  className="row d-flex align-items-center"
                >
                  <div className="col-7">
                    <p className="m-0">Stellar 2-step challenge</p>
                    <p className="m-0 fw-bold">One Time Fee $119</p>
                  </div>
                  <div className="col-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios22"
                        defaultValue="option1"
                      />
                      <span className="form-check-label">$15,000</span>
                    </div>
                  </div>
                </label>
              </div>
              <div className="check-div mb-2">
                <label
                  htmlFor="exampleRadios33"
                  className="row d-flex align-items-center"
                >
                  <div className="col-7">
                    <p className="m-0">Stellar 2-step challenge</p>
                    <p className="m-0 fw-bold">One Time Fee $119</p>
                  </div>
                  <div className="col-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios33"
                        defaultValue="option1"
                      />
                      <span className="form-check-label">$25,000</span>
                    </div>
                  </div>
                </label>
              </div>
              <div className="check-div mb-2">
                <label
                  htmlFor="exampleRadios44"
                  className="row d-flex align-items-center"
                >
                  <div className="col-7">
                    <p className="m-0">Stellar 2-step challenge</p>
                    <p className="m-0 fw-bold">One Time Fee $299</p>
                  </div>
                  <div className="col-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios44"
                        defaultValue="option1"
                      />
                      <span className="form-check-label">$50,000</span>
                    </div>
                  </div>
                </label>
              </div>
              <div className="check-div mb-2">
                <label
                  htmlFor="exampleRadios55"
                  className="row d-flex align-items-center"
                >
                  <div className="col-7">
                    <p className="m-0">Stellar 2-step challenge</p>
                    <p className="m-0 fw-bold">One Time Fee $519</p>
                  </div>
                  <div className="col-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios55"
                        defaultValue="option1"
                      />
                      <span className="form-check-label">$100,000</span>
                    </div>
                  </div>
                </label>
              </div>
              <div className="check-div mb-2">
                <label
                  htmlFor="exampleRadios66"
                  className="row d-flex align-items-center"
                >
                  <div className="col-7">
                    <p className="m-0">Stellar 2-step challenge</p>
                    <p className="m-0 fw-bold">One Time Fee $999</p>
                  </div>
                  <div className="col-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios66"
                        defaultValue="option1"
                      />
                      <span className="form-check-label">$200,000</span>
                    </div>
                  </div>
                </label>
              </div> */}
            </div>
            {/* 4 */}
            <div className="col-lg-4 cl-4-m">
              <div className="row mb-3 plan-m-bdr">
                <div className="col-lg-12">
                  <h4>Select plan type</h4>
                  <div className="d-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="1-Step"
                      />
                      <label className="form-check-label" htmlFor="1-Step">
                        1-Step
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="2-Step"
                      />
                      <label className="form-check-label" htmlFor="2-Step">
                        2-Step
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3 plan-m-bdr">
                <div className="col-lg-12">
                  <h4>Select your platform</h4>
                  <div className="d-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault1"
                        id="Platform4"
                      />
                      <label className="form-check-label" htmlFor="Platform4">
                        Platform (4)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault1"
                        id="Platform5"
                      />
                      <label className="form-check-label" htmlFor="Platform5">
                        Platform (5)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3 plan-m-bdr">
                <div className="col-lg-12">
                  <h4>Select your broker</h4>
                  <div className="d-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault3"
                        id="Baxia"
                      />
                      <label className="form-check-label" htmlFor="Baxia">
                        Baxia
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3 plan-m-bdr">
                <div className="col-lg-12">
                  <h4>Select your preference</h4>
                  <div className="d-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault4"
                        id="Swap"
                      />
                      <label className="form-check-label" htmlFor="Swap">
                        Swap
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault4"
                        id="Swap-free"
                      />
                      <label className="form-check-label" htmlFor="Swap-free">
                        Swap free (Price+10%)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3 ">
                <div className="col-lg-12">
                  <h4>Select add on</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault5"
                      id="Lifetime-payout"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Lifetime-payout"
                    >
                      Lifetime payout 95% (Price +30%)
                    </label>
                  </div>{" "}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault5"
                      id="trading_days"
                    />
                    <label className="form-check-label" htmlFor="trading_days">
                      No minimum trading days (Price + 15%)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault5"
                      id="Refund"
                    />
                    <label className="form-check-label" htmlFor="Refund">
                      100% Refund (Price +10%)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Enroll currentPlan={currentPlan} />
    </div>
  );
}
