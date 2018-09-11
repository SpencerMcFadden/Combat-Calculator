import React, { Component } from 'react';
import Formula from './Formula';

class AttackDetailsForm extends Component {
  toggleBoxChecked(elementId) {
    let currentElement = document.getElementById(elementId);
    currentElement.disabled = currentElement.disabled ? false : true;
    if (currentElement.disabled === true) {
      this.props.onDisable(elementId);
      currentElement.value = this.props.stats[currentElement];
      if (elementId === 'additionalDie') {
        this.props.onDisable('numberOfAddDice');
        let currentElement = document.getElementById('numberOfAddDice')
        currentElement.value = this.props.stats[currentElement];
      }
    }
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
            <select name="hitDie" className="statSelect" id="hitDie"
              type="number" value={this.props.stats['hitDie']}
              onChange={this.props.onChange}>
              {diceValues}
            </select>
            # of Dice:
            <input name="numberOfHitDice" className="statInput" id="numberOfHitDice"
              type="number" value={this.props.stats['numberOfHitDice']}
              onChange={this.props.onChange} />
          </label>
          <label>
            Additional Die:
            <input name="additionalDieCheck" type="checkbox"
              onChange={() => this.toggleBoxChecked('additionalDie')} />
            <select name="additionalDie" className="statSelect" id="additionalDie"
              type="number" value={this.props.stats['additionalDie']}
              onChange={this.props.onChange} disabled="disabled">
              {diceValues}
            </select>
            # of Dice:
            <input name="numberOfAddDice" className="statInput" id="numberOfAddDice"
              type="number" value={this.props.stats['numberOfAddDice']}
              onChange={this.props.onChange} disabled={!this.props.stats['additionalDie']} />
          </label>
          <label>
            Stat Modifier:
            <input name="statModCheck" type="checkbox"
              onChange={() => this.toggleBoxChecked('statMod')} />
            <input name="statMod" className="statInput" id="statMod"
              type="number" value={this.props.stats['statMod']}
              onChange={this.props.onChange} disabled="disabled" />
          </label>
          <label>
            Misc Bonus:
            <input name="miscBonusCheck" type="checkbox"
              onChange={() => this.toggleBoxChecked('miscBonus')} />
            <input name="miscBonus" className="statInput" id="miscBonus"
              type="number" value={this.props.stats['miscBonus']}
              onChange={this.props.onChange} disabled="disabled" />
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
