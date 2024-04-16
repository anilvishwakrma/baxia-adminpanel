import React from "react";

export default function Utilites() {
  return (
    <div>
      <section className="banner-section">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5 text-center">
              <h5 className="fw-bold">Welcome to Baxia Certificate</h5>
              <p className="discl text-muted m-0">
                Show everyone your trading skills by uncloaking certificates as
                the proof of your mastery over charts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
                  Tool
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
                  E-Book
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Video-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Video"
                  type="button"
                  role="tab"
                  aria-controls="pills-Video"
                  aria-selected="false"
                >
                  Video
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="bdr-dashed" />
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            {/* all */}
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-center">
                      <div className="col-2">
                        <div className="svg-cover">
                          <svg
                            width={22}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71574 23.2843 0 15 0C6.71572 0 0 6.71574 0 15C0 23.2843 6.71572 30 15 30ZM19.6795 6.98764C19.9073 6.17854 19.1221 5.7001 18.405 6.21098L8.39485 13.3422C7.61717 13.8962 7.73949 15 8.5786 15H11.2145V14.9796H16.3519L12.1659 16.4566L10.3205 23.0124C10.0928 23.8215 10.8779 24.2999 11.595 23.789L21.6052 16.6579C22.3829 16.1038 22.2605 15 21.4215 15H17.4241L19.6795 6.98764Z"
                              fill="#0EAC3A"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-7 ps-lg-0">
                        <p className="m-0 fw-bold p1">
                          Get a free 2-month trial of Trader Sync!
                        </p>
                        <p className="m-0 text-muted p2">
                          Note: Once requested you will be notified via email
                          within 48 Hrs
                        </p>
                      </div>
                      <div className="col-3">
                        <button className="btn btn-sm btn-light rounded-pill">
                          Not eligible
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-center">
                      <div className="col-2">
                        <div className="svg-cover">
                          <svg
                            width={22}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71574 23.2843 0 15 0C6.71572 0 0 6.71574 0 15C0 23.2843 6.71572 30 15 30ZM19.6795 6.98764C19.9073 6.17854 19.1221 5.7001 18.405 6.21098L8.39485 13.3422C7.61717 13.8962 7.73949 15 8.5786 15H11.2145V14.9796H16.3519L12.1659 16.4566L10.3205 23.0124C10.0928 23.8215 10.8779 24.2999 11.595 23.789L21.6052 16.6579C22.3829 16.1038 22.2605 15 21.4215 15H17.4241L19.6795 6.98764Z"
                              fill="#0EAC3A"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-10 ps-lg-0">
                        <p className="m-0 fw-bold p1">
                          Get a free 2-month trial of Trader Sync!{" "}
                          <span className="badge bg-warning badge-warning rounded-pill text-dark">
                            <i className="fa-solid fa-star"></i> New
                          </span>
                        </p>
                        <p className="m-0 text-muted p2">
                          Note: Once requested you will be notified via email
                          within 48 Hrs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* all end */}
            {/* tool */}
            <div className="row mb-3 mt-4">
              <div className="col-lg-12">
                <p className="m-0 fw-bold">Tool</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      Supply &amp; Demand indicator
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">Baxia Trade Manager</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">Baxia Trading Journal</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">Baxia MT4 Download (Windows)</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      Growth MT5 Download (Windows)
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">Baxia MT4 Download (Windows)</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* tool end */}
            {/* E-Books */}
            <div className="row mb-3 mt-4">
              <div className="col-lg-12">
                <p className="m-0 fw-bold">E-Books</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      How to Calculate Drawdown on Baxia{" "}
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">What are Spreads in Forex?</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      How to check Baxia Instruments Contract Size?
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* E-Books end */}
          </div>
          {/* tab tool start */}
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row mb-3 mt-4">
              <div className="col-lg-12">
                <p className="m-0 fw-bold">Tool</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      Supply &amp; Demand indicator
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">Baxia Trade Manager</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">Baxia Trading Journal</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">Baxia MT4 Download (Windows)</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      Growth MT5 Download (Windows)
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">Baxia MT4 Download (Windows)</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tab tool end */}
          {/* tab E-Books */}
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row mb-3 mt-4">
              <div className="col-lg-12">
                <p className="m-0 fw-bold">E-Books</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      How to Calculate Drawdown on Baxia{" "}
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">What are Spreads in Forex?</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      How to check Baxia Instruments Contract Size?
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tab E-Books end */}
          {/* tab E-Books */}
          <div
            className="tab-pane fade"
            id="pills-Video"
            role="tabpanel"
            aria-labelledby="pills-Video-tab"
          >
            <div className="row mb-3 mt-4">
              <div className="col-lg-12">
                <p className="m-0 fw-bold">Video</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      How to Calculate Drawdown on Baxia{" "}
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">What are Spreads in Forex?</h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card tool-card mb-3">
                  <div className="card-body">
                    <h5 className="p1 fw-bold">
                      How to check Baxia Instruments Contract Size?
                    </h5>
                    <p className="p2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="btn btn-sm px-3 btn-warning rounded-pill">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tab E-Books end */}
        </div>
      </div>
    </div>
  );
}
