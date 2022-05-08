import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, FlatList} from 'native-base';
import {Icon, Tab, TabView} from 'react-native-elements';
import {const_colors} from '../../common/constant';
import {rice, pizza, burger, crepe, soups} from '../../common/images';
import {
  Modal,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const type = [
  {
    id: 1,
    img: rice,
    title: 'Rice',
    value: '100',
  },
  {
    id: 2,
    img: burger,
    title: 'Burger',
    value: '100',
  },
  {
    id: 3,
    img: soups,
    title: 'Soups',
    value: '100',
  },
  {
    id: 4,
    img: pizza,
    title: 'Pizza',
    value: '100',
  },
  {
    id: 5,
    img: crepe,
    title: 'Crepe',
    value: '100',
  },
];

const price_range = [
  {
    id: 1,
    value: '$',
  },
  {
    id: 2,
    value: '$$',
  },
  {
    id: 3,
    value: '$$$',
  },
  {
    id: 4,
    value: '$$$$',
  },
  {
    id: 5,
    value: '$$$$$',
  },
];

const Section = ({title, containerStyle, children}) => {
  return (
    <View mt={5} style={{...containerStyle}}>
      {/* header */}
      <Text
        mx={5}
        style={{
          fontSize: 16,
          padding: 3,
          color: '#010F07',
        }}>
        {title}
      </Text>

      {/* content */}
      {children}
    </View>
  );
};

const TextButton = ({value, valueStyle, buttonStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{alignItems: 'center', justifyContent: 'center', ...buttonStyle}}
      onPress={onPress}>
      <Text style={{...valueStyle}}>{value}</Text>
    </TouchableOpacity>
  );
};

