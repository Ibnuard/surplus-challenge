import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Touchable from '../touchable';

const Input = props => {
  const [isSecured, setIsSecured] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  // ==== handle on empty value when input blur
  const handleOnEmptyValueBlur = () => {
    if (props?.value?.length < 1) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={isError ? styles.textLabelError : styles.textLabel}>
        {props?.label ?? 'Label'}
      </Text>
      <View
        style={isError ? styles.inputContainerError : styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={Colors.COLOR_GRAY}
          onBlur={() => {
            handleOnEmptyValueBlur();
          }}
        />
        {props?.showEye ? (
          <Touchable onPress={() => setIsSecured(!isSecured)}>
            <Icon
              name={isSecured ? 'eye' : 'eyeo'}
              size={24}
              color={Colors.COLOR_GRAY}
            />
          </Touchable>
        ) : null}
      </View>
    </View>
  );
};

export default Input;
