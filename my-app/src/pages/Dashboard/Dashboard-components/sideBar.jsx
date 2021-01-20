import React from "react";
import StudentMaleIcon from "../../../assests/student-male.svg";
import StudentFemaleIcon from "../../../assests/student-female.svg";
import { Link, NavLink } from "react-router-dom";

const StudentOptions = ({ styleObj, url }) => {
  return (
    <>
      <h2>Profile</h2>
      <div className={`${styleObj.sidebar__link}`}>
        <i className="fas fa-user-circle" />
        <NavLink to={`${url}`}>view profile</NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i className="fas fa-clipboard-list" />
        <NavLink to={`${url}/previous-attendance`}>Attendacnce Log</NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i className="fas fa-tasks" />
        <NavLink to={`${url}/today-attendance`}>Today's attendance</NavLink>
      </div>
    </>
  );
};
const SideBar = ({ styleObj, sideBar, setSidebar, url }) => {
  //genarating profile picture base on user gender and role
  let profileIcon = StudentMaleIcon;

  return (
    <div
      className={`${styleObj.sidebar} ${
        sideBar ? styleObj.sidebar_responsive : null
      }`}
    >
      <div className={styleObj.sidebar__title}>
        <div className={styleObj.sidebar__img}>
          <img src={profileIcon} alt="logo" />
          <h1>hello</h1>
        </div>
        {/* add event listner here  */}
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => setSidebar(false)}
        />
      </div>
      <div className={styleObj.sidebar__menu}>
        <StudentOptions styleObj={styleObj} url={url} />

        <h2>Support</h2>

        <div className={styleObj.sidebar__link}>
          <i className="fas fa-sms"></i>
          <Link to={`${url}/message`}>any problem?</Link>
        </div>
        <div className={styleObj.sidebar__logout}>
          <i className="fa fa-power-off" />
          <Link to="/logout">Log out</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
