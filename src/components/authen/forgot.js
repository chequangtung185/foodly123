import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {View, Text, Center, Flex} from 'native-base';
import {Input, Header} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {Icon} from 'react-native-elements';

export default class ForgotPassword extends Component {
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
                Forgot Password
              </Text>
            </View>
          }
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignInScreen')}>
              <Icon name="angle-left" type="font-awesome" />
            </TouchableOpacity>
          }
        />
        <View mx={5}>
          <Text
            mt={5}
            fontSize={34}
            fontWeight={'semibold'}
            letterSpacing={'0.22'}
            color={const_colors.textMain}>
            Forgot password
          </Text>
          <Text
            mt={5}
            mr={20}
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: const_colors.textBody,
            }}>
            Enter your email address and we will send you a reset instructions
          </Text>
          <Text
            mt={35}
            style={{
              color: '#868686',
              fontSize: 12,
              lineHeight: 20,
              letterSpacing: 0.8,
            }}>
            EMAIL ADĐRESS
          </Text>
          <Input style={styles._inputText} />
          <Center>
            <TouchableOpacity
              style={styles._btn}
              onPress={() => this.props.navigation.navigate('ResendMail')}>
              <Text
                fontSize={'md'}
                fontWeight={'semibold'}
                color={const_colors.input}
                textTransform="uppercase"
                letterSpacing={'0.8'}
                color={const_colors.input}>
                RESET PASSWORD
              </Text>
            </TouchableOpacity>
          </Center>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _inputText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.28,
  },
  _btn: {
    backgroundColor: const_colors.active,
    borderRadius: 8,
    width: 335,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
