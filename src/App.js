import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './CalcComponents/Calc';

class App extends Component {
  constructor() {
    super();
    this.state = {
      formulas: [],
      dice: [],
      hitDie: 3,
      statMod: 0,
      miscBonus: 0,
      numberOfAttacks: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getDice() {
    this.setState({dice : [
      {
        id: 4,
        title: 'd4',
        dieValue: 3
      },
      {
        id: 6,
        title: 'd6',
        dieValue: 4
      },
      {
        id: 8,
        title: 'd8',
        dieValue: 5
      },
      {
        id: 10,
        title: 'd10',
        dieValue: 6
      },
      {
        id: 12,
        title: 'd12',
        dieValue: 7
      },
      {
        id: 20,
        title: 'd20',
        dieValue: 11
      }
    ]});
  }

  getFormulas() {
    this.setState({formulas: [
      'Weapon Attack',
      'Spell Attack Roll',
      'Spell Attack Save',
      'Healing'
    ]});
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentWillMount() {
    this.getDice();
    this.getFormulas();
  }

  componentDidMount() {
    this.getDice();
    this.getFormulas();
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
        <Calc formulas={this.state.formulas} dice={this.state.dice} hitDie={this.state.hitDie}
              statMod={this.state.statMod} miscBonus={this.state.miscBonus} numberOfAttacks={this.state.numberOfAttacks}
              onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
