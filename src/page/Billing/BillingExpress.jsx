import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Enroll from "../../Component/Enroll";

export default function BillingExpress() {
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
      name: "Express challenge",
      feePrice: 59,
      price: 6000,
    },
    {
      id: 2,
      name: "Express challenge",
      feePrice: 119,
      price: 15000,
    },
    {
      id: 3,
      name: "Express challenge",
      feePrice: 199,
      price: 25000,
    },
    {
      id: 4,
      name: "Express challenge",
      feePrice: 299,
      price: 50000,
    },
    {
      id: 5,
      name: "Express challenge",
      feePrice: 519,
      price: 100000,
    },
    {
      id: 6,
      name: "Express challenge",
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

      <div>
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
                    className={
                      pathname === "/Billing/evaluation" && "active-li"
                    }
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
                    className={
                      pathname === "/Billing/free-trial" && "active-li"
                    }
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
              </div>
              {/* 4 */}
              <div className="col-lg-4 cl-4-m">
                <div className="row mb-3 plan-m-bdr">
                  <div className="col-lg-12">
                    <h4>Select your platform</h4>
                    <div className="d-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Platform4"
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
                          name="Platform4"
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
                          name="Baxia"
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
                          name="Swap"
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
                          name="Swap"
                          id="Swap-free"
                        />
                        <label className="form-check-label" htmlFor="Swap-free">
                          Swap free (Price+10%)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3 plan-m-bdr">
                  <div className="col-lg-12">
                    <h4>Select your Category</h4>
                    <div className="d-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Consistency"
                          id="Consistency"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Consistency"
                        >
                          Consistency
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Consistency"
                          id="NonConsistency"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="NonConsistency"
                        >
                          Non Consistency
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-12">
                    <h4>Select add on</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Lifetime"
                        id="Lifetime-payout"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="Lifetime-payout"
                        checked
                      >
                        Lifetime payout 95% (Price +20%)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Lifetime"
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
    </div>
  );
}
