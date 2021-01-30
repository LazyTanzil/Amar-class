import React from "react";
import "./style.css";
import CLassVideo from "./class.mp4";
const ClassRoutine = () => {
  return (
    <div className="container p-30">
      <div className="row">
        <div className="col-md-12 main-datatable">
          <div className="card_body">
            <div className="row d-flex">
              <h2>ক্লাস রুটিন </h2>
              <div className="col-sm-8 add_flex">
                <div className="form-group searchInput">
                  <label htmlFor="email">Search:</label>
                  <input
                    type="search"
                    className="form-control"
                    id="filterbox"
                    placeholder=" "
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x">
              <table
                style={{ width: "100%" }}
                id="filtertable"
                className="table cust-datatable dataTable no-footer "
              >
                <thead>
                  <tr className="table-header">
                    <th style={{ minWidth: "50px" }}>ক্রমিক</th>
                    <th style={{ minWidth: "150px" }}>শিক্ষক</th>
                    <th style={{ minWidth: "150px" }}>বিষয়</th>
                    <th style={{ minWidth: "100px" }}>সময়</th>
                    <th style={{ minWidth: "100px" }}>তারিখ</th>
                    <th style={{ minWidth: "150px" }}>অবস্থান</th>
                    <th style={{ minWidth: "150px" }}>তথ্য</th>
                  </tr>
                </thead>
                <tbody className="routine-tbody">
                  <tr>
                    <td>১</td>
                    <td>শাহেদ মিয়া</td>
                    <td>
                      <span className="mode mode_process">সমাজ</span>
                    </td>
                    <td>৮ঃ৩০ </td>
                    <td>১/২/২০২১ </td>
                    <td>
                      <span className="mode mode_on">শেষ </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link" disabled>
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <a className="btn btn-dark" href={CLassVideo} download>
                          ক্লাসটি ডাউনলোড করব
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="custom-body-gray-bg">
                    <td>২</td>
                    <td>আলমগীর হোসেন </td>
                    <td>
                      <span className="mode mode_process">গণিত</span>
                    </td>
                    <td>৯ঃ৩০</td>
                    <td>১/২/২০২১ </td>
                    <td>
                      <span className="mode mode_on">শেষ </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link" disabled>
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <a className="btn btn-dark" href={CLassVideo} download>
                          ক্লাসটি ডাউনলোড করব
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>৩ </td>
                    <td>নারগিস আক্তার </td>
                    <td>
                      <span className="mode mode_process">বাংলা </span>
                    </td>
                    <td>১০ঃ৩০</td>
                    <td>১/২/২০২১ </td>
                    <td>
                      <span className="mode mode_on">শেষ </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link" disabled>
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <a className="btn btn-dark" href={CLassVideo} download>
                          ক্লাসটি ডাউনলোড করব
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="custom-body-gray-bg">
                    <td>৪ </td>
                    <td>ইউসুফ ইসলাম </td>
                    <td>
                      <span className="mode mode_process">বিজ্ঞান</span>
                    </td>
                    <td>৯ঃ০০</td>
                    <td>২/২/২০২১ </td>
                    <td>
                      <span className="mode mode_running">শুরু হয়েছে </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link">
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon bg-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow text-white"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-dark" disabled>
                          ক্লাসটি ডাউনলোড করব
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>৫ </td>
                    <td>নারগিস আক্তার </td>
                    <td>
                      <span className="mode mode_process">বাংলা </span>
                    </td>
                    <td>১০ঃ০০</td>
                    <td>২/২/২০২১ </td>
                    <td>
                      <span className="mode mode_upcoming" disabled>
                        পরবর্তী ক্লাস
                      </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link" disabled>
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon bg-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow text-white"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-dark" disabled>
                          ক্লাসটি ডাউনলোড করব
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="custom-body-gray-bg">
                    <td>৬ </td>
                    <td>সহিদুল ইসলাম </td>
                    <td>
                      <span className="mode mode_process">ইংরেজি </span>
                    </td>
                    <td>১১ঃ০০</td>
                    <td>২/২/২০২১ </td>
                    <td>
                      <span className="mode mode_upcoming">পরবর্তী ক্লাস </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link" disabled>
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon bg-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow  text-white"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-dark" disabled>
                          ক্লাসটি ডাউনলোড করব
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>৭ </td>
                    <td>আলমগীর হোসেন </td>
                    <td>
                      <span className="mode mode_process">গণিত</span>
                    </td>
                    <td>৮ঃ৩০</td>
                    <td>৩/২/২০২১</td>
                    <td>
                      <span className="mode mode_off">দেরি আছে </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link" disabled>
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-dark" disabled>
                          ক্লাসটি ডাউনলোড করব
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="custom-body-gray-bg">
                    <td>৮ </td>
                    <td>মুরশেদা পারভীন </td>
                    <td>
                      <span className="mode mode_process">আইসিটি </span>
                    </td>
                    <td>৯ঃ৩০ </td>
                    <td>৩/২/২০২১ </td>
                    <td>
                      <span className="mode mode_off">দেরি আছে </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link" disabled>
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-dark" disabled>
                          ক্লাসটি ডাউনলোড করব
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>৯ </td>
                    <td>নারগিস আক্তার </td>
                    <td>
                      <span className="mode mode_process">বাংলা</span>
                    </td>
                    <td>১০ঃ৩০ </td>
                    <td>৩/২/২০২১</td>
                    <td>
                      <span className="mode mode_off">দেরি আছে </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-link" disabled>
                          <a
                            href="https://meet.google.com/ykc-bycj-ocv"
                            className="dropdown_icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-location-arrow"></i>
                          </a>
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-dark" disabled>
                          ক্লাসটি ডাউনলোড করব
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoutine;
