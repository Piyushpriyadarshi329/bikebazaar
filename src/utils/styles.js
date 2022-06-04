import { StyleSheet } from 'react-native';
import { NavgationStyles,sizes, colors, fonts } from '../utils/theme'

import {
  StatusBar,
  Platform,
} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 5,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,

  },
  containerWithoutBottomLine: {
    paddingTop: 0,
    paddingBottom: 5,
    backgroundColor: colors.white,
    

  },
  containerSub: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS == "ios" ? 20 : 25,
    height: Platform.OS === 'ios' ? 64 : 73
  },
  StatusBar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    backgroundColor: '#CD9F41'
  },
  backButton: {
    marginLeft: 22,
    height: 16,
    width: 20,
    marginTop:10,
    alignItems: 'flex-start',
    resizeMode: 'contain'
  },

  logo_filter: {
    marginLeft: 10,
    height: 19,
    width: 39,
    alignItems: 'flex-start',
    resizeMode: 'contain'
  },

  notification_Button: {
    height: 22,
    width: 20,
    marginRight:20,
    resizeMode: 'contain',
  },

  calender_Button: {
    height: 22,
    width: 20,
    marginRight:10,
    resizeMode: 'contain',
  },

  menuButton: {
    marginLeft: 22,
    height: 24,
    width: 24,
    alignItems: 'flex-start',
    resizeMode: 'contain'
  },

  bottomTab: {
    top:0,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  rightButton: {
    marginRight: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  text: {
    marginLeft:20,
    marginRight:10,
    textAlign: 'center',
    fontSize: sizes.regularLarge,
    color: colors.black,
    // fontFamily: fonts.Medium,
  },
  textWhite: {
    marginLeft:20,
    marginRight:10,
    textAlign: 'center',
    fontSize: sizes.regularLarge,
    color: colors.white,
    fontFamily: fonts.SemiBold,
  },

  textBlack: {
    marginLeft:20,
    marginRight:10,
    fontSize: sizes.regularLarge,
    color: colors.black,
    fontFamily: fonts.SemiBold,
  },

  textWhite_Title: {
    marginRight:10,
    textAlign: 'left',
    fontSize: sizes.regularLarge,
    color: colors.white,
    fontFamily: fonts.SemiBold,
  },


  textblack_Title: {
    marginRight:10,
    textAlign: 'left',
    fontSize: sizes.regularLarge,
    color: colors.hint_color,
    fontFamily: fonts.SemiBold,
  },


  logo_center : {
    height : 19,
    width:140,
    marginRight:10,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  text2: {
    marginLeft:10,
    marginRight:10,
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.black,
    fontSize: sizes.regular,
    // fontFamily: fonts.Medium,
  },
  sortText: {
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.white,
    fontSize: sizes.medium,
    // fontFamily: fonts.Regular,
  },
  restText: {
    marginRight: 15,
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.sortButton,
    fontSize: sizes.medium,
    // fontFamily: fonts.Regular,
  },

  resetText: {
    marginRight: 20,
    textAlign: 'center',
    fontSize: sizes.regular,
    color: colors.login_button_color,
    fontSize: sizes.medium,
    // fontFamily: fonts.Regular,
  },

  rightView:{
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center'
  },

  leftView:{
    flexDirection:'row',
  },

  centerView:{
    flex: 2,
    marginRight:15,
    marginLeft:15,
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },

  filterViewTitle:{
    marginLeft:15,
    paddingTop: Platform.OS == "ios" ? 0 : 0,
    justifyContent : 'flex-start',
    alignSelf:'flex-start',
    alignItems:'flex-start',
  },

  search_title_View:{
    flex: 1,
    left:0,
    alignSelf : 'flex-start',
    marginTop:Platform.OS=="ios"? 12 : 0,
    marginLeft : Platform.OS == 'ios'? -120 :0
  },


  search_title_View_goal:{
    flex: 1,
    left:0,
    marginTop:Platform.OS=="ios"? 12 : 10,
    marginRight:Platform.OS=="ios"? 90 : 0
  },

  centerView1:{
    flex: 2,
    marginLeft:0,
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  separator:{
    width:1,
    height:20,
    backgroundColor: colors.white,
    marginRight:10
  },
  filter: {
    marginLeft:0,
    marginRight:25,
    width: 16,
    height: 14,
    resizeMode: 'contain'
  },
  watchlist: {
    marginLeft:0,
    marginRight:25,
    width: 17,
    height: 12,
    resizeMode: 'contain'
  },
  
  dropdown_search: {
    marginRight:5,
    marginLeft:5,
    width: 10,
    height: 5,
    marginTop:5,
    resizeMode: 'contain'
  },
  
  cal: {
    marginLeft:0,
    marginRight:15,
    width: 20,
    height: 20,
    padding:10,
    resizeMode: 'contain'
  },
  dropDown: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  }

});
