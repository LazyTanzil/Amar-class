import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./profile";
import Attendance from "./attendance";
import ClassRoutine from "./classroutine/index";
import Homework from "./homework";
const MainContent = ({ styleObj, path }) => {
  return (
    <Switch>
      <main className={styleObj.main}>
        <div className={styleObj.main__container}>
          {/* students */}
          <Route
            exact
            path={`${path}`}
            render={(props) => <Profile {...props} />}
          />
          <Route
            exact
            path={`${path}/routine`}
            render={(props) => <ClassRoutine {...props} />}
          />
          <Route
            exact
            path={`${path}/attendance`}
            render={(props) => <Attendance {...props} />}
          />

          <Route
            exact
            path={`${path}/home-work`}
            render={(props) => <Homework {...props} />}
          />
        </div>
      </main>
    </Switch>
  );
};

export default MainContent;
