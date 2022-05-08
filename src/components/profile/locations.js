import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View, Input} from 'native-base';
import {Icon, Header} from 'react-native-elements';
import {const_colors} from '../../common/constant';

export default class Locations extends Component {
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
        <View alignItems={'center'}>
          <Input
            mt={5}
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                style={{marginLeft: 10}}
                name="md-location-sharp"
                type="ionicon"
                color="#000"
                size={19}
              />
            }
            placeholder="Search new address"
            style={{
              backgroundColor: '#FBFBFB',
              fontSize: 16,
              letterSpacing: -0.4,
              color: const_colors.textMain,
            }}
          />
        </View>
        <View mt={7} mx={5} flexDirection={'row'} alignItems={'center'}>
          <Text
            flex={0.5}
            fontSize={'16'}
            textTransform="uppercase"
            color={const_colors.textBody}
            letterSpacing={0.6}>
            Recent address
          </Text>
          <TouchableOpacity
            style={{
              flex: 0.5,
              alignItems: 'flex-end',
            }}>
            <Text
              fontSize={'12'}
              textTransform="uppercase"
              color={const_colors.textMain}
              letterSpacing={0.6}>
              Clear all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
