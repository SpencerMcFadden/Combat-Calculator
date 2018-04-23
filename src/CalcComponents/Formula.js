import React, { Component } from 'react';

class Formula extends Component {
  dynamicAttackFormula(hitDie, additionalDie, numberOfHitDice, numberOfAddDice, statMod, miscBonus) {
    if(statMod == 0 && miscBonus > 0) {
      document.getElementById('Result-title').innerHTML = 'Spell Attack Roll';
    }
    else if(statMod > 0 || miscBonus > 0){
      document.getElementById('Result-title').innerHTML = 'Weapon Attack';
    }
    else if(numberOfHitDice < 0) {
      document.getElementById('Result-title').innerHTML = 'Healing';
    }
    else {
      document.getElementById('Result-title').innerHTML = 'Spell Attack Save';
    }
    return Math.ceil(Number(hitDie) * numberOfHitDice + Number(additionalDie)  * numberOfAddDice + Number(statMod) + Number(miscBonus))
  }

  render() {
    let statObject = this.props.stats;
    let currentFormula = this.props.formula;

      return (
        <button className="Formulas" onClick={() =>
          document.getElementById('result').innerHTML =
            this.dynamicAttackFormula(statObject['hitDie'], statObject['additionalDie'], statObject['numberOfHitDice'], statObject['numberOfAddDice'], statObject['statMod'], statObject['miscBonus'])}>
          {currentFormula}
        </button>
      )
  }
}

export default Formula;
