import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, View,} from 'native-base';
import {Icon, Header} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {ico_facebook, ico_google} from '../../common/images';

export default class AddSocialAccounts extends Component {
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
                Add Social Accounts
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
        <View flex={1}  alignItems={'center'}>
          <Text
            mx={10}
            mt={20}
            fontSize={'24'}
            fontWeight={'semibold'}
            color={const_colors.textMain}>
            Add social accounts
          </Text>
          <Text
            mx={10}
            my={6}
            fontSize={'16'}
            color={const_colors.textBody}
            letterSpacing={0.14}
            textAlign={'center'}>
            Add your social accounts for more security. You will go directly to
            their site.
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
