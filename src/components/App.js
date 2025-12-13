import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import "../styles/App.css";

const PrivateRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <h3>Page not Found</h3>;
  }
  return children;
};

const Login = ({ onLogin }) => (
  <div>
    <h2>Login</h2>
    <button onClick={onLogin}>Login</button>
  </div>
);

const Playground = () => <h2>Code Playground</h2>;

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

        <ul>
          <li>
            <Link to="/playground">PlayGround</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
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
