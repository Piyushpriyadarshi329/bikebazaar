import React, {useState, memo, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Images, colors, fonts, sizes} from '../../utils/theme';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {clearUserSession} from '../../redux/actions/userSessionActions';
import {connect} from 'react-redux';
import {store} from '../../redux/actions/store';

const CustomSidebarMenu = memo(({navigation, clearUserSession}) => {
  const [data, setData] = useState({
    email: '',
    profileImage: '',
    name: '',
    lastname: '',
    profile_picture: '',
  });

  const [isUserLogin, setIsUserLogin] = useState(null);
  const isDrawerOpen = useIsDrawerOpen();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDataProfile();
    });
    return unsubscribe;
  }, [navigation, isDrawerOpen]);

  const setDataProfile = async () => {
    const userObj = store.getState().userObj?.userObj?.data;
    console.log('hereNow' + JSON.stringify(userObj));
    const user_profile_name = userObj.firstname;
    const user_profile_lastname = userObj.lastname;
    const user_profile_profile = userObj.profile_pic;
    const user_profile_email = userObj.emailLdap;
    setData({
      ...data,
      email: user_profile_email,
      name: user_profile_name,
      profile_picture: user_profile_profile,
      lastname: user_profile_lastname,
    });
  };
  const continueButtonPress = () => {
    navigation.navigate('MyProfileContainer');
  };

  const onLogoutPress = () => {
    navigation.navigate('Demo');
    clearUserSession();
  };

  var width = Dimensions.get('window').width; //full width
  var height1 = Dimensions.get('window').height; //full height\

  return (
    <LinearGradient
      style={{flex: 1, height: height1, alignItems: 'center'}}
      colors={['#e31837', '#e31837']}>
      {/* <DrawerContentScrollView scrollEnabled={false}> */}
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            margin: 20,
            marginLeft: 40,
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
            alignContent: 'center',
          }}>
          {data.profileImage != '' &&
          data.profileImage !== 'undefined' &&
          data.profileImage !== null ? (
            <Image
              source={Images.profile}
              // resizeMode="center"
              style={styles.avatar}
            />
          ) : (
            <View style={styles.profileImg1}>
              <Text
                style={{
                  fontFamily: fonts.SemiBold,
                  fontSize: sizes.regularLarge,
                  fontSize: 18,
                  color: colors.black,
                  alignItems: 'center',
                }}>
                {data?.name == '' || data.name == undefined
                  ? ''
                  : data.name[0] + data.lastname[0]}
              </Text>
            </View>
          )}

          <Text style={{color: colors.white, marginTop: 5}}>
            {data.name + ' ' + data.lastname}
          </Text>
          <Text style={{color: colors.white, marginTop: 5, fontSize: 11}}>
            {data.email}
          </Text>
          <TouchableOpacity
            onPress={() => continueButtonPress()}
            style={styles.login}>
            <Text style={styles.logintext}>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 120, width: width}}>
          <DrawerItem
            label="Home"
            labelStyle={{color: 'white', marginLeft: -15}}
            // onPress={() => navigation.navigate('MyProfileContainer')}
            onPress={() => navigation.navigate('TabsScreen')}
            icon={() => (
              <Image source={Images.home} style={styles.back_image} />
            )}
          />
          <DrawerItem
            label="Questions answered by me"
            labelStyle={{color: 'white', marginLeft: -15}}
            // onPress={() => navigation.navigate('MyProfileContainer')}
            onPress={() =>
              navigation.navigate('Question_answered_by_meContainer')
            }
            icon={() => (
              <Image
                source={Images.questions_answered_by_me}
                style={styles.back_image}
              />
            )}
          />
          <DrawerItem
            label="Questions asked by me"
            labelStyle={{color: 'white', marginLeft: -15}}
            // onPress={() => navigation.navigate('MyProfileContainer')}
            onPress={() =>
              navigation.navigate('Question_answered_asked_meContainer')
            }
            icon={() => (
              <Image
                source={Images.questions_answered_by_me}
                style={styles.back_image}
              />
            )}
          />
          <DrawerItem
            label="Knowledge created by me"
            labelStyle={{color: 'white', marginLeft: -15}}
            onPress={() =>
              navigation.navigate('Knowledge_Created_by_meContainer')
            }
            icon={() => (
              <Image
                source={Images.knowledge_created_by_me}
                style={styles.back_image}
              />
            )}
          />
          <DrawerItem
            label="Bookmarks"
            labelStyle={{color: 'white', marginLeft: -15}}
            onPress={() => navigation.navigate('BookmarkContainer')}
            icon={() => (
              <Image source={Images.bookmarks} style={styles.bookmarks_image} />
            )}
          />
          <DrawerItem
            label="Usefull links"
            labelStyle={{color: 'white', marginLeft: -15}}
            onPress={() => navigation.navigate('Useful_Links_Container')}
            icon={() => (
              <Image
                source={Images.usefullink_icon}
                style={styles.back_image}
              />
            )}
          />

          <DrawerItem
            label="Guidelines "
            labelStyle={{color: 'white', marginLeft: -15}}
            onPress={() => navigation.navigate('Guidelines_Container')}
            icon={() => (
              <Image
                source={Images.usefullink_icon}
                style={styles.back_image}
              />
            )}
          />

          {/* <View>

            <DrawerItem
              label="Setting"
              labelStyle={{ color: 'white', marginLeft: -15 }}
              icon={() => <Image source={Images.setting} style={styles.back_image1} />}
              onPress={() => alert('Comming soon !')}
            />
          </View> */}

          <View style={{marginTop: height1 - 700}}>
            <DrawerItem
              label="Logout"
              labelStyle={{color: 'white', marginLeft: -15}}
              icon={() => (
                <Image source={Images.logout} style={styles.back_image1} />
              )}
              // onPress={() => alert('Are your sure to logout?')}
              onPress={() =>
                Alert.alert('Alert!', 'Are you sure you want to logout?', [
                  {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                  },
                  // { text: "YES", onPress: () => BackHandler.exitApp() }
                  {text: 'YES', onPress: () => onLogoutPress()},
                ])
              }
            />
          </View>
        </View>

        {/* <View style= {{position:'absolute',marginTop:120}}>
          
        </View> */}
      </View>

      {/* </DrawerContentScrollView> */}
    </LinearGradient>
  );
});
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingTop: 0,
    overlayColor: '#6b52ae',
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#000000',
    borderRadius: 100 / 2,
  },
  LoginHereButton: {
    color: '#5190c0',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  profileImgContainer: {
    height: 66,
    width: 66,
    borderRadius: 33,
    borderWidth: 1,
    marginLeft: 15,
    marginTop: 60,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderColor: colors.view_color,
  },
  profileImg: {
    height: 66,
    width: 66,
    borderRadius: 66,
    // resizeMode: 'contain'
  },
  back_image: {
    height: 20,
    width: 20,
    marginLeft: 25,
  },

  bookmarks_image: {
    height: 20,
    width: 17,
    marginLeft: 25,
  },

  back_image1: {
    height: 20,
    width: 20,
    marginLeft: 25,
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: {flex: 1, width: '70%', backgroundColor: 'transparent'},
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},
  drawerLabel: {color: 'white'},
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },

  login: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 25,
    width: 90,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    borderColor: colors.white,
    borderWidth: 1,
  },
  profileImg1: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  logintext: {
    color: colors.white,
    fontSize: sizes.medium,
    fontFamily: fonts.Regular,
  },
});

const mapDispatchToProps = dispatch => ({
  clearUserSession: () => dispatch(clearUserSession()),
});
export default connect(null, mapDispatchToProps)(CustomSidebarMenu);
