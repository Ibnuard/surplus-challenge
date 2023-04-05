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
    width: '65%',
    justifyContent: 'flex-end',
    paddingHorizontal: Size.SIZE_24,
    paddingVertical: Size.SIZE_14,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
    padding: Size.SIZE_24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
