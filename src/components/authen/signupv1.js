import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {View, Text, Flex, Input, Center, Button} from 'native-base';
import {Icon} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {ico_facebook, ico_google} from '../../common/images';
export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }
  render() {
    return (
      <View m={5}>
        <Center>
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.navigate('SignInScreen')}>
            <Icon name={'keyboard-arrow-left'} size={30}></Icon>
          </TouchableOpacity>
          <Text fontSize={'md'} fontWeight={'bold'}>
            Forgot Password
          </Text>
        </Center>
        <Text mt={3} fontSize={'4xl'} fontWeight={'bold'}>
          Create Account
        </Text>
        <Text my={2} fontSize={'md'}>
          Enter your Name, Email and Password for sign up.
          <TouchableOpacity>
            <Text fontSize={'md'} fontWeight={'normal'} color={'green.700'}>
              {' '}
              Already have account?
            </Text>
          </TouchableOpacity>
        </Text>
        <Flex my={2}>
          <Input my={1} placeholder="Full Name"></Input>
          <Input my={1} placeholder="Email Address"></Input>
          <Input
            my={1}
            placeholder="Passsword"
            secureTextEntry={this.state.flag}
            InputRightElement={
              <TouchableOpacity
                onPress={() => {
                  this.setState({flag: !this.state.flag});
                }}>
                <Icon
                  name={this.state.flag ? 'eye' : 'eye-slash'}
                  type="font-awesome"
                  size={20}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            }
          />
        </Flex>
        <Button my={2} height={10} bgColor={'green.600'} borderRadius="lg">
          <Text textTransform="uppercase" color={'white'} fontSize="sm" bold>
            SIGN UP
          </Text>
        </Button>
        <Flex my={1}>
          <Center>
            <Text>By Signing up you agree to our Terms</Text>
            <Text>Conditions {'&'} Privacy Policy.</Text>
          </Center>
        </Flex>
        <Text mb={2} textAlign={'center'}>
          Or
        </Text>
        <TouchableOpacity style={styles._fb}>
          <Image style={{marginLeft: 20}} source={ico_facebook} />
          <Text
            flex={0.9}
            ml={1}
            textAlign={'center'}
            textTransform="uppercase"
            color={const_colors.input}
            fontSize={12}
            fontWeight={'semibold'}
            letterSpacing={0.8}>
            Connect with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._gg}>
          <Image style={{marginLeft: 20}} source={ico_google} />
          <Text
            flex={0.9}
            textAlign={'center'}
            textTransform="uppercase"
            color={const_colors.input}
            fontSize={12}
            fontWeight={'semibold'}
            letterSpacing={0.8}>
            Connect with google
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 0,
  },
  _fb: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#395998',
    alignItems: 'center',
  },
  _gg: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#4285F4',
    alignItems: 'center',
  },
});
