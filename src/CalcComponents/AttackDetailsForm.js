import React, { Component } from 'react';
import Formula from './Formula';

class AttackDetailsForm extends Component {
  onBoxChecked(elementId) {
    let currentElement = document.getElementById(elementId);
    currentElement.disabled = currentElement.disabled ? false : true;
  }

  render() {
    let formulaList;
    if(this.props.formulas) {
      formulaList = this.props.formulas.map(formula => {
        return (
          <Formula key={formula} formula={formula} stats={this.props.stats} />
        );
      });
    }

    let diceValues = this.props.dice.map(die => {
      if(die.id !== 20) {
        return (
          <option key={die.id} value={die.dieValue}>{die.title}</option>
        );
      }
      return false;
    });

    return (
      <form className="Combat-form" onSubmit={this.props.onSubmit}>
        <div className="Label-holder">
          <label>
            Hit Die:
            <select name="hitDie" id="hitDie" type="number" value={this.props.stats['hitDie']} onChange={this.props.onChange}>
              {diceValues}
            </select>
          </label>
          <label>
            Stat Modifier:
            <input name="statModCheck" type="checkbox" onChange={() => this.onBoxChecked('statMod')} />
            <input name="statMod" id="statMod" type="number" value={this.props.stats['statMod']} onChange={this.props.onChange} disabled="disabled" />
          </label>
          <label>
            Misc Bonus:
            <input name="miscBonusCheck" type="checkbox" onChange={() => this.onBoxChecked('miscBonus')} />
            <input name="miscBonus" id="miscBonus" type="number" value={this.props.stats['miscBonus']} onChange={this.props.onChange} disabled="disabled" />
          </label>
          <label>
            Number of Attacks/Dice:
            <input name="numberOfAttacks" id="numberOfDice" type="number" value={this.props.stats['numberOfAttacks']} onChange={this.props.onChange} />
          </label>
        </div>

        <div className="Formula-buttons">
          {formulaList}
        </div>
      </form>
    )
  }
}

export default AttackDetailsForm;
