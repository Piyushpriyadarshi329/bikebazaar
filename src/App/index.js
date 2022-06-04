import React, {memo, useEffect, useState} from 'react';
import {Platform, UIManager, View, Text, BackHandler, Alert} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import RootScreen from '../screens/RootScreen';
import {persistor, store} from '../redux/actions/store';
import NetInfo from '@react-native-community/netinfo';
import JailMonkey from 'jail-monkey';
import colors from '../globals/colors';

console.disableYellowBox = true;

if (__DEV__) {
  global.XMLHttpRequest =
    global.originalXMLHttpRequest || global.XMLHttpRequest;
  global.FormData = global.originalFormData || global.FormData;
  fetch;
  if (window.__FETCH_SUPPORT__) {
    window.__FETCH_SUPPORT__.blob = false;
  } else {
    global.Blob = global.originalBlob || global.Blob;
    global.FileReader = global.originalFileReader || global.FileReader;
  }
}

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

enableScreens(true);

const App = memo(props => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setOnline(state.isConnected);
      if (JailMonkey.isJailBroken()) {
        Alert.alert('Alert', 'You are unathorised user to access this application. Rooted Devices are not allowed inside application !', [
          {text: 'OK', onPress: () => BackHandler.exitApp()},
        ]);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate persistor={persistor}>
          {!isOnline ? (
            <View
              style={{
                width: '100%',
                height: 50,
                backgroundColor: colors.main_color,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontWeight: '700', color: colors.white}}>
                Your Are Offline
              </Text>
            </View>
          ) : null}
          <RootScreen {...props} />
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
});

export default App;
