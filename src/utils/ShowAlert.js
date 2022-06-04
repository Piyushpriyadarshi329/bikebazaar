import {
    Platform,
    Alert,
    ToastAndroid
} from 'react-native';
export default  ShowAlert = (props) => {

    Platform.OS === 'ios' ? Alert.alert(props, '', [
        { text: "OK", onPress: () => {  } }
    ]) :
        ToastAndroid.showWithGravity(
            props,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
}
export const isIOS = () => {

    var result = false
    Platform.OS === 'ios' ? result=true : result=false
    return result
}