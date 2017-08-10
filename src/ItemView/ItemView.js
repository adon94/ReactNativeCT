import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { Provider } from 'react-redux'

class HomeList extends Component {

    constructor(props){
        super(props)
        this.props.counter = 0
    }

    addOne() {
        this.props.counter = this.props.counter + 1;
    }

  render() {
    return (
      <View>
        <Text>{this.props.counter}</Text>
        <Button
          onPress={() => this.addOne()}
          title="Add" />
      </View>
    );
  }
}

export default HomeList;