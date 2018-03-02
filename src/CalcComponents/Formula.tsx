/// <reference path="../interfaces.d.ts" />

import * as React from 'react';

class Formula extends React.Component<AppProps, AppState> {
  weaponAttack(hitDie: string, statMod: string, miscBonus: string, numberOfAttacks: number) {
    (document.getElementById('Result-title') as HTMLElement).innerHTML = 'Weapon Attack';
    return Math.ceil((Number(hitDie) + Number(statMod) + Number(miscBonus)) * numberOfAttacks);
  }

  spellAttackRoll(hitDie: string, miscBonus: string, numberOfAttacks: number) {
    (document.getElementById('Result-title') as HTMLElement).innerHTML = 'Spell Attack Roll';
    return Math.ceil((Number(hitDie) + Number(miscBonus)) * numberOfAttacks);
  }

  spellAttackSave(hitDie: string, numberOfDice: string) {
    (document.getElementById('Result-title') as HTMLElement).innerHTML = 'Spell Attack Save';
    return Math.ceil(Number(hitDie) * Number(numberOfDice));
  }

  healing(hitDie: string, numberOfDice: string) {
    (document.getElementById('Result-title') as HTMLElement).innerHTML = 'Healing';
    return -1 * Math.ceil(Number(hitDie) * Number(numberOfDice));
  }

  render() {
    let statObject = this.props.stats;
    let currentFormula = this.props.formula;
    let hitDie = 'hitDie';
    let statMod = 'statMod';
    let miscBonus = 'miscBonus';
    let numberOfAttacks = 'numberOfAttacks';

    if (currentFormula === 'Weapon Attack') {
      return (
        <button
          className="Formulas"
          onClick={() => (document.getElementById('result') as HTMLElement).innerHTML =
            String(this.weaponAttack(statObject[hitDie],
                                     statObject[statMod],
                                     statObject[miscBonus],
                                     statObject[numberOfAttacks]))}
        > {currentFormula}
        </button>
      );
    }
    if (currentFormula === 'Spell Attack Roll') {
      return (
        <button
          className="Formulas"
          onClick={() => (document.getElementById('result') as HTMLElement).innerHTML =
            String(this.spellAttackRoll(statObject[hitDie],
                                        statObject[miscBonus],
                                        statObject[numberOfAttacks]))}
        > {currentFormula}
        </button>
      );
    }
    if (currentFormula === 'Spell Attack Save') {
      return (
        <button
          className="Formulas"
          onClick={() => (document.getElementById('result') as HTMLElement).innerHTML =
            String(this.spellAttackSave(statObject[hitDie],
                                        statObject[numberOfAttacks]))}
        > {currentFormula}
        </button>
      );
    }
    if (currentFormula === 'Healing') {
      return (
        <button
          className="Formulas"
          onClick={() => (document.getElementById('result') as HTMLElement).innerHTML =
            String(this.healing(statObject[hitDie],
                                statObject[numberOfAttacks]))}
        > {currentFormula}
        </button>
      );
    }
    return null;
  }
}

interface AppProps {
  key: string;
  formula: string;
  stats: object;
}

export default Formula;
