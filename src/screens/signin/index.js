import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES_RES} from '../../helper/images';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={IMAGES_RES.authHeader}
          resizeMode={'cover'}
          style={styles.headerBg}
        />
      </View>
      <View style={styles.topContainer}>
        <Text>Daftar</Text>
        <Text>Lengkapi isisan untuk mendaftar</Text>
      </View>
    </View>
  );
};

export default SignInScreen;
