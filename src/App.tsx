/// <reference path="./interfaces.d.ts" />

import * as React from 'react';
import './App.css';
import Calc from './CalcComponents/Calc';

const logo = require('./logo.svg');

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      formulas: this.props.formulas,
      dice: this.props.dice,
      stats: this.props.stats
    };

    this.handleStatChange = this.handleStatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getDice() {
    this.setState({dice : [
      {
        id: 4,
        title: 'd4',
        dieValue: 2.5
      },
      {
        id: 6,
        title: 'd6',
        dieValue: 3.5
      },
      {
        id: 8,
        title: 'd8',
        dieValue: 4.5
      },
      {
        id: 10,
        title: 'd10',
        dieValue: 5.5
      },
      {
        id: 12,
        title: 'd12',
        dieValue: 6.5
      },
      {
        id: 20,
        title: 'd20',
        dieValue: 10.5
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

  getStats() {
    this.setState({stats: {
      hitDie: 3,
      statMod: 0,
      miscBonus: 0,
      numberOfAttacks: 1
    }});
  }

  /* At the moment I don't actually need this, I'll use it if the state ever
  needs to change something besides an object */
  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //
  //   this.setState({
  //     [name]: value
  //   });
  // }

  handleStatChange(event: React.FormEvent<HTMLInputElement>) {
    const value = (event.target as HTMLInputElement).value;
    const name = (event.target as HTMLInputElement).name;

    const stats = this.state.stats;
    stats[name] = value;

    this.setState({stats});
  }

  handleSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
  }

  componentWillMount() {
    this.getDice();
    this.getFormulas();
    this.getStats();
  }

  componentDidMount() {
    this.getDice();
    this.getFormulas();
    this.getStats();
  }

  render() {
    // console.log(this.props, this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">D&D 5e DPR Calculator</h1>
        </header>
        <p className="App-intro">
          Functionality somewhat included
        </p>
        <Calc
          formulas={this.state.formulas}
          dice={this.state.dice}
          stats={this.state.stats}
          onChange={this.handleStatChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;