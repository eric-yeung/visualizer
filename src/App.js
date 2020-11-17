import React, { Component, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Cpes from './components/Cpes';
import axios from 'axios';
import Navbar from './components/layout/navbar';
import Pagination from './components/layout/pagination';



export class App extends Component {
  state = {
    cpes: []
  }

  componentDidMount() {
    axios.get('https://eric-yeung.github.io/School/db.json')
      .then(res => this.setState({ cpes: res.data }))
  }

  render() {
    return (
      <div className="App">
        <div className="container">

          <Header />
          <Navbar />
          <Cpes cpes={this.state.cpes} />
          <Pagination />

        </div>
      </div>
    )
  }
}

export default App;
