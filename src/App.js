import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import logo from './logo.svg';
import './App.css';
import Calc from './CalcComponents/Calc';
import Party from './GroupComponents/Party';
import Monsters from './GroupComponents/Monsters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      formulas: [],
      dice: [],
      stats: {}
    }

    this.handleStatFieldDisable = this.handleStatFieldDisable.bind(this);
    this.handleStatChange = this.handleStatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getDice() {
    this.setState({dice : [
      {
        id: 0,
        title: ' ',
        dieValue: 0
      },
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
      /*'Weapon Attack',
      'Spell Attack Roll',
      'Spell Attack Save',
      'Healing',*/
      'Calculate'
    ]});
  }

  getStats() {
    this.setState({stats: {
      hitDie: 2.5,
      additionalDie: 0,
      statMod: 0,
      miscBonus: 0,
      numberOfHitDice: 1,
      numberOfAddDice: 1
    }});
  }

  /* At the moment I don't actually need this, I'll use it if the state ever needs to change something besides an object */
  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //
  //   this.setState({
  //     [name]: value
  //   });
  // }
  handleStatFieldDisable(statName) {
    const stats = this.state.stats;
    stats[statName] = 0;

    if (statName === 'numberOfAddDice') {
      stats[statName] = 1;
    }

    this.setState({stats});
  }

  handleStatChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    const stats = this.state.stats;
    stats[name] = value;

    this.setState({stats});
  }

  handleSubmit(event) {
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
    console.log(this.props, this.state);
    return (
      <div className="App">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">D&D 5e DPR Calculator</h1>
        </header>
        <p className="App-intro">
          Functionality somewhat included
        </p>
        <div className="App-body">
          <Calc formulas={this.state.formulas} dice={this.state.dice} stats={this.state.stats}
            onChange={this.handleStatChange} onSubmit={this.handleSubmit} onDisable={this.handleStatFieldDisable} />
          <Party />
          <Monsters />
        </div>
      </div>
    );
  }
}

export default App;
