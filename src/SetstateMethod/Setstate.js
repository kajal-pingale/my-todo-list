import React, { Component } from 'react'

export default class Setstate extends Component {
    constructor(){
        super();
        this.state={
            msg:"welcome to ReactJs"
        }
        // this.Updatestate=this.Updatestate.bind(this);
    }
    Updatestate=()=>{
this.setState({msg:"It's a best tutorial"})
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.Updatestate}>Click</button>
      </div>
    )
  }
}
