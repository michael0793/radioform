import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from './components/RadioButton';

const firebase = require('firebase/database');
require('firebase/database');

const btn = document.createElement('button');
btn.innerText = 'VOTE';
document.body.appendChild(btn);
<button>VOTE</button>


	const PROP = [
	{
		key: 'Manuel Quirino',
		text: 'Manuel Quirino',
	},
	{
		key: 'Sergio Quezon',
		text: 'Sergio Quezon',
	},
	{
		key: 'Benjamin Ramos',
		text: 'Benjamin Ramos',
	},
	{
		key: 'Pio Del Valle',
		text: 'Pio Del Valle',
  },
  
  
];


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RadioButton PROP={PROP} />
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

