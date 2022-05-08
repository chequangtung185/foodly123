import React, {Component} from 'react';
import {Text, View, Button} from 'native-base';
import {const_colors} from '../../common/constant';
import {TouchableOpacity, StyleSheet, Alert} from 'react-native';

export default class ResendMail extends Component {
  render() {
    return (
      <View bgColor={const_colors.main} flex={1}>
        <Text mx={2} my={2} fontSize={34} color={const_colors.textMain}>
          {' '}
          Reset email sent{' '}
        </Text>
        <Text mx={5} fontSize={16} color={const_colors.textBody}>
          We have sent a instructions email to Nawfazim@icloud.com.
          <Text
            onPress={() => Alert.alert('Updating...')}
            color={const_colors.active}>
            Having problem?
          </Text>
        </Text>
        <View alignItems={'center'} my={5}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Updating...')}>
            <Text fontSize={14} color={const_colors.main} textAlign={'center'}>
              SEND AGAIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 355,
    height: 48,
    borderRadius: 8,
    backgroundColor: const_colors.active,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
