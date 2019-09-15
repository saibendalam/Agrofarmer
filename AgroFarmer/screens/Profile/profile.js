
import React, {Component} from 'react';
import {Platform,TouchableOpacity,ScrollView, StyleSheet, Text, View} from 'react-native';
import { Avatar,List,Divider } from 'react-native-paper';


export default class Profile extends Component {
    static navigationOptions = {
        header: null
      };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

        <View style={{elevation:3,backgroundColor:'white',height:250}}>
      <View style={{paddingTop:25,paddingLeft:20,}}>
        <Avatar.Image size={85} source={require('../../images/avatar.jpg')} />
        <Text style={{fontSize:37,color:'black',fontWeight:'bold'}}>Bendalam</Text>
        <Text style={{fontSize:20,color:'gray',fontWeight:'normal'}}>saikrishnabendalam@gmail.com</Text>
           <View style={{paddingTop:5}}>
             <Text style={{fontSize:21,paddingTop:5,color:'seagreen'}}>View profile</Text>
           </View>
        </View>
      </View> 
      <View style={{paddingLeft:20,paddingTop:25}}>
        
        
      </View>
      
        <View style={{flex:1}}>
        <List.Section>
        <Divider />
            <List.Subheader style={{fontSize:24}}>ACCOUNT SETTINGS</List.Subheader>
                    <List.Item
                         title="Email"
         
                     />
                     <Divider inset/>
                     <List.Item
                          title="Location"
      
                      />
                      <Divider inset/>
                      <List.Item
                          title="Favorites"
      
                      />
      </List.Section>
        </View>    
        </ScrollView>
       
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
 flex:1
  },

});
