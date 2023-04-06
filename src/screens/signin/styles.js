import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_PRIMARY,
  },

  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Colors.COLOR_WHITE,
    paddingBottom: Scaler.scaleSize(64),
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

  input: {
    marginBottom: Size.SIZE_14,
  },

  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: Size.SIZE_8,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Size.SIZE_24,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
  },

  socialLogo: {
    width: Size.SIZE_18,
    height: Size.SIZE_18,
    marginRight: Size.SIZE_10,
  },

  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
    padding: Size.SIZE_14,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 4,
  },

  socialContainer: {
    flexDirection: 'row',
  },

  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: Size.SIZE_24,
  },

  registerButton: {
    marginHorizontal: Size.SIZE_8,
  },

  buttonContainer: {
    flex: 1,
    marginTop: Size.SIZE_24,
  },
  // === TEXT STYLE

  textTitle: {
    ...Typo.TextExtraLargeBold,
    color: Colors.COLOR_WHITE,
    marginBottom: 4,
  },

  textDescription: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_WHITE,
  },

  textForgotPassword: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_DARK_GRAY,
  },

  textDivider: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_GRAY,
    paddingHorizontal: Size.SIZE_14,
  },

  textSocial: {
    ...Typo.TextNormalRegular,
  },

  textDontHaveAcc: {
    ...Typo.TextNormalRegular,
  },

  textRegister: {
    ...Typo.TextNormalBold,
    color: Colors.COLOR_PRIMARY,
  },
});

export default styles;
