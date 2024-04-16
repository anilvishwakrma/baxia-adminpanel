import React from "react";

export default function Infinity() {
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
                      className="me-2"
                      width={24}
                      height={24}
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
      <div className="container-fluid">
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
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tab tool start */}
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card muted-card card4 mb-3">
                  <div className="card-body">
                    <div className="row d-flex align-items-start">
                      <div className="col-1">
                        <div className="svg-cover">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                              fill="#3D5A98"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-11 ps-4">
                        <h5 className="m-0 fw-bold ps-3">
                          Feature your FundedNext success in prop traders club
                        </h5>
                        <p className="m-0 text-muted p2 mt-0 ps-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <div className="col-12 text-end mt-3">
                        <button className="btn btn-sm btn-outline-warning rounded-pill mb-2">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0473 5.99343C10.1139 5.95501 10.1815 5.92046 10.25 5.88972V9.91994C8.62301 9.20144 8.47063 6.90374 10.0473 5.99343Z"
                              fill="#FFD700"
                            />
                            <path
                              d="M11.75 16.1104V12.08C13.3772 12.7984 13.5296 15.0962 11.9529 16.0066C11.8862 16.045 11.8185 16.0796 11.75 16.1104Z"
                              fill="#FFD700"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4V4.30809C9.92325 4.39007 9.60262 4.51814 9.29733 4.6944C6.57547 6.26586 6.92142 10.2989 9.87115 11.3839L10.25 11.5232V16.2194C9.71513 16.0686 9.23724 15.717 8.93805 15.1988L8.56248 14.5483C8.35538 14.1895 7.89668 14.0666 7.53796 14.2737C7.17924 14.4808 7.05634 14.9395 7.26344 15.2983L7.63901 15.9488C8.21747 16.9507 9.19267 17.5796 10.25 17.7535V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V17.692C12.0768 17.61 12.3975 17.4819 12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.75 10.4767V5.78051C12.285 5.93135 12.7629 6.28296 13.0622 6.80125L13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4622 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L14.3612 6.05125C13.7827 5.04927 12.8074 4.42031 11.75 4.24649V4Z"
                              fill="#FFD700"
                            />
                          </svg>
                          +100
                        </button>
                        <button className="btn btn-sm btn-outline-secondary rounded-pill mb-2 ms-2">
                          Discover more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tab tool end */}
        </div>
      </div>
    </div>
  );
}
