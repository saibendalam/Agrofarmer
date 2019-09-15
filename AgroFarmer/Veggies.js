
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home/Main'
import Press from './screens/Home/Ontap'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default class Veggies extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Appcontainer/>

      </View>
    );
  }
}
const Root=createStackNavigator(
  {
    Home:Home,
    Pressed:Press,
  },

{
  initialRootName:'Home',
},


);
const Appcontainer = createAppContainer(Root);
const styles = StyleSheet.create({
  container: {
 flex:1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});

