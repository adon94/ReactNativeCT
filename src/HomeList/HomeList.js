import React, {Component} from 'react';
import {Alert, View, Text, Button} from 'react-native';
import { Navigation } from 'react-native-navigation';

class HomeList extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    openItem() {
      this.props.navigator.push({
        screen: "example.ItemView", // unique ID registered with Navigation.registerScreen
        title: "Item", // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animated: true,
        animationType: 'slide-horizontal' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
    }

  render() {
    return (
      <View>
        <Text>Number goes here</Text>
        <Button
          onPress={() => this.openItem()}
          title="Press Me" />
      </View>
    );
  }
}

export default HomeList;