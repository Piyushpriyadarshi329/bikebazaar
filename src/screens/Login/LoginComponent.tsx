import React, {memo, useState, useRef} from 'react';
import {
  View,
  Dimensions,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Images} from '../../utils/theme';
import Spinner from 'react-native-loading-spinner-overlay';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const LoginComponent = memo(props => {
  return (
    <View  style={styles.container}>
      <View>
        <Image source={Images.bike_icon} style={styles.logo_new} />
        <Text  style={[styles.titleText,{marginTop: 80,}]}>
          Email
        </Text>
        <View style={styles.textInputSubView}>
          {/* <Image source={Images.mail} style={styles.textInputIcon} /> */}
          <TextInput
            placeholder={'email@domin.com'}
            placeholderTextColor={'gray'}
            style={styles.textInput}
          />
        </View>
        <Text style={[styles.titleText,{marginTop: 50}]}>
          Password
        </Text>
        <View style={styles.textInputSubView}>
          {/* <Image source={Images.lock} style={styles.textInputIconLock} /> */}
          <TextInput
            placeholder={'*******'}
            placeholderTextColor={'gray'}
            style={styles.textInput}
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.forgetPassButton}>
        <Text style={styles.forgetPassText}>
          Forget Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}>
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>

      <Spinner
        // visible={props.isLoading}
        textContent={'Loading...'}
        color={'white'}
        overlayColor={'rgba(0, 0, 0, 0.45)'}
        // textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
});

export default LoginComponent;
