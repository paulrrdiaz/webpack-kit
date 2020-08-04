// import "react-polyfill/ie9";

import React from "react";
import ReactDOM from "react-dom";

import makeImage from "./image";
import cuy from "./cuy.jpg";

// const image = makeImage(cuy);
// const defaultImage = makeImage();

// document.body.append(image);
// document.body.append(defaultImage);

const App = () => (
  <>
    <header>Header</header>
    <img src={cuy} alt="El Cuy" />
    <footer>Footer</footer>
  </>
);

const root = document.getElementById("app");

ReactDOM.render(<App />, root);
