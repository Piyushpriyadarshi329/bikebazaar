import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors, fonts, sizes} from '../../utils/theme';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo_new: {
    height: 102,
    width: 102,
    marginLeft:25,
    borderRadius: 51
  },
  textInputIcon: {
    height: 20,
    width: 30,
    position: 'absolute',
    marginLeft: 20
  },
  textInputIconLock: {
    height: 30,
    width: 30,
    position: 'absolute',
    marginLeft: 20
  },
  textInputSubView: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  forgetPassButton: {
    marginTop: 60,
    width: 150,
    alignSelf: 'flex-end',
  },
  loginButton: {
    marginTop: 60,
    height: 50, 
    backgroundColor: colors.main_color, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 200,
    alignSelf: 'center'
  },
  forgetPassText: {
    color: 'gray',
    textAlign: 'right',
  },
  titleText: {
    color: 'gray',
    paddingLeft: 30
  },
  loginText: {
    color: 'white',
    fontWeight: '600',
  },
  textInput: {
    flex: 1,
    height: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
    paddingLeft: 30,
  },
});
