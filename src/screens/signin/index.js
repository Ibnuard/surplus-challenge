import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES_RES} from '../../helper/images';
import {Button, Input, Modal} from '../../components';
import Touchable from '../../components/touchable';
import {AuthContext} from '../../context';
import {wait} from '../../utils/utils';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  // == modal state
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalType, setModalType] = React.useState('loading');
  const [modalMessage, setModalMessage] = React.useState('');

  // === sample acc
  const ACCOUNT = {
    email: 'surplus@gmail.com',
    password: '123456',
  };

  // === auth context
  const {signIn} = React.useContext(AuthContext);

  // === handle on sign in
  const onSignButtonPressed = () => {
    setIsLoading(true);

    // == check email
    if (email.toLowerCase() === ACCOUNT.email && password == ACCOUNT.password) {
      wait(2000).then(() => signIn());
    } else {
      setModalMessage('Akun tidak dapat ditemukan, mohon periksa kembali!');
      setModalType('popup');
    }
  };

  // ==== RENDER
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={IMAGES_RES.authHeader}
            resizeMode={'cover'}
            style={styles.headerBg}
          />
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.textTitle}>Masuk</Text>
          <Text style={styles.textDescription}>
            Pastikan kamu sudah pernah membuat akun Surplus
          </Text>
        </View>

        {/* MAIN CONTAINER */}
        <View style={styles.mainContainer}>
          <View>
            <Input
              label={'E-mail'}
              containerStyle={styles.input}
              placeholder={'Alamat email kamu'}
              onChangeText={text => setEmail(text)}
              value={email}
              errorMessage={'Silahkan masukan alamat e-mail'}
            />
            <Input
              label={'Kata sandi'}
              placeholder={'Masukan kata sandi'}
              showEye
              onChangeText={text => setPassword(text)}
              value={password}
              errorMessage={'Silahkan masukan kata sandi'}
            />
            <Touchable style={styles.forgotPasswordContainer}>
              <Text style={styles.textForgotPassword}>Lupa kata sandi?</Text>
            </Touchable>
          </View>

          {/* BUTTON CONTAINER */}
          <View style={styles.buttonContainer}>
            <Button
              disabled={!email || !password}
              title="Masuk"
              onPress={() => onSignButtonPressed()}
            />
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.textDivider}>Atau</Text>
              <View style={styles.divider} />
            </View>

            {/* SOCIAL CONTAINER */}
            <View style={styles.socialContainer}>
              <Touchable style={styles.socialButton}>
                <Image
                  source={IMAGES_RES.socialIcon.facebook}
                  style={styles.socialLogo}
                  resizeMode={'contain'}
                />
                <Text style={styles.textSocial}>Facebook</Text>
              </Touchable>
              <Touchable style={styles.socialButton}>
                <Image
                  source={IMAGES_RES.socialIcon.google}
                  style={styles.socialLogo}
                  resizeMode={'contain'}
                />
                <Text style={styles.textSocial}>Google</Text>
              </Touchable>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.textDontHaveAcc}>Belum punya akun?</Text>
              <Touchable
                style={styles.registerButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.textRegister}>Yuk daftar</Text>
              </Touchable>
            </View>
          </View>
        </View>
      </View>
      <Modal
        visible={isLoading}
        type={modalType}
        message={modalMessage}
        onPress={() => setIsLoading(false)}
      />
    </ScrollView>
  );
};

export default SignInScreen;
