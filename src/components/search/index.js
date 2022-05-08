import React, {Component, useState} from 'react';
import {
  View,
  Heading,
  Input,
  Text,
  FlatList,
  HStack,
  ScrollView,
} from 'native-base';
import {Icon, Image} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {slide_1, slide_2, slide_3} from '../../common/images';

export default SearchScreen = ({navigation}) => {
  // const [isShowed, setIsShow] = useState(false);
  // onScroll = () => {
  //   if (isShowed === false) {
  //     setIsShow(true);
  //   }
  // };

  const menuList = [
    {
      id: 1,
      title: "McDonald's",
      text1: '$$',
      text2: 'Chinese',
      img: slide_1,
    },
    {
      id: 2,
      title: "Cafe Brichor's",
      text1: '$$',
      text2: 'Chinese',
      img: slide_2,
    },
    {
      id: 3,
      title: 'KFC',
      text1: '$$',
      text2: 'Chinese',
      img: slide_3,
    },
    {
      id: 4,
      title: 'KFC',
      text1: '$$',
      text2: 'Chinese',
      img: slide_2,
    },
    {
      id: 5,
      title: 'KFC',
      text1: '$$',
      text2: 'Chinese',
      img: slide_3,
    },
  ];
  const _renderItemsRes = item => {
    return (
      <View h={198} ml={3.5}>
        <Image
          source={item.img}
          style={{width: 160, height: 140, borderRadius: 20}}></Image>
        <Text>{item.title}</Text>
        <HStack alignItems={'center'}>
          <Text ml={-1} mr={2}>
            {' '}
            {item.text1}{' '}
          </Text>
          <Icon
            size={5}
            type="font-awesome"
            name="circle"
            color={const_colors.textBody}
          />
          <Text ml={2}>{item.text2}</Text>
        </HStack>
      </View>
    );
  };
  const _renderItemsCat = item => {
    return (
      <View h={198} ml={3.5}>
        <Image
          source={item.img}
          style={{
            width: 160,
            height: 160,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text fontSize={'md'} color={const_colors.input}>
            {item.title}{' '}
          </Text>
        </Image>
      </View>
    );
  };
  const ListHeader = () => {
    return (
      <View>
        <Input
          mx={3.5}
          placeholder="Search on foodly"
          InputLeftElement={
            <Icon
              style={{marginLeft: 10}}
              color={const_colors.textBody}
              size={20}
              name="search"></Icon>
          }></Input>
        <Text m={3.5} color={const_colors.textMain}>
          Top Restaurants
        </Text>
      </View>
    );
  };
  const childListHeader = () => {
    return (
      <Text m={3.5} color={const_colors.textMain}>
        Top Categories
      </Text>
    );
  };
  const ListFooter = () => {
    return (
      <FlatList
        data={menuList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => _renderItemsCat(item)}
        ListHeaderComponent={childListHeader}
        numColumns={'2'}></FlatList>
    );
  };
  return (
    <View flex={1}>
      <Heading
        alignContent={'flex-start'}
        m={3.5}
        mt={10}
        size={'md'}
        onPress={() => navigation.navigate('SearchingScreen')}>
        {/* {isShowed && (
          <Icon
            style={{marginLeft: 10}}
            color={const_colors.textBody}
            size={20}
            name="arrow-left"></Icon>
        )} */}
        Search
      </Heading>
      <FlatList
        data={menuList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => _renderItemsRes(item)}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        numColumns={'2'}></FlatList>
    </View>
  );
};
