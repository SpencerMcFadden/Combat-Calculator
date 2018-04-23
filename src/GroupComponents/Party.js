import React, { Component } from 'react';
import PartyMembers from './PartyMembers';

class Party extends Component {
  render() {
    return(
      <div className="Party">
        <div className="Party-info">
          <PartyMembers partyMembers={this.props.partyMembers} dragElement={this.props.dragElement}
            onDragStart={this.props.onDragStart} onDragOver={this.props.onDragOver} onDrop={this.props.onDrop}/>
        </div>
      </div>
    );
  }
}

export default Party;
