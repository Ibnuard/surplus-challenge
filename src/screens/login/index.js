import * as React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {Button} from '../../components';
import {IMAGES_RES} from '../../helper/images';
import {Colors} from '../../styles';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.COLOR_WHITE} />
      <View style={styles.backgroundContainer}>
        <Image
          source={IMAGES_RES.authBg}
          resizeMode={'cover'}
          style={styles.authBg}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.mainCard}>
          <Text style={styles.textTitle}>Selamat Datang di Surplus</Text>
          <Text style={styles.textDescription}>
            Selamatkan makanan berlebih di aplikasi Surplus agar tidak terbuang
            sia-sia
          </Text>
          <View style={styles.buttonContainer}>
            <Button buttonStyle={styles.buttonRegister} title={'Daftar'} />
            <Button invert title="Sudah punya akun? Masuk" />
          </View>
          <Text style={styles.textTerms}>
            Dengan daftar atau masuk, Anda menerima{' '}
            <Text style={styles.textLink} onPress={() => console.log('terms')}>
              syarat dan ketentuan
            </Text>{' '}
            serta <Text style={styles.textLink}>kebijakan privasi</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
