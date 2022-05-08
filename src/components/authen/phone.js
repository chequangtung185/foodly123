import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {View, Text, Center, Flex} from 'native-base';
import {Input} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {Icon, Header} from 'react-native-elements';

//and use
import PhoneInput from 'react-native-phone-number-input';
//https://www.npmjs.com/package/react-native-phone-number-input

export default class SignUpPhone extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: const_colors.main}}>
        <View mx={5} flex={1}>
          <View alignItems={'center'}>
            <Text
              mt={8}
              fontSize={24}
              fontWeight={'semibold'}
              color={const_colors.textMain}
              letterSpacing={'0.14'}>
              {' '}
              Get started with Foodly{' '}
            </Text>
            <Text
              mx={10}
              my={4}
              fontSize={16}
              letterSpacing={'-0.4'}
              color={const_colors.textBody}
              textAlign="center">
              {' '}
              Enter your phone number to use foodly and enjoy your food :)
            </Text>
          </View>
          <Text
            mt={5}
            fontSize={12}
            fontWeight={'semibold'}
            color={const_colors.textBody}
            letterSpacing={0.8}
            textTransform="uppercase">
            Phone number
          </Text>

          <PhoneInput
            autoFocus
            withShadow
            placeholder="(501)333-2982"
            defaultCode="VN"
            layout="first"
            containerStyle={{width: '100%'}}
            onChangeText={text => {
              this.setState({phone: text});
            }}
            onChangeFormattedText={text => {
              this.setState({phoneFormated: text});
            }}
            countryPickerProps={{
              countryCodes: ['VN', 'US'],
            }}
          />
        </View>
        <Center>
          <TouchableOpacity
            style={styles._btn}
            onPress={() =>
              this.props.navigation.navigate('VerifyOTP', {
                phoneFormated: this.state.phoneFormated,
              })
            }>
            <Text
              fontSize={'md'}
              fontWeight={'semibold'}
              color={const_colors.input}
              textTransform="uppercase"
              letterSpacing={'0.8'}
              color={const_colors.input}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </Center>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  _btn: {
    backgroundColor: '#22A45D',
    borderRadius: 8,
    width: 335,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 15,
  },
});
