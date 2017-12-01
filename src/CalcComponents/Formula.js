import React, { Component } from 'react';

class Formula extends Component {
  render() {
    let currentFormula;
    if(this.props.formula === 'Weapon Attack') {
      currentFormula = function(hitDie, statMod, miscBonus, numberOfAttacks) {
        return ((hitDie + statMod + miscBonus) * numberOfAttacks);
      }
      return (
        <button className="Formulas" onClick={() => alert(currentFormula(7,3,0,2))}>
          {this.props.formula}
        </button>
      )
    }
    else if(this.props.formula === 'Spell Attack Roll') {
      currentFormula = function(hitDie, miscBonus, numberOfAttacks) {
        return ((hitDie + miscBonus) * numberOfAttacks);
      }
      return (
        <button className="Formulas" onClick={() => alert(currentFormula(8,3,1))}>
          {this.props.formula}
        </button>
      )
    }
    else if(this.props.formula === 'Spell Attack Save') {
      currentFormula = function(hitDie, numberOfDice) {
        return (hitDie * numberOfDice);
      }
      return (
        <button className="Formulas" onClick={() => alert(currentFormula(6,2))}>
          {this.props.formula}
        </button>
      )
    }
    else if(this.props.formula === 'Healing') {
      currentFormula = function(hitDie, numberOfDice) {
        return -1 * (hitDie * numberOfDice);
      }
      return (
        <button className="Formulas" onClick={() => alert(currentFormula(8,3))}>
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
