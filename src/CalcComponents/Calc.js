import React, { Component } from 'react';
import AttackDetailsForm from './AttackDetailsForm';

class Calc extends Component {
  render() {
    return (
      <div className="Calculator">
        <h3 id="Result-title">Type of result</h3>

        <div className="Result-display">
          <h4 id="result">...</h4>
        </div>

        <div className="Calculator-input">
          <AttackDetailsForm dice={this.props.dice} formulas={this.props.formulas} stats={this.props.stats}
            onChange={this.props.onChange} onSubmit={this.props.onSubmit} onDisable={this.props.onDisable}/>
        </div>
      </div>
    )
  }
}

export default Calc;
