import React from 'react';
import { Grommet } from 'grommet';

// app theme
import Theme from './Theme.js';

// app css
import '../src/App.css';

// components
import Home from './features/home/home.js';
import About from './features/about/about.js';

// routing
import {
  Switch,
  Route
} from "react-router-dom";

const App = () => {
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
