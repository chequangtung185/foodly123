import React, {useEffect, useState} from 'react';
import {TouchableOpacity, FlatList, SectionList} from 'react-native';
import {View, ScrollView, Text, Image, Heading, Radio} from 'native-base';
import {const_colors} from '../common/constant';
import {Icon} from 'react-native-elements';
import {header_img} from './../common/images';

const DATA = [
  {
    title: 'Choice of top Cookie',
    data: [
      {id: 1, tit: 'Chocolate Chip'},
      {id: 2, tit: 'Cookies and Cream'},
      {id: 3, tit: 'Funfetti'},
    ],
  },
  {
    title: 'Choice of bottom Cookie',
    data: [
      {id: 4, tit: 'Red Velvet'},
      {id: 5, tit: 'Peanut Butter'},
      {id: 6, tit: 'White Chocolate Macadamia'},
    ],
  },
];

export default AddToOrder = ({navigation}) => {
  const Item = ({title, id}) => (
    <View alignItems={'flex-start'}>
      <Radio ml={2} my={2} value={id} colorScheme="emerald">
        {title}
      </Radio>
    </View>
  );

  renderFlastList = title => {
    return (
      <View>
        <Radio.Group
          defaultValue={1}
          name="myRadioGroup"
          accessibilityLabel="Pick one">
          <SectionList
            style={{width: '100%'}}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item title={item.tit} id={item.id} />}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  backgroundColor: 'grey',
                  height: 0.5,
                  width: '90%',
                  alignSelf: 'center',
                }}
              />
            )}
            renderSectionHeader={({section: {title}}) => (
              <View w={'100%'} px={4}>
                <View
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  my={7}>
                  <Heading>{title}</Heading>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'rgba(239, 153, 32, 0.2)',
                      justifyContent: 'center',
                      borderRadius: 3,
                    }}>
                    <Text
                      fontSize="2xs"
                      color={const_colors.accent}
                      textAlign={'center'}
                      p={2}
                      textTransform={'uppercase'}>
                      Required
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </Radio.Group>
      </View>
    );
  };

  return (
    <View flex={1} bgColor={const_colors.input}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Image alt="head" source={header_img} w={'100%'} />
            <View mt={7} ml={4} position={'absolute'}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 30,
                }}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Icon
                  name={'close'}
                  type="material"
                  size={20}
                  color={const_colors.input}></Icon>
              </TouchableOpacity>
            </View>
            <View px={4} mb={5}>
              <Heading pt={4} pb={2}>
                Cookie Sandwich
              </Heading>
              <Text pb={3} color={const_colors.textMain} opacity={0.64}>
                Shortbread, chocolate turtle cookies, and red velvet. 8 ounces
                cream cheese, softened.
              </Text>
              <View flexDirection={'row'}>
                <Text color={const_colors.textBody}>
                  $$ &nbsp;&bull;&nbsp; Chinese &nbsp;&bull;&nbsp; American
                  &nbsp;&bull;&nbsp; Deshi food
                </Text>
              </View>
            </View>
            {renderFlastList('Choice of top Cookie')}
          </View>
        }
        // renderItem={renderFlastList('Choice of bottom Cookie')}
        ListFooterComponent={
          <View px={4}>
            <TouchableOpacity>
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                borderBottomColor="gray.300"
                borderBottomWidth={1}
                py={3}>
                <Text>Add Special Instructions</Text>
                <Icon
                  name={'keyboard-arrow-right'}
                  size={30}
                  color={const_colors.textMain}
                />
              </View>
            </TouchableOpacity>
            <View
              my={7}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}>
              <TouchableOpacity>
                <View
                  w={50}
                  h={50}
                  bgColor="rgba(0, 0, 0, 0.05)"
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={50}>
                  <Icon
                    type={'font-awesome-5'}
                    name={'minus'}
                    size={14}
                    color={const_colors.textMain}
                  />
                </View>
              </TouchableOpacity>

              <Text mx={3} fontSize="xl">
                01
              </Text>
              <TouchableOpacity>
                <View
                  w={50}
                  h={50}
                  bgColor="rgba(0, 0, 0, 0.05)"
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={50}>
                  <Icon
                    type={'font-awesome-5'}
                    name={'plus'}
                    size={14}
                    color={const_colors.textMain}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View bgColor={const_colors.active} borderRadius={8} mb={7}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('YourOrder');
                }}>
                <Text
                  py={4}
                  fontSize="xs"
                  fontWeight="bold"
                  color={const_colors.input}
                  textAlign={'center'}
                  textTransform={'uppercase'}>
                  Add to Order ($11.98)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </View>
  );
};
