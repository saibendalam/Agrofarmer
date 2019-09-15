import React, {Component} from 'react';
import firebase from '../../config/firebase.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Picker,
  Text,
  Image,
  StatusBar,
  
} from 'react-native';
import { Avatar, Card,TextInput, Button, Title, Paragraph } from 'react-native-paper';


export default class Ontap extends Component {
  constructor(){
    super();
    this.ref = firebase.firestore().collection('farmer');
    this.state={
    veggi:'select',
    Quan:'',
    price:''
    }
  }
  static navigationOptions = {
    headerTitleStyle: { flex: 1, textAlign: 'center'},
    color:'#3ca250',
    title: 'Home',
  };
  render() {
    return (
        <View style={{}}>
          
          <View style={{borderRadius:4,borderColor:'black'}}> 
          <Picker
        
        selectedValue={this.state.veggi}
        style={{height: 50, width: 250}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({veggi: itemValue})
        }>
        <Picker.Item label="select vegetable" value="select" />
        <Picker.Item label="Tomato" value="tomato" />
        
        <Picker.Item label="potato" value="potato" />
        <Picker.Item label="Brinjal" value="brinjal" />
        <Picker.Item label="Ladies finger" value="ladies" />
      </Picker>
      <View>
     <TextInput
        label='Quantity'
        value={this.state.Quan}
        onChangeText={text => this.setState({ Quan:text })}
        mode='outlined'
      />
     </View>
     <View>
     <TextInput
        label='price in rupeess'
        value={this.state.price}
        onChangeText={text => this.setState({ price:text })}
        mode='outlined'
      />
     </View>
     <Button mode="contained" color="#3ca250" onPress={() => {
       this.ref.add({
       farmername:'ram',
       product:this.state.veggi,
       quantity:this.state.Quan,
       price:this.state.price

      });
     }}>
    Press to upload
  </Button>
          </View>
     
      </View>
  
    );
  }
}

const styles = StyleSheet.create({


    main: {
      paddingTop: 8,
  
    },
  
  
  });
  