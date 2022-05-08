import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import {View, ScrollView, Text} from 'native-base';
import Swiper from 'react-native-swiper';
import {const_colors} from '../../common/constant';
import {
  header_img,
  icon_money,
  icon_clock,
  cookie_sandwich,
  chow_fun,
} from '../../common/images';
import {Icon} from 'react-native-elements';

import MostPopular from './mostPopular';
import SeaFoods from './seaFoods';

const DATA = [
  {
    id: 1,
    img: cookie_sandwich,
    title: 'Cookie Sandwich',
    txt1: '$$',
    txt2: 'Chinese',
  },
  {
    id: 2,
    img: chow_fun,
    title: 'Chow fun',
    txt1: '$$',
    txt2: 'Chinese',
  },
  {
    id: 3,
    img: cookie_sandwich,
    title: 'Cookie Sandwich',
    txt1: '$$',
    txt2: 'Chinese',
  },
  {
    id: 4,
    img: chow_fun,
    title: 'Cookie Sandwich',
    txt1: '$$',
    txt2: 'Chinese',
  },
  {
    id: 5,
    img: cookie_sandwich,
    title: 'Cookie Sandwich',
    txt1: '$$',
    txt2: 'Chinese',
  },
];
const DATA_SeaFood = [];
const _renderItem = ({item, index}) => {
  return (
    <TouchableOpacity style={styles._item}>
      <View>
        <Image style={{width: 140, height: 140}} source={item.img} />
        <Text fontSize={16} fontWeight={'semibold'}>
          {item.title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text fontSize={14} color={const_colors.textMain} opacity={0.64}>
            {item.txt1}
          </Text>
          <Text
            color={const_colors.textBody}
            fontSize={16}
            letterSpacing={'-0.4'}>
            {' '}
            &nbsp;&bull;&nbsp;{' '}
          </Text>
          <Text fontSize={14} color={const_colors.textMain} opacity={0.64}>
            {item.txt2}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default class SingleRestaurant extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        mt={5}
        style={{flex: 1, flexDirection: 'column', backgroundColor:const_colors.main}}>
        <View style={{height: 280}}>
          <Swiper
            autoplay={true}
            dotStyle={styles.swiperDotStyle}
            activeDotStyle={styles.swiperActiveDotStyle}
            paginationStyle={{
              bottom: 35,
              left: null,
              right: 15,
            }}
            nextButton>
            <View style={styles.slide}>
              <Image style={styles.img_header} source={header_img} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.img_header} source={header_img} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.img_header} source={header_img} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.img_header} source={header_img} />
            </View>
          </Swiper>
        </View>
        <View
          mt={5}
          style={{
            // flex: 1,
            position: 'absolute',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              alignItems: 'flex-start',
              alignContent: 'flex-start',
              width: 30,
            }}>
            <Icon name={'keyboard-arrow-left'} size={30} color={const_colors.input} />
          </TouchableOpacity>
          <View mx={120}></View>
          <TouchableOpacity
            onPress={() => Alert.alert('Các em chia sẻ cho thầy đi...')}
            style={{
              marginLeft: 10,
              alignItems: 'flex-end',
              alignContent: 'flex-end',
              width: '10%',
            }}>
            <Icon
              name="share-square-o"
              type="font-awesome"
              size={27}
              color={const_colors.input}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('Các em chia sẻ cho thầy đi...')}
            style={{
              // flex:1,
              marginLeft: 10,
              alignItems: 'flex-end',
              alignContent: 'flex-end',
              width: '10%',
              marginRight: 20,
            }}>
            <Icon name="search" size={30} color={const_colors.input} />
          </TouchableOpacity>
        </View>
        <View mt={5} mx={5}>
          <Text
            fontSize={24}
            color={const_colors.textMain}
            fontWeight={'semibold'}
            letterSpacing={'0.14'}>
            Mayfield Bakery & Cafe
          </Text>
          <Text
            my={3}
            color={const_colors.textBody}
            fontSize={16}
            letterSpacing={'-0.4'}>
            $$ &nbsp;&bull;&nbsp; Chinese &nbsp;&bull;&nbsp; American
            &nbsp;&bull;&nbsp; Deshi food
          </Text>
          <Text
            color={const_colors.textMain}
            fontSize={12}
            letterSpacing={'-0.4'}>
            4.3
            <Icon
              style={{marginLeft: 10, marginRight: 10}}
              name="star"
              size={13}
              type="font-awesome"
              color={const_colors.active}
            />
            200+ Ratings
          </Text>
          <View my={5} style={{flexDirection: 'row'}}>
            <Image style={{marginTop: 3}} source={icon_money} />
            <View style={{flexDirection: 'column'}}>
              <Text ml={2} fontSize={16} fontWeight={'semibold'}>
                FREE
              </Text>
              <Text ml={2} color={const_colors.textMain} opacity={'0.64'}>
                Delivery
              </Text>
            </View>
            <Image style={{marginTop: 3, marginLeft: 20}} source={icon_clock} />
            <View style={{flexDirection: 'column'}}>
              <Text ml={2} fontSize={16} fontWeight={'semibold'}>
                25
              </Text>
              <Text ml={2} color={const_colors.textMain} opacity={'0.64'}>
                Minutes
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddToOrder')}
              ml={10}
              style={styles._btn}>
              <Text
                fontSize={12}
                fontWeight={'semibold'}
                letterSpacing={0.8}
                color={const_colors.active}>
                TAKE AWAY
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            fontSize={20}
            color={const_colors.textMain}
            fontWeight={'semibold'}
            letterSpacing={'0.14'}>
            Featured Items
          </Text>
        </View>
        <View mt={3} style={styles._featured}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={_renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <ScrollView my={5} horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <Text style={styles._textTitle}>Beef & Lamb</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles._textTitle}>Seafood</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles._textTitle}>Appetizers</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles._textTitle}>Dim Sum</Text>
          </TouchableOpacity>
        </ScrollView>
        <View mx={5}>
          <Text
            fontSize={20}
            color={const_colors.textMain}
            fontWeight={'semibold'}
            letterSpacing={'0.14'}>
            Most Populars
          </Text>
          <View mt={5}>
            <MostPopular />
          </View>
          <Text
            fontSize={20}
            color={const_colors.textMain}
            fontWeight={'semibold'}
            letterSpacing={'0.14'}>
            Sea Foods
          </Text>
          <View mt={5}>
            <SeaFoods />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  _btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    width: 113,
    borderColor: const_colors.active,
    borderRadius: 6,
    borderWidth: 0.8,
    backgroundColor: '#fff',
    marginLeft: 70,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperDotStyle: {
    backgroundColor: const_colors.textBody,
    marginBottom: -30,
    width: 8,
    height: 5,
    borderRadius: 100,
  },
  swiperActiveDotStyle: {
    backgroundColor: const_colors.input,
    marginBottom: -30,
    width: 8,
    height: 5,
    borderRadius: 100,
  },
  img_header: {
    width: 375 * 1.1,
    height: 280 * 1.1,
  },
  _featured: {
    flexDirection: 'row',
    //backgroundColor: '#fab',
    height: 180,
    width: '100%',
  },
  _item: {
    height: 150,
    width: 145,
    marginLeft: 20,
  },
  _textTitle: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: '#010F07',
    opacity: 0.54,
    marginLeft: 24,
    marginRight: 24,
  },
  _RightBtn: {
    // flex:1,
    // alignContent:'flex-end',
  },
});
