import React, { Component } from 'react';

class Formula extends Component {
  /*weaponAttack(hitDie, statMod, miscBonus, numberOfAttacks) {
    document.getElementById('Result-title').innerHTML = 'Weapon Attack';
    return Math.ceil((Number(hitDie) + Number(statMod) + Number(miscBonus)) * numberOfAttacks);
  }

  spellAttackRoll(hitDie, miscBonus, numberOfAttacks) {
    document.getElementById('Result-title').innerHTML = 'Spell Attack Roll';
    return Math.ceil((Number(hitDie) + Number(miscBonus)) * numberOfAttacks);
  }

  spellAttackSave(hitDie, numberOfDice){
    document.getElementById('Result-title').innerHTML = 'Spell Attack Save';
    return Math.ceil(Number(hitDie) * Number(numberOfDice));
  }

  healing(hitDie, numberOfDice) {
    document.getElementById('Result-title').innerHTML = 'Healing';
    return -1 * Math.ceil(Number(hitDie) * Number(numberOfDice));
  }*/

  dynamicAttackFormula(hitDie, numberOfDice, statMod, miscBonus) {
    if(statMod === 0 && miscBonus > 0) {
      document.getElementById('Result-title').innerHTML = 'Spell Attack Roll';
    }
    else if(statMod > 0 || miscBonus > 0){
      document.getElementById('Result-title').innerHTML = 'Weapon Attack';
    }
    else if(numberOfDice < 0) {
      document.getElementById('Result-title').innerHTML = 'Healing';
    }
    else {
      document.getElementById('Result-title').innerHTML = 'Spell Attack Save';
    }
    return Math.ceil((Number(hitDie) + Number(statMod) + Number(miscBonus)) * numberOfDice)
  }

  render() {
    let statObject = this.props.stats;
    let currentFormula = this.props.formula;

    /*if(currentFormula === 'Weapon Attack') {
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML = this.weaponAttack(statObject['hitDie'], statObject['statMod'], statObject['miscBonus'], statObject['numberOfAttacks'])}>
          {currentFormula}
        </button>
      )
    }
    else if(currentFormula === 'Spell Attack Roll') {
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML = this.spellAttackRoll(statObject['hitDie'], statObject['miscBonus'], statObject['numberOfAttacks'])}>
          {currentFormula}
        </button>
      )
    }
    else if(currentFormula === 'Spell Attack Save') {
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML = this.spellAttackSave(statObject['hitDie'], statObject['numberOfAttacks'])}>
          {currentFormula}
        </button>
      )
    }
    else if(currentFormula === 'Healing') {
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML = this.healing(statObject['hitDie'], statObject['numberOfAttacks'])}>
          {currentFormula}
        </button>
      )
    }*/
      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML =
            this.dynamicAttackFormula(statObject['hitDie'], statObject['numberOfAttacks'], statObject['statMod'], statObject['miscBonus'])}>
          {currentFormula}
        </button>
      )
  }
}

export default Formula;
