import React from "react";

export default function NewCalender() {
  return (
    <div>
      <section className="banner-section">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h5 className="fw-bold">Economic Calendar</h5>
              <p className="discl text-muted m-0">
                View our interactive economic calendar for important events and
                releases
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="head-section pt-1">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-lg-12 nav-m">
              <ul
                className="nav nav-pills flag-pills"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/NZD.svg"
                      className="img-fluid"
                    />
                    NZD
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/AUD.svg"
                      className="img-fluid"
                    />
                    AUD
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Commodities-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Commodities"
                    type="button"
                    role="tab"
                    aria-controls="pills-Commodities"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/CAD.svg"
                      className="img-fluid"
                    />
                    CAD
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Crypto-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Crypto"
                    type="button"
                    role="tab"
                    aria-controls="pills-Crypto"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/EUR.svg"
                      className="img-fluid"
                    />
                    EUR
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Custom-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Custom"
                    type="button"
                    role="tab"
                    aria-controls="pills-Custom"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/GBP.svg"
                      className="img-fluid"
                    />
                    GBP
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Custom-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Custom"
                    type="button"
                    role="tab"
                    aria-controls="pills-Custom"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/USD.svg"
                      className="img-fluid"
                    />
                    USD
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Custom-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Custom"
                    type="button"
                    role="tab"
                    aria-controls="pills-Custom"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/CHF.svg"
                      className="img-fluid"
                    />
                    CHF
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Custom-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Custom"
                    type="button"
                    role="tab"
                    aria-controls="pills-Custom"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/JPY.svg"
                      className="img-fluid"
                    />
                    JPY
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Custom-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Custom"
                    type="button"
                    role="tab"
                    aria-controls="pills-Custom"
                    aria-selected="false"
                  >
                    <img
                      src="assets/images/flags/CNY.svg"
                      className="img-fluid"
                    />
                    CNY
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="bdr-dashed bdr-dashed-2 mt-0" />
        </div>
      </section>
      <div className="container-fluid mt-3">
        <div className="row d-flex justify-content-end pb-3 pt-0">
          <div className="col-lg-2 col-md-2 col-sm col-4 d-flex align-items-center">
            <p className="m-0 fw-bold fs-13">Choose your Time zone</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm col-4">
            <select className="form-select rounded-pill fs-13">
              <option value="pending">Africa/Cairo (UTC+02:00)</option>
              <option value="success">Success</option>
              <option value="faild">Faild</option>
            </select>
          </div>
          <div className="col-lg-1 col-md-1 col-sm col-4" />
          <div className="col-lg-2 col-md-2 col-sm col-4">
            <select className="form-select rounded-pill fs-13">
              <option value="pending">Days</option>
              <option value="success">Success</option>
              <option value="faild">Faild</option>
            </select>
          </div>
          <div className="col-lg-2 col-md-2 col-sm col-4">
            <select className="form-select rounded-pill fs-13">
              <option value="pending">Impact</option>
              <option value="success">Success</option>
              <option value="faild">Faild</option>
            </select>
          </div>
          <div className="col-lg-2 col-md-2 col-sm col-4">
            <select className="form-select rounded-pill fs-13">
              <option value="pending">Restrictions</option>
              <option value="success">Success</option>
              <option value="faild">Faild</option>
            </select>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-lg-12">
            <table className="table table-borderless table-m1 table4 mt-3">
              <thead>
                <tr>
                  <th className="ps-4">IMPACT</th>
                  <th>EVENT</th>
                  <th>CURRENCY</th>
                  <th className="position-relative">
                    DATE{" "}
                    <span className="tooltip-m">
                      <div class="badge bg-dark badge-tooltip">
                        Africa/Cairo (UTC+02:00)
                        <i class="fa-solid fa-caret-down"></i>
                      </div>
                      <i className="fa-solid fa-circle-info bg-secondary border-0" />
                    </span>
                  </th>
                  <th>FORECAST</th>
                  <th>PREVIOUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-4">
                    <badge className="badge bg-success">Holiday</badge>
                  </td>
                  <td>Bank Holiday</td>
                  <td>
                    <img
                      src="assets/images/flags/NZD.svg"
                      className="img-fluid me-2"
                    />{" "}
                    NZD
                  </td>
                  <td>
                    03:30 Pm - 15 Feb, 2024
                    <img
                      src="assets/images/calender.svg"
                      className="img-fluid ms-2"
                    />
                  </td>
                  <td>-39.3B</td>
                  <td>-129.4B</td>
                </tr>
                <tr>
                  <td className="ps-4">
                    <badge className="badge bg-secondary">Low</badge>
                  </td>
                  <td>Bank Holiday</td>
                  <td>
                    <img
                      src="assets/images/flags/NZD.svg"
                      className="img-fluid me-2"
                    />{" "}
                    NZD
                  </td>
                  <td>
                    03:30 Pm - 15 Feb, 2024
                    <img
                      src="assets/images/calender.svg"
                      className="img-fluid ms-2"
                    />
                  </td>
                  <td>-39.3B</td>
                  <td>-129.4B</td>
                </tr>
                <tr>
                  <td className="ps-4">
                    <badge className="badge bg-warning">Medium</badge>
                  </td>
                  <td>Bank Holiday</td>
                  <td>
                    <img
                      src="assets/images/flags/NZD.svg"
                      className="img-fluid me-2"
                    />{" "}
                    NZD
                  </td>
                  <td>
                    03:30 Pm - 15 Feb, 2024
                    <img
                      src="assets/images/calender.svg"
                      className="img-fluid ms-2"
                    />
                  </td>
                  <td>-39.3B</td>
                  <td>-129.4B</td>
                </tr>
                <tr>
                  <td className="ps-4">
                    <badge className="badge bg-danger">High</badge>
                  </td>
                  <td>Bank Holiday</td>
                  <td>
                    <img
                      src="assets/images/flags/NZD.svg"
                      className="img-fluid me-2"
                    />{" "}
                    NZD
                  </td>
                  <td>
                    03:30 Pm - 15 Feb, 2024
                    <img
                      src="assets/images/calender.svg"
                      className="img-fluid ms-2"
                    />
                  </td>
                  <td>-39.3B</td>
                  <td>-129.4B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
