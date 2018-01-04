import React, { Component } from 'react';
import Formula from './Formula';

class AttackDetailsForm extends Component {
  render() {
    let formulaList;
    if(this.props.formulas) {
      formulaList = this.props.formulas.map(formula => {
        return (
          <Formula key={formula} formula={formula} dice={this.props.dice} hitDie={this.props.hitDie} statMod={this.props.statMod} miscBonus={this.props.miscBonus} numberOfAttacks={this.props.numberOfAttacks}/>
        );
      });
    }
    return (
      <form className="Combat-form" onSubmit={this.props.onSubmit}>
        <label>
          Hit Die:
          <select name="hitDie" type="number" value={this.props.hitDie} onChange={this.props.onChange}>
            <option value={this.props.dice[0].dieValue}>{this.props.dice[0].title}</option>
            <option value={this.props.dice[1].dieValue}>{this.props.dice[1].title}</option>
            <option value={this.props.dice[2].dieValue}>{this.props.dice[2].title}</option>
            <option value={this.props.dice[3].dieValue}>{this.props.dice[3].title}</option>
            <option value={this.props.dice[4].dieValue}>{this.props.dice[4].title}</option>
          </select>
        </label>
        <label>
          Stat Modifier:<input name="statMod" type="number" value={this.props.statMod} onChange={this.props.onChange} />
        </label>
        <label>
          Misc Bonus:<input name="miscBonus" type="number" value={this.props.miscBonus} onChange={this.props.onChange} />
        </label>
        <label>
          Number of Attacks/Dice:<input name="numberOfAttacks" type="number" value={this.props.numberOfAttacks} onChange={this.props.onChange} />
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
