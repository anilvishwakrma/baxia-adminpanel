import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function OtherPayment() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [moneyType, setMoneyType] = useState("bankmoney");

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <label className="fw-bold">Select an Option</label>
          <div className="d-flex px-0">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="money"
                id="bank-transfer"
                checked={moneyType === "bankmoney"}
                onChange={(e) => setMoneyType(e.target.checked && "bankmoney")}
              />
              <label className="form-check-label" htmlFor="bank-transfer">
                Bank transfer
              </label>
            </div>
            <div className="form-check mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="money"
                id="perfect-money"
                checked={moneyType === "perfectmoney"}
                onChange={(e) =>
                  setMoneyType(e.target.checked && "perfectmoney")
                }
              />
              <label className="form-check-label" htmlFor="perfect-money">
                Perfect money
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <label className="fw-bold">
            Upload the proof of your money
            <span className="text-danger">*</span>
          </label>
          <p className="discl">
            Ex. Bank transfer receipt, BTC wallet screenshot Etc.
          </p>
        </div>
      </div>
      {/* <div {...getRootProps({ className: "dropzone" })}>
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div> */}
      <div className="card circle-card circle-other" {...getRootProps({})}>
        <div className="card-body">
          <div className="row my-2">
            <div className="col-lg-12 text-center circle-d mb-3">
              <div className="no-circle">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 16.005V17.25C1 18.2446 1.39509 19.1984 2.09835 19.9017C2.80161 20.6049 3.75544 21 4.75 21H17.25C18.2446 21 19.1984 20.6049 19.9017 19.9017C20.6049 19.1984 21 18.2446 21 17.25V16M11 15.375V1.625M11 1.625L15.375 6M11 1.625L6.625 6"
                    stroke="#0A0A0A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input {...getInputProps()} />
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <h4>
                Click to upload{" "}
                <span className="fw-light">or Drag and drop</span>
              </h4>
              <p className="text-muted">
                PNG, JPG <span className="ms-2">• Maximum file size 5MB</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-4" hidden={moneyType === "bankmoney"}>
          <label className="fw-bold">
            Transaction Id/ Hash Id/ Batch Id
            <span className="text-danger">*</span>
          </label>
          <input
            className="form-control rounded-pill"
            placeholder="Transaction Id/ Hash Id/ Batch Id "
          />
        </div>

        <div
          className={`col-lg-12 ${moneyType === "bankmoney" ? `mt-4` : `mt-1`}`}
        >
          <label className="fw-bold">Referred by (Optional)</label>
          <p className="discl mb-2">
            Kindly submit the email of the person who referred you
          </p>
          <input
            className="form-control rounded-pill"
            placeholder="Enter email of the person who referred you"
          />
        </div>
        <div className="col-lg-12 my-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label
              className="form-check-label discl"
              htmlFor="flexCheckDefault"
            >
              I declare that i have read and agree with{" "}
              <b>Terms &amp; Conditions, Disclosure statement</b> &amp;{" "}
              <b>Privacy policy</b>
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7" />
        <div className="col-lg-5 text-end">
          <button className="btn btn-warning rounded-pill px-4 w-100">
            Confirm Payment
          </button>
        </div>
      </div>
    </>
  );
}
