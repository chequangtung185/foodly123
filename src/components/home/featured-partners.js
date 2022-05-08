import React, {Component, useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {View, FlatList, Text, Center, HStack} from 'native-base';
import {Image, Icon,Header} from 'react-native-elements';
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

export default FeaturedPartnersScreen = ({navigation, route}) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      menuList: route.params.menuList,
    });
  }, [navigation, route]);

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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SingleRestaurant');
          }}>
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
        </TouchableOpacity>
      </View>
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
        rightContainerStyle={{justifyContent: 'flex-end'}}
        centerComponent={
          <View>
              <Text fontSize={16} fontWeight={'bold'}>Feartured Partners</Text>
          </View>
        }
        leftComponent={
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <Icon name="angle-left"
                type="font-awesome"/>
          </TouchableOpacity>
        }
      />
      <FlatList
        data={route.params.menuList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => _renderItem(item)}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
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
