import React from 'react';
import { View,Text,StyleSheet, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default function brand() {
   
    setTimeout(() => {
        Actions.replace('Home');
    }, 2000);
    return (        
       <View style = {styles.container}>
           <Image style = {styles.picture} source={require('../1brand.gif')}/>
       </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picture: {
        width: 100,
        height: 100,
    }

})