import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import TestComponent from "../test";
import Tabs from "../tabs";
import Products from "../products";
import { Container } from "../informations";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="container__wrap">
        <Router>
          <Route path="/" Component={Container} />
        </Router>
        <Router>
          <Route path="/test" Component={TestComponent} />
        </Router>
        <Router>
          <Route path="/tabs" Component={Tabs} />
        </Router>
        <Router>
          <Route path="/products" Component={Products} />
        </Router>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
