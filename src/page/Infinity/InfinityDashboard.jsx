import React from "react";

export default function InfinityDashboard() {
  return (
    <div>
      <section className="banner-section">
        <div className="container">
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
      <section className="head-section pt-3">
        <div className="container">
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
                    Rewards
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
                    Approved
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
                    Pending
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
                    Rejected
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
            <div className="card card7 mt-4 mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3">
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
                          d="M12.5 1.5625C10.6015 1.5625 9.0625 3.10152 9.0625 5C9.0625 5.56264 9.19767 6.09371 9.43732 6.5625H5.625C3.38134 6.5625 1.5625 8.38134 1.5625 10.625C1.5625 11.7637 2.03162 12.7928 2.78472 13.5295C2.76658 13.9769 2.77726 14.4089 2.79029 14.9358C2.80065 15.3549 2.8125 15.834 2.8125 16.4286V16.462C2.8125 17.9591 2.81249 19.1284 2.87395 20.0721C2.93636 21.0303 3.06501 21.822 3.35393 22.5528C4.07621 24.3795 5.4673 25.8445 7.23503 26.6116C7.94674 26.9205 8.71635 27.0569 9.63844 27.1228C10.5435 27.1875 11.6633 27.1875 13.0885 27.1875H16.9114C18.3366 27.1875 19.4565 27.1875 20.3616 27.1228C21.2837 27.0569 22.0533 26.9205 22.765 26.6116C24.5327 25.8445 25.9238 24.3795 26.6461 22.5528C26.935 21.822 27.0636 21.0303 27.126 20.0721C27.1875 19.1285 27.1875 17.9592 27.1875 16.4622V16.3924C27.1875 15.0323 27.1875 14.3437 27.1407 13.6006C27.9373 12.8598 28.4375 11.8008 28.4375 10.625C28.4375 8.38134 26.6187 6.5625 24.375 6.5625H20.5627C20.8023 6.09371 20.9375 5.56264 20.9375 5C20.9375 3.10152 19.3985 1.5625 17.5 1.5625C16.515 1.5625 15.6267 1.97681 15 2.64067C14.3733 1.97681 13.485 1.5625 12.5 1.5625ZM12.5 3.4375C13.3629 3.4375 14.0625 4.13706 14.0625 5V6.5625H12.5C11.6371 6.5625 10.9375 5.86294 10.9375 5C10.9375 4.13706 11.6371 3.4375 12.5 3.4375ZM19.0625 5C19.0625 5.86294 18.3629 6.5625 17.5 6.5625H15.9375V5C15.9375 4.13706 16.6371 3.4375 17.5 3.4375C18.3629 3.4375 19.0625 4.13706 19.0625 5ZM3.4375 10.625C3.4375 9.41688 4.41688 8.4375 5.625 8.4375H14.0625V12.8125H5.625C5.14786 12.8125 4.70893 12.6608 4.35013 12.4029C3.79558 12.0042 3.4375 11.3564 3.4375 10.625ZM26.5625 10.625C26.5625 9.41688 25.5831 8.4375 24.375 8.4375H15.9375V12.8125H24.375C24.8436 12.8125 25.2752 12.6662 25.6304 12.4168C26.196 12.0194 26.5625 11.365 26.5625 10.625ZM4.65753 14.5714C4.96782 14.6473 5.29191 14.6875 5.625 14.6875H14.0625L14.0625 25.3125H13.125C11.6555 25.3125 10.6026 25.3119 9.77212 25.2526C8.951 25.1939 8.41828 25.0811 7.98142 24.8916C6.6863 24.3296 5.64397 23.2453 5.09758 21.8633C4.91074 21.3908 4.80152 20.8182 4.74499 19.9502C4.68796 19.0746 4.6875 17.9662 4.6875 16.4286C4.6875 15.6804 4.67341 15.1602 4.66216 14.7446L4.65753 14.5714ZM15.9375 14.6875L15.9375 25.3125H16.875C18.3445 25.3125 19.3974 25.3119 20.2279 25.2526C21.049 25.1939 21.5817 25.0811 22.0186 24.8916C23.3137 24.3296 24.356 23.2453 24.9024 21.8633C25.0893 21.3908 25.1985 20.8182 25.255 19.9502C25.312 19.0746 25.3125 17.9662 25.3125 16.4286C25.3125 15.6029 25.3124 15.0416 25.3034 14.5807C25.005 14.6506 24.6941 14.6875 24.375 14.6875H15.9375Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </div>
                    <p>
                      Redeem a Coupon for <b>20$</b> while earning <b>2,500</b>{" "}
                      Points
                    </p>
                    <button className="btn btn-sm btn-outline-warning btn-warning-faded rounded-pill mb-2">
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
                      $20 Off
                    </button>
                    <button className="btn btn-light btn-light-faded rounded-pill mb-2">
                      Redeem <i className="fa-solid fa-chevron-right" />
                    </button>
                  </div>
                  <div className="col-lg-3">
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
                          d="M12.5 1.5625C10.6015 1.5625 9.0625 3.10152 9.0625 5C9.0625 5.56264 9.19767 6.09371 9.43732 6.5625H5.625C3.38134 6.5625 1.5625 8.38134 1.5625 10.625C1.5625 11.7637 2.03162 12.7928 2.78472 13.5295C2.76658 13.9769 2.77726 14.4089 2.79029 14.9358C2.80065 15.3549 2.8125 15.834 2.8125 16.4286V16.462C2.8125 17.9591 2.81249 19.1284 2.87395 20.0721C2.93636 21.0303 3.06501 21.822 3.35393 22.5528C4.07621 24.3795 5.4673 25.8445 7.23503 26.6116C7.94674 26.9205 8.71635 27.0569 9.63844 27.1228C10.5435 27.1875 11.6633 27.1875 13.0885 27.1875H16.9114C18.3366 27.1875 19.4565 27.1875 20.3616 27.1228C21.2837 27.0569 22.0533 26.9205 22.765 26.6116C24.5327 25.8445 25.9238 24.3795 26.6461 22.5528C26.935 21.822 27.0636 21.0303 27.126 20.0721C27.1875 19.1285 27.1875 17.9592 27.1875 16.4622V16.3924C27.1875 15.0323 27.1875 14.3437 27.1407 13.6006C27.9373 12.8598 28.4375 11.8008 28.4375 10.625C28.4375 8.38134 26.6187 6.5625 24.375 6.5625H20.5627C20.8023 6.09371 20.9375 5.56264 20.9375 5C20.9375 3.10152 19.3985 1.5625 17.5 1.5625C16.515 1.5625 15.6267 1.97681 15 2.64067C14.3733 1.97681 13.485 1.5625 12.5 1.5625ZM12.5 3.4375C13.3629 3.4375 14.0625 4.13706 14.0625 5V6.5625H12.5C11.6371 6.5625 10.9375 5.86294 10.9375 5C10.9375 4.13706 11.6371 3.4375 12.5 3.4375ZM19.0625 5C19.0625 5.86294 18.3629 6.5625 17.5 6.5625H15.9375V5C15.9375 4.13706 16.6371 3.4375 17.5 3.4375C18.3629 3.4375 19.0625 4.13706 19.0625 5ZM3.4375 10.625C3.4375 9.41688 4.41688 8.4375 5.625 8.4375H14.0625V12.8125H5.625C5.14786 12.8125 4.70893 12.6608 4.35013 12.4029C3.79558 12.0042 3.4375 11.3564 3.4375 10.625ZM26.5625 10.625C26.5625 9.41688 25.5831 8.4375 24.375 8.4375H15.9375V12.8125H24.375C24.8436 12.8125 25.2752 12.6662 25.6304 12.4168C26.196 12.0194 26.5625 11.365 26.5625 10.625ZM4.65753 14.5714C4.96782 14.6473 5.29191 14.6875 5.625 14.6875H14.0625L14.0625 25.3125H13.125C11.6555 25.3125 10.6026 25.3119 9.77212 25.2526C8.951 25.1939 8.41828 25.0811 7.98142 24.8916C6.6863 24.3296 5.64397 23.2453 5.09758 21.8633C4.91074 21.3908 4.80152 20.8182 4.74499 19.9502C4.68796 19.0746 4.6875 17.9662 4.6875 16.4286C4.6875 15.6804 4.67341 15.1602 4.66216 14.7446L4.65753 14.5714ZM15.9375 14.6875L15.9375 25.3125H16.875C18.3445 25.3125 19.3974 25.3119 20.2279 25.2526C21.049 25.1939 21.5817 25.0811 22.0186 24.8916C23.3137 24.3296 24.356 23.2453 24.9024 21.8633C25.0893 21.3908 25.1985 20.8182 25.255 19.9502C25.312 19.0746 25.3125 17.9662 25.3125 16.4286C25.3125 15.6029 25.3124 15.0416 25.3034 14.5807C25.005 14.6506 24.6941 14.6875 24.375 14.6875H15.9375Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </div>
                    <p>
                      Redeem a Coupon for <b>20$</b> while earning <b>2,500</b>{" "}
                      Points
                    </p>
                    <button className="btn btn-sm btn-outline-warning btn-warning-faded rounded-pill mb-2">
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
                      $20 Off
                    </button>
                    <button className="btn btn-light btn-light-faded rounded-pill mb-2">
                      Redeem <i className="fa-solid fa-chevron-right" />
                    </button>
                  </div>
                  <div className="col-lg-3">
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
                          d="M12.5 1.5625C10.6015 1.5625 9.0625 3.10152 9.0625 5C9.0625 5.56264 9.19767 6.09371 9.43732 6.5625H5.625C3.38134 6.5625 1.5625 8.38134 1.5625 10.625C1.5625 11.7637 2.03162 12.7928 2.78472 13.5295C2.76658 13.9769 2.77726 14.4089 2.79029 14.9358C2.80065 15.3549 2.8125 15.834 2.8125 16.4286V16.462C2.8125 17.9591 2.81249 19.1284 2.87395 20.0721C2.93636 21.0303 3.06501 21.822 3.35393 22.5528C4.07621 24.3795 5.4673 25.8445 7.23503 26.6116C7.94674 26.9205 8.71635 27.0569 9.63844 27.1228C10.5435 27.1875 11.6633 27.1875 13.0885 27.1875H16.9114C18.3366 27.1875 19.4565 27.1875 20.3616 27.1228C21.2837 27.0569 22.0533 26.9205 22.765 26.6116C24.5327 25.8445 25.9238 24.3795 26.6461 22.5528C26.935 21.822 27.0636 21.0303 27.126 20.0721C27.1875 19.1285 27.1875 17.9592 27.1875 16.4622V16.3924C27.1875 15.0323 27.1875 14.3437 27.1407 13.6006C27.9373 12.8598 28.4375 11.8008 28.4375 10.625C28.4375 8.38134 26.6187 6.5625 24.375 6.5625H20.5627C20.8023 6.09371 20.9375 5.56264 20.9375 5C20.9375 3.10152 19.3985 1.5625 17.5 1.5625C16.515 1.5625 15.6267 1.97681 15 2.64067C14.3733 1.97681 13.485 1.5625 12.5 1.5625ZM12.5 3.4375C13.3629 3.4375 14.0625 4.13706 14.0625 5V6.5625H12.5C11.6371 6.5625 10.9375 5.86294 10.9375 5C10.9375 4.13706 11.6371 3.4375 12.5 3.4375ZM19.0625 5C19.0625 5.86294 18.3629 6.5625 17.5 6.5625H15.9375V5C15.9375 4.13706 16.6371 3.4375 17.5 3.4375C18.3629 3.4375 19.0625 4.13706 19.0625 5ZM3.4375 10.625C3.4375 9.41688 4.41688 8.4375 5.625 8.4375H14.0625V12.8125H5.625C5.14786 12.8125 4.70893 12.6608 4.35013 12.4029C3.79558 12.0042 3.4375 11.3564 3.4375 10.625ZM26.5625 10.625C26.5625 9.41688 25.5831 8.4375 24.375 8.4375H15.9375V12.8125H24.375C24.8436 12.8125 25.2752 12.6662 25.6304 12.4168C26.196 12.0194 26.5625 11.365 26.5625 10.625ZM4.65753 14.5714C4.96782 14.6473 5.29191 14.6875 5.625 14.6875H14.0625L14.0625 25.3125H13.125C11.6555 25.3125 10.6026 25.3119 9.77212 25.2526C8.951 25.1939 8.41828 25.0811 7.98142 24.8916C6.6863 24.3296 5.64397 23.2453 5.09758 21.8633C4.91074 21.3908 4.80152 20.8182 4.74499 19.9502C4.68796 19.0746 4.6875 17.9662 4.6875 16.4286C4.6875 15.6804 4.67341 15.1602 4.66216 14.7446L4.65753 14.5714ZM15.9375 14.6875L15.9375 25.3125H16.875C18.3445 25.3125 19.3974 25.3119 20.2279 25.2526C21.049 25.1939 21.5817 25.0811 22.0186 24.8916C23.3137 24.3296 24.356 23.2453 24.9024 21.8633C25.0893 21.3908 25.1985 20.8182 25.255 19.9502C25.312 19.0746 25.3125 17.9662 25.3125 16.4286C25.3125 15.6029 25.3124 15.0416 25.3034 14.5807C25.005 14.6506 24.6941 14.6875 24.375 14.6875H15.9375Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </div>
                    <p>
                      Redeem a Coupon for <b>20$</b> while earning <b>2,500</b>{" "}
                      Points
                    </p>
                    <button className="btn btn-sm btn-outline-warning btn-warning-faded rounded-pill mb-2">
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
                      $20 Off
                    </button>
                    <button className="btn btn-light btn-light-faded rounded-pill mb-2">
                      Redeem <i className="fa-solid fa-chevron-right" />
                    </button>
                  </div>
                  <div className="col-lg-3">
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
                          d="M12.5 1.5625C10.6015 1.5625 9.0625 3.10152 9.0625 5C9.0625 5.56264 9.19767 6.09371 9.43732 6.5625H5.625C3.38134 6.5625 1.5625 8.38134 1.5625 10.625C1.5625 11.7637 2.03162 12.7928 2.78472 13.5295C2.76658 13.9769 2.77726 14.4089 2.79029 14.9358C2.80065 15.3549 2.8125 15.834 2.8125 16.4286V16.462C2.8125 17.9591 2.81249 19.1284 2.87395 20.0721C2.93636 21.0303 3.06501 21.822 3.35393 22.5528C4.07621 24.3795 5.4673 25.8445 7.23503 26.6116C7.94674 26.9205 8.71635 27.0569 9.63844 27.1228C10.5435 27.1875 11.6633 27.1875 13.0885 27.1875H16.9114C18.3366 27.1875 19.4565 27.1875 20.3616 27.1228C21.2837 27.0569 22.0533 26.9205 22.765 26.6116C24.5327 25.8445 25.9238 24.3795 26.6461 22.5528C26.935 21.822 27.0636 21.0303 27.126 20.0721C27.1875 19.1285 27.1875 17.9592 27.1875 16.4622V16.3924C27.1875 15.0323 27.1875 14.3437 27.1407 13.6006C27.9373 12.8598 28.4375 11.8008 28.4375 10.625C28.4375 8.38134 26.6187 6.5625 24.375 6.5625H20.5627C20.8023 6.09371 20.9375 5.56264 20.9375 5C20.9375 3.10152 19.3985 1.5625 17.5 1.5625C16.515 1.5625 15.6267 1.97681 15 2.64067C14.3733 1.97681 13.485 1.5625 12.5 1.5625ZM12.5 3.4375C13.3629 3.4375 14.0625 4.13706 14.0625 5V6.5625H12.5C11.6371 6.5625 10.9375 5.86294 10.9375 5C10.9375 4.13706 11.6371 3.4375 12.5 3.4375ZM19.0625 5C19.0625 5.86294 18.3629 6.5625 17.5 6.5625H15.9375V5C15.9375 4.13706 16.6371 3.4375 17.5 3.4375C18.3629 3.4375 19.0625 4.13706 19.0625 5ZM3.4375 10.625C3.4375 9.41688 4.41688 8.4375 5.625 8.4375H14.0625V12.8125H5.625C5.14786 12.8125 4.70893 12.6608 4.35013 12.4029C3.79558 12.0042 3.4375 11.3564 3.4375 10.625ZM26.5625 10.625C26.5625 9.41688 25.5831 8.4375 24.375 8.4375H15.9375V12.8125H24.375C24.8436 12.8125 25.2752 12.6662 25.6304 12.4168C26.196 12.0194 26.5625 11.365 26.5625 10.625ZM4.65753 14.5714C4.96782 14.6473 5.29191 14.6875 5.625 14.6875H14.0625L14.0625 25.3125H13.125C11.6555 25.3125 10.6026 25.3119 9.77212 25.2526C8.951 25.1939 8.41828 25.0811 7.98142 24.8916C6.6863 24.3296 5.64397 23.2453 5.09758 21.8633C4.91074 21.3908 4.80152 20.8182 4.74499 19.9502C4.68796 19.0746 4.6875 17.9662 4.6875 16.4286C4.6875 15.6804 4.67341 15.1602 4.66216 14.7446L4.65753 14.5714ZM15.9375 14.6875L15.9375 25.3125H16.875C18.3445 25.3125 19.3974 25.3119 20.2279 25.2526C21.049 25.1939 21.5817 25.0811 22.0186 24.8916C23.3137 24.3296 24.356 23.2453 24.9024 21.8633C25.0893 21.3908 25.1985 20.8182 25.255 19.9502C25.312 19.0746 25.3125 17.9662 25.3125 16.4286C25.3125 15.6029 25.3124 15.0416 25.3034 14.5807C25.005 14.6506 24.6941 14.6875 24.375 14.6875H15.9375Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </div>
                    <p>
                      Redeem a Coupon for <b>20$</b> while earning <b>2,500</b>{" "}
                      Points
                    </p>
                    <button className="btn btn-sm btn-outline-warning btn-warning-faded rounded-pill mb-2">
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
                      $20 Off
                    </button>
                    <button className="btn btn-light btn-light-faded rounded-pill mb-2">
                      Redeem <i className="fa-solid fa-chevron-right" />
                    </button>
                  </div>
                </div>
                <div className="bdr-dashed mt-4 pb-3" />
                <div className="row my-3">
                  <div className="col-lg-12 text-center">
                    <button className="btn btn-dark rounded-pill px-3">
                      See more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3 mt-4">
              <div className="col-lg-9 col-md-9">
                <p className="m-0 fw-bold">
                  Level Up, Earn Badges, Win Unique Rewards!
                </p>
                <p className="text-muted p2 mb-0">
                  Here's the best part, your badge level will be the same, so
                  your highest achievement always stays on display.
                </p>
              </div>
              <div className="col-lg-3 col-md-3">
                <button className="btn btn-dark float-end px-4 mt-2 rounded-pill btn-sm">
                  See FAQ
                </button>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-12">
                <div className="d-flex align-items-start">
                  <div
                    className="nav flex-column nav-pills faded-nav me-3 mt-4"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <div className="row">
                        <div className="col-4 ps-1">
                          <i className="fa fa-star" />
                        </div>
                        <div className="col-8 pt-1 ps-2">
                          <p className="p1 m-0 ps-1">Bronze</p>
                          <p className="p2 m-0 fw-bold ps-1">0&nbsp;Points</p>
                        </div>
                      </div>
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <div className="row">
                        <div className="col-4 ps-1">
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="col-8 pt-1 ps-2">
                          <p className="p1 m-0 ps-1">Bronze</p>
                          <p className="p2 m-0 fw-bold ps-1">
                            10,000&nbsp;Points
                          </p>
                        </div>
                      </div>
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <div className="row">
                        <div className="col-4 ps-1">
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="col-8 pt-1 ps-2">
                          <p className="p1 m-0 ps-1">Bronze</p>
                          <p className="p2 m-0 fw-bold ps-1">
                            20,000&nbsp;Points
                          </p>
                        </div>
                      </div>
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <div className="row">
                        <div className="col-4 ps-1">
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="col-8 pt-1 ps-2">
                          <p className="p1 m-0 ps-1">Bronze</p>
                          <p className="p2 m-0 fw-bold ps-1">
                            30,000&nbsp;Points
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="tab-content mt-4" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="card card-71">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Engage in activities and accumulate points.
                                </p>
                              </div>
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Redeem amazing offers,rewards with the points
                                  you earned.
                                </p>
                              </div>
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Engage in activities and accumulate points.
                                </p>
                              </div>
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Engage in activities and accumulate points.
                                </p>
                              </div>
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Engage in activities and accumulate points.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Engage in activities and accumulate points.
                                </p>
                              </div>
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Engage in activities and accumulate points.
                                </p>
                              </div>
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Redeem amazing offers,rewards with the points
                                  you earned.
                                </p>
                              </div>
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Engage in activities and accumulate points.
                                </p>
                              </div>
                              <div className="bg-secondary p-3">
                                <i className="fa-solid fa-angles-right" />
                                <p>
                                  Engage in activities and accumulate points.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3 mt-4">
              <div className="col-lg-9 col-md-9">
                <p className="m-0 fw-bold">
                  Earn Points Through These Activities!
                </p>
                <p className="text-muted p2 mb-0">
                  Secure your points by completing the tasks and redeem to claim
                  amazing gifts and rewards.
                </p>
              </div>
              <div className="col-lg-3 col-md-3">
                <button className="btn btn-dark float-end px-4 mt-2 rounded-pill btn-sm">
                  See all task
                </button>
              </div>
            </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
