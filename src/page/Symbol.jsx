import React from "react";

export default function Symbols() {
  return (
    <div>
      <section className="head-section pt-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5>Symbol Specificatons</h5>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-12 nav-m">
              <ul className="nav nav-pills mb-2" id="pills-tab" role="tablist">
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
                    Most Traded Pairs
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
                    Currency Pairs
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
                    Indices
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
                    Commodities
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
                    Crypto
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
                    Custom
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="bdr-dashed mt-0" />
        </div>
      </section>
      <div className="container-fluid mt-3">
        <div className="row pb-3">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <table className="table table-borderless table-m1">
                  <thead>
                    <tr>
                      <th className="ps-4 text-muted">Symbol</th>
                      <th>Bid Price</th>
                      <th>Ask Price</th>
                      <th>Spread</th>
                      <th>Commissions</th>
                      <th>Contract Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td>1.07309</td>
                      <td>1.07309</td>
                      <td>0.00000</td>
                      <td>$3</td>
                      <td>100000</td>
                    </tr>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td className="text-success">1.07309</td>
                      <td className="text-success">1.07309</td>
                      <td>0.00000</td>
                      <td>$3</td>
                      <td>100000</td>
                    </tr>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td className="text-success">1.07309</td>
                      <td>1.07309</td>
                      <td>0.00000</td>
                      <td>$3</td>
                      <td>100000</td>
                    </tr>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td>1.07309</td>
                      <td>1.07309</td>
                      <td>0.00000</td>
                      <td>$3</td>
                      <td>100000</td>
                    </tr>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td className="text-success">1.07309</td>
                      <td>1.07309</td>
                      <td className="text-danger">0.00000</td>
                      <td className="text-danger">$3</td>
                      <td>100000</td>
                    </tr>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td className="text-danger">1.07309</td>
                      <td>1.07309</td>
                      <td>0.00000</td>
                      <td>$3</td>
                      <td>100000</td>
                    </tr>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td>1.07309</td>
                      <td>1.07309</td>
                      <td>0.00000</td>
                      <td>$3</td>
                      <td>100000</td>
                    </tr>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td>1.07309</td>
                      <td>1.07309</td>
                      <td>0.00000</td>
                      <td>$3</td>
                      <td>100000</td>
                    </tr>
                    <tr>
                      <td className="ps-4 text-muted">EURUSD</td>
                      <td>1.07309</td>
                      <td>1.07309</td>
                      <td>0.00000</td>
                      <td>$3</td>
                      <td>100000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
