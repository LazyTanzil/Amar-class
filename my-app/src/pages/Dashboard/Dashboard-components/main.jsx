import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./profile";
import Attendance from "./attendance";
import ClassRoutine from "./classroutine/index";
import Homework from "./homework";
import TeamChat from "./team-chat/team-chat";
import Exam from "./exam/exam";
import Book from "./books";
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
          <Route
            exact
            path={`${path}/team-work`}
            render={(props) => <TeamChat {...props} />}
          />
          <Route
            exact
            path={`${path}/evalution`}
            render={(props) => <Exam {...props} />}
          />
          <Route
            exact
            path={`${path}/books`}
            render={(props) => <Book {...props} />}
          />
        </div>
      </main>
    </Switch>
  );
};

export default MainContent;
