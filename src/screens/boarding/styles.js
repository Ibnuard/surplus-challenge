import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  authBg: {
    height: '100%', // responseve image
    width: '100%',
  },

  backgroundContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  mainCard: {
    backgroundColor: Colors.COLOR_WHITE,
    alignItems: 'center',
    padding: Size.SIZE_24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  buttonContainer: {
    width: '100%',
    marginVertical: Size.SIZE_24,
  },

  buttonRegister: {
    marginBottom: Size.SIZE_12,
  },

  // ==== TEXT STYLE

  textTitle: {
    ...Typo.TextLargeBold,
    marginBottom: Size.SIZE_14,
  },

  textDescription: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_GRAY,
    textAlign: 'center',
  },

  textTerms: {
    ...Typo.TextSmallRegular,
    color: Colors.COLOR_GRAY,
  },

  textLink: {
    ...Typo.TextSmallRegular,
    color: Colors.COLOR_ACCENT,
  },
});

export default styles;
