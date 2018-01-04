import React, { Component } from 'react';

class Formula extends Component {
  /*When I figure out how I want to switch functionality, I'll probably use these*/
  // weaponAttack(hitDie, statMod, miscBonus, numberOfAttacks) {
  //   document.getElementById('Result-title').innerHTML = 'Weapon Attack';
  //   return ((Number(hitDie) + Number(statMod) + Number(miscBonus)) * numberOfAttacks);
  // }
  //
  // spellAttackRoll(hitDie, miscBonus, numberOfAttacks) {
  //   document.getElementById('Result-title').innerHTML = 'Spell Attack Roll';
  //   return ((Number(hitDie) + Number(miscBonus)) * numberOfAttacks);
  // }
  //
  // spellAttackSave(){
  //   document.getElementById('Result-title').innerHTML = 'Spell Attack Save';
  //   return (Number(hitDie) * Number(numberOfDice));
  // }
  //
  // healing() {
  //   document.getElementById('Result-title').innerHTML = 'Healing';
  //   return -1 * (Number(hitDie) * Number(numberOfDice));
  // }

  render() {
    let currentFormula;
    if(this.props.formula === 'Weapon Attack') {
      currentFormula = function(hitDie, statMod, miscBonus, numberOfAttacks) {
        document.getElementById('Result-title').innerHTML = 'Weapon Attack';
        return ((Number(hitDie) + Number(statMod) + Number(miscBonus)) * numberOfAttacks);
      }
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML = currentFormula(this.props.stats['hitDie'], this.props.stats['statMod'], this.props.stats['miscBonus'], this.props.stats['numberOfAttacks'])}>
          {this.props.formula}
        </button>
      )
    }
    else if(this.props.formula === 'Spell Attack Roll') {
      currentFormula = function(hitDie, miscBonus, numberOfAttacks) {
        document.getElementById('Result-title').innerHTML = 'Spell Attack Roll';
        return ((Number(hitDie) + Number(miscBonus)) * numberOfAttacks);
      }
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML = currentFormula(this.props.stats['hitDie'], this.props.stats['miscBonus'], this.props.stats['numberOfAttacks'])}>
          {this.props.formula}
        </button>
      )
    }
    else if(this.props.formula === 'Spell Attack Save') {
      currentFormula = function(hitDie, numberOfDice) {
        document.getElementById('Result-title').innerHTML = 'Spell Attack Save';
        return (Number(hitDie) * Number(numberOfDice));
      }
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML = currentFormula(this.props.stats['hitDie'], this.props.stats['numberOfAttacks'])}>
          {this.props.formula}
        </button>
      )
    }
    else if(this.props.formula === 'Healing') {
      currentFormula = function(hitDie, numberOfDice) {
        document.getElementById('Result-title').innerHTML = 'Healing';
        return -1 * (Number(hitDie) * Number(numberOfDice));
      }
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML = currentFormula(this.props.stats['hitDie'], this.props.stats['numberOfAttacks'])}>
          {this.props.formula}
        </button>
      )
    }
    return (
      <button className="Formulas">
        {this.props.formula}
      </button>
    );
  }
}

export default Formula;
