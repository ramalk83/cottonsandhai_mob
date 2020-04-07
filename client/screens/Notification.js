import React from 'react';
import {
  Text,
  View
} from 'react-native';

class Notifications extends React.Component {
    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text> This is Notification Screen </Text>
        </View>
      );
    }
  }

  export default Notifications
    