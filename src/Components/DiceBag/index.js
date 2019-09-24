import React, { Component } from 'react';
import DiceBag from './Components/DiceBag';

class App extends Component {
  render() {
    return (
      <DiceBag startDice={['stnd']} />
    );
  }
}

export default App;
