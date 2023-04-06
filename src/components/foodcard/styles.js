import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    marginHorizontal: 4,
    marginVertical: Size.SIZE_14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  image: {
    width: '100%',
    height: Scaler.scaleSize(100),
  },

  mainContainer: {
    padding: Size.SIZE_10,
  },

  // === TEXT STYLE

  textTitle: {
    ...Typo.TextNormalBold,
  },

  textDesc: {
    ...Typo.TextSmallRegular,
    color: Colors.COLOR_GRAY,
  },

  textPrice: {
    ...Typo.TextNormalBold,
    color: Colors.COLOR_PRIMARY,
  },
});

export default styles;
