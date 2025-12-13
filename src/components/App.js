import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "../styles/App.css";

/* 🔒 Private Route */
const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const Login = ({ onLogin }) => (
  <div>
    <h2>Login Page</h2>
    <button onClick={onLogin}>Login</button>
  </div>
);

const Playground = () => <h2>Welcome to Code Playground</h2>;

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
          <Link to="/playground">PlayGround</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route path="/login">
            <Login onLogin={() => setIsAuthenticated(true)} />
          </Route>

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
