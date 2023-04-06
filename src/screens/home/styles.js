import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    backgroundColor: Colors.COLOR_PRIMARY,
    padding: Size.SIZE_14,
  },

  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerLeft: {
    flex: 1,
  },

  headerLeftChild: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerBottom: {
    marginTop: Size.SIZE_24,
  },

  searchBar: {
    marginTop: Size.SIZE_14,
  },

  mainContainer: {
    flex: 1,
    paddingHorizontal: Size.SIZE_14,
    justifyContent: 'center',
  },

  loadingIndicator: {
    alignSelf: 'center',
  },

  noDataContainer: {
    alignItems: 'center',
  },

  // === TEXT STYLE

  textYourLocation: {
    ...Typo.TextSmallRegular,
    color: Colors.COLOR_WHITE,
    marginRight: 4,
  },

  textLocationValue: {
    ...Typo.TextNormalBold,
    color: Colors.COLOR_WHITE,
  },

  textWelcome: {
    ...Typo.TextLargeBold,
    color: Colors.COLOR_WHITE,
  },

  textNoData: {
    ...Typo.TextNormalRegular,
    color: Colors.COLOR_GRAY,
    marginTop: Size.SIZE_14,
  },
});

export default styles;
