import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../styles';

const SearchBar = props => {
  return (
    <View style={[styles.container, props?.containerStyle]}>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={Colors.COLOR_GRAY}
      />
      <Icon name="search1" size={20} color={Colors.COLOR_GRAY} />
    </View>
  );
};

export default SearchBar;
