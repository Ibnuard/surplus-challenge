import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: Size.SIZE_10,
  },

  input: {
    ...Typo.TextNormalRegular,
    flex: 1,
    marginRight: Size.SIZE_14,
  },
});

export default styles;
