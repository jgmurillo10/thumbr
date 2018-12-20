import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './components/Menu';
import Home from './components/Home';
import Trials from './components/Trials';
import About from './components/About';
import Login from './components/Login';
import Search from './components/Search';
import Footer from './components/Footer/Footer';
class App extends Component {
  state = {
    brand: {
      "label": "Rule of Thumb.",
      "path": "/",
    },
    items: [
      {
        "label": "Past Trials",
        "path": "/trials"
      },
      {
        "label": "About",
        "path": "/about"
      },
      {
        "label": "Log In / Sign Up",
        "path": "/login"
      },
    ]
  }
  render() {
    const { brand, items} = this.state;
    return (
      <Router>
        <div>
          <Menu brand={brand} items={items}/>
          <Route exact path="/" component={Home} />
          <Route path="/trials" component={Trials} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/search" component={Search} />

          <Footer></Footer>
        </div>

      </Router>
    );
  }
}

export default App;
