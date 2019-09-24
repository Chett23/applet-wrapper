import React from 'react';
// import React, { useState, useEffect } from 'react';
import Senators from './Components/Senators.js';
import Senator from './Components/Senator.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  document.title="Senators List Applet"
  return (
    <Router>
      <Switch>
        <Route exact path="/senators-applet" component={Senators} />
        <Route exact path="/senators-applet/senator/:cspanid" component={Senator} />
      </Switch>
    </Router>
  );
}

export default App;