import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, constants } from '../../utils/theme';
export default StyleSheet.create({

  
 
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
 
  searchTextInput: {
    fontSize: sizes.regularLarge,
    color: colors.black,
    fontFamily: fonts.Regular,
    textAlign: 'left',
    height:40,
  },
  searchTextBackground: {
    borderBottomColor:colors.colorF5F4F7,
    borderTopColor:colors.colorF5F4F7,
    backgroundColor: colors.colorF5F4F7,
    height:55
  },

  searchTextCancelContainer: {
   justifyContent: 'center' 
  },
  searchTextCancel: {
    marginRight: 15,
    fontFamily: fonts.Medium,
    fontSize: sizes.medium,
    color: colors.black,
  },
  
});
