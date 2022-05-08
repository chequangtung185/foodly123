import React, {Component, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ImageStore,
} from 'react-native';
import {Text, View, Image, ScrollView, Center} from 'native-base';
import {Header, Icon} from 'react-native-elements';

import {const_colors} from '../../common/constant';
import {
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  banner,
} from '../../common/images';
import Swiper from 'react-native-swiper';
import {HorizontalCard, VerticalCard} from './child/Card';
import Filter from './Filter';

const menuList = [
  {
    id: 1,
    title: "McDonald's",
    text1: '$$',
    text2: 'Chinese',
    text3: 'American',
    text4: 'Deshi food',
    vote: '4.3',
    ratings: '200+',
    time: '25',
    ship: 'Free',
    // src: {
    //   slide_1, slide_2, slide_3, slide_4, slide_5
    // }
    img: slide_1,
    adr: 'San Francisco',
  },
  {
    id: 2,
    title: "Cafe Brichor's",
    text1: '$$',
    text2: 'Chinese',
    text3: 'American',
    text4: 'Deshi food',
    vote: '4.3',
    ratings: '200+',
    time: '25',
    ship: 'Free',
    // src: {
    //   slide_1, slide_2, slide_3, slide_4, slide_5
    // }
    img: slide_2,
    adr: 'San Francisco',
  },
  {
    id: 3,
    title: 'KFC',
    text1: '$$',
    text2: 'Chinese',
    text3: 'American',
    text4: 'Deshi food',
    vote: '4.3',
    ratings: '200+',
    time: '25',
    ship: 'Free',
    // src: {
    //   slide_1, slide_2, slide_3, slide_4, slide_5
    // }
    img: slide_3,
    adr: 'San Francisco',
  },
];

const Section = ({title, onPress, children}) => {
  return (
    <View mt={5} alignItems={'center'}>
      {/* header */}
      <View mx={5} style={{flexDirection: 'row'}}>
        <View flex={2}>
          <Text style={{fontSize: 24, fontWeight: 'bold', padding: 1}}>
            {title}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onPress}
          style={{flex: 1, alignItems: 'flex-end'}}>
          <Text fontSize={16} color={const_colors.active}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* content */}
      {children}
    </View>
  );
};

const Home = ({navigation}) => {
  const [showFilter, setShowFilter] = useState(false);

  function renderSwiper() {
    return (
      <View my={3} style={{alignItems: 'center'}}>
        <Swiper
          height={185}
          width={335}
          style={styles.wrapper}
          horizontal={true}
          dotStyle={styles.swiperDotStyle}
          activeDotStyle={styles.swiperActiveDotStyle}
          showsPagination={true}
          paginationStyle={{
            bottom: 10,
            left: null,
            right: 10,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              alt="1"
              source={slide_1}
              width={335}
              height={185}
              borderRadius={12} 
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              alt="2"
              source={slide_2}
              width={335}
              height={185}
              borderRadius={12}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              alt="3"
              source={slide_3}
              width={335}
              height={185}
              borderRadius={12}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              alt="3"
              source={slide_4}
              width={335}
              height={185}
              borderRadius={12}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              alt="3"
              source={slide_5}
              width={335}
              height={185}
              borderRadius={12}
              resizeMode="cover"
            />
          </View>
        </Swiper>
      </View>
    );
  }

  function renderFeaturedPartners() {
    return (
      <Section title="Featured Partners" onPress={() => navigation.navigate('FeaturedPartnersScreen',{menuList: menuList})}>
        <FlatList
          data={menuList}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{margin: 10}}
          renderItem={({item, index}) => {
            return (
              <VerticalCard
                containerStyle={{
                  width: 200,
                  height: 254,
                  marginRight: 14,
                  marginLeft: 14,
                }}
                imageStyle={{
                  height: 160,
                  width: 200,
                  borderRadius: 10,
                }}
                item={item}
              />
            );
          }}
        />
      </Section>
    );
  }

  function renderBestPick() {
    return (
      <Section
        title="Best Picks Restaurants by team"
        onPress={() => Alert.alert('Show')}>
        <FlatList
          data={menuList}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{margin: 10}}
          renderItem={({item, index}) => {
            return (
              <VerticalCard
                containerStyle={{
                  width: 200,
                  height: 254,
                  marginRight: 14,
                  marginLeft: 14,
                }}
                imageStyle={{
                  height: 160,
                  width: 200,
                  borderRadius: 10,
                }}
                item={item}
              />
            );
          }}
        />
      </Section>
    );
  }

  return (
    <View flex={1}>
      {/* header */}
      <Header
        statusBarProps={{backgroundColor: const_colors.main}}
        containerStyle={{
          backgroundColor: const_colors.main,
          height: 100,
        }}
        leftContainerStyle={{justifyContent: 'center'}}
        centerContainerStyle={{justifyContent: 'center'}}
        rightContainerStyle={{justifyContent: 'flex-end'}}
        centerComponent={
          <View style={{flexDirection: 'column'}}>
            <Text
              textAlign={'center'}
              fontSize={12}
              color={const_colors.active}>
              DELIVERY TO
            </Text>
            <View alignItems={'center'} style={{flexDirection: 'row'}}>
              <Text color={const_colors.textMain} fontSize={22} mr={2}>
                San Francisco
              </Text>
              <Icon
                color={const_colors.textMain}
                name="angle-down"
                type="font-awesome"
                size={18}
              />
            </View>
          </View>
        }
        rightComponent={
          <TouchableOpacity onPress={() => setShowFilter(true)}>
            <Text color={const_colors.textMain} fontSize={16}>
              Filter
            </Text>
          </TouchableOpacity>
        }
      />
      {/* filter  */}

      {showFilter && (
        <Filter isVisible={showFilter} onClose={() => setShowFilter(false)} />
      )}

      {/* content  */}
      <View flex={4} bgColor={const_colors.main}>
        <FlatList
          data={menuList}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {/* slide  */}
              {renderSwiper()}
              {/* Featured Partners */}
              {renderFeaturedPartners()}
              {/* Banner */}
              <View my={3} alignItems={'center'}>
                <Image source={banner} alt={'banner'} />
              </View>

              {/* Best picks restairants by team */}
              {renderBestPick()}
              {/* All restaurants */}
              <Section
                title={'All restaurants'}
                onPress={() => Alert.alert('show')}
              />
            </View>
          }
          renderItem={({item, index}) => {
            return (
              <View alignItems={'center'}>
                <HorizontalCard
                  containerStyle={{
                    height: 282,
                    width: 335,
                    margin: 10,
                  }}
                  imageStyle={{
                    width: 335,
                    height: 185,
                    borderRadius: 10,
                  }}
                  item={item}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  swiperDotStyle: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 8,
    height: 5,
    borderRadius: 15,
  },
  swiperActiveDotStyle: {
    backgroundColor: const_colors.main,
    width: 8,
    height: 5,
    borderRadius: 15,
  },
});
