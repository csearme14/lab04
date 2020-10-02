import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import brand from './components/brand';


export default function App() {
  return (        
      <Router>
        <Scene key="root">
          <Scene key="brand" component={brand} hideNavBar={true}></Scene>
          <Scene key="Home" component={Home} hideNavBar={true}></Scene>
        </Scene>
      </Router>
  );
}