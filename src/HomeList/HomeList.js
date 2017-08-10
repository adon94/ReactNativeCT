import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

class HomeList extends Component {

  constructor(props){
    super(props)
  }


  openItem(){
    this.props.navigator.push({
      screen: 'example.ItemView', // unique ID registered with Navigation.registerScreen
      title: 'ItemView', // navigation bar title of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      navigatorButtons: {} // override the nav buttons for the pushed screen (optional) 
      } 
    );
  }

  render() {
    return (
      <View>
        <TextInput>
        </TextInput>

        <Button
         title="Add To State" 
         onPress={ () => this.addToState() }>
        </Button>

        <Button
         title="Change To Item View" 
         onPress={ () => this.openItem() }>
        </Button>

        <Text>
        </Text>
      </View>
    );
  }
}

export default HomeList;