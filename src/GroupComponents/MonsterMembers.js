import React, { Component } from 'react';

class MonsterMembers extends Component {
  calcMonsterDpr() {
    let monsterDpr = 0;
    for(let member in this.props.monsterMembers) {
      monsterDpr += this.props.monsterMembers[member].damagePerRound;
    }
    return monsterDpr;
  }

  render() {
    let monsterList;
    let monsterDpr;
    if(this.props.monsterMembers) {
      monsterDpr = this.calcMonsterDpr();
      monsterList = this.props.monsterMembers.map(member => {
        return (
          <li className="Group-member" key={member.key}
            draggable="true" onDragStart={this.props.onDragStart}
            onDragOver={this.props.onDragOver} onDragLeave={this.props.onDragLeave}
            onDrop={this.props.onDrop}>{member.name} {member.damagePerRound}</li>
        );
      });
    }
    return(
      <div className="Faction-form">
        <ul>
          {monsterList}
        </ul>
        <h2 className="Total-dpr">Total Dpr: {monsterDpr}</h2>
      </div>
    );
  }
}

export default MonsterMembers;
