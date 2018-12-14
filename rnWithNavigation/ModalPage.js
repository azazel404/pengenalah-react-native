import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
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
})

export default class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',flex:1}}>
        <TouchableOpacity onPress={()=>{
            this.props.navigator.dismissModal()
        }} style={[styles.button,{backgroundColor : '#34495e'}]}>
           <Text style={styles.buttonText}>CLOSE</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
