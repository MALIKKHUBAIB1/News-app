import Navbar from "./Component/Navbar";
import { Component } from "react";
import News from "./Component/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import Footer from "./Component/Footer";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div calssName="App">
        <Router>
          <Fragment>
            <Navbar />
            <LoadingBar
              color="#f11946"
              height={4}
              progress={this.state.progress}
            />
            <Routes>
              <Route
                extact
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    country="us"
                    category="general"
                  />
                }
              />
              <Route
                extact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    country="in"
                    category="science"
                  />
                }
              />
              <Route
                extact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                extact
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="health"
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                extact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="entertainment"
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                extact
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="technology"
                    country="in"
                    category="technology"
                  />
                }
              />
              <Route
                extact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="business"
                    country="in"
                    category="business"
                  />
                }
              />
            
            <Route extact path="/genral"
            element ={
                <News
                  setProgress={this.setProgress}
                  country="in"
                  key = "genral"
                  category="genral"
                />
                }
            />
            </Routes>
          </Fragment>
        </Router>
        <Footer />
      </div>
    );
  }
}
// export default App;
