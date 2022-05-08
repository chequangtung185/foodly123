import React, {Component, useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {View, FlatList, Text, Center, HStack} from 'native-base';
import {Image, Icon, Header} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  banner,
} from '../../common/images';
import {const_colors} from '../../common/constant';

export default SearchResultsScreen = ({navigation}) => {
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

  const _renderItem = item => {
    return (
      <View m={5} mt={1}>
        <View height={180}>
          <Swiper
            autoplay={true}
            dotStyle={styles.swiperDotStyle}
            activeDotStyle={styles.swiperActiveDotStyle}
            showsPagination={true}
            paginationStyle={{
              bottom: 30,
              left: null,
              right: 10,
            }}>
            <Image
              source={slide_1}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
            <Image
              source={slide_2}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
            <Image
              source={slide_3}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </Swiper>
        </View>
        <Text mt={3} fontSize={'lg'}>
          {item.title}
        </Text>
        <HStack alignItems={'center'}>
          <Text mr={2} color={'gray.500'}>
            {item.text1}
          </Text>
          <Icon
            size={5}
            type="font-awesome"
            name="circle"
            color={const_colors.textBody}
          />
          <Text mx={2} color={'gray.500'}>
            {item.text2}
          </Text>
          <Icon
            size={5}
            type="font-awesome"
            name="circle"
            color={const_colors.textBody}
          />
          <Text mx={2} color={'gray.500'}>
            {item.text3}
          </Text>
          <Icon
            size={5}
            type="font-awesome"
            name="circle"
            color={const_colors.textBody}
          />
          <Text ml={2} color={'gray.500'}>
            {item.text4}
          </Text>
        </HStack>
        <HStack alignItems={'center'}>
          <Text mr={1}>{item.vote}</Text>
          <Icon
            size={10}
            type="font-awesome"
            name="star"
            color={const_colors.active}
          />
          <Text mx={2}>{item.ratings} Ratings</Text>
          <Icon size={10} type="font-awesome-5" name="clock"></Icon>
          <Text mx={2}>{item.time} Min</Text>
          <Icon
            size={5}
            type="font-awesome"
            name="circle"
            color={const_colors.textBody}
          />
          <Text ml={2}>{item.ship}</Text>
        </HStack>
      </View>
    );
  };
  const listHeader = () => {
    return (
      <Text mx={5} my={3} fontSize={'lg'} color={const_colors.textMain}>
        80 Results found
      </Text>
    );
  };
  return (
    <View flex={1}>
      <Header
        statusBarProps={{backgroundColor: const_colors.main}}
        containerStyle={{
          backgroundColor: const_colors.main,
          height: 88,
        }}
        leftContainerStyle={{justifyContent: 'center', margin: 10}}
        centerContainerStyle={{justifyContent: 'center'}}
        rightContainerStyle={{justifyContent: 'flex-end', margin: 10}}
        centerComponent={
          <View>
            <Text fontSize={16} fontWeight={'bold'}>
              Burger
            </Text>
          </View>
        }
        leftComponent={
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <Icon name="angle-left" type="font-awesome" />
          </TouchableOpacity>
        }
        rightComponent={
          <View>
            <Text fontSize={16}>Filter</Text>
          </View>
        }
      />

      <FlatList
        data={menuList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => _renderItem(item)}
        ListHeaderComponent={listHeader}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 0,
  },
  swiperDotStyle: {
    backgroundColor: const_colors.textBody,
    marginBottom: -30,
    width: 8,
    height: 5,
    borderRadius: 15,
  },
  swiperActiveDotStyle: {
    backgroundColor: const_colors.input,
    marginBottom: -30,
    width: 8,
    height: 5,
    borderRadius: 15,
  },
});
