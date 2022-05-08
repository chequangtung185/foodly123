import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, View, ScrollView, Switch, Box} from 'native-base';
import {Icon} from 'react-native-elements';
import {const_colors} from '../../common/constant';

export default class Profile extends Component {
  render() {
    return (
      <ScrollView flex={1} backgroundColor={const_colors.main}>
        <View mt={10} mx={2}>
          <Text
            mx={2}
            fontSize={28}
            lineHeight={36}
            letterSpacing={0.18}
            color={const_colors.textMain}
            fontWeight={'semibold'}>
            Account Settings
          </Text>
          <Text
            mx={2}
            my={3}
            fontSize={16}
            lineHeight={24}
            letterSpacing={-0.4}
            color={const_colors.textBody}>
            Update your settings like notifications, payments, profile edit etc.
          </Text>
          <View flexDirection={'row'}>
            <TouchableOpacity
              style={styles._touch}
              onPress={() => this.props.navigation.navigate('ProfileSetting')}>
              <Icon
                style={{marginLeft: 10}}
                name="user-alt"
                type="font-awesome-5"
                color="#000"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Profile Information</Text>
                    <Text style={styles._txt}>
                      Change your account information
                    </Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity
              style={styles._touch}
              onPress={() => this.props.navigation.navigate('ChangePass')}>
              <Icon
                style={{marginLeft: 10}}
                name="lock"
                type="font-awesome-5"
                color="#000"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Change Password</Text>
                    <Text style={styles._txt}>Change your password</Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity
              style={styles._touch}
              onPress={() => this.props.navigation.navigate('PaymentMethods')}>
              <Icon
                style={{marginLeft: 10}}
                name="card"
                type="ionicon"
                color="#000"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Payment Methods</Text>
                    <Text style={styles._txt}>
                      Add your credit & debit cards
                    </Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity
              style={styles._touch}
              onPress={() => this.props.navigation.navigate('Locations')}>
              <Icon
                style={{marginLeft: 10}}
                name="md-location-sharp"
                type="ionicon"
                color="#000"
                size={19}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Locations</Text>
                    <Text style={styles._txt}>
                      Add or remove your delivery locations
                    </Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity
              style={styles._touch}
              onPress={() =>
                this.props.navigation.navigate('AddSocialAccounts')
              }>
              <Icon
                style={{marginLeft: 10}}
                name="facebook-f"
                type="font-awesome"
                color="#000"
                size={19}
                iconStyle={{width: 16}}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Add Social Account</Text>
                    <Text style={styles._txt}>Add Facebook, Twitter etc </Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity
              style={styles._touch}
              onPress={() => this.props.navigation.navigate('Refer')}>
              <Icon
                style={{marginLeft: 10}}
                name="notifications"
                type="ionicon"
                color="#000"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Refer to Friends</Text>
                    <Text style={styles._txt}>
                      Get $10 for reffering friends
                    </Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
          <Text my={5} ml={2} style={styles._txt2}>
            Notifications
          </Text>
          <View flexDirection={'row'}>
            <View style={styles._touch}>
              <Icon
                style={{marginLeft: 10}}
                name="notifications"
                type="ionicon"
                color="#000"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Refer to Friends</Text>
                    <Text style={styles._txt}>
                      Get $10 for reffering friends
                    </Text>
                  </View>
                  <Switch
                    offTrackColor="gray.200"
                    onTrackColor="green.700"
                    onThumbColor="white"
                    offThumbColor="white"
                  />
                </View>
              </Box>
            </View>
          </View>
          <View flexDirection={'row'}>
            <View style={styles._touch}>
              <Icon
                style={{marginLeft: 10}}
                name="notifications"
                type="ionicon"
                color="#000"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>SMS Notifications</Text>
                    <Text style={styles._txt}>
                      For daily update you will get it
                    </Text>
                  </View>
                  <Switch
                    offTrackColor="gray.200"
                    onTrackColor="green.700"
                    onThumbColor="white"
                    offThumbColor="white"
                  />
                </View>
              </Box>
            </View>
          </View>
          <View flexDirection={'row'}>
            <View style={styles._touch}>
              <Icon
                style={{marginLeft: 10}}
                name="notifications"
                type="ionicon"
                color="#000"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Promotional Notifications</Text>
                    <Text style={styles._txt}>
                      For daily update you will get it
                    </Text>
                  </View>
                  <Switch
                    offTrackColor="gray.200"
                    onTrackColor="green.700"
                    onThumbColor="white"
                    offThumbColor="white"
                  />
                </View>
              </Box>
            </View>
          </View>
          <Text my={5} ml={2} style={styles._txt2}>
            More
          </Text>
          <View flexDirection={'row'}>
            <TouchableOpacity style={styles._touch}>
              <Icon
                style={{marginLeft: 10}}
                name="star"
                type="font-awesome"
                color="#22A45D"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Rate Us</Text>
                    <Text style={styles._txt}>Rate us playstore, appstor</Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity style={styles._touch}>
              <Icon
                style={{marginLeft: 10}}
                name="book"
                type="feather"
                color="#000"
                size={17}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>FAQ</Text>
                    <Text style={styles._txt}>Frequently asked questions</Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity style={styles._touch}>
              <Icon
                style={{marginLeft: 10}}
                name="log-out-outline"
                type="ionicon"
                color="#000"
                size={19}
              />
              <Box
                ml={5}
                flex={1}
                borderBottomWidth={1}
                borderBottomColor={'rgba(202, 200, 218, 0.202387)'}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View flex={0.95}>
                    <Text style={styles._title}>Logout</Text>
                  </View>
                  <Icon name={'keyboard-arrow-right'} size={30} color="#000" />
                </View>
              </Box>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  _touch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 380,
    height: 72,
    marginBottom: 5,
  },
  _title: {
    fontSize: 16,
    letterSpacing: -0.28,
    color: const_colors.textMain,
    marginBottom: 5,
    fontWeight: '500',
  },
  _txt: {
    fontSize: 14,
    letterSpacing: -0.28,
    color: const_colors.textBody,
  },
  _txt2: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    color: const_colors.textMain,
    opacity: 0.74,
  },
});
