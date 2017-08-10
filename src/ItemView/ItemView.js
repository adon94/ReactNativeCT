import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class ItemView extends Component {

    constructor(props){
        super(props)
    }

    return() {
        this.props.navigator.pop({
            animated: true,
            animationType: 'fade',
        })
    }

  render() {
    return (
      <View>
        <Text>You're in ItemView</Text>
        <Button
        title="Return"
        onPress= { () => this.return()}>
        </Button>
      </View>
    );
  }
}

export default ItemView;