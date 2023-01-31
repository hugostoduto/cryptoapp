import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout, Typograph, Space } from "antd";
import {
  Navbar,
  Homepage,
  Exchange,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./component/index";
import "./App.css";
import Routes from "./Routes";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <BrowserRouter>
              <Routes />
              {/*  <Routes>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchange">
                  <Exchange />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/cryptodetails">
                  <CryptoDetails />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Routes> */}
            </BrowserRouter>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
