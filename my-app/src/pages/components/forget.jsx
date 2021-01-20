import React, { useState } from "react";
import authSvg from "../assests/forget.svg";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { isAuth } from "../../helpers/auth";
import { Redirect, Link } from "react-router-dom";
import Loader from "./loading";

const Login = () => {
  const initalState = {
    email: "",
    buttonText: "Forget Password",
    loading: false,
  };
  const [formData, setFormData] = useState(initalState);

  const { email, buttonText, loading } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setFormData({
        ...formData,
        loading: true,
        buttonText: "Forgetting Password",
      });
      axios
        .put(`/password/forget`, {
          email,
        })
        .then((res) => {
          if (res.data.success) {
            setFormData(initalState);
            toast.success(res.data.message);
          }
        })
        .catch((err) => {
          setFormData({
            ...formData,
            loading: false,
            buttonText: "Forget Password",
          });
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {loading ? <Loader /> : null}
      {isAuth() ? <Redirect to="/dashboard" /> : null}
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
            <h1 className="text-2xl text-center md:text-left xl:text-3xl font-extrabold">
              Forget Your Password Password
            </h1>

            <form
              className="w-full flex-1 mt-8 text-indigo-500"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="mx-auto max-w-xs relative ">
                <input
                  className="w-full text-lg my-16 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-700"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange("email")}
                  value={email}
                />

                <button
                  type="submit"
                  className=" tracking-wide font-semibold bg-indigo-700 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  disabled={loading}
                >
                  {loading ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                  <span className="ml-3">{buttonText}</span>
                </button>
                <Link
                  to="/"
                  className="no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2"
                >
                  back to login
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

export default Login;
