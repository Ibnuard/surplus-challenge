import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_PRIMARY,
  },

  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  headerBg: {
    height: Scaler.scaleSize(220),
    width: '100%',
  },

  topContainer: {
    height: '30%',
    justifyContent: 'flex-end',
    paddingHorizontal: Size.SIZE_24,
  },
});

export default styles;
