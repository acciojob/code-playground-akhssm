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
  if (!isAuth) {
    return <h3>Page not Found</h3>;
  }
  return children;
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
  <button>Hi Welcome to Code PlayGround</button>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
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
          {isAuthenticated && (
            <li>
              <Link to="/" onClick={() => setIsAuthenticated(false)}>
                Log Out
              </Link>
            </li>
          )}
        </ul>

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
    </Router>
  );
}

export default App;
