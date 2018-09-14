import React, { Component } from 'react';

class DialogPopup extends Component {
  render() {
    if (this.props.isOpen === false) {
      return null
    }

    return (
      <div className="Dialog-popup">
        <div className="Dialog-popping">Helooooooo!{this.props.children}</div>
        <div className="Dialog-backdrop" onClick={e => this.close(e)}/>
      </div>
    )
  }

  close(event) {
    event.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default DialogPopup
