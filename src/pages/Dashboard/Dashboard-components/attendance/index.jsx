import React from "react";
import "./attendance.css";
const Attendance = () => {
  const body_obj = {
    Name: "tanzil ",
    Class: "eight",
    Section: "kasdam",
    Date: "2/2/2019",
  };
  return (
    <>
      <div className="container my-3">
        <div className="jumbo-address">
          <div className="row no-margin p-3">
            <div className=" no-padding col-lg-8">
              <table className="addrss-list">
                <tbody>
                  <tr>
                    <th>নামঃ</th>
                    <td>ইফরিজা খানম </td>
                  </tr>
                  <tr>
                    <th>বিদ্যালয়ঃ</th>
                    <td> নবাবগঞ্জ পাইলট গার্লস স্কুল অ্যান্ড কলেজ </td>
                  </tr>
                  <tr>
                    <th>আইডিঃ </th>
                    <td>5787452</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className=" attendance-filter col-lg-4">
              <span>মোট ক্লাস: 34 </span>
              <br />
              <span>উপস্থিত: 30 </span>
              <br />
              <span>অনুপস্থিত: 04 </span>
              <div class="progress">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <hr />
            <div className="overflow-x my-3 d-flex w-100 flex-row justify-content-between align-items-center">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-md btn-danger">
                  অনুপস্থিতি
                </button>
                <button type="button" class="btn btn-md btn-warning active">
                  সব দেখব
                </button>
                <button type="button" class="btn btn-md btn-success">
                  উপস্থিতি
                </button>
              </div>
              <nav className="" aria-label="Page navigation example">
                <ul class="pagination justify-content-end 6">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      পূর্বের পৃষ্ঠা
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      ১
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      ২
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      ৩
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      পরবর্তী পৃষ্ঠা
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="overflow-x w-100">
              <table
                id="filtertable"
                className="table cust-datatable dataTable no-footer w-100  "
              >
                <thead>
                  <tr className="attendance-table-header">
                    <th style={{ minWidth: "100px" }}>ক্রমিক</th>
                    <th style={{ minWidth: "100px" }}>তারিখ</th>
                    <th style={{ minWidth: "100px" }}>বিষয়</th>
                    <th style={{ minWidth: "100px" }}>সময়</th>
                    <th style={{ minWidth: "100px" }}>অবস্থান</th>
                  </tr>
                </thead>
                <tbody className="routine-tbody">
                  <tr>
                    <td>১</td>
                    <td>১/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">সমাজ</span>
                    </td>
                    <td>৮ঃ৩০ </td>

                    <td>
                      <span className="mode mode_on">উপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>২</td>
                    <td>১/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">গণিত</span>
                    </td>
                    <td>৯ঃ৩০</td>

                    <td>
                      <span className="mode mode_on">উপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>৩ </td>
                    <td>১/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">বাংলা </span>
                    </td>
                    <td>১০ঃ৩০</td>

                    <td>
                      <span className="mode mode_on">উপস্থিত</span>
                    </td>
                  </tr>
                  <tr>
                    <td>৪ </td>
                    <td>২/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">বিজ্ঞান</span>
                    </td>
                    <td>৯ঃ০০</td>

                    <td>
                      <span className="mode mode_absent">অনুপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>৫ </td>
                    <td>২/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">বাংলা </span>
                    </td>
                    <td>১০ঃ০০</td>

                    <td>
                      <span className="mode mode_on">উপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>৬ </td>
                    <td>২/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">ইংরেজি </span>
                    </td>
                    <td>১১ঃ০০</td>

                    <td>
                      <span className="mode mode_on">উপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>৭ </td>
                    <td>৩/১/২০২১</td>
                    <td>
                      <span className="mode mode_Subject">গণিত</span>
                    </td>
                    <td>৮ঃ৩০</td>

                    <td>
                      <span className="mode mode_on">উপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>৮ </td>
                    <td>৩/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">আইসিটি </span>
                    </td>
                    <td>৯ঃ৩০ </td>

                    <td>
                      <span className="mode mode_absent">অনুপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>৯ </td>
                    <td>৩/১/২০২১</td>
                    <td>
                      <span className="mode mode_Subject">বাংলা</span>
                    </td>
                    <td>১০ঃ৩০ </td>

                    <td>
                      <span className="mode mode_on">উপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>১০</td>
                    <td>৪/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">আইসিটি</span>
                    </td>
                    <td>৯ঃ৩০</td>

                    <td>
                      <span className="mode mode_absent">অনুপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>১১</td>
                    <td>৪/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">সমাজ</span>
                    </td>
                    <td>৯ঃ৩০</td>

                    <td>
                      <span className="mode mode_on">উপস্থিত </span>
                    </td>
                  </tr>
                  <tr>
                    <td>১২</td>
                    <td>৪/১/২০২১ </td>
                    <td>
                      <span className="mode mode_Subject">গণিত</span>
                    </td>
                    <td>৯ঃ৩০</td>

                    <td>
                      <span className="mode mode_on">উপস্থিত </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
