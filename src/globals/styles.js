import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors, fonts, sizes } from '../utils/theme';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:colors.view_color_new
  }, 
  sub_container: {
    flex:1,
    width: width,
    backgroundColor : colors.view_color_new
  },
  sub_row_container: {
    flexDirection:'row',
  },
  white_row_container: {
    flexDirection:'row',
  },
  back_image: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    height: Platform.OS == 'ios'? 130:110,
    width: width,
    position:'absolute',
  },
  back_image1: {
    flexDirection:'row',
    height: Platform.OS == 'ios'? 125:100,
    width: width,
    alignItems:'center',

  },

  HedingText: {
    marginTop: 30,
    fontFamily: fonts.SemiBold,
    fontSize: sizes.regularLarge,
    color: colors.main_dark_color,
    marginLeft: 25
  },

  inputText: {
    fontSize: sizes.regularLarge,
    fontFamily: fonts.Regular,
    paddingLeft: 5,
    alignSelf: 'center',
    marginLeft: 10,
    flex:1,
    // textAlign:'center',
    borderBottomColor: colors.white,
    color: colors.black,
    borderBottomWidth: 1,
  },

  inputText_answer: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    paddingLeft: 5,
    alignSelf: 'center',
    marginLeft: 10,
    flex:1,
    height:50,
    // textAlign:'center',
    borderBottomColor: colors.white,
    color: colors.black,
    borderBottomWidth: 1,
  },

  logintext: {
    color: colors.black,
    margin:15,
    fontSize: sizes.medium,
    fontFamily: fonts.SemiBold,
  },

  logintext_red: {
    color: colors.main_dark_color,
    fontSize: sizes.small,
    fontFamily: fonts.SemiBold,
  },

  touchable_opacity: {
    margin:15,
    position:'absolute',
    right:0,
    },

  banner_heading: {
    color: colors.text_color_semi_black,
    margin:5,
    marginTop:7,
    fontSize: sizes.small,
    fontFamily: fonts.SemiBold,
    flex:1
  },

  banner_text: {
    color: colors.black,
    marginLeft:5,
    marginRight:5,
    fontSize: sizes.small,
    fontFamily: fonts.Regular,
    flexWrap: 'nowrap',
    flexShrink: 1,
  },

  banner_last_text: {
    color: colors.dark_gray,
    margin:5,
    fontSize: sizes.small,
    fontFamily: fonts.SemiBold,
    flexWrap: 'nowrap',
    flexShrink: 1
  },

  banner_last_text1: {
    color: colors.dark_gray,
    fontSize: 11,
    fontFamily: fonts.SemiBold,
    flexWrap: 'nowrap',
    flexShrink: 1,
    marginLeft:5
  },
  
  banner_last_text2: {
    color: colors.dark_gray,
    fontSize: 11,
    fontFamily: fonts.SemiBold,
    flexWrap: 'nowrap',
    flexShrink: 1,
    marginLeft:5,
    marginTop:5
  },

  banner_2ndlast_text: {
    color: colors.gray,
    margin:5,
    width:120,
    fontSize: sizes.small,
    fontFamily: fonts.SemiBold,
    flexWrap: 'nowrap',
    flexShrink: 1

  },

  login: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 45,
    width:width-155,
    alignSelf: 'center',
    borderRadius: 10,
    marginRight: 10,
    marginTop: Platform.OS == 'ios' ? '5%' :35 ,
    marginLeft:70,
    backgroundColor: colors.white,
    paddingRight:10,
  },

  login2: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 80,
    width:width-40,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: Platform.OS == 'ios' ? '5%' :35 ,
    backgroundColor: colors.white,
    borderColor:colors.text_color_semi_black,
    borderWidth:1.5,
    paddingRight:10,
  },

  text_regular_14: {
    color: colors.white,
    marginTop: 20,
    fontSize: sizes.regularLarge,
    fontFamily: fonts.Regular
    // fontFamily:fonts.Bold
  },

  logo: {
    right:0,
    height: 10,
    width: 15,
    position:'absolute',
    marginRight:40,
    alignSelf:'center'
  },

  logo_pass: {
    right:0,
    height: 15,
    width: 13,
    position:'absolute',
    marginRight:40,
    alignSelf:'center'
  },
  
  back_image2: {
    height: 20,
    width: 20,
    marginLeft:20,
  },

  bookmark_icon: {
    height: 30,
    width: 20,
  },

  send_answer: {
    height: 10,
    width: 15,
    marginTop:5
  },

  like_icon: {
    height: 20,
    width: 18,
    margin:3
  },

  commnet_icon: {
    height: 16,
    width: 16,
    margin:5,
    marginTop:8
  },

  back_image3: {
    height: 20,
    width: 20,
    right:0,
    marginLeft:5,
    marginRight:5,
  },

  submit_answer: {
    height: 20,
    width: 25,
    right:0,
    marginLeft:5,
    marginRight:5,
  },

  bookmark_logo: {
    height: 20,
    width: 20,
    position:'absolute',
    right:0,
    margin:5
  },

  nav_image2: {
    height: 22,
    width: 20,
  },
  banner_image: {
    height: 75,
    width: 85,
    margin:5,
    borderRadius:10
  }, 
  profileImg1: {
    height: 75,
    width: 85,
    margin:5,
    borderRadius:10,
    backgroundColor: colors.main_color_dull,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav_image3: {
    height: 20,
    width: 20,
  },
  spinnerTextStyle: {
    color: '#fff'
  },
  modalBackground: {
    flex: 1,
    width:width,
    height:height-200,
    marginRight:-20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    width: width -40,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  
  profileImg2: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.main_color_dull,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pop_up_image: {
    height: 20,
    width: 20,
    marginTop:5
  },
  pop_up_cancel: {
    height: 20,
    width: 20,
  },

  submmittext: {
    color: colors.white,
    margin:15,
    fontSize: sizes.medium,
    fontFamily: fonts.SemiBold,
  },
  
  cleartext: {
    color: colors.white,
    fontSize: 14,
    padding:5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:colors.main_dark_color,
    fontFamily: fonts.SemiBold,
    borderRadius:5,
  },
   
  Sideext: {
    color: colors.black,
    fontSize: 14,
    padding:10,
    fontFamily: fonts.SemiBold,
    marginBottom:10,
  },
  
  Sideext_selected: {
    color: colors.black,
    fontSize: 14,
    padding:10,
    fontFamily: fonts.SemiBold,
    backgroundColor:colors.white,
    marginBottom:10,
  },
  
  pop_up_correct: {
    height: 10,
    width: 10,
  },

  login_pop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: colors.main_dark_color,
  },



searchSection_date1: {
  marginTop: 20,
  flexDirection:'row', 
},


searchSection_date3: {
  flexDirection:'row', 
},

searchSection_date2: {
  marginTop: 20,
  flex:1,
  flexDirection:'column', 
},


dobText: {
  alignItems: 'center',
  borderBottomColor: colors.bottomBorder,
  fontSize: sizes.medium,
  color: colors.black,
  fontFamily: fonts.Bold,
  textAlign: 'left',
  marginTop:-13,
  marginLeft:5
},


placeholderText: {
  marginLeft: 20,
  marginRight: 0,
  borderWidth:0,
  color:'#000'
,  alignItems: 'flex-start',
  fontFamily: fonts.Bold,
  
},

dateText: {
  marginLeft: 20,
  marginRight: 0,
  borderWidth:0,
  alignItems: 'flex-start',
  color: colors.black,
  fontFamily: fonts.Bold,
  
},

dateInput: {
  marginLeft: 0,
  marginRight: 0,
  borderWidth:0,
  alignItems: 'flex-start',
  color: colors.black,
  fontFamily: fonts.Bold,
  
},
logo_date: {
  width:20,
  height:20
},
});
