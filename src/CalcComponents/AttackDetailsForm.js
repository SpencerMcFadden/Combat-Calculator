import React, { Component } from 'react';
import Formula from './Formula';

class AttackDetailsForm extends Component {
  render() {
    let formulaList;
    if(this.props.formulas) {
      formulaList = this.props.formulas.map(formula => {
        return (
          <Formula key={formula} formula={formula} stats={this.props.stats} />
        );
      });
    }
    return (
      <form className="Combat-form" onSubmit={this.props.onSubmit}>
        <label>
          Hit Die:
          <select name="hitDie" type="number" value={this.props.stats['hitDie']} onChange={this.props.onChange}>
            <option value={this.props.dice[0].dieValue}>{this.props.dice[0].title}</option>
            <option value={this.props.dice[1].dieValue}>{this.props.dice[1].title}</option>
            <option value={this.props.dice[2].dieValue}>{this.props.dice[2].title}</option>
            <option value={this.props.dice[3].dieValue}>{this.props.dice[3].title}</option>
            <option value={this.props.dice[4].dieValue}>{this.props.dice[4].title}</option>
          </select>
        </label>
        <label>
          Stat Modifier:<input name="statMod" type="number" value={this.props.stats['statMod']} onChange={this.props.onChange} />
        </label>
        <label>
          Misc Bonus:<input name="miscBonus" type="number" value={this.props.stats['miscBonus']} onChange={this.props.onChange} />
        </label>
        <label>
          Number of Attacks/Dice:<input name="numberOfAttacks" type="number" value={this.props.stats['numberOfAttacks']} onChange={this.props.onChange} />
        </label>

        <div className="Formula-buttons">
          {formulaList}
        </div>
      </form>
    )
  }
}


// Calc.propTypes = {
//   formulas: React.PropTypes.array
// }

export default AttackDetailsForm;
