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
    <Route path="/" element={<Homepage />} />
    <Route path="/exchanges" element={<Exchange />} />
    <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
    <Route path="/cryptodetails" element={<CryptoDetails />} />
    <Route path="/crypto/:coinId" element={<CryptoDetails />} />
    <Route path="/news" element={<News />} />
  </Routes>
);
