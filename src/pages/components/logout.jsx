import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { logout, getStatus } from "../../helpers/auth";

const Logout = () => {
  useEffect(() => {
    logout();
  }, []);
  return (
    <div>
      {getStatus() ? <Redirect to="/login" /> : <Redirect to="/student" />}
      Logout
    </div>
  );
};

export default Logout;
