import { StyleSheet,Dimensions } from 'react-native';
import { colors, fonts, sizes } from '../../utils/theme';
import scale from '../../utils/scale';

export default StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  keyBordContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  scrollContainer: {
    backgroundColor: colors.white
  },
  containerSub: {
    flex: 1,
    backgroundColor: colors.white
  },
  logoContainer: {
    marginTop:40,
    alignItems: 'center'

  },

  logo: {
    justifyContent: 'center',
    height: 100,
    width: 100,
    resizeMode: 'contain'

  },
  HedingText: {
    alignSelf: 'center',
    fontFamily: fonts.SemiBold,
    fontSize: sizes.regular,
    color: colors.black,
    margin: 15
  },

  textFieldContainer: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,

  },
  field: {
    fontSize: sizes.medium,
    color: colors.gray,
    fontFamily: fonts.Regular
  },
  emailInput: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderBottomColor: colors.bottomBorder,
    fontSize: sizes.medium,
    color: colors.black,
    fontFamily: fonts.Regular,
    textAlign: 'left',
  },
  login: {
    backgroundColor: colors.main,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15

  },
  loginText: {
    color: colors.white,
    fontSize: sizes.medium,
    fontFamily: fonts.Medium,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  forgot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15

  },
  forgotText: {
    color: colors.gray,
    fontSize: sizes.medium,
    fontFamily: fonts.Regular,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 15,
  },


  or: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15

  },
  orText: {
    color: colors.gray,
    fontSize: sizes.medium,
    fontFamily: fonts.Regular,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,

  },
  orLine: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 1,
    flex: 1,
    backgroundColor: colors.bottomBorder
  },


  social: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: colors.gray

  },
  socialText: {
    flex: 3,
    color: colors.gray,
    fontSize: sizes.medium,
    fontFamily: fonts.Regular,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  socialLogo: {
    flex: 1,
    justifyContent: 'center',
    height: 20,
    width: 20,
    resizeMode: 'contain'

  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15

  },
  signupText: {
    color: colors.gray,
    fontSize: sizes.medium,
    fontFamily: fonts.Regular,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  signupSubText: {
    color: colors.gray,
    fontSize: sizes.medium,
    fontFamily: fonts.SemiBold,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  cleartext: {
    color: colors.white,
    fontSize: 14,
    padding:5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:colors.main_dark_color,
    fontFamily: fonts.SemiBold,
    borderRadius:10,
  },
  
  pop_up_correct: {
    height: 15,
    width: 15,
  },

  login_pop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 50,
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: colors.main_dark_color,
  },
});
