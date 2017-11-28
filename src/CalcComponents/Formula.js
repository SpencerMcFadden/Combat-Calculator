import React, { Component } from 'react';

class Formula extends Component {
  render() {
    let currentFormula;
    if(this.props.formula === 'weaponAttack') {
      currentFormula = function(hitDie, statMod, miscBonus, numberOfAttacks) {
        return ((hitDie + statMod + miscBonus) * numberOfAttacks);
      }
      return currentFormula(8, 3, 1, 2);
    }
    else if(this.props.formula === 'spellAttackRoll') {
      currentFormula = function(hitDie, miscBonus, numberOfAttacks) {
        return ((hitDie + miscBonus) * numberOfAttacks);
      }
      return currentFormula(7, 3, 2);
    }
    /*else if(this.props.formula === 'spellAttackSave') {
      currentFormula = function(hitDie, numberOfDice) {
        return (hitDie * numberOfDice);
      }
      return currentFormula(6, 3);
    }
    else if(this.props.formula === 'healing') {
      currentFormula = function(hitDie, numberOfDice) {
        return -1 * (hitDie * numberOfDice);
      }
      return currentFormula(6, 3);
    }*/
    return (
      <li className="Formulas">
        {currentFormula}
      </li>
    );
  }
}

export default Formula;
