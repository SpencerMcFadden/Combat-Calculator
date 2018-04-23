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
      stats: {},
      partyMembers: [],
      dragElement: null
    }

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
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

  getPartyMembers() {
    this.setState({partyMembers: [
      {
        name: 'Testing',
        damagePerRound: 13
      },
      {
        name: 'Testing2',
        damagePerRound: 12
      }
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

  handleDragStart(event) {
    this.setState({dragElement: event.target});

    event.dataTransfer.setData('text/html', event.target.innerHTML);
    event.dataTransfer.effectAllowed = 'move';
  }

  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    const eventSave = this.state.dragElement;
    eventSave.innerHTML = event.target.innerHTML;
    event.target.innerHTML = event.dataTransfer.getData('text/html');
  }

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
    this.getPartyMembers();
    this.getStats();
  }

  componentDidMount() {
    this.getDice();
    this.getFormulas();
    this.getPartyMembers();
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
          <Party partyMembers={this.state.partyMembers} dragElement={this.state.dragElement}
            onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDrop={this.handleDrop} />
          <Monsters />
        </div>
      </div>
    );
  }
}

export default App;
