import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View, Center,} from 'native-base';
import {Icon, Header} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {Input} from 'react-native-elements';

export default class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag1: true,
      flag2: true,
      flag3: true,
    };
  }

  render() {
    return (
      <View flex={1} background={const_colors.main}>
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
                Payment Methods
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
          <View style={{flexDirection: 'row'}}>
            <Text ml={2} style={styles._title}>
              Password
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 10}}
              onPress={() => {
                this.setState({flag1: !this.state.flag1});
              }}>
              <Icon
                name={this.state.flag1 ? 'eye' : 'eye-slash'}
                type="font-awesome"
                size={15}
                color={const_colors.textBody}
              />
            </TouchableOpacity>
          </View>
          <Input style={styles._inputText} secureTextEntry={this.state.flag1} />
          <View style={{flexDirection: 'row'}}>
            <Text ml={2} style={styles._title}>
              New password
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 10}}
              onPress={() => {
                this.setState({flag2: !this.state.flag2});
              }}>
              <Icon
                name={this.state.flag2 ? 'eye' : 'eye-slash'}
                type="font-awesome"
                size={15}
                color={const_colors.textBody}
              />
            </TouchableOpacity>
          </View>
          <Input style={styles._inputText} secureTextEntry={this.state.flag2} />
          <View style={{flexDirection: 'row'}}>
            <Text ml={2} style={styles._title}>
              COnfirm password
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 10}}
              onPress={() => {
                this.setState({flag3: !this.state.flag3});
              }}>
              <Icon
                name={this.state.flag3 ? 'eye' : 'eye-slash'}
                type="font-awesome"
                size={15}
                color={const_colors.textBody}
              />
            </TouchableOpacity>
          </View>
          <Input style={styles._inputText} secureTextEntry={this.state.flag3} />
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
              Change password
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
