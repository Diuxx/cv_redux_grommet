import React from 'react';
import { Grommet } from 'grommet';
import '../src/App.css';

// app theme
import Theme from './Theme.js';

// components
import Home from './features/home/Home.js';

function App() {
  return (
    <Grommet theme={Theme} full>
      <Home />
    </Grommet>
  );
}

export default App;
