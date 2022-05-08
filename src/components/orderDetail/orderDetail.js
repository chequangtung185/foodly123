import React, {useEffect, useState} from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {View, ScrollView, Text, Image, Heading} from 'native-base';
import {const_colors} from '../../common/constant';
import {Icon, CheckBox} from 'react-native-elements';

export default OrderDetail = ({navigation}) => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: const_colors.input}}
      showsVerticalScrollIndicator={false}>
      <View mt={16} ml={4} position={'absolute'}>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            borderRadius: 30,
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon
            name={'keyboard-arrow-left'}
            size={30}
            color={const_colors.textMain}></Icon>
        </TouchableOpacity>
      </View>
      <View px={4} pb={5}>
        <Text
          mt={16}
          mb={5}
          textAlign={'center'}
          fontSize={'md'}
          fontWeight={'bold'}>
          McDonald's
        </Text>

        <View
          mt={4}
          pb={4}
          borderBottomColor="gray.300"
          borderBottomWidth={1}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}>
          <View flexDirection={'row'} alignItems={'flex-start'} flex={3}>
            <Text
              borderColor="gray.300"
              borderWidth={1}
              borderRadius={6}
              p={0.5}
              mr={3}
              color={const_colors.active}
              fontWeight={'bold'}
              fontSize={'sm'}
              px={2}>
              1
            </Text>
            <View flex={3}>
              <Text fontWeight={500} fontSize={'md'}>
                Cookie Sandwich
              </Text>
              <Text>Shortbread, chocolate turtle cookies, and red velvet.</Text>
            </View>
          </View>
          <View>
            <Text
              color={const_colors.active}
              fontWeight={'bold'}
              fontSize={'sm'}
              flex={1}>
              USD20.7
            </Text>
          </View>
        </View>

        <View
          mt={4}
          pb={4}
          borderBottomColor="gray.300"
          borderBottomWidth={1}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}>
          <View flexDirection={'row'} alignItems={'flex-start'} flex={3}>
            <Text
              borderColor="gray.300"
              borderWidth={1}
              borderRadius={6}
              p={0.5}
              mr={3}
              color={const_colors.active}
              fontWeight={'bold'}
              fontSize={'sm'}
              px={2}>
              1
            </Text>
            <View flex={3}>
              <Text fontWeight={500} fontSize={'md'}>
                Cookie Sandwich
              </Text>
              <Text>Shortbread, chocolate turtle cookies, and red velvet.</Text>
            </View>
          </View>
          <View>
            <Text
              color={const_colors.active}
              fontWeight={'bold'}
              fontSize={'sm'}
              flex={1}>
              USD20.7
            </Text>
          </View>
        </View>

        <View
          mt={4}
          pb={4}
          borderBottomColor="gray.300"
          borderBottomWidth={1}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}>
          <View flexDirection={'row'} alignItems={'flex-start'} flex={3}>
            <Text
              borderColor="gray.300"
              borderWidth={1}
              borderRadius={6}
              p={0.5}
              mr={3}
              color={const_colors.active}
              fontWeight={'bold'}
              fontSize={'sm'}
              px={2}>
              1
            </Text>
            <View flex={3}>
              <Text fontWeight={500} fontSize={'md'}>
                Cookie Sandwich
              </Text>
              <Text>Shortbread, chocolate turtle cookies, and red velvet.</Text>
            </View>
          </View>
          <View>
            <Text
              color={const_colors.active}
              fontWeight={'bold'}
              fontSize={'sm'}
              flex={1}>
              USD20.7
            </Text>
          </View>
        </View>

        <View flexDirection={'row'} justifyContent={'space-between'} mt={3}>
          <Text>Subtotal</Text>
          <Text>$29.4</Text>
        </View>
        <View flexDirection={'row'} justifyContent={'space-between'} py={3}>
          <Text>Delivery</Text>
          <Text>$0</Text>
        </View>
        <View flexDirection={'row'} justifyContent={'space-between'} mb={3}>
          <Text fontWeight={'bold'}>
            Total<Text fontWeight={'normal'}> (incl. VAT)</Text>{' '}
          </Text>
          <Text fontWeight={'bold'}>$29.4</Text>
        </View>

        <TouchableOpacity>
          <View
            flexDirection={'row'}
            justifyContent={'space-between'}
            borderBottomColor="gray.300"
            borderBottomWidth={1}
            py={3}>
            <Text color={const_colors.active}>Add more items</Text>
            <Icon
              name={'keyboard-arrow-right'}
              size={30}
              color={const_colors.textMain}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            flexDirection={'row'}
            justifyContent={'space-between'}
            borderBottomColor="gray.300"
            borderBottomWidth={1}
            py={3}>
            <Text>Promo code</Text>
            <Icon
              name={'keyboard-arrow-right'}
              size={30}
              color={const_colors.textMain}
            />
          </View>
        </TouchableOpacity>
        <View bgColor={const_colors.active} borderRadius={8} mt={10}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OrdersDetailBoxScreen');}}
          >
            <Text
              py={4}
              fontSize="xs"
              fontWeight="bold"
              color={const_colors.input}
              textAlign={'center'}
              textTransform={'uppercase'}>
              Checkout ($11.98)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
