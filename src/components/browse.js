import React, {Component} from 'react';
import {Button, TouchableOpacity, FlatList, Alert} from 'react-native';
import {Text, View} from 'native-base';
import {Icon, Header} from 'react-native-elements';
import {const_colors} from './../common/constant';
import {
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  banner,
} from './../common/images';

import {HorizontalCard, VerticalCard} from './home/child/Card';

const menuList = [
  {
    id: 1,
    title: "McDonald's",
    text1: '$$',
    text2: 'Chinese',
    text3: 'American',
    text4: 'Deshi food',
    vote: '4.3',
    ratings: '200+',
    time: '25',
    ship: 'Free',
    // src: {
    //   slide_1, slide_2, slide_3, slide_4, slide_5
    // }
    img: slide_1,
    adr: 'San Francisco',
  },
  {
    id: 2,
    title: "Cafe Brichor's",
    text1: '$$',
    text2: 'Chinese',
    text3: 'American',
    text4: 'Deshi food',
    vote: '4.3',
    ratings: '200+',
    time: '25',
    ship: 'Free',
    // src: {
    //   slide_1, slide_2, slide_3, slide_4, slide_5
    // }
    img: slide_2,
    adr: 'San Francisco',
  },
  {
    id: 3,
    title: 'KFC',
    text1: '$$',
    text2: 'Chinese',
    text3: 'American',
    text4: 'Deshi food',
    vote: '4.3',
    ratings: '200+',
    time: '25',
    ship: 'Free',
    // src: {
    //   slide_1, slide_2, slide_3, slide_4, slide_5
    // }
    img: slide_3,
    adr: 'San Francisco',
  },
];

export default class Browse extends Component {
  render() {
    return (
      // <View>
      //     <Text>Orders</Text>
      // </View>
      <View flex={1}>
        <Header
          statusBarProps={{backgroundColor: const_colors.main}}
          containerStyle={{
            backgroundColor: const_colors.main,
            height: 88,
          }}
          leftContainerStyle={{justifyContent: 'center'}}
          centerContainerStyle={{justifyContent: 'center'}}
          centerComponent={
            <View>
              <Text fontSize={16} fontWeight={'bold'}>
                Browse Foods
              </Text>
            </View>
          }
          leftComponent={
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => Alert.alert('Back to screen ?')}>
              <Icon name="angle-left" type="font-awesome" />
            </TouchableOpacity>
          }
        />

        <View bgColor={const_colors.main}>
          <FlatList
            data={menuList}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  alignItems={'center'}
                  style={{
                    borderTopWidth: index == 0 ? 0 : 0.5,
                    borderTopColor: 'rgba(103, 103, 103, .1)',
                  }}>
                  <HorizontalCard
                    containerStyle={{
                      height: 282,
                      width: 335,
                      margin: 10,
                    }}
                    imageStyle={{
                      width: 335,
                      height: 185,
                      borderRadius: 10,
                    }}
                    item={item}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
