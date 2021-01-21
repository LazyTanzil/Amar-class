import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./profile";
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
        </div>
      </main>
    </Switch>
  );
};

export default MainContent;
