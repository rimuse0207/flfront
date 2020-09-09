import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./containers/FlowerDatasContainer";
import Menu from "./components/Menu";
import Navi from "./components/Navi";
import FirstPage from "./components/FirstPage";
import Flowerload from "./components/FlowerLoad";
import Login from "./containers/LoginContainer";
import SignUp from "./containers/SignUpContainer";
import "./Css/index.css";
function App() {
  return (
    <div>
      <main>
        <Router>
          <Navi></Navi>
          <div className="Main_body">
            <Switch>
              <Route exact path="/" component={FirstPage}></Route>
              <Route path="/search" component={Test}></Route>
              <Route path="/read" component={Menu}></Route>
              <Route path="/load" component={Flowerload}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
            </Switch>
          </div>
        </Router>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
