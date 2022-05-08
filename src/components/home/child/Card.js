import React from 'react';
import {TouchableOpacity, Image, StyleSheet, ImageStore} from 'react-native';
import {View, Text} from 'native-base';
import {Icon} from 'react-native-elements';
import {const_colors} from '../../../common/constant';
import Swiper from 'react-native-swiper';

export const HorizontalCard = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: const_colors.main,
        ...containerStyle,
      }}>
      {/* image */}
      <Image source={item.img} style={imageStyle} />

      {/* info */}
      <View flex={1} mt={2}>
        {/* title */}
        <Text fontSize={20} color={const_colors.textMain}>
          {item.title}
        </Text>
        {/* subtitle */}

        <View my={1} flexDirection={'row'} style={{alignItems: 'center'}}>
          <Text mr={2} fontSize={16} color={const_colors.textBody}>
            {item.text1}
          </Text>
          <Icon
            style={{marginRight: 10}}
            name="circle"
            type="font-awesome"
            size={5}
            color={const_colors.textBody}
          />
          <Text mr={2} fontSize={16} color={const_colors.textBody}>
            {item.text2}
          </Text>
          <Icon
            style={{marginRight: 10}}
            name="circle"
            type="font-awesome"
            size={5}
            color={const_colors.textBody}
          />
          <Text mr={2} fontSize={16} color={const_colors.textBody}>
            {item.text3}
          </Text>
          <Icon
            style={{marginRight: 10}}
            name="circle"
            type="font-awesome"
            size={5}
            color={const_colors.textBody}
          />
          <Text mr={2} fontSize={16} color={const_colors.textBody}>
            {item.text4}{' '}
          </Text>
        </View>

        {/* bottom */}
        <View mx={1} flexDirection={'row'} style={{alignItems: 'center'}}>
          <Text mr={2} fontSize={12} color={'#010F07'}>
            {item.vote}
          </Text>
          <Icon
            style={{marginRight: 10}}
            name="star"
            type="font-awesome"
            size={12}
            color={const_colors.active}
          />
          <Text mr={2} fontSize={12} color={'#010F07'}>
            {item.rating} Ratings
          </Text>
          <Icon
            style={{marginRight: 10}}
            name="watch-later"
            size={13}
            color={const_colors.textBody}
          />
          <Text mr={2} fontSize={12} color={'#010F07'}>
            {item.time} Min
          </Text>
          <Icon
            style={{marginRight: 10}}
            name="circle"
            type="font-awesome"
            size={5}
            color={const_colors.textBody}
          />
          <Icon
            style={{marginRight: 10}}
            name="monetization-on"
            size={15}
            color={const_colors.textBody}
          />
          <Text mr={2} fontSize={12} color={'#010F07'}>
            {item.ship}{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const VerticalCard = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: const_colors.main,
        ...containerStyle,
      }}>
      {/* image */}
      <Image source={item.img} style={imageStyle} />
      {/* title */}
      <View mt={2} flex={1}>
        <Text fontSize={20} color={const_colors.textMain}>
          {item.title}
        </Text>

        {/* subtitle */}
        <Text fontSize={16} color={const_colors.textBody}>
          {item.adr}
        </Text>
        {/* footer */}
        <View mt={2} style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            bgColor={const_colors.active}
            borderRadius={6}
            alignItems={'center'}>
            <Text mx={2} color={'white'} fontSize={12}>
              4.5
            </Text>
          </View>
          <Text mx={2} color={'#010F07'} fontSize={14}>
            {item.time}min
          </Text>
          <Icon
            name="circle"
            type="font-awesome"
            size={4}
            color={const_colors.textBody}
          />
          <Text mx={2} color={'#010F07'} fontSize={14}>
            {item.ship} delivery
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
