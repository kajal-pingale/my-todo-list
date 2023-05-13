import React, { Component } from 'react'

export default class UncontrolledForm extends Component {
    constructor(props){
        super(props);
this.input=React.createRef();
    }
    updatesubmit=(event)=>{
        alert("you have successfully entered credentials");
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.updatesubmit}>
            <label>Name:<input type="text" ref={this.input}/></label>
            <label>comapny name:<input type="text" ref={this.input}/></label>
            <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
