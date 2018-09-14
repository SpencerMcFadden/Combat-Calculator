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
      stats: {
        hitDie: 2.5,
        additionalDie: 0,
        statMod: 0,
        miscBonus: 0,
        numberOfHitDice: 1,
        numberOfAddDice: 1
      },
      partyMembers: [],
      monsterMembers: [],
      dragElement: null,
      isDialogOpen: false
    }

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleStatFieldDisable = this.handleStatFieldDisable.bind(this);
    this.handleStatChange = this.handleStatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
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
      'Calculate',
      'Submit'
    ]});
  }

  getPartyMembers() {
    this.setState({partyMembers: [
      {
        key: 'p1',
        name: 'Testing',
        damagePerRound: 13
      },
      {
        key: 'p2',
        name: 'Testing2',
        damagePerRound: 12
      },
      {
        key: 'p3',
        name: 'Testing3',
        damagePerRound: -8
      },
      {
        key: 'p4',
        name: 'Testing4',
        damagePerRound: 6
      }
    ]});
  }

  getMonsterMembers() {
    this.setState({monsterMembers: [
      {
        key: 'm1',
        name: 'MTesting',
        damagePerRound: 9
      },
      {
        key: 'm2',
        name: 'MTesting2',
        damagePerRound: 11
      },
      {
        key: 'm3',
        name: 'MTesting3',
        damagePerRound: -6
      },
      {
        key: 'm4',
        name: 'MTesting4',
        damagePerRound: 3
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
    this.setState({dragElement: event.currentTarget});

    event.dataTransfer.setData('text/html', event.target.innerHTML);
    event.dataTransfer.effectAllowed = 'move';
  }

  handleDragOver(event) {
    event.preventDefault();
    event.currentTarget.style.background = '#7ab8ff70';
    event.dataTransfer.dropEffect = 'move';
  }

  handleDragLeave(event) {
    event.currentTarget.style.background = '#fdf1dc';
  }

  handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.background = '#fdf1dc';

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
    stats[name] = Number(value);

    this.setState({stats});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleOpenDialog() {
    this.setState({ isDialogOpen: true });
  }

  handleCloseDialog() {
    this.setState({ isDialogOpen: false });
  }

  componentDidMount() {
    this.getDice();
    this.getFormulas();
    this.getPartyMembers();
    this.getMonsterMembers();
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
          <Calc formulas={this.state.formulas} dice={this.state.dice}
            stats={this.state.stats} onChange={this.handleStatChange}
            onSubmit={this.handleSubmit} onDisable={this.handleStatFieldDisable}
            openDialog={this.handleOpenDialog} closeDialog={this.handleCloseDialog}
            isDialogOpen={this.state.isDialogOpen} />

          <Party
            partyMembers={this.state.partyMembers} dragElement={this.state.dragElement}
            onDragStart={this.handleDragStart} onDragOver={this.handleDragOver}
            onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} />

          <Monsters
            monsterMembers={this.state.monsterMembers} dragElement={this.state.dragElement}
            onDragStart={this.handleDragStart} onDragOver={this.handleDragOver}
            onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} />
        </div>
      </div>
    );
  }
}

export default App;
