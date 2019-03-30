import React, { Component } from 'react';
import './App.css';
import ComponentB from './ComponentB';
import ComponentD from './ComponentD';

class App extends Component {
  state = { x:2}

  handleXClick = () => {
    this.setState({x: this.state.x +1})
  }
  render() {

    const {x} = this.state

    return (
      <div className="App">
        <ComponentB x={x} onXClick={this.handleXClick}/>
        <ComponentD x={x} onXClick={this.handleXClick}/>
      </div>
    );
  }
}

export default App;
