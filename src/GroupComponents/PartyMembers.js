import React, { Component } from 'react';

class PartyMembers extends Component {
  calcPartyDpr() {
    let partyDpr = 0;
    for (let member in this.props.partyMembers) {
      partyDpr += this.props.partyMembers[member].damagePerRound;
    }
    return partyDpr;
  }

  render() {
    let partyList;
    let partyDpr;
    if(this.props.partyMembers) {
      partyDpr = this.calcPartyDpr();
      partyList = this.props.partyMembers.map(member => {
        return (
          <li className="Group-member" isBeingDragged={this.props.isBeingDragged} draggable="true" onDragStart={this.props.onDragStart}
            onDragOver={this.props.onDragOver} onDragLeave={this.props.onDragLeave} onDrop={this.props.onDrop}>{member.name} {member.damagePerRound}</li>
        );
      });
    }
    return(
      <div className="Party-form">
        <ul>
          {partyList}
        </ul>
        <h2 className="Total-dpr">Total Dpr: {partyDpr}</h2>
      </div>
      );
  }
}

export default PartyMembers;
