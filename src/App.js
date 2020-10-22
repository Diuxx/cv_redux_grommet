import React from 'react';
import { Grommet } from 'grommet';
import '../src/App.css';

// app theme
import Theme from './Theme.js';

// components
import Home from './features/home/home.js';
import About from './features/about/about.js';

// routing
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Grommet theme={Theme} full>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Grommet>
  );
}

export default App;
