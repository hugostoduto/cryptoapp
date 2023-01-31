import React from "react";
import { Layout, Typograph, Space } from "antd";
import { Navbar } from "./component/index";
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
            <Routes />
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
