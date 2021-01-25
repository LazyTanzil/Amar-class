import React from "react";
import "./style.css";
import profilePic from "./images/profile.jpg";

const Profile = () => {
  return (
    <div className="container-fluid overcover profile profile-bg">
      <div className="container profile-box">
        <div className="top-cover">
          <div className="covwe-inn">
            <div className="row no-margin">
              <div className="col-md-3 img-c">
                <img src={profilePic} alt="background" />
              </div>
              <div className="col-md-9 tit-det">
                <h2>ইফরিজা খানম </h2>
                {/* <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it to make a type specimen book. It has
                                  survived not only five centuries,text ever since the 1500s, when an unknown printer took
                                  a galley of type and scrambled it to make a type specimen book. It has survived not only
                                  five centuries,
                              </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row no-margin home-det">
              <div className="col-md-4 big-img">
                <h4 className="ltitle">শখ</h4>
                <ul className="hoby row no-margin">
                  <li>
                    <i className="fas fa-swimmer" /> <br /> সাঁতার কাটা{" "}
                  </li>
                  <li>
                    <i className="fas fa-bicycle" /> <br /> সাইকেল চালানো{" "}
                  </li>
                  <li>
                    <i className="fas fa-futbol" /> <br /> ফুটবল খেলা{" "}
                  </li>
                  <li>
                    <i className="fas fa-film" />
                    <br /> ছবি দেখা{" "}
                  </li>
                  <li>
                    <i className="fas fa-music" />
                    <br /> গান গাওয়া{" "}
                  </li>
                </ul>
                <h4 className="ltitle">যোগাযোগ</h4>
                <div className="refer-cov">
                  <p>
                    <b>শহিদুল ইসলাম </b>, শ্রেণি শিক্ষক{" "}
                  </p>
                  <span>মোবাইল : 01485524785</span>
                </div>
                <div className="refer-cov">
                  <p>
                    {" "}
                    <b>সোহাগ রাহমান </b>, পিতা{" "}
                  </p>
                  <span>মোবাইল : 01587945624</span>
                </div>
              </div>
              <div className="col-md-8 home-dat">
                <h2 className="rit-titl"> দক্ষতা</h2>
                <div className="profess-cover row no-margin">
                  <div className="col-md-6">
                    <div className=" prog-row row">
                      <div className="col-sm-6">কবিতা বলা</div>
                      <div className="col-sm-6">
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row prog-row">
                      <div className="col-sm-6">ছবি আঁকা</div>
                      <div className="col-sm-6">
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row prog-row">
                      <div className="col-sm-6">অধিনায়কত্ব</div>
                      <div className="col-sm-6">
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row prog-row">
                      <div className="col-sm-6">গান গাওয়া</div>
                      <div className="col-sm-6">
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="links">
                  <div className="row ">
                    <div className="col-xl-6 col-md-12"></div>
                    <div className="col-xl-6 col-md-12">
                      <ul className="social-link profile-links-home">
                        <li>
                          <i className="fab fa-facebook-f " />
                        </li>
                        <li>
                          <i className="fab fa-twitter" />
                        </li>
                        <li>
                          <i className="fab fa-pinterest-p" />
                        </li>
                        <li>
                          <i className="fab fa-linkedin-in" />
                        </li>
                        <li>
                          <i className="fab fa-youtube" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="jumbo-address">
                  <div className="row no-margin">
                    <div className="col-lg-6 no-padding">
                      <table className="addrss-list">
                        <tbody>
                          <tr>
                            <th>শ্রেণী</th>
                            <td>পঞ্চম </td>
                          </tr>
                          <tr>
                            <th>শাখা </th>
                            <td>বেলি </td>
                          </tr>
                          <tr>
                            <th>জন্ম তারিখ</th>
                            <td>০৯-০৬-২০০৬ </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-lg-6 no-padding">
                      <table className="addrss-list">
                        <tbody>
                          <tr>
                            <th>বিদ্যালয়</th>
                            <td>নবাবগঞ্জ পাইলট গার্লস স্কুল অ্যান্ড কলেজ </td>
                          </tr>
                          <tr>
                            <th>আইডি </th>
                            <td>5787452</td>
                          </tr>
                          <tr>
                            <th>রক্তের গ্রুপ</th>
                            <td>ও+</td>
                          </tr>
                        </tbody>
                      </table>
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
};

export default Profile;
