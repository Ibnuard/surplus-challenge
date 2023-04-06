import {StyleSheet} from 'react-native';
import {Colors, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // === TEXT STYLE

  textTitle: {
    ...Typo.TextLargeBold,
    color: Colors.COLOR_PRIMARY,
  },
});

export default styles;
