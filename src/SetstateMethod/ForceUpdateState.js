import React, { Component } from 'react'

export default class ForceUpdateState extends Component {
    constructor(){
        super();
this.forceupdateState=this.forceupdateState.bind(this);
    }
    forceupdateState(){
        this.forceUpdate();
    }
  render() {
    return (
      <div>
         <h1>Example to generate random number</h1>
        <h2>random number:{Math.random()}</h2>
        <button onClick={this.forceupdateState}>ForceUpdate</button>
      </div>
    )
  }
}
