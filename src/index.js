/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { Splash } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {Component} from 'react';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import Browse from './screens/Browse';
import VBDenScreen from './screens/VBDenScreen';
import VBDiScreen from './screens/VBDiScreen';
import QLHopScreen from './screens/QLHopScreen';
import QLLichScreen from './screens/QLLichScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="VBDenScreen"
      activeColor="#56D611"
      inactiveColor= "#420"
      barStyle={{ backgroundColor: '#fff', borderColor: '#2980b9', borderWidth: 0.2}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="VBDen"
        component={VBDenScreen}
        options={{
          tabBarLabel: 'Văn bản đến',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="all-inbox" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="VBDi"
        component={VBDiScreen}
        options={{
          tabBarLabel: 'Văn bản đi',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="send" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="QLHop"
        component={QLHopScreen}
        options={{
          tabBarLabel: 'Quản lý họp',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="group-work" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="QLLich"
        component={QLLichScreen}
        options={{
          tabBarLabel: 'Quản lý lịch',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="date-range" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Tìm kiếm',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (

    <NavigationContainer>
        {/* <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Browse" component={Browse} />
      </Stack.Navigator> */}
      <MyTabs/>
    </NavigationContainer>
  );
}
export default App;

