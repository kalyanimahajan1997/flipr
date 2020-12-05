import './App.css';
import React from 'react';
import NavigationBar from './components/Navigation/Navigation';
import Home from './containers/Home/Home';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
