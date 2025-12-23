import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import "../styles/App.css";

const Login = ({ onLogin }) => {
  return (
    <div>
      <h2>Log In</h2>
      <button onClick={onLogin}>Log In</button>
    </div>
  );
};

const Playground = ({ isAuthenticated }) => {
  if (!isAuthenticated) return null;

  return (
    <button>Hi Welcome to Code PlayGround</button>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <p>
        {isAuthenticated
          ? "Logged in, Now you can enter Playground"
          : "You are not authenticated, Please login first"}
      </p>

      <ul>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
      </ul>

      {isAuthenticated && (
        <button onClick={() => setIsAuthenticated(false)}>
          Log Out
        </button>
      )}

      <Playground isAuthenticated={isAuthenticated} />

      <Switch>
        <Route path="/login">
          <Login onLogin={() => setIsAuthenticated(true)} />
        </Route>

        <Route path="/playground">
          <div />
        </Route>

        <Route path="/">
          <div />
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