const Filter = ({isVisible, onClose}) => {
  const [showFilter, setShowFilter] = useState(isVisible);
  const [index, setIndex] = useState(0);
  const [isCheckRecomended, setIsCheckRecomended] = useState(false);
  const [isCheckFastDeli, setIsCheckFastDeli] = useState(false);
  const [isCheckMostPopular, setIsCheckMostPopular] = useState(false);
  const [priceRange, setPriceRange] = useState(null);
  useEffect(() => {
    console.log('', showFilter);
    if (!showFilter) {
      console.log('', showFilter);
      onClose();
    }
  }, [showFilter]);

  function typeView() {
    return (
      <FlatList
        data={type}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{margin: 10}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                borderRadius: 10,
                backgroundColor: const_colors.main,
                width: 100,
                height: 134,
                borderRadius: 8,
                margin: 10,
              }}>
              <Image
                source={item.img}
                style={{width: 100, height: 100, borderRadius: 8}}
              />
              <Text fontSize={16} color={'#010F07'} textAlign={'center'}>
                {item.title} ({item.value})
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }

  function sortByView() {
    return (
      <View my={2} flex={1} flexDirection={'column'}>
        <TouchableOpacity
          style={{
            marginHorizontal: 25,
            marginVertical: 10,
            textAlign: 'center',
          }}
          onPress={() => (
            setIsCheckRecomended(true),
            setIsCheckMostPopular(false),
            setIsCheckFastDeli(false)
          )}>
          <View alignItems={'center'} style={{flexDirection: 'row', flex: 1}}>
            <Icon
              name="certificate"
              type="font-awesome"
              color={'#010F07'}
              size={14}
            />
            <Text mx={4} fontSize={16} color={'#010F07'}>
              Recomended
            </Text>
            {isCheckRecomended && (
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Icon
                  name="checkmark-outline"
                  type="ionicon"
                  color={const_colors.active}
                  size={15}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 25,
            marginVertical: 10,
            textAlign: 'center',
          }}
          onPress={() => (
            setIsCheckRecomended(false),
            setIsCheckMostPopular(false),
            setIsCheckFastDeli(true)
          )}>
          <View alignItems={'center'} style={{flexDirection: 'row', flex: 1}}>
            <Icon
              name="clock-fast"
              type="material-community"
              color={'#010F07'}
              size={18}
            />
            <Text mx={4} fontSize={16} color={'#010F07'}>
              Fastest Delivery
            </Text>
            {isCheckFastDeli && (
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Icon
                  name="checkmark-outline"
                  type="ionicon"
                  color={const_colors.active}
                  size={15}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 25,
            marginVertical: 10,
            textAlign: 'center',
          }}
          onPress={() => (
            setIsCheckRecomended(false),
            setIsCheckMostPopular(true),
            setIsCheckFastDeli(false)
          )}>
          <View alignItems={'center'} style={{flexDirection: 'row', flex: 1}}>
            <Icon name="local-fire-department" color={'#010F07'} size={15} />
            <Text mx={4} fontSize={16} color={'#010F07'}>
              Most Popular
            </Text>
            {isCheckMostPopular && (
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Icon
                  name="checkmark-outline"
                  type="ionicon"
                  color={const_colors.active}
                  size={15}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function priceView() {
    return (
      <View>
        <Section title={'Max Delivery Fee'}>
          <View
            mx={5}
            mt={2}
            flexDirection={'row'}
            style={{justifyContent: 'space-between'}}>
            <View alignItems={'center'}>
              <Text fontSize={10}>$1</Text>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: 15,
                  borderStyle: 'dashed',
                }}
              />
            </View>
            <View alignItems={'center'}>
              <Text fontSize={10}>$3</Text>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: 15,
                  borderStyle: 'dashed',
                }}
              />
            </View>
            <View alignItems={'center'}>
              <Text fontSize={10}>$5</Text>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: 15,
                  borderStyle: 'dashed',
                }}
              />
            </View>
            <View alignItems={'center'}>
              <Text fontSize={10}>$7</Text>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: 15,
                  borderStyle: 'dashed',
                }}
              />
            </View>
            <View alignItems={'center'}>
              <Text fontSize={10}>$10</Text>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: 15,
                  borderStyle: 'dashed',
                }}
              />
            </View>
            <View alignItems={'center'}>
              <Text ml={1} fontSize={10}>
                $10+
              </Text>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: 15,
                  borderStyle: 'dashed',
                }}
              />
            </View>
          </View>
          <View
            ml={6}
            mr={8}
            style={{borderTopWidth: 1, borderColor: 'black'}}
          />
        </Section>
        <Section title={'Price Range'}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            ml={5}
            mt={3}
            mb={7}>
            {price_range.map((item, index) => {
              return (
                <TextButton
                  key={`price_range-${index}`}
                  value={item.value}
                  valueStyle={{
                    color: item.id == priceRange ? '#fff' : '#010F07',
                    fontSize: 16,
                  }}
                  buttonStyle={{
                    alignItems: 'center',
                    marginRight: 8,
                    marginLeft: index == 0 ? 0 : 8,
                    width: 64,
                    height: 64,
                    borderRadius: 40,
                    backgroundColor:
                      item.id == priceRange ? const_colors.active : '#F8F8F8',
                  }}
                  onPress={() => setPriceRange(item.id)}
                />
              );
            })}
          </ScrollView>
        </Section>
      </View>
    );
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View flex={1} style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        {/* transparent bg */}
        <TouchableWithoutFeedback onPress={() => setShowFilter(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <View
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            backgroundColor: 'white',
          }}>
          {/* header  */}
          <View mx={6} mt={6} flexDirection={'row'}>
            <Icon
              name="close-a"
              type="fontisto"
              size={16}
              onPress={() => setShowFilter(false)}
            />
            <Text
              fontSize={16}
              color={'#010F07'}
              flex={1}
              textAlign={'right'}
              onPress={() => Alert.alert('Updating...')}>
              Clear all
            </Text>
          </View>

          <View>
            <Tab
              value={index}
              onChange={setIndex}
              indicatorStyle={{backgroundColor: const_colors.active}}>
              <Tab.Item
                title="Type"
                titleStyle={[
                  styles._tabTitle,
                  {
                    color:
                      index == 0 ? const_colors.active : const_colors.textBody,
                  },
                ]}
                containerStyle={{backgroundColor: 'transparent'}}
              />
              <Tab.Item
                title="Sort by"
                titleStyle={[
                  styles._tabTitle,
                  {
                    color:
                      index == 1 ? const_colors.active : const_colors.textBody,
                  },
                ]}
                containerStyle={{backgroundColor: 'transparent'}}
              />
              <Tab.Item
                title="Price"
                titleStyle={[
                  styles._tabTitle,
                  {
                    color:
                      index == 2 ? const_colors.active : const_colors.textBody,
                  },
                ]}
                containerStyle={{backgroundColor: 'transparent'}}
              />
              <Tab.Item
                title="Dietary"
                titleStyle={[
                  styles._tabTitle,
                  {
                    color:
                      index == 3 ? const_colors.active : const_colors.textBody,
                  },
                ]}
                containerStyle={{backgroundColor: 'transparent'}}
              />
            </Tab>

            <TabView value={index} onChange={setIndex}>
              <TabView.Item contentContainerStyle={{width: '100%'}}>
                {typeView()}
              </TabView.Item>
              <TabView.Item style={{width: '100%'}}>
                {sortByView()}
              </TabView.Item>
              <TabView.Item style={{width: '100%'}}>{priceView()}</TabView.Item>
            </TabView>
          </View>
          <View
            style={{
              height: 48,
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            borderTopWidth={0.5}
            borderTopColor={'#D8D8D8'}>
            <TouchableOpacity
              onPress={() => setShowFilter(false)}
              flex={1}
              style={{alignItems: 'center'}}>
              <Text my={2} fontSize={14} color={'#010F07'} textAlign={'center'}>
                {' '}
                COMPLETE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Filter;

const styles = StyleSheet.create({
  _tabTitle: {
    textTransform: 'capitalize',
    fontSize: 16,
    height: 35,
    width: 90,
  },
});
