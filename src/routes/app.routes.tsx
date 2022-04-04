import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Donations from '../screens/Donations';
import Saves from '../screens/Saves';
import Profile from '../screens/Profile';
import Details from '../screens/Details';

import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/styles/theme';
import { FoundationProps } from '../utils/foundation';

export type RootStackParamList = {
  Details: FoundationProps;
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

export const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen name='Home' component={StackRoutes} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name="home-outline" size={24} color={focused ? theme.colors.primary : 'black'} />
        }
      }} />
      <Tab.Screen name='Donations' component={Donations} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name="clipboard-outline" size={24} color={focused ? theme.colors.primary : 'black'} />
        }
      }} />
      <Tab.Screen name='Saves' component={Saves} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name="bookmark-outline" size={24} color={focused ? theme.colors.primary : 'black'} />
        }
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name="person-outline" size={24} color={focused ? theme.colors.primary : 'black'} />
        }
      }} />
    </Tab.Navigator>
  )
}


export const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}
