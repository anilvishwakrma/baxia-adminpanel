import React from "react";

export default function InfinityHistory() {
  return (
    <div>
      <section className="banner-section">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 text-center">
              <h4 className="fw-bold">Hi, Gerry ...Welcome</h4>
              <p className="discl text-muted m-0">
                Start earning points by completing the tasks and redeem the
                points to claim your rewards.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul
                className="nav nav-pills screen-4-nav"
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
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={24} height={24} rx={12} fill="#0A0A0A" />
                      <path
                        d="M10.292 8.04481C11.0522 6.6816 11.432 6 12.0002 6C12.5684 6 12.9482 6.6816 13.7084 8.04481L13.9052 8.39761C14.1212 8.78521 14.2292 8.97901 14.3972 9.10681C14.5652 9.23461 14.7752 9.28201 15.1952 9.37681L15.5768 9.46321C17.0528 9.79741 17.7902 9.96421 17.966 10.5288C18.1412 11.0928 17.6384 11.6814 16.6322 12.858L16.3718 13.1622C16.0862 13.4964 15.9428 13.6638 15.8786 13.8702C15.8144 14.0772 15.836 14.3004 15.8792 14.7462L15.9188 15.1524C16.0706 16.7226 16.1468 17.5074 15.6872 17.856C15.2276 18.2052 14.5364 17.8866 13.1552 17.2506L12.797 17.0862C12.4046 16.905 12.2084 16.815 12.0002 16.815C11.792 16.815 11.5958 16.905 11.2034 17.0862L10.8458 17.2506C9.46395 17.8866 8.77275 18.2046 8.31375 17.8566C7.85355 17.5074 7.92975 16.7226 8.08155 15.1524L8.12115 14.7468C8.16435 14.3004 8.18595 14.0772 8.12115 13.8708C8.05755 13.6638 7.91415 13.4964 7.62855 13.1628L7.36815 12.858C6.36194 11.682 5.85914 11.0934 6.03434 10.5288C6.21014 9.96421 6.94814 9.79681 8.42415 9.46321L8.80575 9.37681C9.22515 9.28201 9.43455 9.23461 9.60315 9.10681C9.77115 8.97901 9.87915 8.78521 10.0952 8.39761L10.292 8.04481Z"
                        fill="#FFD700"
                      />
                    </svg>
                    Bronze Star
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link ms-3"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Available Points : 30
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="head-section pt-3">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-lg-12 nav-m">
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
                    Point activities
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
                    Redeem activities
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="bdr-dashed mt-0" />
        </div>
      </section>
      <div className="container-fluid">
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 text-center pb-5 pt-3">
                <div className="py-4">
                  <img src="/assets/images/woman.png" className="img-fluid" />
                </div>
                <div className="row mb-2 mt-4">
                  <div className="col-lg-12 text-center">
                    <p className="m-0 fw-bold">
                      Start earning points with infinity points
                    </p>
                    <p className="text-muted p2 mb-0">
                      Earn points and unlock rewards while completing tasks
                    </p>
                    <button className="btn btn-warning px-4 rounded-pill mt-4">
                      See all task
                    </button>
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
