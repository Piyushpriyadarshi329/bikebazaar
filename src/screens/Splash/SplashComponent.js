import React, {memo} from 'react';
import {View, ActivityIndicator, StatusBar} from 'react-native';
import styles from './styles';
import {colors, fonts, sizes} from '../../utils/theme';

const SplashComponent = memo(props => {
  return (
    <View safe style={styles.container}>
      {/* <StatusBar translucent backgroundColor={colors.main_dark_color} /> */}
      <ActivityIndicator></ActivityIndicator>
    </View>
  );
});

export default SplashComponent;
