//libriaues
import React, { useState } from "react";
import axios from "axios";
//components
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../components/loading";
import style from "./style.module.css";
//images that required
import phonePng from "../../assests/phone.png";
import emailPng from "../../assests/email.png";
import locationPng from "../../assests/location.png";

const ContactUs = () => {
  const setTitle = () => {
    document.title = "NCPSC || Send a Message ";
  };
  setTitle();
  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
    nameFocus: false,
    emailFocus: false,
    phoneFocus: false,
    messageFocus: false,
    isloading: false,
  };
  const [formData, setFormData] = useState(initialState);

  const {
    name,
    email,
    phone,
    message,
    nameFocus,
    emailFocus,
    phoneFocus,
    messageFocus,
    isloading,
  } = formData;
  //store react sate when user type on input fiel
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const checkValidaiton = () => {
    //@TODO: improve here lated
    return true;
  };
  //handle form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidaiton()) {
      setFormData({ ...formData, isloading: true });
      axios
        .post("contact", { name, email, phone, message })
        .then((res) => {
          setFormData({ ...formData, isloading: false });
          toast.success(res.data.message);
        })
        .catch((err) => {
          setFormData({ ...formData, isloading: false });
          toast.error(err.response.data.errors);
          if (err.response.status === 500) {
            toast.error(err.response.statusText);
          }
        });
    } else {
      toast.error("check validation message");
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={style.contact_background}></div>
      <div className={style.container}>
        <div className={style.form}>
          <div className={style.contact_info}>
            <h3 className={style.title}>Facing any issues?</h3>
            <p className={style.text}>
              This is a beta project. so there might be some issues with this
              web app. let us know about your problem. we will contact you
              trough email
            </p>
            <div className={style.info}>
              <div className={style.information}>
                <img
                  src={locationPng}
                  className={style.icon}
                  alt="location icon"
                />
                <p>Ncpsc, Dhaka cantonment, Dhaka-1206</p>
              </div>
              <div className={style.information}>
                <img src={emailPng} className={style.icon} alt="email icon" />
                <p>developer@ncpsc.edu.bd</p>
              </div>
              <div className={style.information}>
                <img src={phonePng} className={style.icon} alt="phone icon" />
                <p>01769-026640</p>
              </div>
            </div>
            <div className={style.social_media}>
              <p>Connect with us :</p>
              <div className={style.social_icons}>
                <a href="https://ncpsc.edu.bd" target="_blank" rel="noreferrer">
                  <i className="fab fa-chrome"></i>
                </a>
                <a
                  href="https://www.facebook.com/ncpsc.edu.bd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCuMb_NY9dGgh79eZV_wjXZw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
          <div className={style.contact_form}>
            <span className={`${style.circle} ${style.one}`} />
            <span className={`${style.circle} ${style.two}`} />
            <form
              onSubmit={handleSubmit}
              className={style.contact_us_main_form}
              autoComplete="off"
            >
              <h3 className={style.title}>Send Message to us</h3>
              <div
                className={`${style.input_container} ${
                  nameFocus === true ? style.focus : null
                }`}
              >
                <input
                  type="text"
                  value={name}
                  onChange={handleChange("name")}
                  name="name"
                  id="contact-us-name"
                  className={style.input}
                  onFocus={() => {
                    setFormData({ ...formData, nameFocus: true });
                  }}
                  onBlur={() => {
                    name.length === 0 &&
                      setFormData({ ...formData, nameFocus: false });
                  }}
                />
                <label htmlFor="contact-us-name">Full Name</label>
                <span>Full Name</span>
              </div>
              <div
                className={`${style.input_container} ${
                  emailFocus === true ? style.focus : null
                }`}
              >
                <input
                  id="contact-us-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange("email")}
                  className={style.input}
                  onFocus={() => {
                    setFormData({ ...formData, emailFocus: true });
                  }}
                  onBlur={() => {
                    email.length === 0 &&
                      setFormData({ ...formData, emailFocus: false });
                  }}
                />
                <label htmlFor="contact-us-email">Email</label>
                <span>Email</span>
              </div>
              <div
                className={`${style.input_container} ${
                  phoneFocus === true ? style.focus : null
                }`}
              >
                <input
                  id="contact-us-phone"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handleChange("phone")}
                  className={style.input}
                  onFocus={() => {
                    setFormData({ ...formData, phoneFocus: true });
                  }}
                  onBlur={() => {
                    phone.length === 0 &&
                      setFormData({ ...formData, phoneFocus: false });
                  }}
                />
                <label htmlFor="contact-us-phone">Phone</label>
                <span>Phone</span>
              </div>
              <div
                className={`${style.input_container} ${style.textarea} ${
                  messageFocus === true ? style.focus : null
                }`}
              >
                <textarea
                  id="contact-us-message"
                  name="message"
                  className={style.input}
                  value={message}
                  onChange={handleChange("message")}
                  onFocus={() => {
                    setFormData({ ...formData, messageFocus: true });
                  }}
                  onBlur={() => {
                    message.length === 0 &&
                      setFormData({ ...formData, messageFocus: false });
                  }}
                />
                <label htmlFor="contact-us-message">Message</label>
                <span>Message</span>
              </div>
              <div className={style.validation_container}>
                <span className={style.message}>
                  <i className="far fa-check-circle"></i>
                  Name Must be written within 30 character
                </span>

                <span className={style.message}>
                  <i className="far fa-check-circle"></i>
                  Must be a valid Email
                </span>
                <span className={style.message}>
                  <i className="far fa-check-circle"></i>
                  Must be a valid BD Number
                </span>
                <span className={style.message}>
                  <i className="far fa-check-circle"></i>
                  Message must be written between 10 to 150 character
                </span>
              </div>
              <input type="submit" defaultValue="Send" className={style.btn} />
              <Link className={style.route_link} to="/">
                Back To Login
              </Link>
            </form>
          </div>
        </div>
      </div>
      {isloading ? <Loading /> : null}
    </>
  );
};

export default ContactUs;
