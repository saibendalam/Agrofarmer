import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigation, TabButton, TabIcons } from '@opengeekslab/react-native-tab-navigator';

import Screen1 from './screens/Profile/profile';
import weather from './screens/weather/weather';
import Home from './Veggies';
import statistics from './screens/statistics/statistics';
import OneSignal from 'react-native-onesignal'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const myIcon = <Icon name="weather-cloudy" size={30} color="#900" />;
export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("c271eddd-82fb-46ca-be45-aba2c29d0f03");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNav />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
const navigationRouter = {
  User: {
    screen: Screen1,
    screenOptions: {
      title: 'PROFILE',
      showTitle: true,
      animated: true,
      tabIcon:require('./images/user.png'),
      animation: [
        {
          name: 'rotationY',
          type: 'bouncing',
        },

      ],
      textStyle:
      [
        { paddingTop:5,
          fontSize:14 
      }
     ],
     iconStyle:
     [
       {
       height:28,
       width:28
       }
    ],
    },
  },
  weather: {
    screen: weather,
    screenOptions: {
      title: 'WEATHER',
      tabIcon: require('./images/weather.png'),
      animation: [
        {
          name: 'scale',
          type: 'bouncing',
        },
      ],
      textStyle:
      [
        {
          paddingTop:5,
          fontSize:14
      }
     ],
     iconStyle:
     [
       {
       height:30,
       width:30
       }
    ],
    },
  },

  Screen_3: {
    screen: Home,
    screenOptions: {
      title: 'UPLOAD',
      tabIcon:require('./images/plus.png'),
      animated: true,
      animation: [
        {
          name: 'pendulum',
          duration: 700,
        },
      ],
      textStyle:
      [
        { paddingTop:5,
          fontSize:14
      }
     ],
     iconStyle:
     [
       {
       height:28,
       width:28
       }
    ],
    },
  },
  statistics: {
    screen: statistics,
    screenOptions: {
      title: 'STATS',
      tabIcon: require('./images/chart.png'),
      animation: [
        {
          name: 'scale',
          type: 'bouncing',
        },
      ],
      textStyle:
      [
        {
          paddingTop:5,
          fontSize:14
      }
     ],
     iconStyle:
     [
       {
       height:30,
       width:30
       }
    ],
    },
  },
 
};

const defaultConfig = {
  lazy: true,
  defaultRoute: 'Screen_3',
  screenOptions: {
    showTitle: true,
    animated: true,
    buttonView: TabButton,
    activeTintColor: 'green',
    inactiveTintColor: '#818692',
    animation: ['ripple', 'rotationZ'],
  },
};

const TabNav = TabNavigation(navigationRouter, defaultConfig);