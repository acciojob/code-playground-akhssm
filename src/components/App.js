import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory
} from "react-router-dom";
import "../styles/App.css";

const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <h3>Page not Found</h3>;
};

const Login = ({ onLogin }) => {
  const history = useHistory();

  const handleLogin = () => {
    onLogin();
    history.push("/playground");
  };

  return (
    <div>
      <h2>Log In</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

const Playground = () => (
  <p>Hi Welcome to Code PlayGround</p>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    setIsAuthenticated(false);
    history.push("/login");
  };

  return (
    <div className="main-container">
      <p>
        {isAuthenticated
          ? "Logged in, Now you can enter Playground"
          : "You are not authenticated, Please login first"}
      </p>

      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      {isAuthenticated && (
        <button onClick={handleLogout}>Log Out</button>
      )}

      <Switch>
        <Route path="/login">
          <Login onLogin={() => setIsAuthenticated(true)} />
        </Route>

        <Route path="/playground">
          <PrivateRoute isAuth={isAuthenticated}>
            <Playground />
          </PrivateRoute>
        </Route>

        <Route path="/">
          <h3>Page not Found</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
