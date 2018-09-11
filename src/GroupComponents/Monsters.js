import React, { Component } from 'react';
import MonsterMembers from './MonsterMembers';

class Monsters extends Component {
  render() {
    return(
      <div className="Monsters">
        <div className="Faction-info">
          <MonsterMembers
            monsterMembers={this.props.monsterMembers} dragElement={this.props.dragElement}
            onDragStart={this.props.onDragStart} onDragOver={this.props.onDragOver}
            onDragLeave={this.props.onDragLeave} onDrop={this.props.onDrop}/>
        </div>
      </div>
    );
  }
}

export default Monsters;
