import {StyleSheet} from 'react-native';
import {Colors, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.COLOR_PRIMARY,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  containerInactive: {
    width: '100%',
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  containerInvert: {
    width: '100%',
    backgroundColor: Colors.COLOR_TRANSPARENT,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.COLOR_PRIMARY,
  },

  containerInvertInactive: {
    width: '100%',
    backgroundColor: Colors.COLOR_TRANSPARENT,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.COLOR_LIGHT_GRAY,
  },

  //text style
  textTitle: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_WHITE,
  },

  textTitleInactive: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_GRAY,
  },

  textTitleInvert: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_PRIMARY,
  },

  textTitleInvertInactive: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_GRAY,
  },
});

export default styles;
