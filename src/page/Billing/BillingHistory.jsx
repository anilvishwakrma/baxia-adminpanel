import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function BillingHistory() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <section className="head-section pt-0">
        <div className="container-fluid mb-3 px-lg-0">
          <div className="row">
            <div className="col-lg-12">
              <h5>Billing Payment Method</h5>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-12 nav-m">
              <Link
                to="/Billing/stellar-challenge"
                className={
                  (pathname === "/Billing/stellar-challenge" ||
                    pathname === "/Billing/evaluation" ||
                    pathname === "/Billing/express" ||
                    pathname === "/Billing/free-trial") &&
                  "active"
                }
              >
                My Plan
              </Link>
              <Link
                to="/Billing/history"
                className={pathname === "/Billing/history" && "active"}
              >
                Payment history
              </Link>
            </div>
          </div>
          <div className="bdr-dashed mt-3" />
        </div>
      </section>
      <div class="container-fluid">
        <div className="row d-flex justify-content-end py-3">
          <div className="col-lg-2 col-md-2 col-sm col-6">
            <select className="form-select rounded-pill">
              <option value="pending">Pending</option>
              <option value="success">Success</option>
              <option value="faild">Failed</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <table className="table table-borderless table-m1">
              <thead>
                <tr>
                  <th>sn</th>
                  <th>payment method</th>
                  <th>status</th>
                  <th>date</th>
                  <th>transaction type</th>
                  <th>paid amount</th>
                  <th>funding package</th>
                  <th>payment proof</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>sn</td>
                  <td>payment method</td>
                  <td>status</td>
                  <td>date</td>
                  <td>transaction type</td>
                  <td>paid amount</td>
                  <td>funding package</td>
                  <td>payment proof</td>
                </tr>
                <tr>
                  <td>sn</td>
                  <td>payment method</td>
                  <td>status</td>
                  <td>date</td>
                  <td>transaction type</td>
                  <td>paid amount</td>
                  <td>funding package</td>
                  <td>payment proof</td>
                </tr>
                <tr>
                  <td>sn</td>
                  <td>payment method</td>
                  <td>status</td>
                  <td>date</td>
                  <td>transaction type</td>
                  <td>paid amount</td>
                  <td>funding package</td>
                  <td>payment proof</td>
                </tr>
                <tr>
                  <td>sn</td>
                  <td>payment method</td>
                  <td>status</td>
                  <td>date</td>
                  <td>transaction type</td>
                  <td>paid amount</td>
                  <td>funding package</td>
                  <td>payment proof</td>
                </tr>
                <tr>
                  <td>sn</td>
                  <td>payment method</td>
                  <td>status</td>
                  <td>date</td>
                  <td>transaction type</td>
                  <td>paid amount</td>
                  <td>funding package</td>
                  <td>payment proof</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
