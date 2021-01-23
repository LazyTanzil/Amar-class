import React from "react";

const NavBar = ({ styleObj, setSidebar }) => {
  return (
    <nav className={styleObj.navbar}>
      <div className={styleObj.nav_icon}>
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={() => {
            setSidebar(true);
          }}
        />
      </div>
      <div className={styleObj.navbar__right}>
        <span>আমার ক্লাস - আমার শিক্ষা - আমার ভবিষ্যৎ </span>
      </div>
    </nav>
  );
};

export default NavBar;
