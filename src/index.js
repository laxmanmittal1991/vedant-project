import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import App from "./App";
import Price from "./components/Price/Price";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = (
  <BrowserRouter>
  <Header logo="./brand-logo.svg"/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home"/>
      <Route path="/instruments"/>
      <Route path="/price" element={<Price/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);

const root = createRoot(document.getElementById("root"));

root.render(routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
