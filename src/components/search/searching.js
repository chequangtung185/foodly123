import React, {Component} from 'react';
import {Touchable, TouchableOpacity} from 'react-native';
import {Input, View, Text, Heading, HStack, FlatList} from 'native-base';
import {Icon} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {ItemClick} from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';

export default SearchingScreen = ({navigation}) => {
  const dataSearch = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  const _renderItemSearch = item => {
    return (
      <HStack alignContent={'center'} my={1}>
        <Icon
          style={{marginRight: 10}}
          color={const_colors.textBody}
          size={20}
          name="search"></Icon>
        <Text
          fontSize={'sm'}
          onPress={() => navigation.navigate('SearchResultsScreen')}>
          Search
        </Text>
      </HStack>
    );
  };
  return (
    <View mx={3.5}>
      <Input
        placeholder="Search"
        style={{fontSize: 24, color: const_colors.textMain}}
        InputLeftElement={
          <Icon
            style={{marginLeft: 15, marginRight: 5}}
            color={const_colors.textBody}
            size={20}
            name="search"></Icon>
        }
        InputRightElement={
          <Text mr={5} fontSize={'md'}>
            Cancel
          </Text>
        }></Input>
      <HStack alignItems={'center'}>
        <Heading mt={5} mb={3} fontSize={'md'} color={const_colors.textBody}>
          RECENT SEARCHES
        </Heading>
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end', marginRight: 20}}>
          <Text>CLEAR ALL</Text>
        </TouchableOpacity>
      </HStack>
      <FlatList
        data={dataSearch}
        keyExtractor={Item => Item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => _renderItemSearch(item)}></FlatList>
    </View>
  );
};
