import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components';
import {AuthContext} from '../../context';

const ProfileScreen = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View>
      <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export default ProfileScreen;
