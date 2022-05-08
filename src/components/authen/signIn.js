import React, {Component} from 'react';
import {
  View,
  Text,
  Input,
  Heading,
  Center,
  Button,
  FormControl,
} from 'native-base';
import {Icon} from 'react-native-elements';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {const_colors} from '../../common/constant';
import {ico_facebook, ico_google} from '../../common/images';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Heading ml={4} size="xl" my={3}>
          Welcome to
        </Heading>
        <Text ml={4} fontSize="md">
          Enter your Phone number or Email {'\n'}for sign in, Or{' '}
          <Text
            fontSize="md"
            color={const_colors.active}
            onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            Create new account.
          </Text>
        </Text>
        <Center>
          <FormControl>
            <Input
              mt={10}
              width="90%"
              mx="auto"
              size="lg"
              placeholder="Email address"
              InputRightElement={
                <TouchableOpacity>
                  <Icon
                    name="mobile"
                    type="font-awesome"
                    size={30}
                    style={{marginRight: 13}}
                  />
                </TouchableOpacity>
              }
            />
            <Input
              mt={3}
              width="90%"
              mx="auto"
              size="lg"
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
          </FormControl>
          <Text
            color={const_colors.textMain}
            fontSize="xs"
            my={2}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            Forget Password?
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate('SignUpPhone')}
            width="90%"
            bgColor={const_colors.active}
            borderRadius="lg"
            py={3}>
            <Text textTransform="uppercase" color="white" bold>
              Sign in
            </Text>
          </Button>
          <Text my={4} fontSize="lg">
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
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _fb: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#395998',
    alignItems: 'center',
  },
  _gg: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#4285F4',
    alignItems: 'center',
  },
});