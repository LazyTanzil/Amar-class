import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./profile";
import ClassRoutine from "./classroutine/index";
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
        </div>
      </main>
    </Switch>
  );
};

export default MainContent;
