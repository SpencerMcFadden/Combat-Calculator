import React, { Component } from 'react';
import Formula from './Formula';

class AttackDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitDie: 3,
      statMod: 0,
      miscBonus: 0,
      numberOfAttacks: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    let formulaList;
    if(this.props.formulas) {
      formulaList = this.props.formulas.map(formula => {
        return (
          <Formula formula={formula} dice={this.props.dice} hitDie={this.state.hitDie} statMod={this.state.statMod} miscBonus={this.state.miscBonus} numberOfAttacks={this.state.numberOfAttacks}/>
        );
      });
    }
    return (
      <form className="Combat-form" onSubmit={this.handleSubmit}>
        <label>
          Hit Die:
          <select name="hitDie" type="number" value={this.state.hitDie} onChange={this.handleChange}>
            <option value={this.props.dice[0].dieValue}>{this.props.dice[0].title}</option>
            <option value={this.props.dice[1].dieValue}>{this.props.dice[1].title}</option>
            <option value={this.props.dice[2].dieValue}>{this.props.dice[2].title}</option>
            <option value={this.props.dice[3].dieValue}>{this.props.dice[3].title}</option>
            <option value={this.props.dice[4].dieValue}>{this.props.dice[4].title}</option>
          </select>
        </label>
        <label>
          Stat Modifier: <input name="statMod" type="number" value={this.state.statMod} onChange={this.handleChange} />
        </label>
        <label>
          Misc Bonus: <input name="miscBonus" type="number" value={this.state.miscBonus} onChange={this.handleChange} />
        </label>
        <label>
          Number of Attacks/Dice: <input name="numberOfAttacks" type="number" value={this.state.numberOfAttacks} onChange={this.handleChange} />
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
