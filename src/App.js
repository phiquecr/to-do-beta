import React, { Component } from 'react';
import './App.css';

import Tarefas from './components/Tarefas'

class App extends Component {
  render() {
    return (
      <div className="mother-box">
        <header className="main-menu">
          <h1 className="title-daily">to do daily!</h1>
        </header>
        <Tarefas/>
      </div>
    )
  }
}

export default App;
