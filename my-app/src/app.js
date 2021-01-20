import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Login from "./pages/Login";
import Logout from "./pages/components/logout";
import NotFoundPage from "./pages/404-page/index";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Dashboard {...props} />} />
          <Route path="/login" exact render={(props) => <Login {...props} />} />
          <Route
            path="/logout"
            exact
            render={(props) => <Logout {...props} />}
          />

          <Route path="*" render={(props) => <NotFoundPage {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
