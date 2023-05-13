import React, { Component } from 'react'

export default class ControlledForm extends Component {
    constructor(props){
        super(props);
this.state={value:""};
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value:e.target.value})
    }
    handleSubmit(e){
alert("you have successfully submiitted input:" +this.state.value);
e.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
            <h1>Controlled form Example</h1>
            <label>Name:<input type="text" value={this.state.value} onChange={this.handleChange}/></label>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
