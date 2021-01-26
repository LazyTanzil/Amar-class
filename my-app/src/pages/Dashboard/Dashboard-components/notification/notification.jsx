import React from "react";
import teacher1 from "./Img/1.jpg";
import teacher2 from "./Img/2.jpg";
import teacher3 from "./Img/3.jpg";

import "./notification.css";
const Nofificcation = () => {
  return (
    <div className="wrapper">
      <div className="notification_wrap">
        <div className="notification_icon">
          <i className="fas fa-bell" />
        </div>
        <h2 className="text-center display-4">বিজ্ঞপ্তি</h2>
        <div className="dropdown active">
          <div className="notify_item">
            <div className="notify_img">
              <img src={teacher1} alt="profile_pic" style={{ width: "50px" }} />
            </div>
            <div className="notify_info">
              <p>
                তোমাদের কালকে বাংলা ক্লাস হবে না। <span>নারগিস আক্তার</span>
              </p>
              <span className="notify_time">১ ঘন্টা আগে</span>
            </div>
          </div>
          <div className="notify_item">
            <div className="notify_img">
              <img src={teacher2} alt="profile_pic" style={{ width: "50px" }} />
            </div>
            <div className="notify_info">
              <p>
                কালকে গণিত বীজগনিতের উপর কুইজ হবে ক্লাসে ।
                <span>আলমগীর হোসেন</span>
              </p>
              <span className="notify_time">৪ ঘন্টা আগে</span>
            </div>
          </div>
          <div className="notify_item">
            <div className="notify_img">
              <img src={teacher3} alt="profile_pic" style={{ width: "50px" }} />
            </div>
            <div className="notify_info">
              <p>
                তোমাদের স্কুল আগামী ৪ তারিখের পর খুলবে । সপ্তাহে ১ দিন করে ক্লাস
                হবে। <span>সহিদুল ইসলাম</span>
              </p>
              <span className="notify_time">১ সপ্তাহ আগে</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nofificcation;
