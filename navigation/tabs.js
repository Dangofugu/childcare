import React from 'react';
import { Image, ImageBackGround, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ArticleDetail,
  Settings,
  Chats,
  ChatSupportDetail,
  OnboardingScreen,
  ChatDetail,
  LoginScreen,
  RegisterScreen,
  ArticleRead,
  Home,
  Articles,
} from '../screens';
import { icons, COLORS, FONTS } from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '15%',
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      tabBarActiveBackgroundColor="#EE3248"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray2;

          switch (route.name) {
            case 'Home':
              return (
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={icons.home}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                  <Text style={{ ...FONTS.body5, color: tintColor }}>Home</Text>
                </View>
              );

            case 'Articles':
              return (
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={icons.article}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                  <Text style={{ ...FONTS.body5, color: tintColor }}>
                    Articles
                  </Text>
                </View>
              );

            case 'Chats':
              return (
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={icons.chat}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                  <Text style={{ ...FONTS.body5, color: tintColor }}>
                    Chats
                  </Text>
                </View>
              );

            case 'Setting':
              return (
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={icons.settings}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                  <Text style={{ ...FONTS.body5, color: tintColor }}>
                    Settings
                  </Text>
                </View>
              );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Articles"
        component={Articles}
        options={{
          tabBarLabel: 'Articles',
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
