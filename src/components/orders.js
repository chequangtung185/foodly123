import React, {Component} from 'react';
import {Button, FlatList, TouchableOpacity, Image, Alert} from 'react-native';
import {Text, View} from 'native-base';
import {Header, Icon} from 'react-native-elements';
import {const_colors} from '../common/constant';
import {
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  rice,
} from './../common/images';

const CardItem = ({onPress, containerStyle, imgStyle, item}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: const_colors.main,
        ...containerStyle,
      }}>
      {/* image */}
      <Image source={item.img} style={imgStyle} />

      {/* info */}
      <View flex={1} ml={3}>
        {/* title */}
        <Text fontSize={18} fontWeight={'bold'} color={'black'}>
          {item.title}
        </Text>
        <Text fontSize={16} numberOfLines={2} color={const_colors.textBody}>
          {item.descrip}
        </Text>
        <View flexDirection={'row'} alignItems={'center'} mt={1}>
          <Text mr={2} fontSize={16} color={const_colors.textBody}>
            $$
          </Text>
          <Icon
            style={{marginRight: 10}}
            name="circle"
            type="font-awesome"
            size={5}
            color={const_colors.textBody}
          />
          <Text color={const_colors.textBody} fontSize={14}>
            {item.nation}
          </Text>
          <Text
            fontSize={14}
            color={const_colors.active}
            style={{textAlign: 'right', flex: 1}}>
            USD{item.total}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Section = ({title, onPress, children}) => {
  return (
    <View mt={5} alignItems={'center'}>
      {/* header */}
      <View mx={5} style={{flexDirection: 'row'}}>
        <View flex={2}>
          <Text style={{fontSize: 16, color: '#868686', padding: 2}}>
            {title}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onPress}
          style={{flex: 1, alignItems: 'flex-end'}}>
          <Text fontSize={12} color={'black'}>
            CLEAR ALL
          </Text>
        </TouchableOpacity>
      </View>

      {/* content */}
      {children}
    </View>
  );
};

const upcoming = [
  {
    id: 1,
    title: "McDonald's",
    descrip: 'Shortbread, chocolate turtle cookies and red velvet.',
    nation: 'Chinese',
    total: '7.4',
    img: slide_1,
  },
  {
    id: 2,
    title: "Uncle Boy's",
    descrip: 'Shortbread, chocolate turtle cookies and red velvet.',
    nation: 'Chinese',
    total: '7.4',
    img: slide_2,
  },
  {
    id: 3,
    title: 'The Halal Guys',
    descrip: 'Shortbread, chocolate turtle cookies and red velvet.',
    nation: 'Chinese',
    total: '7.4',
    img: slide_3,
  },
];
const past = [
  {
    id: 1,
    title: "McDonald's",
    descrip: 'Shortbread, chocolate turtle cookies and red velvet.',
    nation: 'Chinese',
    total: '7.4',
    img: slide_4,
  },
  {
    id: 2,
    title: "Uncle Boy's",
    descrip: 'Shortbread, chocolate turtle cookies and red velvet.',
    nation: 'Chinese',
    total: '7.4',
    img: slide_5,
  },
  {
    id: 3,
    title: 'The Halal Guys',
    descrip: 'Shortbread, chocolate turtle cookies and red velvet.',
    nation: 'Chinese',
    total: '7.4',
    img: rice,
  },
];
export default Orders = ({navigation}) => {
  return (
    <View flex={1} bgColor={const_colors.main}>
      <Header
        statusBarProps={{backgroundColor: const_colors.main}}
        containerStyle={{
          backgroundColor: const_colors.main,
          height: 88,
        }}
        centerContainerStyle={{justifyContent: 'center'}}
        centerComponent={
          <View>
            <Text fontSize={16} fontWeight={'bold'}>
              Your Orders
            </Text>
          </View>
        }
      />
      <FlatList
        data={past}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Upcoming order  */}
            <Section
              title={'UPCOMING ORDERS'}
              onPress={() => Alert.alert('Clear')}>
              <FlatList
                data={upcoming}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <View alignItems={'center'} mt={5}>
                      <CardItem
                        containerStyle={{height: 110, width: 322}}
                        imgStyle={{width: 110, height: 110, borderRadius: 10}}
                        item={item}
                        onPress={() => {
                          navigation.navigate('OrderDetail');
                        }}
                      />
                    </View>
                  );
                }}
              />
            </Section>
            <Section
              title={'PAST ORDERS'}
              onPress={() => Alert.alert('Clear')}
            />
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <View alignItems={'center'} mt={5} opacity={0.64}>
              <CardItem
                containerStyle={{height: 110, width: 322}}
                imgStyle={{width: 110, height: 110, borderRadius: 10}}
                item={item}
                onPress={() => {
                  navigation.navigate('OrderDetail');
                }}
              />
            </View>
          );
        }}
      />
      {/* <View style={{opacity: 0.64}}>
                    
                </View> */}
    </View>
  );
};
