import React, { Component } from 'react';
import Formula from './Formula';
import AttackDetailsForm from './AttackDetailsForm';

class Calc extends Component {
  render() {
    let formulaList;
    if(this.props.formulas) {
      formulaList = this.props.formulas.map(formula => {
        return (
          <Formula formula={formula} />
        );
      });
    }
    return (
      <div className="Calc">
        <h3>Testing Calc</h3>

        <div className="CalcInput">
          <AttackDetailsForm />
        </div>

        <div className="CalcButtons">
          {formulaList}
        </div>
      </div>
    )
  }
}


// Calc.propTypes = {
//   formulas: React.PropTypes.array
// }

export default Calc;
