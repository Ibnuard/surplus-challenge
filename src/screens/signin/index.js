import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES_RES} from '../../helper/images';
import {Button, Input} from '../../components';
import Touchable from '../../components/touchable';
import {AuthContext} from '../../context';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  // === auth context
  const {signIn} = React.useContext(AuthContext);

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
            <Button disabled={false} title="Masuk" onPress={() => signIn()} />
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
    </ScrollView>
  );
};

export default SignInScreen;
