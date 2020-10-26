import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreateHang from "./components/CreateHang";
import JoinHang from "./components/JoinHang";
import Messages from "./components/Messages";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/creatHang" component={CreateHang} />
            <Route path="/joinHang" component={JoinHang} />
            <Route path="/messages" component={Messages} />
            <Route path="/userProfile" component={UserProfile} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
