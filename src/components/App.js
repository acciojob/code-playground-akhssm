import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "../styles/App.css";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const Playground = () => {
  return <h2>Welcome to Code Playground</h2>;
};

const Login = ({ onLogin }) => {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <p>
          {isAuthenticated
            ? "You are authenticated"
            : "You are not authenticated, Please login first"}
        </p>

        <nav>
          <ul>
            <li>
              <Link to="/playground">PlayGround</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login onLogin={() => setIsAuthenticated(true)} />
            )}
          />

          <PrivateRoute
            path="/playground"
            component={Playground}
            isAuth={isAuthenticated}
          />

          <Route path="*">
            <h3>Page not Found</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
