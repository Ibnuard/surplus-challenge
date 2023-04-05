import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES_RES} from '../../helper/images';
import {Input} from '../../components';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState();
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
        <Text>Masuk</Text>
        <Text>Pastikan kamu sudah pernah membuat akun Surplus</Text>
      </View>
      {/* MAIN CONTAINER */}
      <View style={styles.mainContainer}>
        <View>
          <Input
            placeholder={'Alamat email kamu'}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
