import React, { useState, useEffect } from "react";
import authSvg from "../assests/reset.svg";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingScreen from "./loading";
const ResetPassword = ({ match, history }) => {
  const initalState = {
    token: "",
    password1: "",
    password2: "",
    buttonText: "Reset Password",
    isLoading: false,
  };
  const [formData, setFormData] = useState(initalState);
  const { token, password1, password2, buttonText, isLoading } = formData;
  useEffect(() => {
    let token = match.params.token;
    if (token) {
      setFormData({ ...formData, token });
    }
  }, [match.params.token, formData]);
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 === password2) {
      setFormData({
        ...formData,
        isLoading: true,
        buttonText: "resetting password",
      });
      axios
        .put("/password/reset", {
          newPassword: password1,
          resetPasswordLink: token,
        })
        .then((res) => {
          setFormData(initalState);
          res.data.success
            ? toast.success(res.data.message)
            : toast.error(res.data.errors);
          setTimeout(() => {
            history.push("/");
          }, 5000);
        })
        .catch((err) => {
          setFormData({
            ...formData,
            isLoading: false,
            buttonText: "reset password",
          });
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("both password should match");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {isLoading ? <LoadingScreen /> : null}
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
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Reset Your Password
            </h1>

            <form
              className="w-full flex-1 mt-8 text-indigo-500"
              onSubmit={handleSubmit}
            >
              <div className="mx-auto max-w-xs relative ">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange("password1")}
                  value={password1}
                />

                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="confirm password"
                  onChange={handleChange("password2")}
                  value={password2}
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  )}
                  <span className="ml-3">{buttonText}</span>
                </button>
                <Link
                  to="/"
                  className="no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2"
                >
                  Login in to your Account
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ResetPassword;
