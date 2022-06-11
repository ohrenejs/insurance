import 'bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';
import './reset.css';
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Feature from './components/feature';
import Header from './components/header';
import Points from './components/points';

class App extends Component {
  render() {
    return (
      <div className="App" id='home'>
        <Navbar></Navbar>
        <Header></Header>
        <div id="feature"></div>
        <Feature></Feature>
        <Feature classNames="reverse"></Feature>
        <Points></Points>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
