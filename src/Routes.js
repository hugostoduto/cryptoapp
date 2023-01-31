/* eslint-disable import/no-anonymous-default-export */
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  Exchange,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./component/index";
export default () => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route path="/exchange" element={<Exchange />} />
    <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
    <Route exact path="/cryptodetails" element={<CryptoDetails />} />
    <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
    <Route exact path="/news" element={<News />} />
  </Routes>
);
