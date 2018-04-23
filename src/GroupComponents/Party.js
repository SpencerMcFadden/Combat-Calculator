import React, { Component } from 'react';
import PartyMembers from './PartyMembers';

class Party extends Component {
  render() {
    return(
      <div className="Party">
        <h4>Party</h4>

        <div className="Party-info">
          <PartyMembers />
        </div>
      </div>
    );
  }
}

export default Party;
