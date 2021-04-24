import React, { Component } from 'react';
import { StyleSheet, Button, Platform } from 'react-native';
import RadioButton from './components/RadioButton';
import { View, TouchableOpacity, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore'


const PROP = [
	{
		key: 'ANDRES MABINI', 
		text: 'ANDRES MABINI',value:0
	},
	{
		key: 'PIO DEL BONIFACIO',
		text: 'PIO DEL BONIFACIO',value:1
	},
	{
		key: 'FERDINAND QUEZON',
		text: 'FERDINAND QUEZON',value:2
	},
	{
		key: 'MARCELO AGUINALDO',
		text: 'MARCELO AGUINALDO',value:3
  },
];

export default class App extends Component {
//Binding the function with class
  ButtonClickListener = () => {
    VotesRef.add({value: ""})
  };
 
  render() {
    return ( 

     <View style={styles.container}>
 	   <Text style={styles.headerText}></Text>
     <RadioButton PROP={PROP} />
     <Button
     onPress={()=>this.ButtonClickListener}
      title="SUBMIT VOTE"
     color="#00B0FF"/>
      </View>
    );
  }
   
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});