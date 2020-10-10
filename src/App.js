import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./containers/FlowerDatasContainer";
import Read from "./containers/diary/ReadContainer";
import Navi from "./components/Navi";
import FirstPage from "./components/FirstPage";
import Flowerload from "./components/FlowerLoad";
import Login from "./containers/LoginContainer";
import SignUp from "./containers/SignUpContainer";
import Write from "./containers/diary/WriteContainer.js";
import FlowerLoad from "./containers/FlowerLoadContainer";
import { connect } from "react-redux";

import "./Css/index.css";
function App({ login }) {
  return (
    <div>
      <main>
        <Router>
          <Navi></Navi>
          <div className="Main_body">
            <Switch>
              <Route exact path="/" component={FirstPage}></Route>
              <Route path="/search" component={Test}></Route>
              <Route path="/read" component={Read}></Route>
              
              <Route
                path="/write"
                component={login.useredName ? Write : Login}
              ></Route>
              <Route path="/load" component={Flowerload}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/flowerload" component={FlowerLoad}></Route>
            </Switch>
          </div>
        </Router>
      </main>
      <footer></footer>
    </div>
  );
}

export default connect((state) => ({
  login: state.login.login,
}))(App);
