import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity,} from 'react-native';
import {Text, View, Box} from 'native-base';
import {Icon, Header} from 'react-native-elements';
import {const_colors} from '../../../common/constant';

import {
  payment_card,
  paypal_card,
  visa_card,
  master_card,
} from '../../../common/images';

export default class CardList extends Component {
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
              onPress={() => this.props.navigation.navigate('PaymentMethods')}>
              <Icon name="angle-left" type="font-awesome" />
            </TouchableOpacity>
          }
        />
        <View mt={10} ml={5} flexDirection={'row'}>
          <TouchableOpacity style={styles._touch}>
            <Image source={paypal_card} />
            <Box
              ml={5}
              flex={1}
              borderBottomWidth={1}
              borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View flex={0.95}>
                  <Text
                    mb={2}
                    fontSize={16}
                    fontWeight={'semibold'}
                    color={const_colors.textMain}>
                    PayPal
                  </Text>
                  <Text
                    mb={2}
                    fontSize={16}
                    fontWeight={'semibold'}
                    color={const_colors.textBody}>
                    PayPal
                  </Text>
                </View>
                <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
              </View>
            </Box>
          </TouchableOpacity>
        </View>
        <View mt={5} ml={5} flexDirection={'row'}>
          <TouchableOpacity style={styles._touch}>
            <Image source={master_card} />
            <Box
              ml={5}
              flex={1}
              borderBottomWidth={1}
              borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View flex={0.95}>
                  <Text
                    mb={2}
                    fontSize={16}
                    fontWeight={'semibold'}
                    color={const_colors.textMain}>
                    MasterCard
                  </Text>
                  <Text
                    mb={2}
                    fontSize={16}
                    fontWeight={'semibold'}
                    color={const_colors.textBody}>
                    Not Deafult
                  </Text>
                </View>
                <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
              </View>
            </Box>
          </TouchableOpacity>
        </View>
        <View mt={5} ml={5} flexDirection={'row'}>
          <TouchableOpacity style={styles._touch}>
            <Image source={visa_card} />
            <Box
              ml={5}
              flex={1}
              borderBottomWidth={1}
              borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View flex={0.95}>
                  <Text
                    mb={2}
                    fontSize={16}
                    fontWeight={'semibold'}
                    color={const_colors.textMain}>
                    Visa
                  </Text>
                  <Text
                    mb={2}
                    fontSize={16}
                    fontWeight={'semibold'}
                    color={const_colors.textBody}>
                    Not Deafult
                  </Text>
                </View>
                <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
              </View>
            </Box>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _touch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 72,
  },
});
