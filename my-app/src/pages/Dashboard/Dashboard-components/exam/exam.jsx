import React from "react";
import Quiz from "./index";
const Exam = () => {
  return (
    <>
      <div className="container my-3">
        <div className="card w-100 my-2">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="card-left-side d-flex justify-content-between align-items-center">
              <i class="fas fa-clipboard-list"></i>
              <h4 className="ml-3">ইউসুফ ইসলাম: বিজ্ঞান</h4>
            </div>
            <div className="card-right-date">
              অংশগ্রহন করার শেষ তারিখঃ ০৫/০১/২০২১
            </div>
          </div>
          <div className="card-body row">
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item">
                  <i className="fas fa-circle"></i> অধ্যায় ৩ সম্পূর্ন পরবে
                </li>
                <li className="list-group-item">
                  <i className="fas fa-circle"></i> ১০ টি প্রশ্ন দেয়া হয়েছে
                </li>
                <li className="list-group-item">
                  <i className="fas fa-circle"></i> সময় নিয়ে উত্তর করবে
                </li>
              </ul>
            </div>
            <div className="col-md-4 hw-righPart-submit">
              <span class="badge badge-lg bg-info text-white float-end">
                মার্কসঃ ৮/১০
              </span>

              <div className="btn-group-vertical d-block my-3">
                <button
                  disabled
                  className="btn btn-success text-white mb-2"
                  type="button"
                >
                  তুমি ইতিমধ্যে অংশগ্রহন করেছো
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-100 my-2">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="card-left-side d-flex justify-content-between align-items-center">
              <i class="fas fa-clipboard-list"></i>
              <h4 className="ml-3">শাহেদ মিয়া: সমাজ</h4>
            </div>
            <div className="card-right-date">
              অংশগ্রহন করার শেষ তারিখঃ ০৬/০১/২০২১
            </div>
          </div>
          <div className="card-body row">
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item">
                  <i className="fas fa-circle"></i> বাংলাদেশের মুক্তিযুদ্ধ
                  অধ্যায়টি পড়বে
                </li>
                <li className="list-group-item">
                  <i className="fas fa-circle"></i> অধ্যায়টি থেকে ৫ টি প্রশ্ন
                  করা হয়েছে
                </li>
                <li className="list-group-item">
                  <i className="fas fa-circle"></i> ভুল উত্তর করলে নম্বর কাটা
                  যাবে
                </li>
              </ul>
            </div>
            <div className="col-md-4 hw-righPart-submit">
              <span class="badge badge-lg bg-info text-white float-end">
                তুমি এখনো অংশগ্রহণ করোনি
              </span>

              <div className="btn-group-vertical d-block my-3">
                <button
                  className="btn btn-primary text-white mb-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#QuizModel"
                >
                  অংশগ্রহণ করতে চাই
                </button>
                <div
                  className="modal fade"
                  id="QuizModel"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content" style={{ width: "150%" }}>
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          কুইজ
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <Quiz />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          কুইজটি এখানেই শেষ করব
                        </button>
                        <button type="button" className="btn btn-primary">
                          পুর্বে ফিরে যাব
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
    </>
  );
};

export default Exam;
