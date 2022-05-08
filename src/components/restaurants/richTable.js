import React, {Component, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import {View, ScrollView, Text, Heading} from 'native-base';
import {const_colors} from '../../common/constant';
import {Icon, Header} from 'react-native-elements';
import {avt1, avt2, avt3} from '../../common/images';

export default function RichTable() {
  const DATA = [
    {
      id: 1,
      avt: avt1,
      name: 'Susie Bridges',
      rate: '5.0',
      cmt: 'Great food I like this place, I think best place of Colarodo. Chilling with Friends :)',
    },
    {
      id: 2,
      avt: avt2,
      name: 'Rodney Miller',
      rate: '4.8',
      cmt: 'One of the best and so much good food corner in Colarodo. Specially the burger, Lemonade.',
    },
    {
      id: 3,
      avt: avt3,
      name: 'Larry Bowers',
      rate: '5.0',
      cmt: 'Great food I like this place, I think best place of Colarodo. Chilling with Friends :)',
    },
    {
      id: 4,
      avt: avt3,
      name: 'Larry Bowers',
      rate: '5.0',
      cmt: 'Great food I like this place, I think best place of Colarodo. Chilling with Friends :)',
    },
    {
      id: 5,
      avt: avt3,
      name: 'Larry Bowers',
      rate: '5.0',
      cmt: 'Great food I like this place, I think best place of Colarodo. Chilling with Friends :)',
    },
  ];
  const listHeader = ({item}) => {
    return (
      <View mx={5} flex={1}>
        <Header
          statusBarProps={{backgroundColor: const_colors.input}}
          containerStyle={{
            backgroundColor: const_colors.input,
            height: 60,
          }}
          leftContainerStyle={{
            justifyContent: 'center',
            flex: 0.1,
          }}
          centerContainerStyle={{
            flex: 0.35,
            justifyContent: 'center',
          }}
          rightContainerStyle={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 0.55,
          }}
          leftComponent={
            <Image style={{width: 24, height: 24}} source={item.avt} />
          }
          centerComponent={
            <Text
              fontSize={16}
              fontWeight={'medium'}
              color={const_colors.textMain}>
              {item.name}
            </Text>
          }
          rightComponent={
            <Text
              style={{
                backgroundColor: 'green',
                borderRadius: 6,
                width: 36,
                textAlign: 'center',
                color: const_colors.input,
              }}>
              {item.rate}
            </Text>
          }></Header>
        <Text mt={5}>{item.cmt}</Text>
      </View>
    );
  };
  return (
    <View flex={1} backgroundColor={const_colors.main}>
      <Header
        statusBarProps={{backgroundColor: const_colors.main}}
        containerStyle={{
          backgroundColor: const_colors.main,
          height: 80,
        }}
        leftContainerStyle={{
          justifyContent: 'center',
          marginLeft: 10,
          flex: 0.6,
        }}
        centerContainerStyle={{justifyContent: 'center', flex: 0.2}}
        rightContainerStyle={{
          justifyContent: 'center',
          marginRight: 10,
          flex: 0.2,
        }}
        leftComponent={
          <View>
            <Text fontSize={24} fontWeight={'semibold'}>
              Rich Table
            </Text>
          </View>
        }
        rightComponent={
          <TouchableOpacity>
            <Icon
              name="close"
              type="ionicon"
              color="#000"
              style={{backgroundColor: '#f1f1f1'}}
            />
          </TouchableOpacity>
        }
      />
      <View mx={6} flexDirection={'row'} alignItems={'center'}>
        <Text
          style={{
            backgroundColor: 'green',
            borderRadius: 6,
            width: 36,
            textAlign: 'center',
            color: const_colors.input,
          }}>
          4.5
        </Text>
        <Text pl={5} fontSize={16} color={const_colors.textBody}>
          25min
        </Text>
        <Text
          color={const_colors.textBody}
          fontSize={16}
          letterSpacing={'-0.4'}>
          {' '}
          &nbsp;&bull;&nbsp;{' '}
        </Text>
        <Text fontSize={16} color={const_colors.textBody}>
          Free delivery
        </Text>
      </View>
      <View mt={5} mx={6} flexDirection={'row'} alignItems={'center'}>
        <Icon
          style={{marginLeft: 10}}
          name="md-location-sharp"
          type="ionicon"
          color="#000"
          size={19}
        />
        <Text pl={5} fontSize={16} color={const_colors.textMain}>
          San Francisco, California
        </Text>
      </View>
      <View
        mt={5}
        mx={10}
        flexDirection={'row'}
        borderWidth={'1'}
        width={'4/5'}
        borderColor={'gray.100'}
      />
      <View mt={5} alignItems={'center'}>
        {/* header */}
        <View mx={5} style={{flexDirection: 'row'}}>
          <View flex={2}>
            <Text style={{fontSize: 24, fontWeight: '500', padding: 3}}>
              Ratings & Reviews
            </Text>
          </View>
          <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
            <Text fontSize={16} color={const_colors.active}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={listHeader}
      />
      <View
        flex={1}
        flexDirection={'row'}
        position={'absolute'}
        bottom={0}
        w={'100%'}
        h={'12%'}
        backgroundColor={const_colors.main}
        alignItems={'center'}
        borderTopColor={'gray.200'}
        borderWidth={0.8}
        justifyContent={'center'}>
        <TouchableOpacity
          style={{
            backgroundColor: const_colors.active,
            flex: 0.7,
            height: '70%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text
            fontSize={14}
            fontWeight={'medium'}
            color={const_colors.input}
            textTransform="uppercase"
            letterSpacing={0.8}>
            Browse food
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.16,
            backgroundColor: '#ebebee',
            marginLeft: '5%',
            width: '10%',
            height: '70%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Icon name="share-a" type="fontisto" color="#545d58" i />
        </TouchableOpacity>
      </View>
    </View>
  );
}
