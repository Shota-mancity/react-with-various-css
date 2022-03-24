import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./pages/router/Router";

const App3 = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/">home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App3;
