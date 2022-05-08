import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, ScrollView, Text, Image, Heading, Input} from 'native-base';
import {const_colors} from '../common/constant';
import {Icon} from 'react-native-elements';

export default AddPaymentMethod = ({navigation}) => {
  return (
    <View flex={1} bgColor={const_colors.input} px={4}>
      <View mt={7}>
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
      <Heading textAlign={'center'} mt={3}>
        Add your payment methods
      </Heading>
      <Text
        mb={9}
        textAlign={'center'}
        color={const_colors.textMain}
        opacity={0.64}>
        This card will only be charged when{'\n'} you place an order.
      </Text>
      <View mx={'auto'} bgColor="gray.100" borderRadius={10}>
        <Input
          borderRadius={10}
          w={'100%'}
          paddingLeft={5}
          InputLeftElement={
            <Icon
              name="credit-card"
              type="font-awesome-5"
              size={25}
              style={{marginLeft: 15}}
            />
          }
          placeholder="4343 4343 4343 4343"
        />
      </View>
      <View flexDirection={'row'} justifyContent={'space-between'} py={4}>
        <View bgColor="gray.100" w={'48%'} borderRadius={10}>
          <Input borderRadius={10} placeholder="MM/YY" paddingLeft={5} />
        </View>
        <View bgColor="gray.100" w={'48%'} borderRadius={10}>
          <Input borderRadius={10} placeholder="CVC" paddingLeft={5} />
        </View>
      </View>
      <View px={4} pb={5}>
        <View bgColor={const_colors.active} borderRadius={8} mt={10}>
          <TouchableOpacity>
            <Text
              py={4}
              fontSize="xs"
              fontWeight="bold"
              color={const_colors.input}
              textAlign={'center'}
              textTransform={'uppercase'}>
              Add Card
            </Text>
          </TouchableOpacity>
        </View>
        <View
          bgColor="rgba(0,0,0,0)"
          borderColor={const_colors.textBody}
          borderWidth={1}
          borderRadius={8}
          mt={4}>
          <TouchableOpacity>
            <View
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Icon
                name="card-outline"
                type="ionicon"
                size={25}
                style={{marginRight: 15}}
              />
              <Text
                py={4}
                fontSize="xs"
                fontWeight="bold"
                color={const_colors.textMain}
                textAlign={'center'}
                textTransform={'uppercase'}>
                Scan Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
