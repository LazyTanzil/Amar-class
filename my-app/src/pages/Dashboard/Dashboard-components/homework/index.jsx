import React from "react";
import "./homework.css";
import MathHw from "./Img/math-hw.png";
import BanglaHw from "./Img/bangla-hw.png";
import hw1 from "./Img/hw-1.png";
import hw2 from "./Img/hw-2.png";
import hw3 from "./Img/hw-3.png";
const Homework = () => {
  return (
    <>
      <div className="container my-3">
        <div className="card w-100 my-2">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="card-left-side d-flex justify-content-between align-items-center">
              <i class="fas fa-clipboard-list"></i>
              <h4 className="ml-3">আলমগীর হোসেন:গণিত</h4>
            </div>
            <div className="card-right-date">
              জমা দেয়ার শেষ তারিখঃ ০৫/০১/২০২১
            </div>
          </div>
          <div className="card-body row">
            <div className="col-md-8">
              <a href={MathHw} target="_blank">
                <img className="img-fluid" src={MathHw} alt="hw" />
              </a>
            </div>
            <div className="col-md-4 hw-righPart-submit">
              <span class="badge badge-lg bg-info text-white float-end">
                মার্কসঃ ৮/১০
              </span>
              <span class="badge badge-lg bg-success text-white mx-2">
                ইতিমধ্যে জমা দেয়া হয়েছে
              </span>
              <div className="d-block submit-image my-4">
                <a href={hw1} target="_blank">
                  <img src={hw1} alt="hw!" />
                </a>
                <a href={hw2} target="_blank">
                  <img src={hw2} alt="hw!" />
                </a>
                <a href={hw3} target="_blank">
                  <img src={hw3} alt="hw!" />
                </a>
              </div>
              <div className="btn-group-vertical d-block">
                <button
                  disabled="true"
                  type="button"
                  class="btn btn-outline-success mb-2"
                >
                  আরও ফাইল এড করি
                </button>
                <button
                  disabled="true"
                  className="btn btn-dark text-white mb-2"
                  type="button"
                >
                  জমা দেই
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-100 mt-5">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="card-left-side d-flex justify-content-between align-items-center">
              <i class="fas fa-clipboard-list"></i>
              <h4 className="ml-2">নারগিস আক্তার:বাংলা</h4>
            </div>
            <div className="card-right-date">
              জমা দেয়ার শেষ তারিখঃ ০8/০১/২০২১
            </div>
          </div>
          <div className="card-body row">
            <div className="col-md-8">
              <a href={BanglaHw} target="_blank">
                <img className="img-fluid" src={BanglaHw} alt="hw" />
              </a>
            </div>
            <div className="col-md-4 hw-righPart-submit">
              <span class="badge badge-lg bg-danger text-white mx-2">
                এখনো জমা দেয়া হয়নি
              </span>
              <div className="d-block submit-image my-4">
                <h3>কোন ফাইল সংযুক্ত করা হয়নি </h3>
              </div>
              <div className="btn-group-vertical d-block">
                <button type="button" class="btn btn-outline-success mb-2">
                  আরও ফাইল এড করি
                </button>
                <button className="btn btn-dark text-white mb-2" type="button">
                  জমা দেই
                </button>
                <a
                  className="btn btn-info text-white mb-2"
                  href={BanglaHw}
                  download="homeWork"
                  type="button"
                >
                  পড়াটি ডাউনলোড করব
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homework;
