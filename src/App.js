import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './CalcComponents/Calc';

class App extends Component {
  constructor() {
    super();
    this.state = {
      formulas: [],
      dice: []
    }
  }

  getFormulas() {
    this.setState({formulas: [
      'weaponAttack',
      'spellAttackRoll',
      'spellAttackSave',
      'healing'
    ]});
  }

  getDice() {
    this.setState({dice : [
      {
        id: 4,
        title: 'd4'
      },
      {
        id: 6,
        title: 'd6'
      },
      {
        id: 8,
        title: 'd8'
      },
      {
        id: 10,
        title: 'd10'
      },
      {
        id: 12,
        title: 'd12'
      },
      {
        id: 20,
        title: 'd20'
      }
    ]});
  }

  componentWillMount() {
    this.getDice();
    this.getFormulas();
  }

  componentDidMount() {
    this.getDice();
  }

  render() {
    console.log(this.props, this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">D&D 5e DPR Calculator</h1>
        </header>
        <p className="App-intro">
          Functionality not included (yet)
        </p>
        <Calc formulas={this.state.formulas} />
      </div>
    );
  }
}

export default App;
