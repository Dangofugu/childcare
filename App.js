import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import {
  ArticleDetail,
  Settings,
  Chats,
  ChatSupportDetail,
  OnboardingScreen,
  ChatDetail,
  LoginScreen,
  RegisterScreen,
  ChatSupportIllness,
  ChatSupportSport,
  ChatSupportFood,
  DetailScreen,
} from './screens';
import {
  FoodPlan,
  SocialSkils,
  MentalHealth,
  Emotional,
  CommonIllness,
  PhysicalGrowth,
} from './categories';
import Tabs from './navigation/tabs';
import { useFonts } from 'expo-font';
//import { onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase'; // 4.8.1
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};
const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  const _id = Math.random().toString(36).substring(7);
  useEffect(() => {
    async function async() {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
      //AsyncStorage.removeItem('isAppFirstLaunched');
    }
    async();
  }, [isAppFirstLaunched]);

  const [loaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#F96D41',
            },
          }}
          //initialRouteName={'Home'}
        >
          {/* OnboardingScreen */}
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          {/* Tabs */}
          <Stack.Screen name="Home" component={Tabs} />

          {/* Screens */}
          <Stack.Screen
            name="ArticleDetail"
            component={ArticleDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChatSupportIllness"
            component={ChatSupportIllness}
          />
          <Stack.Screen name="ChatSupportFood" component={ChatSupportFood} />
          <Stack.Screen name="ChatSupportSport" component={ChatSupportSport} />

          <Stack.Screen name="Chats" component={Chats} />
          <Stack.Screen
            name="ChatDetail"
            component={ChatDetail}
            options={{
              title: 'CHILDCARE',
              headerBackTitleVisible: false,
              headerBackTitle: 'Chatroom',
              headerBackTitleStyle: {
                color: '#25282F',
              },
              headerTitleStyle: {
                color: '#25282F',
                fontSize: 30,
              },
              headerShown: true,
            }}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

          {/* Categories */}
          <Stack.Screen
            name="FoodPlan"
            component={FoodPlan}
            options={{
              title: 'Food Plan',
              headerBackTitleVisible: false,
              headerBackTitle: 'Home',
              headerBackTitleStyle: {
                color: '#25282F',
              },
              headerTitleStyle: {
                color: '#25282F',
                fontSize: 30,
              },
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="SocialSkils"
            component={SocialSkils}
            options={{
              title: 'Social Skills',
              headerBackTitleVisible: false,
              headerBackTitle: 'Home',
              headerBackTitleStyle: {
                color: '#25282F',
              },
              headerTitleStyle: {
                color: '#25282F',
                fontSize: 30,
              },
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="MentalHealth"
            component={MentalHealth}
            options={{
              title: 'Mental Health',
              headerBackTitleVisible: false,
              headerBackTitle: 'Home',
              headerBackTitleStyle: {
                color: '#25282F',
              },
              headerTitleStyle: {
                color: '#25282F',
                fontSize: 30,
              },
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="EmotionalTreatment"
            component={Emotional}
            options={{
              title: 'Emotional Treatment',
              headerBackTitleVisible: false,
              headerBackTitle: 'Home',
              headerBackTitleStyle: {
                color: '#25282F',
              },
              headerTitleStyle: {
                color: '#25282F',
                fontSize: 30,
              },
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="CommonIllness"
            component={CommonIllness}
            options={{
              title: 'Common Illness',
              headerBackTitleVisible: false,
              headerBackTitle: 'Home',
              headerBackTitleStyle: {
                color: '#25282F',
              },
              headerTitleStyle: {
                color: '#25282F',
                fontSize: 30,
              },
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="PhysicalGrowth"
            component={PhysicalGrowth}
            options={{
              title: 'Physical Growth',
              headerBackTitleVisible: false,
              headerBackTitle: 'Home',
              headerBackTitleStyle: {
                color: '#25282F',
              },
              headerTitleStyle: {
                color: '#25282F',
                fontSize: 30,
              },
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
