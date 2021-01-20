import React from "react";
import { Switch } from "react-router-dom";

//admin components

const MainContent = ({ styleObj, path }) => {
  return (
    <Switch>
      <main className={styleObj.main}>
        <div className={styleObj.main__container}>
          {/* students */}
          {/* <Route
            exact
            path={`${path}`}
            render={(props) =>
              role !== "admin" ? (
                <ViewProfile {...props} />
              ) : (
                <AttenanceLogAdmin {...props} />
              )
            }
          /> */}
          <h2>hello</h2>
        </div>
      </main>
    </Switch>
  );
};

export default MainContent;
