import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import CustomNavbar from './Pages/Home/CustomNavbar/CustomNavbar';
import Footer from './Pages/Common/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavbar></CustomNavbar>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
