import React, { Component } from "react";
// import Main from "./components/MainComponent";
import "./App.css";
import {BrowserRouter} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Footer from "./components/FooterComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="AppContainer">
          <NavBar />
          <div className="AppFooter">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
