import React from 'react'
import { BrowserRouter,  Route, Routes as Router, } from 'react-router-dom'
import TestComponent from '../test';
import Tabs from '../tabs';

const Routes = () => {
  return (
    <BrowserRouter>
        <div className="container__wrap">
        <Router>
            <Route path="/test" Component={TestComponent} />
        </Router>
        <Router>
            <Route path="/tabs" Component={Tabs} />
        </Router>
        </div>
    </BrowserRouter>
  )
}

export default Routes