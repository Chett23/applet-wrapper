import React from 'react';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';

//subSites
import DiceBag from './Components/DiceBag'
import ReactExercises from './Components/ReactExercises'
import Senators from './Components/Senators'





function App() {
  document.title="Applet Home Page"
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/dicebag-applet'} component={DiceBag} />
        <Route path={'/react-exercises-applet'} component={ReactExercises} />
        <Route path={'/senators-applet'} component={Senators} />
      </Switch>
    </>
  );
}

function Home() {
  return (
    <ul>
      <li><NavLink to={'/dicebag-applet'} >Dice Bag</NavLink></li>
      <li><NavLink to={'/react-exercises-applet'} >React Exercises</NavLink></li>
      <li><NavLink to={'/senators-applet'} >Senators</NavLink></li>
    </ul>
  )
}

export default App;