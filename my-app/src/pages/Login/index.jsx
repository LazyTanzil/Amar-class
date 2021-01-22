//importing base libries
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Redirect, Link } from "react-router-dom";
import { getStatus, login } from "../../helpers/auth";
//importing components
import Loading from "../components/loading";
import loginSvg from "../../assests/login-bg.png";
import googleSvg from "../../assests/google.svg";

//importing stylesheets
import "./login.css";
//main component/page
const Login = ({ history }) => {
  const setTitle = () => {
    document.title = "Login ";
  };
  setTitle();
  //initial state
  const initalState = {
    phone: "",
    password: "",

    loading: false,
  };

  const [formData, setFormData] = useState(initalState);
  const { phone, password, loading } = formData;

  //decsribing client to login after all component render
  useEffect(() => {
    toast.info("পরবর্তী ধাপে যেতে এই ধাপ অতিক্রম করি ");
  }, []);

  //changing input fileds
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidateEmail() && checkValidatePassword()) {
      setFormData({ ...formData, loading: true });
      if (login(phone, password)) {
        toast.dark("স্বাগত");
        history.push("/student");
        setFormData({ ...formData, loading: false });
      } else {
        toast.error("ভুল পাসওয়ার্ড কিংবা মোবাইল নম্বর ");
        setFormData({ ...formData, loading: false });
      }
    } else {
      toast.error("সঠিক তথা দেই  ");
    }
  };
  const checkValidateEmail = () => {
    if (phone.length === 11) {
      return true;
    } else {
      // return false;
      return true;
    }
  };
  const checkValidatePassword = () => {
    if (password.trim().length >= 6) {
      return true;
    } else {
      // return false;
      return true;
    }
  };
  //validation to form

  return (
    // presentation lyout
    <>
      {/* checking is the user is already log in  */}
      {getStatus() ? <Redirect to="/student" /> : null}
      {/* toast container for notifications  */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* main design  */}
      <div className="dropbox-content max-w-xl mx-auto flex">
        <div className="dropbox-content__img w-half flex justify-center items-center">
          <img src={loginSvg} alt="Login" />
        </div>
        <div className="dropbox-content__form w-half">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col form__btn">
              <button className="form__btn-social form__btn-social--google">
                <span className="form__border flex justify-center items-center">
                  <img
                    src={googleSvg}
                    style={{ height: "1rem", width: "1rem" }}
                    alt="asdasd"
                  />
                </span>
                <span className="form__caption">গুগলের মাধমে লগইন করি </span>
              </button>
            </div>
            <div className="form__liners flex justify-center items-center">
              <span className="form__line" />
              <span className="form__line--caption">অথবা,</span>
              <span className="form__line" />
            </div>
            <div className="flex flex-col form__input-group">
              <input
                value={phone}
                onChange={handleChange("phone")}
                type="phone"
                className="form__input form__input--email"
                placeholder="মোবাইল নম্বর"
              />
              <input
                value={password}
                onChange={handleChange("password")}
                type="password"
                className="form__input form__input--password"
                placeholder="পাসওয়ার্ড "
              />
            </div>
            <div className="form__submit flex items-center justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  className="form__checklist"
                  id="remember"
                />
                <label htmlFor="remember" className="form__label">
                  আমার তথ্য সংরক্ষন করা থাক
                </label>
              </div>
              <button className="form__btn-submit">লগইন </button>
            </div>
            <Link to="/forget-password" className="form__forgot">
              পাসওয়ার্ড মনে নেই
            </Link>
          </form>
          <div className="alert alert-secondary" role="alert">
            নিজের অভিবাবকের মোবাইল নম্বর দেই
          </div>
          <div className="alert alert-secondary" role="alert">
            গোপন পাসওয়ার্ড দেই
          </div>
          <div className="alert alert-secondary" role="alert">
            কোন কারনে পাসওয়ার্ড মনে না থাকলে "পাসওয়ার্ড মনে নেই" অপশন টাতে চাপ
            দেই
          </div>
        </div>
      </div>
      {loading ? <Loading /> : null}
    </>
  );
};

export default Login;
