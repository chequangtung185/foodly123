import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {Text, View, Center, Flex} from 'native-base';
import {Icon, Header} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {Input} from 'react-native-elements';

export default class ProfileSetting extends Component {
  render() {
    return (
      <View flex={1} backgroundColor={const_colors.main}>
        <Header
          statusBarProps={{backgroundColor: const_colors.main}}
          containerStyle={{
            backgroundColor: const_colors.main,
            height: 88,
          }}
          leftContainerStyle={{justifyContent: 'center', margin: 10}}
          centerContainerStyle={{justifyContent: 'center'}}
          rightContainerStyle={{justifyContent: 'flex-end'}}
          centerComponent={
            <View>
              <Text fontSize={16} fontWeight={'bold'}>
                Profile Setting
              </Text>
            </View>
          }
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TabProfile')}>
              <Icon name="angle-left" type="font-awesome" />
            </TouchableOpacity>
          }
        />
        <View mx={4} mt={10}>
          <Text ml={2} style={styles._title}>
            FULL NAME
          </Text>
          <Input style={styles._inputText} />
          <Text ml={2} style={styles._title}>
            Email address
          </Text>
          <Input style={styles._inputText} />
          <Text ml={2} style={styles._title}>
            Phone number
          </Text>
          <Input style={styles._inputText} />
        </View>
        <Center style={{bottom: 15, flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity style={styles._btn}>
            <Text
              color={const_colors.input}
              fontSize={14}
              fontWeight="semibold"
              lineHeight={24}
              letterSpacing={0.8}
              textTransform="uppercase">
              Change settings
            </Text>
          </TouchableOpacity>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _title: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: const_colors.textBody,
  },
  _inputText: {
    color: const_colors.textMain,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.28,
  },
  _btn: {
    backgroundColor: '#22A45D',
    borderRadius: 8,
    width: 335,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
