import React, {useEffect} from 'react';
import {View, Text, Center, Heading, Input, Button, Flex} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import {const_colors} from '../common/constant';
import {Icon} from 'react-native-elements';

export default EnterAddress = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View mt={7}>
        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon type="font-awesome-5" name={'times'} size={20}></Icon>
        </TouchableOpacity>
      </View>
      <Center mt={'16'}>
        <Heading>Find restaurants near you </Heading>
        <Text
          textAlign="center"
          mt={3}
          mb={10}
          fontSize="md"
          color={const_colors.textBody}>
          Please enter your location or allow access to {'\n'} your location to
          find restaurants near you.
        </Text>
      </Center>
      <View alignSelf="center" width="90%">
        <Button
          bgColor="tranparent"
          borderRadius="lg"
          borderWidth={1}
          borderColor={const_colors.active}
          mb={3}
          py={3}
          leftIcon={
            <Icon
              name="location-arrow"
              size={25}
              type="font-awesome"
              color={const_colors.active}
            />
          }>
          <Text
            textTransform="uppercase"
            color={const_colors.active}
            fontSize="sm"
            bold>
            Use current location
          </Text>
        </Button>
        <Input
          InputLeftElement={
            <Icon
              style={{marginLeft: 15}}
              type="font-awesome-5"
              name="map-marker-alt"
              size={18}
              color={const_colors.textBody}
            />
          }
          py={3.5}
          pl={5}
          borderRadius="lg"
          placeholder="Enter a new address"
          fontSize="lg"
        />
      </View>
      <View mx={'auto'} w={'90%'} mt={10}>
        <TouchableOpacity
          style={{
            borderColor: const_colors.active,
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: 13,
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text
            textTransform="uppercase"
            color={const_colors.active}
            fontSize="sm"
            bold
            textAlign={'center'}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
