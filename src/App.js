import React, { Component } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import MainPage from "./components/main/MainPage";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
