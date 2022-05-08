import React, {useState} from 'react';
import {Box, Heading, Text, HStack, Stack, View} from 'native-base';
import {Modal, Pressable, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';
import {const_colors} from '../common/constant';
import {Icon} from 'react-native-elements';
export default OrdersDetailBoxScreen = ({navigation, isVisible, onClose}) => {
  const [modalVisible, setModalVisible] = useState(isVisible);
  return (
    <Overlay
      overlayStyle={{
        // position: 'relative',
        marginHorizontal: 40,
        padding: 0,
        borderRadius: 20,
      }}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        // style={{position: 'relative'}}
        bgColor={'white'}
        overflow="visible"
        rounded="lg"
        borderRadius={20}
        borderColor="coolGray.200"
        borderWidth="1"
        px={4}
        alignItems={'center'}>
        <Icon
          style={{top: -10, position: 'absolute', marginBottom: 5}}
          size={50}
          name="check-circle"
          type="font-awesome-5"
          color="#22A45D"></Icon>
        <Heading my={2} size="md" textAlign={'center'}>
          You Place the Order Successfully
        </Heading>
        <Text my={2} color={const_colors.textBody} textAlign={'center'}>
          You placed the order Successfully. You will get your food within 25
          minutes. Thanks for using our services. Enjoy your food :)
        </Text>
        <HStack
          my={2}
          alignItems="center"
          space={4}
          justifyContent="space-between">
          <HStack alignItems="center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text color={const_colors.active} fontWeight="400">
                KEEP BROWSING
              </Text>
            </TouchableOpacity>
          </HStack>
        </HStack>
        <Pressable 
        // onPress={onClose}
        onPress={() => {
          navigation.navigate('Home');
        }}
        >
          <Text>Hide Modal</Text>
        </Pressable>
      </View>
    </Overlay>
  );
};
