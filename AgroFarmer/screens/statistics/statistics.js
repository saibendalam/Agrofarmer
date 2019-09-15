import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Header,
  Picker,
  StatusBar,
  
} from 'react-native';
import { Avatar, Card, Button,Divider, Title, Paragraph } from 'react-native-paper';


export default class Ontap extends Component {
  static navigationOptions = {
    headerTitleStyle: { flex: 1, textAlign: 'center'},
    title: 'Home',
  };
  constructor(){
    super();
    this.state={
     vegi:'select',
     showtomato:false,
     show:false,
     showpotato:false,
     showbrinjal:false,
     showladies:false,
    }
  }
  pressed(){
   
    if (this.state.vegi=='tomato') {
      this.setState({
        showtomato:true
      })
    }else{
      this.setState({
        showtomato:false
      })
    }
    if (this.state.vegi=='potato') {
      this.setState({
        showpotato:true
      })
    }else{
      this.setState({
        showpotato:false
      })
    }
    if (this.state.vegi=='ladies') {
      this.setState({
        showladies:true
      })
    }else{
      this.setState({
        showladies:false
      })
    }
    if (this.state.vegi=='brinjal') {
      this.setState({
        showbrinjal:true
      })
    }else{
      this.setState({
        showbrinjal:false
      })
    }
  }
  render() {
    return (
        <View style={{alignItems:'center'}}>
        <View style={{height:50,width:'100%',backgroundColor:'#3ca250'}}>
          <Text style={{textAlign:'center',color:'white',paddingTop:10,fontWeight:'300',fontSize:18}}>Current market prices</Text>
        </View>
             <View style={{paddingTop:5,justifyContent:'space-between',flexDirection:'row'}}>
             <View style={{backgroundColor:'white',height: 50, width: 150,borderRadius:5,borderColor:'black',borderWidth:0.5}}>
          <Picker
        
        selectedValue={this.state.vegi}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({vegi: itemValue})
        }>
        <Picker.Item label="select" value="select" />
        <Picker.Item label="Tomato" value="tomato" />
        
        <Picker.Item label="potato" value="potato" />
        <Picker.Item label="Brinjal" value="brinjal" />
        <Picker.Item label="Ladies finger" value="ladies" />
      </Picker>
          </View>
          <View style={{paddingLeft:6,paddingTop:2}}>
          <Button  color='green' mode="text" onPress={() => this.pressed()}>
                       Go
             </Button>
          </View>
             </View>
             <View style={{height:400,width:350,paddingTop:70}}>
             { this.state.showtomato &&
             <View style={{justifyContent:'center'}} >
               <Card>
               <Text style={{fontWeight:'bold',fontSize:26,color:'red',textAlign:'center'}}>Tomatos</Text>
               <Divider />
            <Text style={{fontWeight:'700',fontSize:20}}>Current price = RS. 18/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>Average price = RS. 19.50/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>peek price =RS. 20/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>Suggestd price=RS. 19/- per kilo</Text>
               </Card>
                
            
            
               </View>
           
          }
          { this.state.showpotato &&
             <View style={{justifyContent:'center'}} >
               <Card>
               <Text style={{fontWeight:'bold',fontSize:26,color:'brown',textAlign:'center'}}>Potato</Text>
               <Divider />
            <Text style={{fontWeight:'700',fontSize:20}}>Current price = RS. 15/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>Average price = RS. 16.50/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>peek price =RS. 18/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>Suggestd price=RS. 16/- per kilo</Text>
               </Card>
                
            
            
               </View>
           
          }
          { this.state.showbrinjal &&
             <View style={{justifyContent:'center'}} >
               <Card>
               <Text style={{fontWeight:'bold',fontSize:26,color:'#B600FF',textAlign:'center'}}>Brinjal</Text>
               <Divider />
            <Text style={{fontWeight:'700',fontSize:20}}>Current price = RS. 40/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>Average price = RS. 43.50/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>peek price =RS. 46/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>Suggestd price=RS. 41/- per kilo</Text>
               </Card>
                
            
            
               </View>
           
          }
          { this.state.showladies &&
             <View style={{justifyContent:'center'}} >
               <Card>
               <Text style={{fontWeight:'bold',fontSize:26,color:'green',textAlign:'center'}}>Ladies finger</Text>
               <Divider />
            <Text style={{fontWeight:'700',fontSize:20}}>Current price = RS. 25/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>Average price = RS. 23.50/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>peek price =RS. 30/- per kilo</Text>
            <Text style={{fontWeight:'700',fontSize:20}}>Suggestd price=RS. 26/- per kilo</Text>
               </Card>
                
            
            
               </View>
           
          }
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
  