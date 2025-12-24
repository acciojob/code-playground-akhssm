import React, { useState } from "react";
import "./../styles/App.css";
import { Link, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Playground from "./Playground";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="main-container">
      <p>
        {!loggedIn
          ? "You are not authenticated, Please login first"
          : "Logged in, Now you can enter Playground"}
      </p>

      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Switch>
        <Route
          path="/login"
          render={() => <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
        />
        <PrivateRoute
          path="/playground"
          component={Playground}
          isAuth={loggedIn}
        />
        <Route>
          <p>Page not found</p>
        </Route>
      </Switch>
    </div>
  );
};

export default App;