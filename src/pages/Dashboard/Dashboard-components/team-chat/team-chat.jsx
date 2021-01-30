import React from "react";
import "./team.css";

import person1 from "./img/a.png";
import person2 from "./img/b.png";
import person3 from "./img/c.png";
import meImg from "./img/me.jpg";
import teacherImg from "./img/teacher.jpg";

const TeamChat = () => {
  return (
    <div className="container">
      <div className="card w-100 my-2">
        <div className="card-header class-chat-header">
          <h2 className="ml-3">শ্রেণী: পঞ্চম, ডালিয়া </h2>
          <h4>শ্রেণী শিক্ষক: শহিদুল ইসলাম</h4>
        </div>
        <div className="card-body row">
          <div className="lite-chatbox">
            <div className="cleft cmsg">
              <img
                className="headIcon radius"
                ondragstart="return false;"
                oncontextmenu="return false;"
                src={person1}
              />
              <span className="name">মুনতাহা </span>
              <span className="content">
                ম্যাম, কালকে কি ব্যাকরণ পড়ানো হবে ?{" "}
              </span>
            </div>
            <div className="cleft cmsg">
              <img
                className="headIcon radius"
                ondragstart="return false;"
                oncontextmenu="return false;"
                src={teacherImg}
              />
              <span className="name">নারগিস </span>
              <span className="content">হ্যাঁ মুনতাহা । </span>
            </div>
            <div className="cleft cmsg">
              <img
                className="headIcon radius"
                ondragstart="return false;"
                oncontextmenu="return false;"
                src={person2}
              />
              <span className="name">আনিক </span>
              <span className="content">
                ম্যাম , গত ক্লাস এর পড়াটা আমি ভালোভাবে বুঝতে পারিনি ।{" "}
              </span>
            </div>
            <div className="cright cmsg">
              <img
                className="headIcon radius"
                ondragstart="return false;"
                oncontextmenu="return false;"
                src={meImg}
              />
              <span className="name">ইফরিজা </span>
              <span className="content">
                ম্যাম, কালকে কি শব্দ গঠন পড়ানো হবে ?{" "}
              </span>
            </div>
            <div className="cleft cmsg">
              <img
                className="headIcon radius"
                ondragstart="return false;"
                oncontextmenu="return false;"
                src={person1}
              />
              <span className="name">মুনতাহা </span>
              <span className="content">আচ্ছা ধন্যবাদ ম্যাম । </span>
            </div>
            <div className="cleft cmsg">
              <img
                className="headIcon radius"
                ondragstart="return false;"
                oncontextmenu="return false;"
                src={person3}
              />
              <span className="name">ফারহান </span>
              <span className="content">
                ম্যাম আমাকে প্রত্যয় টা একটু বুঝিয়ে দিয়েন
              </span>
            </div>
            <div className="cleft cmsg">
              <img
                className="headIcon radius"
                ondragstart="return false;"
                oncontextmenu="return false;"
                src={teacherImg}
              />
              <span className="name">নারগিস </span>
              <span className="content">
                তোমাদের ভয় পাওয়ার কোন কারণ নেয় আমি তোমাদের সব কিছু বুঝিয়ে দিবো ।{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3 team-msg-field">
          <input
            type="text"
            className="form-control type-msg-inp"
            placeholder="তোমার ম্যাসেজটি লিখ "
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn bg-primary text-white"
            type="button"
            id="button-addon2"
          >
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamChat;
