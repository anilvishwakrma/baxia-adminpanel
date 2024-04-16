import React from "react";
import { useParams } from "react-router-dom";
export default function HelpDetails() {
  const { name } = useParams();
  return (
    <div className="container-fluid details-head">
      <div className="row mt-4 d-flex align-items-center">
        <div className="col-lg-6">
          <p className="sub-m mb-1">
            Help{" "}
            <span className="fw-light">
              <i className="fa-solid fa-angles-right wb-color-1" /> {name}
            </span>
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6 col-md-6">
          <div className="card muted-card card5 mb-1">
            <div className="card-body border-0 ps-0">
              <div className="row d-flex align-items-center">
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
                        d="M11.4413 6.76C13.025 3.92 13.8163 2.5 15 2.5C16.1838 2.5 16.975 3.92 18.5588 6.76L18.9688 7.495C19.4188 8.3025 19.6438 8.70625 19.9938 8.9725C20.3438 9.23875 20.7813 9.3375 21.6563 9.535L22.4513 9.715C25.5263 10.4112 27.0625 10.7588 27.4288 11.935C27.7938 13.11 26.7463 14.3363 24.65 16.7875L24.1075 17.4213C23.5125 18.1175 23.2138 18.4662 23.08 18.8962C22.9463 19.3275 22.9913 19.7925 23.0813 20.7212L23.1638 21.5675C23.48 24.8387 23.6388 26.4738 22.6813 27.2C21.7238 27.9275 20.2838 27.2638 17.4063 25.9387L16.66 25.5962C15.8425 25.2188 15.4338 25.0312 15 25.0312C14.5663 25.0312 14.1575 25.2188 13.34 25.5962L12.595 25.9387C9.7163 27.2638 8.2763 27.9263 7.32005 27.2013C6.3613 26.4737 6.52005 24.8387 6.8363 21.5675L6.9188 20.7225C7.0088 19.7925 7.0538 19.3275 6.9188 18.8975C6.7863 18.4663 6.48755 18.1175 5.89255 17.4225L5.35005 16.7875C3.2538 14.3375 2.2063 13.1112 2.5713 11.935C2.93755 10.7588 4.47505 10.41 7.55005 9.715L8.34505 9.535C9.2188 9.3375 9.65505 9.23875 10.0063 8.9725C10.3563 8.70625 10.5813 8.3025 11.0313 7.495L11.4413 6.76Z"
                        fill="#FFD700"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-11 ps-4">
                  <h5 className="m-0 fw-bold ps-3"> {name}</h5>
                  <div className="links ps-3">
                    <a className="wb-color-1">by Baxia</a>
                    <a className="wb-color-1">• 1 article</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row details-accordion">
        <div className="col-lg-8">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Is Baxia regulated?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body wb-color-1">
                  <p className="dc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <ul>
                    <li>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </li>
                    <li>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Is Baxia regulated under USA or Canadian jurisdiction?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body wb-color-1">
                  <p className="dc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <ul>
                    <li>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </li>
                    <li>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Why should I join Baxia?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body wb-color-1">
                  <p className="dc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <ul>
                    <li>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </li>
                    <li>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Are traders from the US prohibited from Baxia?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body wb-color-1">
                  <p className="dc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <ul>
                    <li>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </li>
                    <li>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </li>
                  </ul>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
