import React, {Component} from 'react';
import {TouchableOpacity, Image, StyleSheet, FlatList} from 'react-native';
import {
  sandwich1,
  sandwich2,
  burger,
  oyster_dish,
  oyster_on_ice,
} from '../../common/images';
import {View, Text} from 'native-base';
import {const_colors} from '../../common/constant';

const DATA_SeaFood = [
  {
    id: 1,
    img: oyster_dish,
    title: 'Oyster Dish',
    text: 'Shortbread, chocolate turtle cookies, and red velvet.',
    txt1: '$$',
    txt2: 'Chinese',
    payment: 'USD 7.4',
  },
  {
    id: 2,
    img: oyster_on_ice,
    title: 'Oyster On Ice',
    text: 'Shortbread, chocolate turtle cookies, and red velvet.',
    txt1: '$$',
    txt2: 'Chinese',
    payment: 'USD 7.4',
  },
  {
    id: 3,
    img: oyster_dish,
    title: 'Oyster Dish',
    text: 'Shortbread, chocolate turtle cookies, and red velvet.',
    txt1: '$$',
    txt2: 'Chinese',
    payment: 'USD 7.4',
  },
];
const _renderItem = ({item, index1}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <Image style={{height: 110, width: 110}} source={item.img} />
        <View ml={5} style={{flexDirection: 'column', width: 204}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text my={2} style={styles.text}>
            {item.text}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt}>{item.txt1}</Text>
            <Text
              color={const_colors.textBody}
              fontSize={16}
              letterSpacing={'-0.4'}>
              {' '}
              &nbsp;&bull;&nbsp;{' '}
            </Text>
            <Text style={{flex: 2}}>{item.txt2}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
      </View>
      <View style={styles._line}></View>
    </TouchableOpacity>
  );
};
export default class SeaFoods extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          data={DATA_SeaFood}
          keyExtractor={item => item.id}
          renderItem={_renderItem}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.315,
    color: const_colors.textMain,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: const_colors.textMain,
    opacity: 0.64,
  },
  payment: {
    flex: 1,
    textAlign: 'right',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.6,
    color: const_colors.active,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  txt: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.245,
    color: const_colors.textMain,
    opacity: 0.74,
  },
  _line: {
    //borderStyle: 'normal',
    borderColor: '#D2D2D2',
    borderWidth: 0.7,
    margin: 10,
  },
});
