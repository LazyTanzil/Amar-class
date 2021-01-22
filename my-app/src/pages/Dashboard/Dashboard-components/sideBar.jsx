import React from "react";
// import StudentMaleIcon from "../../../assests/student-male.svg";
// import StudentFemaleIcon from "../../../assests/student-female.svg";
import { NavLink, Link } from "react-router-dom";

const StudentOptions = ({ styleObj, url }) => {
  return (
    <>
      <div className={`${styleObj.sidebar__link}`}>
        <i className="fas fa-user-circle" />
        <NavLink to={`${url}`}>পরিলেখ</NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i className="fas fa-clipboard-list" />
        <NavLink to={`${url}/routine`}>ক্লাস রুটিন </NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i class="fas fa-user-check"></i>
        <NavLink to={`${url}/attendance`}>উপস্থিতি </NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i class="fas fa-home"></i>
        <NavLink to={`${url}/home-work`}>বাড়ির কাজ</NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i class="fas fa-users"></i>
        <NavLink to={`${url}/team-work`}>দলীয় আলোচনা </NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i class="far fa-newspaper"></i>
        <NavLink to={`${url}/evalution`}>মূল্যায়ন</NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i class="fas fa-book"></i>
        <NavLink to={`${url}/books`}>বই সমূহ </NavLink>
      </div>
      <div className={styleObj.sidebar__link}>
        <i class="fas fa-link"></i>
        <NavLink to={`${url}/important-links`}>গুরুত্বপূর্ণ লিঙ্ক</NavLink>
      </div>
    </>
  );
};
const SideBar = ({ styleObj, sideBar, setSidebar, url }) => {
  //genarating profile picture base on user gender and role
  // let profileIcon = StudentMaleIcon;

  return (
    <div
      className={`${styleObj.sidebar} ${
        sideBar ? styleObj.sidebar_responsive : null
      }`}
    >
      <div className={styleObj.sidebar__title}>
        <div className={styleObj.sidebar__img}></div>
        {/* add event listner here  */}
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => setSidebar(false)}
        />
      </div>
      <div className={styleObj.sidebar__menu}>
        <StudentOptions styleObj={styleObj} url={url} />
        <div className={styleObj.sidebar__logout}>
          <i className="fa fa-power-off" />
          <Link to="/logout">লগআউট </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
