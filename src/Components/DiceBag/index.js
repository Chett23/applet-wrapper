import React, { Component } from 'react';
import DiceBag from './Components/DiceBag';




class App extends Component {
  render() {
    document.title="Dice Bag Applet"
    return (
      <DiceBag startDice={['stnd']} />
    );
  }
}

export default App;
