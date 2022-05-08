import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider, StatusBar, Text} from 'native-base';
import {Icon} from 'react-native-elements';

// import store from './store';
import {const_colors, mainColor} from './common/constant';

//Push notification

//init Router
import InitRouterScreen from './initRouter';

//react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

///tabs
import SearchScreen from './components/search/index';
import ProfileScreen from './components/profile/index';
import OrdersScreen from './components/orders';

//Authen
import ResendMailScreen from './components/authen/resendMail';
import ForgotPasswordScreen from './components/authen/forgot';
import SignUpPhoneScreen from './components/authen/phone';
import OTPScreen from './components/authen/verifyOTP';

//stack
import IntroScreen from './components/intro';
import HomeScreen from './components/home';
import SignInScreen from './components/authen/signIn';
import SignUpScreen from './components/authen/signupv1';
import FeaturedPartnersScreen from './components/home/featured-partners';
import SearchingScreen from './components/search/searching';
import SearchResultsScreen from './components/search/searchResults';
//enterAddress
import EnterAddressScreen from './components/enterAddress';
//stack profile
import ProfileSettingScreen from './components/profile/profileSetting';
import ChangePassScreen from './components/profile/changePass';
import PaymentMethodsScreen from './components/profile/payment';
import CardListScreen from './components/profile/payment/cardList';
import LocationsScreen from './components/profile/locations';
import AddSocialAccountsScreen from './components/profile/socialAccounts';
import ReferToFriendsScreen from './components/profile/refer';
//Restaurant
import SingleRestaurantScreen from './components/restaurants/index';
import RichTableScreen from './components/restaurants/richTable';

//Add to order
import AddToOrderScreen from './components/addToOrder';
import YourOrderScreen from './components/yourOrder/index';
//Add payment method
import AddPaymentMethodScreen from './components/addPaymentMethod';
//Order detail
import OrderDetailScreen from './components/orderDetail/orderDetail';


import OrdersDetailBoxScreen from './components/ordersdetailbox';
import ViewOrderScreen from './components/vieworder';
const Tab = createBottomTabNavigator();
function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: const_colors.main,
          height: 60,
        },
        tabBarActiveTintColor: const_colors.active,
        tabBarInactiveTintColor: const_colors.textBody,
        tabBarLabelStyle: {fontSize: 10, marginBottom: 5},
        tabBarIconStyle: {marginTop: 5},
      })}>
      <Tab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) => {
            let _color = focused ? const_colors.active : const_colors.textBody;
            let _size = focused ? 28 : 20;
            return (
              <Icon
                name="restaurant-outline"
                type="ionicon"
                size={_size}
                color={_color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TabSearch"
        component={SearchScreen}
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let _color = focused ? const_colors.active : const_colors.textBody;
            let _size = focused ? 30 : 20;
            return (
              <Icon
                name="search-outline"
                type="ionicon"
                size={_size}
                color={_color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TabOrders"
        component={OrdersScreen}
        options={{
          title: 'Orders',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let _color = focused ? const_colors.active : const_colors.textBody;
            let _size = focused ? 30 : 20;
            return (
              <Icon
                name="receipt"
                type="font-awesome-5"
                size={_size}
                color={_color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let _color = focused ? const_colors.active : const_colors.textBody;
            let _size = focused ? 30 : 24;
            return <Icon name="person" size={_size} color={_color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function AppStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="IntroScreen">
      {/* <Stack.Screen
        name="InitRouter"
        component={InitRouterScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResendMail"
        component={ResendMailScreen}
        options={{headerShown: true, title: 'Forgot Password'}}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator} //HomeScreen
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: true, title: 'Forgot Password'}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen} //SignUpV1
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpPhone"
        component={SignUpPhoneScreen} //HomeScreen
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen} //HomeScreen
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOTP"
        component={OTPScreen} //HomeScreen
        options={{headerShown: true, title: 'Login to Foodly'}}
      />
      <Stack.Screen
        name="EnterAddress"
        component={EnterAddressScreen}
        options={{headerShown: true, title: 'Login to Foodly'}}
      />
      <Stack.Screen
        name="FeaturedPartnersScreen"
        component={FeaturedPartnersScreen} //HomeScreen
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchingScreen"
        component={SearchingScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="SearchResultsScreen"
        component={SearchResultsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleRestaurant"
        component={SingleRestaurantScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileSetting"
        component={ProfileSettingScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePass"
        component={ChangePassScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentMethods"
        component={PaymentMethodsScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CardList"
        component={CardListScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Locations"
        component={LocationsScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddSocialAccounts"
        component={AddSocialAccountsScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Refer"
        component={ReferToFriendsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="YourOrder"
        component={YourOrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddToOrder"
        component={AddToOrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPaymentMethod"
        component={AddPaymentMethodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrdersDetailBoxScreen"
        component={OrdersDetailBoxScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewOrderScreen"
        component={ViewOrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RichTable"
        component={RichTableScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <StatusBar
          animated={true}
          backgroundColor={mainColor}
          barStyle="dark-content"
        />
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
