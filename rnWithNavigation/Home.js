import React, { Component } from 'react';
import { View, Text,StyleSheet,ImageBackground,FlatList,TouchableOpacity,ScrollView ,Image} from 'react-native';

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white'
  },
  header : {
    height : 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal : 10
  },
  headerInfo : {
    flex : 1,
  },
  iconContent : {
    width : 150,
    flexDirection : 'row',
  },
  icon : {
    flex : 1,
    marginHorizontal : 10,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor : 'red',
    padding: 15,
  }
})


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
       datalist : [
         {
           name : "Home 1"
         },
         {
          name : "Home 2"
         },
          {
            name : "Home 2"
          }
       ]
    };
  }

  _onPressItem(item){
    this.props.navigator.push({
      screen : "belajarRn.DetailPage",
      passProps : {
        itemData : item
      }
    })
  }

  _renderItem = ({item})=>{
    return (
      <TouchableOpacity onPress={this._onPressItem.bind(this,item)} style={{flex:1,padding : 20,flexDirection : 'row'}}>
          <View style={{
            width : 150,
            backgroundColor : 'red',
            borderRadius : 15
          }}>
              <Text>$9000/Month</Text>
              <Text>{item.name}</Text>
              <View style={{flexDirection :'row'}}>
                  <View style={{
                    margin : 5,
                    width: 60,
                  height:60,borderRadius : 60/2,backgroundColor: 'grey'}}>

                  </View>
                  <View style={{width: 60,
                  margin : 5,
                  height:60,borderRadius : 60/2,backgroundColor: 'grey'}}>

                  </View>
                  <View style={{width: 60,
                  margin : 5,
                  height:60,borderRadius : 60/2,backgroundColor: 'grey'}}>

                  </View>

              </View>
          </View>
          <ImageBackground 
                  style={{
                    width : 150,
                    height : 150
                  }}
                  source={require('./img/nature_1.jpeg')}>
                  
                  
                  </ImageBackground>
      </TouchableOpacity>
    )
  }

  _showModal(){
    this.props.navigator.showModal({
        screen: "belajarRn.ModalPage", 
        title: "Modal", 
      });
  }
  _pushPage(){
    this.props.navigator.push({
        screen: "belajarRn.DetailPage", 
        title: "Detail Page", 
        navigatorStyle : {
            tabBarHidden : true
        }
      });
  }


  render() {
    console.log(this.state.datalist)
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}> 
                <View style={styles.headerInfo}>
                      <Text style={{
                         fontSize : 20,
                         fontWeight : 'bold',
                         marginBottom : 10
                      }}>Find your info</Text>
                      <Text>Find your info Sub title info</Text>
                </View>
                <View style={styles.iconContent}>
                    <View style={styles.icon}>
                        <Image source={require('./img/menu_job_history.png')}/>
                    </View>
                    <View style={styles.icon}>
                    <Image source={require('./img/menu_job_history.png')}/>
                      </View>
                </View>
            </View>
            <FlatList
              data={this.state.datalist}
              renderItem={this._renderItem}
            />


        </ScrollView>
        {/* <TouchableOpacity onPress={this._showModal.bind(this)} style={[styles.button,{backgroundColor : '#27ae60'}]}>
           <Text style={styles.buttonText}>SHOW MODAL</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={this._pushPage.bind(this)} style={styles.button}>
           <Text style={styles.buttonText}>LIST PAGE</Text>
         </TouchableOpacity> */}
      </View>
    );
  }
}
