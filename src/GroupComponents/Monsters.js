import React, { Component } from 'react';
import MonsterMembers from './MonsterMembers';

class Monsters extends Component {
  render() {
    return(
      <div className="Monsters">
        <h4>Monsters</h4>

        <div className="Monsters-info">
          <MonsterMembers />
        </div>
      </div>);
  }
}

export default Monsters;
