import React, {useState} from 'react';
import {Text, HStack, Stack, View, VStack} from 'native-base';
import {Modal, Pressable} from 'react-native';
import {const_colors} from '../common/constant';
import {Icon} from 'react-native-elements';
export default ViewOrderScreen = ({navigation, VieVisible, onCls}) => {
  const [viewVisible, setViewVisible] = useState(VieVisible);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={viewVisible}
      onRequestClose={() => {
        setViewVisible(!viewVisible);
      }}>
      <View>
        <Pressable onPress={onCls}>
          <Text>Hide Modal</Text>
        </Pressable>
      </View>
      <View
        mt={480}
        w={290}
        h={68}
        borderRadius={20}
        justifyContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        bgColor={const_colors.input}>
        <HStack >
          <View my={5} ml={-16} mr={-2} w={45} h={45} bgColor={'green.200'} justifyContent={'center'} borderRadius={10}>
            <Icon size={20} name="shopping-basket" color="#22A45D"></Icon>
          </View>
          <VStack m={5} alignSelf={'flex-start'}>
            <Text color={const_colors.textBody}>View Cart</Text>
            <Text>Uncle Boy's</Text>
          </VStack>
          <Text ml={10} mr={-10} alignSelf={'center'}>1 Items</Text>
        </HStack>
      </View>
    </Modal>
  );
};
