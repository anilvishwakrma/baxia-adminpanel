import React, { useState } from "react";
import { stylesDate } from "../../utils/dropdownStyle";

export default function CardPayment() {
  const [paymentMethod, setPaymentMethod] = useState(false);

  const data = [
    {
      name: (
        <>
          Binance Coin <span>. Min Time: 40 min</span>
        </>
      ),
      icon: "Binance-Coin",
    },
    {
      name: (
        <>
          Bitcoin Coin <span>. Min Time: 40 min</span>
        </>
      ),
      icon: "Binance-Coin",
    },
    {
      name: (
        <>
          Dogecoin <span>. Min Time: 40 min</span>{" "}
        </>
      ),
      icon: "Dogecoin",
    },
    {
      name: (
        <>
          Ethereum <span>. Min Time: 40 min</span>{" "}
        </>
      ),
      icon: "Ethereum",
    },
    {
      name: (
        <>
          Litecoin <span>. Min Time: 40 min</span>
        </>
      ),
      icon: "Litecoin",
    },
    {
      name: (
        <>
          Tron <span>. Min Time: 40 min</span>
        </>
      ),
      icon: "Tron",
    },
    {
      name: (
        <>
          USDC <span>. Min Time: 40 min</span>
        </>
      ),
      icon: "USDC",
    },
    {
      name: (
        <>
          USDT <span>. Min Time: 40 min</span>
        </>
      ),
      icon: "USDC",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <label>Crypto Payment</label>

          <input
            className={`form-select rounded-pill mt-1 ${
              paymentMethod && `select-two`
            }`}
            onClick={() => setPaymentMethod(!paymentMethod)}
            placeholder="Select your crypto currency"
            readOnly
          />

          {paymentMethod ? (
            <div style={stylesDate.popover}>
              <div
                style={stylesDate.cover}
                onClick={() => setPaymentMethod(false)}
              />

              <div className="my-2 option-crypto-select">
                {data.map((item, index) => (
                  <div className="form-check black-check" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={"flexRadioDefault1" + index}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={"flexRadioDefault1" + index}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={`assets/images/${item.icon}.svg`}
                        className="img-fluid px-2"
                      />{" "}
                      {item.name} <span>. Min Time: 40 min</span>
                    </label>
                  </div>
                ))}

                {/* <div className="form-check black-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/images/Binance-Coin.svg"
                      className="img-fluid px-2"
                    />{" "}
                    Bitcoin <span>. Min Time: 40 min</span>
                  </label>
                </div>
                <div className="form-check black-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/images/Dogecoin.svg"
                      className="img-fluid px-2"
                    />{" "}
                    Dogecoin <span>. Min Time: 40 min</span>
                  </label>
                </div>
                <div className="form-check black-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/images/Ethereum.svg"
                      className="img-fluid px-2"
                    />{" "}
                    Ethereum <span>. Min Time: 40 min</span>
                  </label>
                </div>
                <div className="form-check black-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/images/Litecoin.svg"
                      className="img-fluid px-2"
                    />{" "}
                    Litecoin <span>. Min Time: 40 min</span>
                  </label>
                </div>
                <div className="form-check black-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/images/Tron.svg"
                      className="img-fluid px-2"
                    />{" "}
                    Tron <span>. Min Time: 40 min</span>
                  </label>
                </div>
                <div className="form-check black-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/images/USDC.svg"
                      className="img-fluid px-2"
                    />{" "}
                    USDC <span>. Min Time: 40 min</span>
                  </label>
                </div>
                <div className="form-check black-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/images/USDC.svg"
                      className="img-fluid px-2"
                    />{" "}
                    USDT <span>. Min Time: 40 min</span>
                  </label>
                </div> */}
              </div>
            </div>
          ) : null}
        </div>
        <div className="col-lg-12 my-2">
          <p className="discl">
            To learn the full process of crypto payment please visit our{" "}
            <b>FAQ</b>. Your payment status will be updated on the{" "}
            <b>Billing page</b>. After the successful payment. You will receive
            an email.
          </p>
        </div>
      </div>
      <div className="card circle-card">
        <div className="card-body">
          <h4 className="mt-3">3 Easy steps for Crypto Payment</h4>
          <div className="row my-4">
            <div className="col-lg-4 circle-d">
              <div className="no-circle">01</div>
              <p className="mt-2">Select your preferred crypto currency</p>
              <svg
                width={113}
                height={6}
                viewBox="0 0 113 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM113 3L108 0.113249V5.88675L113 3ZM3 3.5H4.96429V2.5H3V3.5ZM8.89286 3.5H12.8214V2.5H8.89286V3.5ZM16.75 3.5H20.6786V2.5H16.75V3.5ZM24.6071 3.5H28.5357V2.5H24.6071V3.5ZM32.4643 3.5H36.3929V2.5H32.4643V3.5ZM40.3214 3.5H44.25V2.5H40.3214V3.5ZM48.1786 3.5H52.1071V2.5H48.1786V3.5ZM56.0357 3.5H59.9643V2.5H56.0357V3.5ZM63.8928 3.5H67.8214V2.5H63.8928V3.5ZM71.75 3.5H75.6786V2.5H71.75V3.5ZM79.6071 3.5H83.5357V2.5H79.6071V3.5ZM87.4643 3.5H91.3929V2.5H87.4643V3.5ZM95.3214 3.5H99.25V2.5H95.3214V3.5ZM103.179 3.5H107.107V2.5H103.179V3.5Z"
                  fill="#858585"
                />
              </svg>
            </div>
            <div className="col-lg-4 circle-d">
              <div className="no-circle">02</div>
              <p className="mt-2">Wait for the confirmation of the payment</p>
              <svg
                width={113}
                height={6}
                viewBox="0 0 113 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM113 3L108 0.113249V5.88675L113 3ZM3 3.5H4.96429V2.5H3V3.5ZM8.89286 3.5H12.8214V2.5H8.89286V3.5ZM16.75 3.5H20.6786V2.5H16.75V3.5ZM24.6071 3.5H28.5357V2.5H24.6071V3.5ZM32.4643 3.5H36.3929V2.5H32.4643V3.5ZM40.3214 3.5H44.25V2.5H40.3214V3.5ZM48.1786 3.5H52.1071V2.5H48.1786V3.5ZM56.0357 3.5H59.9643V2.5H56.0357V3.5ZM63.8928 3.5H67.8214V2.5H63.8928V3.5ZM71.75 3.5H75.6786V2.5H71.75V3.5ZM79.6071 3.5H83.5357V2.5H79.6071V3.5ZM87.4643 3.5H91.3929V2.5H87.4643V3.5ZM95.3214 3.5H99.25V2.5H95.3214V3.5ZM103.179 3.5H107.107V2.5H103.179V3.5Z"
                  fill="#858585"
                />
              </svg>
            </div>
            <div className="col-lg-4 circle-d">
              <div className="no-circle">03</div>
              <p className="mt-2">Receive your account details</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
