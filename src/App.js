import React, { Component } from 'react'
import Profile from './Profile'
import "./App.css"

export default class App extends Component{
  state = { isVisible : false};
  handleShow=()=>this.setState({isVisible:!this.state.isVisible});
 

  render() 
  {
    return (
      <div className='App'>
      <button className='bouton' onClick={this.handleShow}>{this.state.isVisible?'hide':'show'}</button>
      {this.state.isVisible === true ? <Profile/> : null }
      </div>
    )
  
  }
}


