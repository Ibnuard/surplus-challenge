import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// === OTHER
import Icon from 'react-native-vector-icons/AntDesign';

// === SCREEN ROUTE
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import BoardingScreen from '../screens/boarding';
import SplashScreen from '../screens/splash';
import SignInScreen from '../screens/signin';
import SignUpScreen from '../screens/signup';
import {Colors} from '../styles';

//create stack screen
const Stack = createNativeStackNavigator();

//create bottom tab
const Tab = createBottomTabNavigator();

//===================================
// ========== GAP ===================
// ==================================

export const SplashStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

//auth stack screen
export const AuthStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Boarding"
        component={BoardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

//tab stack screen
export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'meh';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.COLOR_PRIMARY,
        tabBarInactiveTintColor: Colors.COLOR_GRAY,
        tabBarHideOnKeyboard: true,
      })}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
