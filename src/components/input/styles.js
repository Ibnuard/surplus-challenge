import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {},

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.COLOR_WHITE,
    borderWidth: 2,
    borderColor: Colors.COLOR_LIGHT_GRAY,
    borderRadius: 12,
    marginVertical: 8,
    paddingHorizontal: Size.SIZE_14,
    alignItems: 'center',
  },

  inputContainerError: {
    flexDirection: 'row',
    backgroundColor: Colors.COLOR_WHITE,
    borderWidth: 2,
    borderColor: Colors.COLOR_RED,
    borderRadius: 12,
    marginVertical: 8,
    paddingHorizontal: Size.SIZE_14,
    alignItems: 'center',
  },

  input: {
    flex: 1,
  },

  // === Text Style

  textLabel: {
    ...Typo.TextNormalBold,
  },

  textLabelError: {
    ...Typo.TextNormalBold,
    color: Colors.COLOR_RED,
  },
});

export default styles;
