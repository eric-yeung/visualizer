import React, { Component, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Cpes from './components/Cpes';
import axios from 'axios';
import CPECVE from './components/pages/CPECVEs'
import Navbar from './components/layout/navbar';
import LeftColumn from './components/layout/leftcolumn';
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
      <Router>
        <div className="">
          <div className="container">

            <Header />
            <Navbar />
            
            <Route 
              exact
              path="/" render= {props => (
              <React.Fragment>
                <Cpes cpes={this.state.cpes}/>
              </React.Fragment>
            )} 
            />

            <Route path="/CPECVE" component={CPECVE} />

            <Pagination />

          </div>
        </div>
      </Router> 
    )
  }
}

export default App;
