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
        <Route path={'/dicebag'} component={DiceBag} />
        <Route path={'/react-exercises'} component={ReactExercises} />
        <Route path={'/senators'} component={Senators} />
      </Switch>
    </>
  );
}

function Home() {
  return (
    <ul>
      <li><NavLink to={'/dicebag'} >Dice Bag</NavLink></li>
      <li><NavLink to={'/react-exercises'} >React Exercises</NavLink></li>
      <li><NavLink to={'/senators'} >Senators</NavLink></li>
    </ul>
  )
}

export default App;