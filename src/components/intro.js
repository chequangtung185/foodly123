import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {View, Text, Center, Container} from 'native-base';
import Swiper from 'react-native-swiper';
import {const_colors} from '../common/constant';

import {intro_1, intro_2, intro_3} from '../common/images';
const {width, height} = Dimensions.get('window');

export default class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        bgColor={const_colors.main}
        style={{flex: 1, justifyContent: 'center'}}>
        <View flex={1}>
          <Swiper
            autoplay={true}
            dotStyle={styles.swiperDotStyle}
            activeDotStyle={styles.swiperActiveDotStyle}>
            <View style={styles.slide}>
              <Image source={intro_1} resizeMode="contain" />
              <View my={5} mx={7}>
                <Text
                  fontSize={30}
                  fontWeight={'bold'}
                  textAlign={'center'}
                  color={const_colors.textMain}>
                  All your favorites
                </Text>
                <Text
                  my={1}
                  fontSize={16}
                  color={const_colors.textBody}
                  numberOfLines={2}
                  textAlign={'center'}>
                  Order from the best local restaurants with easy, on-demand
                  delivery.
                </Text>
              </View>
            </View>
            <View style={styles.slide}>
              <Image source={intro_2} resizeMode="contain" style={styles.img} />
              <View my={5} mx={7}>
                <Text
                  fontSize={30}
                  fontWeight={'bold'}
                  textAlign={'center'}
                  color={const_colors.textMain}>
                  Free delivery offers
                </Text>
                <Text
                  my={1}
                  fontSize={16}
                  color={const_colors.textBody}
                  numberOfLines={2}
                  textAlign={'center'}>
                  Free delivery for new customers via Apple Pay and others
                  payment methods.
                </Text>
              </View>
            </View>
            <View style={styles.slide}>
              <Image source={intro_3} resizeMode="contain" style={styles.img} />
              <View my={5} mx={7}>
                <Text
                  fontSize={30}
                  fontWeight={'bold'}
                  textAlign={'center'}
                  color={const_colors.textMain}>
                  Choose your food
                </Text>
                <Text
                  my={1}
                  fontSize={16}
                  color={const_colors.textBody}
                  numberOfLines={2}
                  textAlign={'center'}>
                  Easily find your type of food craving and you’ll get delivery
                  in wide range.
                </Text>
              </View>
            </View>
          </Swiper>
        </View>

        <View my={8} alignItems={'center'}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignInScreen')}>
            <Text fontSize={14} color={const_colors.main} textAlign={'center'}>
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 355,
    height: 48,
    borderRadius: 8,
    backgroundColor: const_colors.active,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperDotStyle: {
    backgroundColor: const_colors.input,
    marginBottom: -30,
    width: 8,
    height: 5,
    borderRadius: 15,
  },
  swiperActiveDotStyle: {
    backgroundColor: const_colors.active,
    marginBottom: -30,
    width: 8,
    height: 5,
    borderRadius: 15,
  },
});
