/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet,View } from 'react-native';
import Forget from './modules/screens/forget';
import Home from './modules/screens/home';
import Drawer from './modules/screens/home';
import Details from './modules/screens/details';
import Navigation from './modules/navigation/rootNavigator';
import { createStackNavigator } from 'react-navigation-stack';


class App extends React.Component{
  render(){
    return(
     <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  body: {
    backgroundColor: '#ffffff'
  },
});

export default App;
