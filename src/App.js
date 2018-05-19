import { ThemeProvider } from "styled-components";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "./containers/Register";
import theme from "./styles/themes/default";
import PropTypes from "prop-types";
import LoginPage from "./containers/LogIn";
import "./index.css";

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <div>
        <Switch>
        <Route
            exact
            path="/user/login" component={LoginPage} 
            
          />

         
          <Route path="/user" component={RegisterPage} />
        </Switch>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
