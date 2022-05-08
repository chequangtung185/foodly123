import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, View, Center} from 'native-base';
import {Icon, Header} from 'react-native-elements';
import {const_colors} from '../../../common/constant';

import {payment_card} from '../../../common/images';

export default class PaymentMethods extends Component {
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
        <View flex={1} mt={20} alignItems={'center'}>
          <Image source={payment_card} />
          <Text
            mt={5}
            fontSize={'xl'}
            fontWeight={'semibold'}
            color={const_colors.textMain}
            letterSpacing={0.14}>
            {' '}
            Don’t have any card :){' '}
          </Text>
          <Text
            mt={5}
            mx={20}
            fontSize={'sm'}
            textAlign="center"
            color={const_colors.textBody}
            letterSpacing={0.14}>
            {' '}
            It’s seems like you don’t add any credit or debit card. You may
            easily add card.{' '}
          </Text>
          <Center mt={10}>
            <TouchableOpacity
              style={styles._btn}
              onPress={() => this.props.navigation.navigate('CardList')}>
              <Text
                color={const_colors.input}
                fontSize={12}
                fontWeight="semibold"
                letterSpacing={0.8}
                textTransform="uppercase"
                color={const_colors.active}>
                Add credit cards
              </Text>
            </TouchableOpacity>
          </Center>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _btn: {
    backgroundColor: const_colors.input,
    borderRadius: 6,
    width: 255,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: const_colors.active,
  },
});
