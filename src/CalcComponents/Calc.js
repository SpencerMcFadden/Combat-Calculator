import React, { Component } from 'react';
// import Formula from './Formula';
import AttackDetailsForm from './AttackDetailsForm';

class Calc extends Component {
  render() {
    return (
      <div className="Calculator">
        <h3>Testing Calc</h3>

        <div className="Calculator-input">
          <AttackDetailsForm dice={this.props.dice} formulas={this.props.formulas}/>
        </div>
      </div>
    )
  }
}

export default Calc;
