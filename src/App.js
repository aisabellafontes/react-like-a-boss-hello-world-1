import './App.css';

import React, { Component } from 'react';

import Data from './Data';
import logo from './logo.svg';

class App extends Component {
  render() {
    const array1 = [
      {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Football'
      },
      {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball'
      },
      {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: false,
        name: 'Basketball'
      },
      {
        category: 'Electronics',
        price: '$99.99',
        stocked: true,
        name: 'iPod Touch'
      },
      {
        category: 'Electronics',
        price: '$399.99',
        stocked: false,
        name: 'iPhone 5'
      },
      {
        category: 'Electronics',
        price: '$199.99',
        stocked: true,
        name: 'Nexus 7'
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Data data={array1} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
