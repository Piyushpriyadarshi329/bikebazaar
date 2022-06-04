import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashContainer from '../screens/Splash/SplashContainer';
import LoginContainer from '../screens/Login/LoginContainer';

import {
  View,
  StyleSheet,
  Alert,
  Button,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {colors, fonts, Navigation, sizes} from '../utils/theme';
// import { import } from '@babel/types';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const SplashStack = createNativeStackNavigator();
const SplashScreen = () => (
  <SplashStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="SplashContainer">
    <SplashStack.Screen name="SplashContainer" component={SplashContainer} />
    <SplashStack.Screen name="LoginContainer" component={LoginContainer} />
  </SplashStack.Navigator>
);

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none" initialRouteName={'Splash'}>
    <RootStack.Screen
      name="Splash"
      component={SplashScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </RootStack.Navigator>
);

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

const textStyles = StyleSheet.create({
  inputSelected: {
    fontSize: 12,
    color: colors.hint_color,
  },
  inputUnselected: {
    fontSize: 12,
    color: colors.login_button_color,
  },
});

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: Platform.OS == 'ios' ? 0 : 0,
  },
  drawerStyles: {flex: 1, width: '60%', backgroundColor: 'transparent'},
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},
  drawerLabel: {color: 'white', marginLeft: -16},
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: 0,
  },

  back_image: {
    height: 18,
    width: 25,
    marginTop: Platform.OS == 'ios' ? 10 : 25,
    alignSelf: 'center',
    marginLeft: 20,
  },
  back_image1: {
    height: 18,
    width: 25,
    marginTop: Platform.OS == 'ios' ? 10 : 65,
    alignSelf: 'center',
    marginLeft: 20,
  },
});

export default AppNavigator;
