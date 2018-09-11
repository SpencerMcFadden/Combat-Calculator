import React, { Component } from 'react';
import AttackDetailsForm from './AttackDetailsForm';
import DialogPopup from '../UIComponents/DialogPopup';

class Calc extends Component {
  render() {
    return (
      <div className="Calculator">
        <h3 className="Result-title" id="Result-title">Type of result</h3>

        <div className="Result-display">
          <h4 className="result" id ="result">...</h4>
        </div>

        <div className="Calculator-input">
          <AttackDetailsForm dice={this.props.dice} formulas={this.props.formulas}
            stats={this.props.stats} onChange={this.props.onChange}
            onSubmit={this.props.onSubmit} onDisable={this.props.onDisable}/>
        </div>

        <div className="Dialog-button">
          <button onClick={this.props.openDialog}>Open Dialog</button>
          <DialogPopup isOpen={this.props.isDialogOpen} onClose={this.props.closeDialog}>
            <h2>Testing</h2>
            <p>
              <button>Submit</button>
              <button onClick={this.props.closeDialog}>Close</button>
            </p>
          </DialogPopup>
        </div>
      </div>
    )
  }
}

export default Calc;
