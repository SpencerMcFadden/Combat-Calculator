import React, { Component } from 'react';

class AttackDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitDie: 0,
      statMod: 0,
      miscBonus: 0,
      numberOfAttacks: 0
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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Hit Die:
          <select name="hitDie" value={this.state.hitDie} onChange={this.handleChange}>
            <option value="3">d4</option>
            <option value="4">d6</option>
            <option value="5">d8</option>
            <option value="6">d10</option>
            <option value="7">d12</option>
          </select>
        </label>
        <label>
          Stat Modifier: <input name="statMod"type="text" value={this.state.statMod} onChange={this.handleChange} />
        </label>
        <label>
          Misc Bonus: <input name="miscBonus" type="text" value={this.state.miscBonus} onChange={this.handleChange} />
        </label>
        <label>
          Number of Attacks: <input name="numberOfAttacks" type="text" value={this.state.numberOfAttacks} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


// Calc.propTypes = {
//   formulas: React.PropTypes.array
// }

export default AttackDetailsForm;
