import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "../src/components/navBar/NavBar";
import Container from "./components/Container";
import Main from "./components/main/Main";
import About from "./components/about/About";
import About2 from "./components/about2/About2";
import About3 from "./components/about3/About3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container>
    <NavBar />
    <Main />
    <About />
    <About2 />
    <About3 />
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
