/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { rootPage } from '.';


export default class Login extends Component {
  
  _getLogin(){
    rootPage()
  }

  _getRegister(){

    this.props.navigator.push({
      screen: 'belajarRn.Register',
      title: 'Register'
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TouchableOpacity onPress={this._getLogin.bind(this)}  style={[styles.button,{backgroundColor : '#27ae60'}]}>
           <Text style={styles.buttonText}>LOGIN</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={this._getRegister.bind(this)}  style={styles.button}>
           <Text style={styles.buttonText}>REGISTER</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button : {
    height : 50,
    backgroundColor : '#8e44ad',
    borderRadius:  10,
    justifyContent : 'center',
    alignItems : 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  buttonText : {
    color : 'white'
  }
});
