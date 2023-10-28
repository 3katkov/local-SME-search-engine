import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Notes

// <React.StrictMode> is a special component provided by React that is used for development purposes.
// It's not intended for use in production code but can help you find and fix potential problems
// and inconsistencies in your application during development.

// <BrowserRouter> is a component provided by the react-router-dom library, which is a popular routing library
// for building single-page applications (SPAs). The BrowserRouter component is used to set up client-side
// routing in your React application, allowing you to define different views or pages and navigate between
// them without causing a full page refresh.

// <BrowserRouter> will be used until more routes are required

// In production code, when the auth, private and public rotes + logic are implemented, there will be no need
// for <React.StrictMode> nor <BrowserRouter>
