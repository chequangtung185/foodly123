import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity, Share} from 'react-native';
import {Text, View, Center, Box} from 'native-base';
import {Icon, Header} from 'react-native-elements';
import {const_colors} from '../../common/constant';

import {gif} from '../../common/images';

export default class ReferToFriends extends Component {
  render() {
    const onShare = async () => {
      try {
        const result = await Share.share({
          message: 'https://ui8.net/76738b',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
    return (
      <View flex={1} backgroundColor={const_colors.main}>
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
              <Text fontSize={16} fontWeight={'bold'}>
                Refer to Friends
              </Text>
            </View>
          }
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TabProfile')}>
              <Icon name="angle-left" type="font-awesome" />
            </TouchableOpacity>
          }
        />

        <View flex={1} mt={20} alignItems={'center'}>
          <Image source={gif} />
          <Text
            mt={5}
            fontSize={'xl'}
            fontWeight={'semibold'}
            color={const_colors.textMain}
            letterSpacing={0.14}>
            {' '}
            Refer a Friend, Get $10{' '}
          </Text>
          <Text
            my={5}
            mx={20}
            fontSize={'sm'}
            textAlign="center"
            color={const_colors.textBody}
            letterSpacing={0.14}>
            {' '}
            Get $10 in credits when someone sign up using your refer link{' '}
          </Text>
          <TouchableOpacity onPress={onShare} style={styles._touch}>
            <Box
              flex={1}
              height="20%"
              bg="gray.100"
              borderLeftRadius="6"
              borderRightRadius="6">
              <View
                flex={1}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Icon name="share" type="font-awesome" size={20} color="#000" />
                <Text ml={2}>https://ui8.net/76738b</Text>
              </View>
            </Box>
          </TouchableOpacity>

          <View width={'80%'} mb={10} flex={1} justifyContent={'flex-end'}>
            <Center mt={10}>
              <TouchableOpacity style={styles._btn1}>
                <Text
                  color={const_colors.input}
                  fontSize={12}
                  fontWeight="semibold"
                  letterSpacing={0.8}
                  textTransform="uppercase"
                  color={const_colors.input}>
                  Email
                </Text>
              </TouchableOpacity>
            </Center>
            <Center mt={5}>
              <TouchableOpacity style={styles._btn2}>
                <Text
                  color={const_colors.input}
                  fontSize={12}
                  fontWeight="semibold"
                  letterSpacing={0.8}
                  textTransform="uppercase"
                  color={const_colors.textMain}>
                  Others
                </Text>
              </TouchableOpacity>
            </Center>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  _touch: {
    flex: 1,
    flexDirection: 'row',
    width: '55%',
  },
  _btn1: {
    backgroundColor: const_colors.active,
    borderRadius: 6,
    width: '100%',
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  _btn2: {
    backgroundColor: const_colors.input,
    borderRadius: 6,
    width: '100%',
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: const_colors.textBody,
  },
});
