import React, { useEffect, useState } from "react";
import CardPayment from "../../Component/paymentMethod/CardPayment";
import CryptoPayment from "../../Component/paymentMethod/CryptoPayment";
import OtherPayment from "../../Component/paymentMethod/OtherPayment";
import { useLocation } from "react-router-dom";
export default function Payment() {
  const { state } = useLocation();
  const [paymentType, setPaymentType] = useState("card");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid mt-3 mb-5 mt-4 ">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-11">
          <div className="row pb-3">
            <div className="col-lg-12">
              <h4 className="sub-m">Choose Your Payment Method</h4>
            </div>
          </div>
          <div className="row">
            {/* 7 */}
            <div className="col-lg-7">
              <div className="card card-form">
                <div className="card-body px-4">
                  <div className="row mb-4 mx-0 card-form-head">
                    <div className="col-lg-8 d-flex px-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="card"
                          id="card"
                          checked={paymentType === "card"}
                          onChange={(e) =>
                            setPaymentType(e.target.checked ? "card" : "")
                          }
                        />
                        <label className="form-check-label" htmlFor="card">
                          Card
                        </label>
                      </div>
                      <div className="form-check mx-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="crypto-payment"
                          id="crypto-payment"
                          checked={paymentType === "crypto"}
                          onChange={(e) =>
                            setPaymentType(e.target.checked ? "crypto" : "")
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="crypto-payment"
                        >
                          Crypto payment
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Others"
                          id="Others"
                          checked={paymentType === "other"}
                          onChange={(e) =>
                            setPaymentType(e.target.checked ? "other" : "")
                          }
                        />
                        <label className="form-check-label" htmlFor="Others">
                          Others
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 text-end">
                      <badge className="badge bg-secondary rounded-pill py-2 px-3">
                        Secure payment <i className="fa-solid fa-lock ps-2" />
                      </badge>
                    </div>
                  </div>
                  {paymentType === "card" ? (
                    <CardPayment paymentData={state} />
                  ) : paymentType === "crypto" ? (
                    <CryptoPayment paymentData={state} />
                  ) : paymentType === "other" ? (
                    <OtherPayment paymentData={state} />
                  ) : null}
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="col-lg-5 px-4">
              <div className="card card-m2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h4>$50.00</h4>
                      <p className="h-p">Total amount to be paid</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <table className="table table-borderless table-m2 mb-1">
                        <tbody>
                          <tr>
                            <td>Plan</td>
                            <td className="fw-bold">Express $6000</td>
                          </tr>
                          <tr>
                            <td>Platform</td>
                            <td className="fw-bold">MT5</td>
                          </tr>
                          <tr>
                            <td>Server</td>
                            <td className="fw-bold">Baxia</td>
                          </tr>
                          <tr>
                            <td>Account type</td>
                            <td className="fw-bold">Swap</td>
                          </tr>
                          <tr>
                            <td>Price</td>
                            <td className="fw-bold">$50.00</td>
                          </tr>
                          <tr>
                            <td>Discount</td>
                            <td className="fw-bold">-$0.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="row search-tabale-bill">
                    <p className="mb-1">Apply coupon</p>
                    <div className="col-lg-12 position-relative">
                      <input
                        className="form-control rounded-pill w-100 cpn-btn"
                        placeholder="Coupon Code"
                      />
                      <button className="btn btn-warning">Apply</button>
                    </div>
                  </div>
                  <div className="row table-total-2 mx-0 mt-3">
                    <div className="col-lg-6">
                      <p>Total amount</p>
                    </div>
                    <div className="col-lg-6 position-relative">
                      <p className="text-warning text-end">$50.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mx-0">
                <div className="col-lg-12 gft-svg svg-2">
                  <div className="row d-flex align-items-center">
                    <div className="col-3">
                      <svg
                        width={28}
                        height={27}
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.5 0.5625C9.60152 0.5625 8.0625 2.10152 8.0625 4C8.0625 4.56264 8.19767 5.09371 8.43732 5.5625H4.625C2.38134 5.5625 0.5625 7.38134 0.5625 9.625C0.5625 10.7637 1.03162 11.7928 1.78472 12.5295C1.76658 12.9769 1.77726 13.4089 1.79029 13.9358C1.80065 14.3549 1.8125 14.834 1.8125 15.4286V15.462C1.8125 16.9591 1.81249 18.1284 1.87395 19.0721C1.93636 20.0303 2.06501 20.822 2.35393 21.5528C3.07621 23.3795 4.4673 24.8445 6.23503 25.6116C6.94674 25.9205 7.71635 26.0569 8.63844 26.1228C9.54351 26.1875 10.6633 26.1875 12.0885 26.1875H15.9114C17.3366 26.1875 18.4565 26.1875 19.3616 26.1228C20.2837 26.0569 21.0533 25.9205 21.765 25.6116C23.5327 24.8445 24.9238 23.3795 25.6461 21.5528C25.935 20.822 26.0636 20.0303 26.126 19.0721C26.1875 18.1285 26.1875 16.9592 26.1875 15.4622V15.3924C26.1875 14.0323 26.1875 13.3437 26.1407 12.6006C26.9373 11.8598 27.4375 10.8008 27.4375 9.625C27.4375 7.38134 25.6187 5.5625 23.375 5.5625H19.5627C19.8023 5.09371 19.9375 4.56264 19.9375 4C19.9375 2.10152 18.3985 0.5625 16.5 0.5625C15.515 0.5625 14.6267 0.976807 14 1.64067C13.3733 0.976807 12.485 0.5625 11.5 0.5625ZM11.5 2.4375C12.3629 2.4375 13.0625 3.13706 13.0625 4V5.5625H11.5C10.6371 5.5625 9.9375 4.86294 9.9375 4C9.9375 3.13706 10.6371 2.4375 11.5 2.4375ZM18.0625 4C18.0625 4.86294 17.3629 5.5625 16.5 5.5625H14.9375V4C14.9375 3.13706 15.6371 2.4375 16.5 2.4375C17.3629 2.4375 18.0625 3.13706 18.0625 4ZM2.4375 9.625C2.4375 8.41688 3.41688 7.4375 4.625 7.4375H13.0625V11.8125H4.625C4.14786 11.8125 3.70893 11.6608 3.35013 11.4029C2.79558 11.0042 2.4375 10.3564 2.4375 9.625ZM25.5625 9.625C25.5625 8.41688 24.5831 7.4375 23.375 7.4375H14.9375V11.8125H23.375C23.8436 11.8125 24.2752 11.6662 24.6304 11.4168C25.196 11.0194 25.5625 10.365 25.5625 9.625ZM3.65753 13.5714C3.96782 13.6473 4.29191 13.6875 4.625 13.6875H13.0625L13.0625 24.3125H12.125C10.6555 24.3125 9.60255 24.3119 8.77212 24.2526C7.951 24.1939 7.41828 24.0811 6.98142 23.8916C5.6863 23.3296 4.64397 22.2453 4.09758 20.8633C3.91074 20.3908 3.80152 19.8182 3.74499 18.9502C3.68796 18.0746 3.6875 16.9662 3.6875 15.4286C3.6875 14.6804 3.67341 14.1602 3.66216 13.7446L3.65753 13.5714ZM14.9375 13.6875L14.9375 24.3125H15.875C17.3445 24.3125 18.3974 24.3119 19.2279 24.2526C20.049 24.1939 20.5817 24.0811 21.0186 23.8916C22.3137 23.3296 23.356 22.2453 23.9024 20.8633C24.0893 20.3908 24.1985 19.8182 24.255 18.9502C24.312 18.0746 24.3125 16.9662 24.3125 15.4286C24.3125 14.6029 24.3124 14.0416 24.3034 13.5807C24.005 13.6506 23.6941 13.6875 23.375 13.6875H14.9375Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </div>
                    <div className="col-9 ps-0">
                      <h5>Guaranteed payouts</h5>
                      <p>Get paid in 24 Hours or we pay $1000 extra!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
