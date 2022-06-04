import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.charcoalGrey,
  },
  loginButton: {
    height: 100,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.paleOliveGreen,
  },
});
