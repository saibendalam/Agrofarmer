
import React, {Component} from 'react';
import * as moment from 'moment';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  
} from 'react-native';
import Moment from 'react-moment';
import { Avatar, Card, Button,Divider, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign'
let date = new Date(). getDate() +'/'+ ( new Date().getMonth() + 1)+ '/' +new Date().getFullYear();
const API_Key="aa51a6245891178f776927fe5eba172f";
const DEF_lat="17.6970004";
const DEF_long="83.1466159";
let icons=[];
let c='';

export default class Ontap extends Component {
  static navigationOptions = {
    headerTitleStyle: { flex: 1, textAlign: 'center'},
    title: 'Home',
  };
 constructor(){
   super();
   this.state={
     days:[],
     icon1:[],
     ion:[],
     tempMax:[],
     tempMin:[],
      windSpeed:[],
      sumary:[],
     lat:DEF_lat,
     long:DEF_long,
     data:'',
   }
 }
 pressed(){
   this.setState({
     icon1:icons
   })
 }
 _getForecast(long,lat)
 {
   const request_url = "https://api.darksky.net/forecast/"+API_Key+"/"+ DEF_lat +","+DEF_long;
   
   axios.get(request_url).then( (response)=>{
      if(response.status== 200){
        let tmax=[];
        let tmin=[];
        let winspeed=[];
        let summary=[];
        let icon=[];
        
        for (let index = 0; index < 3; index++) {
          
         
         
          tmax.push(response.data.daily.data[index].temperatureMax);
          tmin.push(response.data.daily.data[index].temperatureMin);
          winspeed.push(response.data.daily.data[index].windSpeed);
          summary.push(response.data.daily.data[index].summary);
          icon.push(response.data.daily.data[index].icon);
        }
        console.log(icon);
        this.setState({
          ion:icon,
          tempMax:tmax,
          tempMin:tmin,
          windSpeed:winspeed,
          sumary:summary
        })
        
      } 
   });
   c=this.state.tempMax[0]-32*(5/9);
 }

  render() {
    if(this.state.ion.length <= 0 )
    {
      this._getForecast(this.state.lat,this.state.long);
    }
   
   for (let index = 0; index < 3; index++) {
     
    if (this.state.ion[index]=="cloudy") {
     icons.push('weather-cloudy')
    }else if (this.state.ion[index]=="rain") {
      icons.push('weather-rainy')
    }else if (this.state.ion[index]=="snow") {
      icons.push('weather-snowy')
    }else if (this.state.ion[index]=="sleet") {
      icons.push('weather-hail')
    }else if (this.state.ion[index]=="fog") {
      icons.push('weather-fog')
    }else if (this.state.ion[index]=="wind") {
      icons.push('weather-windy-variant')
    }else if (this.state.ion[index]=="partly-cloudy-day") {
      icons.push('weather-partlycloudy')
    }else if (this.state.ion[index]=="clear-day") {
      icons.push('weather-sunny')
    }
   
     
   }
   
   console.log(icons)
  

    return (
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',paddingTop:23,justifyContent:'center'}} >
           <View style={{height:50,width:'100%',backgroundColor:'#3ca250'}}>
          <Text style={{textAlign:'center',color:'white',paddingTop:10,fontWeight:'300',fontSize:18}}>Current market prices</Text>
        </View>
       <View style={{height:400,width:350,borderRadius:5,borderWidth:2,borderColor:'black'}}>
       <Card style={{backgroundColor:'white',paddingTop:23}}>
       <Card.Title titleStyle={{fontSize:24}} title="Today's weather:-" subtitle={'Day would be' +this.state.sumary[0] } />
       <Divider style={{height:0.8}} />
          <Card.Content>
     <Text style={{fontSize:20}}>{'Max Temperature : '+ this.state.tempMax[0]}</Text>
     <Text style={{fontSize:20}}>{'Min Temperature : '+ this.state.tempMin[0]}</Text>
     <Text style={{fontSize:20}}>{'Speed of wind : '+ this.state.windSpeed[0]}</Text>
     
    </Card.Content>
    <View style={{flexDirection:'row',paddingTop:20,justifyContent:'space-between'}}>
      <View>
           <Card style={{backgroundColor:'white',paddingTop:0}}>
                     <Card.Title titleStyle={{fontSize:14}} title="tommorow's weather:-" />
                     
                    <Divider style={{height:0.8}} />
              <Card.Content>
                   <Text style={{fontSize:12}}>{'Max Temperature : '+ this.state.tempMax[1]}</Text>
                <Text style={{fontSize:12}}>{'Min Temperature : '+ this.state.tempMin[1]}</Text>
                   <Text style={{fontSize:12}}>{'Speed of wind : '+ this.state.windSpeed[1]}</Text>
     
            </Card.Content>
           </Card>
      </View>
      <View style={{paddingRight:9}}>
           <Card style={{backgroundColor:'white',paddingTop:0}}>
                     <Card.Title titleStyle={{fontSize:14,paddingRight:9}} title="overmorrow's weather:-" />
                     
                    <Divider style={{height:0.8}} />
              <Card.Content>
                   <Text style={{fontSize:12}}>{'Max Temperature : '+ this.state.tempMax[2]}</Text>
                <Text style={{fontSize:12}}>{'Min Temperature : '+ this.state.tempMin[2]}</Text>
                   <Text style={{fontSize:12}}>{'Speed of wind : '+ this.state.windSpeed[2]}</Text>
     
            </Card.Content>
           </Card>
      </View>
    </View>

  </Card>
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
  