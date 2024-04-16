import React from "react";

export default function Certificates() {
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
                  className="nav-link"
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
                  className="nav-link active"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Challenges
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
                  Payout
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
                  Max Allocation
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
                  Lifetime payout
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="bdr-dashed" />
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade"
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
                            width={30}
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
                      <div className="col-7">
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
                            width={30}
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
                      <div className="col-7">
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
            </div>
          </div>
          {/* tab Challenges start */}
          <div
            className="tab-pane fade  show active"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row mb-3 mt-4">
              <div className="col-lg-12">
                <p className="m-0 fw-bold">Challenges</p>
                <p className="text-muted p2 mb-0">
                  Unloack cetificates as you clear each step towards your
                  ultimate goal of being funded and consistently generating
                  profits
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div
                  className="card card6 tool-card mb-3"
                  style={{
                    backgroundImage: 'url("./assets/images/banner8.jpg")',
                  }}
                >
                  <div className="card-body mt-4 pt-3">
                    <div className="d-flex justify-content-center">
                      <div className="crd-icon">
                        <svg
                          width={18}
                          height={20}
                          viewBox="0 0 22 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 12.2707C9.35469 12.2707 8.02087 13.6045 8.02087 15.2498C8.02087 16.8952 9.35469 18.229 11 18.229C12.6454 18.229 13.9792 16.8952 13.9792 15.2498C13.9792 13.6045 12.6454 12.2707 11 12.2707ZM9.64587 15.2498C9.64587 14.502 10.2521 13.8957 11 13.8957C11.7479 13.8957 12.3542 14.502 12.3542 15.2498C12.3542 15.9977 11.7479 16.604 11 16.604C10.2521 16.604 9.64587 15.9977 9.64587 15.2498Z"
                            fill="#FFF9D9"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 0.354004C7.55976 0.354004 4.77087 3.1429 4.77087 6.58317V7.14954L4.74178 7.15888C2.84539 7.77506 1.35859 9.26186 0.742413 11.1583C0.437049 12.0981 0.437227 13.226 0.437518 15.0745V15.4252C0.437227 17.2736 0.437049 18.4016 0.742413 19.3414C1.35859 21.2378 2.84539 22.7246 4.74178 23.3408C5.68159 23.6462 6.80957 23.646 8.65802 23.6457H13.3421C15.1905 23.646 16.3185 23.6462 17.2583 23.3408C19.1547 22.7246 20.6415 21.2378 21.2577 19.3414C21.563 18.4016 21.5628 17.2736 21.5625 15.4252V15.0745C21.5628 13.226 21.563 12.0981 21.2577 11.1583C20.6415 9.26186 19.1547 7.77506 17.2583 7.15888L17.2292 7.14954V6.58317C17.2292 3.1429 14.4403 0.354004 11 0.354004ZM8.74239 6.854C7.78993 6.85397 7.02973 6.85394 6.39587 6.88982V6.58317C6.39587 4.04036 8.45722 1.979 11 1.979C13.5428 1.979 15.6042 4.04036 15.6042 6.58317V6.88982C14.9703 6.85394 14.2101 6.85397 13.2577 6.854H8.74239ZM5.71835 8.59091C6.36575 8.48184 7.23886 8.479 8.83337 8.479H13.1667C14.7612 8.479 15.6343 8.48184 16.2817 8.59091C16.4607 8.62106 16.6151 8.65853 16.7561 8.70435C18.1578 9.15978 19.2568 10.2587 19.7122 11.6604C19.9275 12.3231 19.9375 13.1702 19.9375 15.2498C19.9375 17.3295 19.9275 18.1766 19.7122 18.8393C19.2568 20.241 18.1578 21.3399 16.7561 21.7953C16.0934 22.0106 15.2463 22.0207 13.1667 22.0207H8.83337C6.75374 22.0207 5.90662 22.0106 5.24394 21.7953C3.84225 21.3399 2.74331 20.241 2.28788 18.8393C2.07256 18.1766 2.06254 17.3295 2.06254 15.2498C2.06254 13.1702 2.07256 12.3231 2.28788 11.6604C2.74331 10.2587 3.84225 9.15978 5.24394 8.70435C5.38496 8.65853 5.53933 8.62106 5.71835 8.59091Z"
                            fill="#FFF9D9"
                          />
                        </svg>
                      </div>
                    </div>
                    <button className="btn btn-sm px-3 btn-light rounded-pill mt-2">
                      Elite Trader
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="card card6 tool-card mb-3"
                  style={{
                    backgroundImage: 'url("assets/images/banner8.jpg")',
                  }}
                >
                  <div className="card-body mt-4 pt-3">
                    <div className="d-flex justify-content-center">
                      <div className="crd-icon">
                        <svg
                          width={18}
                          height={20}
                          viewBox="0 0 22 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 12.2707C9.35469 12.2707 8.02087 13.6045 8.02087 15.2498C8.02087 16.8952 9.35469 18.229 11 18.229C12.6454 18.229 13.9792 16.8952 13.9792 15.2498C13.9792 13.6045 12.6454 12.2707 11 12.2707ZM9.64587 15.2498C9.64587 14.502 10.2521 13.8957 11 13.8957C11.7479 13.8957 12.3542 14.502 12.3542 15.2498C12.3542 15.9977 11.7479 16.604 11 16.604C10.2521 16.604 9.64587 15.9977 9.64587 15.2498Z"
                            fill="#FFF9D9"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 0.354004C7.55976 0.354004 4.77087 3.1429 4.77087 6.58317V7.14954L4.74178 7.15888C2.84539 7.77506 1.35859 9.26186 0.742413 11.1583C0.437049 12.0981 0.437227 13.226 0.437518 15.0745V15.4252C0.437227 17.2736 0.437049 18.4016 0.742413 19.3414C1.35859 21.2378 2.84539 22.7246 4.74178 23.3408C5.68159 23.6462 6.80957 23.646 8.65802 23.6457H13.3421C15.1905 23.646 16.3185 23.6462 17.2583 23.3408C19.1547 22.7246 20.6415 21.2378 21.2577 19.3414C21.563 18.4016 21.5628 17.2736 21.5625 15.4252V15.0745C21.5628 13.226 21.563 12.0981 21.2577 11.1583C20.6415 9.26186 19.1547 7.77506 17.2583 7.15888L17.2292 7.14954V6.58317C17.2292 3.1429 14.4403 0.354004 11 0.354004ZM8.74239 6.854C7.78993 6.85397 7.02973 6.85394 6.39587 6.88982V6.58317C6.39587 4.04036 8.45722 1.979 11 1.979C13.5428 1.979 15.6042 4.04036 15.6042 6.58317V6.88982C14.9703 6.85394 14.2101 6.85397 13.2577 6.854H8.74239ZM5.71835 8.59091C6.36575 8.48184 7.23886 8.479 8.83337 8.479H13.1667C14.7612 8.479 15.6343 8.48184 16.2817 8.59091C16.4607 8.62106 16.6151 8.65853 16.7561 8.70435C18.1578 9.15978 19.2568 10.2587 19.7122 11.6604C19.9275 12.3231 19.9375 13.1702 19.9375 15.2498C19.9375 17.3295 19.9275 18.1766 19.7122 18.8393C19.2568 20.241 18.1578 21.3399 16.7561 21.7953C16.0934 22.0106 15.2463 22.0207 13.1667 22.0207H8.83337C6.75374 22.0207 5.90662 22.0106 5.24394 21.7953C3.84225 21.3399 2.74331 20.241 2.28788 18.8393C2.07256 18.1766 2.06254 17.3295 2.06254 15.2498C2.06254 13.1702 2.07256 12.3231 2.28788 11.6604C2.74331 10.2587 3.84225 9.15978 5.24394 8.70435C5.38496 8.65853 5.53933 8.62106 5.71835 8.59091Z"
                            fill="#FFF9D9"
                          />
                        </svg>
                      </div>
                    </div>
                    <button className="btn btn-sm px-3 btn-light rounded-pill mt-2">
                      Elite Trader
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="card card6 tool-card mb-3"
                  style={{
                    backgroundImage: 'url("assets/images/banner8.jpg")',
                  }}
                >
                  <div className="card-body mt-4 pt-3">
                    <div className="d-flex justify-content-center">
                      <div className="crd-icon">
                        <svg
                          width={18}
                          height={20}
                          viewBox="0 0 22 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 12.2707C9.35469 12.2707 8.02087 13.6045 8.02087 15.2498C8.02087 16.8952 9.35469 18.229 11 18.229C12.6454 18.229 13.9792 16.8952 13.9792 15.2498C13.9792 13.6045 12.6454 12.2707 11 12.2707ZM9.64587 15.2498C9.64587 14.502 10.2521 13.8957 11 13.8957C11.7479 13.8957 12.3542 14.502 12.3542 15.2498C12.3542 15.9977 11.7479 16.604 11 16.604C10.2521 16.604 9.64587 15.9977 9.64587 15.2498Z"
                            fill="#FFF9D9"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 0.354004C7.55976 0.354004 4.77087 3.1429 4.77087 6.58317V7.14954L4.74178 7.15888C2.84539 7.77506 1.35859 9.26186 0.742413 11.1583C0.437049 12.0981 0.437227 13.226 0.437518 15.0745V15.4252C0.437227 17.2736 0.437049 18.4016 0.742413 19.3414C1.35859 21.2378 2.84539 22.7246 4.74178 23.3408C5.68159 23.6462 6.80957 23.646 8.65802 23.6457H13.3421C15.1905 23.646 16.3185 23.6462 17.2583 23.3408C19.1547 22.7246 20.6415 21.2378 21.2577 19.3414C21.563 18.4016 21.5628 17.2736 21.5625 15.4252V15.0745C21.5628 13.226 21.563 12.0981 21.2577 11.1583C20.6415 9.26186 19.1547 7.77506 17.2583 7.15888L17.2292 7.14954V6.58317C17.2292 3.1429 14.4403 0.354004 11 0.354004ZM8.74239 6.854C7.78993 6.85397 7.02973 6.85394 6.39587 6.88982V6.58317C6.39587 4.04036 8.45722 1.979 11 1.979C13.5428 1.979 15.6042 4.04036 15.6042 6.58317V6.88982C14.9703 6.85394 14.2101 6.85397 13.2577 6.854H8.74239ZM5.71835 8.59091C6.36575 8.48184 7.23886 8.479 8.83337 8.479H13.1667C14.7612 8.479 15.6343 8.48184 16.2817 8.59091C16.4607 8.62106 16.6151 8.65853 16.7561 8.70435C18.1578 9.15978 19.2568 10.2587 19.7122 11.6604C19.9275 12.3231 19.9375 13.1702 19.9375 15.2498C19.9375 17.3295 19.9275 18.1766 19.7122 18.8393C19.2568 20.241 18.1578 21.3399 16.7561 21.7953C16.0934 22.0106 15.2463 22.0207 13.1667 22.0207H8.83337C6.75374 22.0207 5.90662 22.0106 5.24394 21.7953C3.84225 21.3399 2.74331 20.241 2.28788 18.8393C2.07256 18.1766 2.06254 17.3295 2.06254 15.2498C2.06254 13.1702 2.07256 12.3231 2.28788 11.6604C2.74331 10.2587 3.84225 9.15978 5.24394 8.70435C5.38496 8.65853 5.53933 8.62106 5.71835 8.59091Z"
                            fill="#FFF9D9"
                          />
                        </svg>
                      </div>
                    </div>
                    <button className="btn btn-sm px-3 btn-light rounded-pill mt-2">
                      Elite Trader
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="card card6 tool-card mb-3"
                  style={{
                    backgroundImage: 'url("assets/images/banner8.jpg")',
                  }}
                >
                  <div className="card-body mt-4 pt-3">
                    <div className="d-flex justify-content-center">
                      <div className="crd-icon">
                        <svg
                          width={18}
                          height={20}
                          viewBox="0 0 22 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 12.2707C9.35469 12.2707 8.02087 13.6045 8.02087 15.2498C8.02087 16.8952 9.35469 18.229 11 18.229C12.6454 18.229 13.9792 16.8952 13.9792 15.2498C13.9792 13.6045 12.6454 12.2707 11 12.2707ZM9.64587 15.2498C9.64587 14.502 10.2521 13.8957 11 13.8957C11.7479 13.8957 12.3542 14.502 12.3542 15.2498C12.3542 15.9977 11.7479 16.604 11 16.604C10.2521 16.604 9.64587 15.9977 9.64587 15.2498Z"
                            fill="#FFF9D9"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 0.354004C7.55976 0.354004 4.77087 3.1429 4.77087 6.58317V7.14954L4.74178 7.15888C2.84539 7.77506 1.35859 9.26186 0.742413 11.1583C0.437049 12.0981 0.437227 13.226 0.437518 15.0745V15.4252C0.437227 17.2736 0.437049 18.4016 0.742413 19.3414C1.35859 21.2378 2.84539 22.7246 4.74178 23.3408C5.68159 23.6462 6.80957 23.646 8.65802 23.6457H13.3421C15.1905 23.646 16.3185 23.6462 17.2583 23.3408C19.1547 22.7246 20.6415 21.2378 21.2577 19.3414C21.563 18.4016 21.5628 17.2736 21.5625 15.4252V15.0745C21.5628 13.226 21.563 12.0981 21.2577 11.1583C20.6415 9.26186 19.1547 7.77506 17.2583 7.15888L17.2292 7.14954V6.58317C17.2292 3.1429 14.4403 0.354004 11 0.354004ZM8.74239 6.854C7.78993 6.85397 7.02973 6.85394 6.39587 6.88982V6.58317C6.39587 4.04036 8.45722 1.979 11 1.979C13.5428 1.979 15.6042 4.04036 15.6042 6.58317V6.88982C14.9703 6.85394 14.2101 6.85397 13.2577 6.854H8.74239ZM5.71835 8.59091C6.36575 8.48184 7.23886 8.479 8.83337 8.479H13.1667C14.7612 8.479 15.6343 8.48184 16.2817 8.59091C16.4607 8.62106 16.6151 8.65853 16.7561 8.70435C18.1578 9.15978 19.2568 10.2587 19.7122 11.6604C19.9275 12.3231 19.9375 13.1702 19.9375 15.2498C19.9375 17.3295 19.9275 18.1766 19.7122 18.8393C19.2568 20.241 18.1578 21.3399 16.7561 21.7953C16.0934 22.0106 15.2463 22.0207 13.1667 22.0207H8.83337C6.75374 22.0207 5.90662 22.0106 5.24394 21.7953C3.84225 21.3399 2.74331 20.241 2.28788 18.8393C2.07256 18.1766 2.06254 17.3295 2.06254 15.2498C2.06254 13.1702 2.07256 12.3231 2.28788 11.6604C2.74331 10.2587 3.84225 9.15978 5.24394 8.70435C5.38496 8.65853 5.53933 8.62106 5.71835 8.59091Z"
                            fill="#FFF9D9"
                          />
                        </svg>
                      </div>
                    </div>
                    <button className="btn btn-sm px-3 btn-light rounded-pill mt-2">
                      Elite Trader
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tab Challenges end */}
          {/* tab Payout */}
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row mb-3 mt-4">
              <div className="col-lg-12">
                <p className="m-0 fw-bold">Payout</p>
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
          {/* tab Payout end */}
          {/* tab Max Allocation */}
          <div
            className="tab-pane fade"
            id="pills-Video"
            role="tabpanel"
            aria-labelledby="pills-Video-tab"
          >
            <div className="row mb-3 mt-4">
              <div className="col-lg-12">
                <p className="m-0 fw-bold">Max Allocation</p>
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
          {/* tab Max Allocation end */}
        </div>
      </div>
    </div>
  );
}
