import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function CardPayment({ paymentData }) {
  const [mobileNo, setMobileNo] = useState("");
  console.log(paymentData);
  return (
    <>
      <div className="row mb-2">
        <div className="col-lg-12">
          <h5>Payment Information</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <label>
            First Name<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter your first name"
          />
        </div>
        <div className="col-lg-6">
          <label>
            Last name <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter your last name"
          />
        </div>
        <div className="col-lg-12">
          <label>
            Address<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter your address"
          />
        </div>
        <div className="col-lg-6">
          <label>
            City<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter city"
          />
        </div>
        <div className="col-lg-6">
          <label>
            Zip code<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter zip code"
          />
        </div>
        <div className="col-lg-6">
          <label>
            State<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter state"
          />
        </div>
        <div className="col-lg-6">
          <label>
            Phone number<span className="text-danger">*</span>
          </label>
          {/* <input
            className="form-control rounded-pill mt-1"
            placeholder="+1    |    Enter phone number"
          />{" "} */}
          <PhoneInput
            inputClass="form-control w-100  tel-input rounded-pill mt-1"
            countryCodeEditable={false}
            enableSearch={true}
            country={"in"}
            value={mobileNo}
            inputProps={() => <input type="tel" />}
            onChange={(value) => setMobileNo(value)}
            placeholder="Enter phone number"
          />
        </div>
        <div className="col-lg-6">
          <label>
            Card number<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter number"
          />
        </div>
        <div className="col-lg-6">
          <label>
            Cardholder name<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter cardholder name"
          />
        </div>
        <div className="col-lg-6">
          <label>
            Expiry date<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter expiry date"
          />
        </div>
        <div className="col-lg-6">
          <label>
            CVV<span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill mt-1"
            placeholder="Enter CVV"
          />
        </div>
      </div>
      <div className="row card-form-footer mx-0 mt-4">
        <div className="col-5 px-0">
          <p>Your total price</p>
          <h5>$50.00</h5>
        </div>
        <div className="col-2"></div>
        <div className="col-5 px-0">
          <button className="btn btn-warning w-100 rounded-pill">Pay</button>
        </div>
      </div>
    </>
  );
}
