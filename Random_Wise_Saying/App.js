/* eslint-disable prettier/prettier */

import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

// import BodyComponent from './src/BodyComponent/BodyComponent';
import MainComponent from './src/MainComponent/MainComponent';
const App = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 1000);
  return <MainComponent />;
};

export default App;
