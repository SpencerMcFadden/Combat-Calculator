import React, { Component } from 'react';

class PartyMembers extends Component {
  render() {
    let partyList;
    if(this.props.partyMembers) {
      partyList = this.props.partyMembers.map(member => {
        return (
          <li draggable="true" onDragStart={this.props.onDragStart}
            onDragOver={this.props.onDragOver} onDrop={this.props.onDrop}>{member.name} {member.damagePerRound}</li>
        );
      });
    }
    return(
      <div className="Party-form">
        <ul>
          {partyList}
        </ul>
      </div>);
  }
}

export default PartyMembers;
