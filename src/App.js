import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ThemeContext, { themes } from "./ThemeContext";

const App = () => {
  const [currntTheme, setCurrntTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={currntTheme}>
      <button onClick={() => setCurrntTheme(themes.dark)}>Change theme</button>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/products/:productId" component={About}></Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
