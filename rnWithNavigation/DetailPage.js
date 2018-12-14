import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }

  componentDidMount(){
    console.log("itemdata",this.props.itemData)
      // this._loadData()
  }

  _loadData(){
    // return fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json)
    //   })
    //   .catch((error) =>{
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <View>
        <Text>{this.props.itemData.name}</Text>
        {/* <FlatList
        data={[{key: 'item 1'}, {key: 'item 2'}]}
        renderItem={({item}) => <View style={{padding : 20,margin : 10,backgroundColor : '#ecf0f1'}}>
            <Text>{item.key}</Text>
        </View>}
        /> */}
      </View>
    );
  }
}
