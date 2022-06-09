import 'bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';
import './reset.css';
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Feature from './components/feature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Feature></Feature>
        <Feature classNames="reverse"></Feature>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
