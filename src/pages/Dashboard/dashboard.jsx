import React, { useState } from "react";
import { getStatus } from "../../helpers/auth";
import { useRouteMatch, Redirect } from "react-router-dom";
import NavBar from "./Dashboard-components/navBar";
import MainContnet from "./Dashboard-components/main";
import SideBar from "./Dashboard-components/sideBar";

//css file
import css from "./dashboard.module.css";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const [sideBar, setSidebar] = useState(false);
  return (
    <>
      {getStatus() ? null : <Redirect to="/login" />}
      <div className={css.container}>
        <NavBar styleObj={css} setSidebar={setSidebar} />
        <MainContnet styleObj={css} path={path} />
        <SideBar
          styleObj={css}
          sideBar={sideBar}
          setSidebar={setSidebar}
          url={url}
        />
      </div>
    </>
  );
};

export default Dashboard;
