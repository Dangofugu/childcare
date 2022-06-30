import React, { Platform, useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { firebase, auth } from '../components/firebase-config';
import Fire from '../screens/Fire';

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 5 }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

export default function App() {
  const navigation = useNavigation();
  const [user, setUser] = useState(Fire.shared.uid);
  const [profile, setFiredUid] = useState('');

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('User signed out! 😵');
        navigation.navigate('Home');
      });
  }
  function enterLogin() {
    navigation.replace('LoginScreen');
  }

  async function sharedUi() {
    if (user) {
      handleLogout();
      setFiredUid('LOGIN');
    } else {
      setFiredUid('LOGOUT');
      enterLogin();
    }
  }

  if (user) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'top',
            padding: SIZES.padding,
            backgroundColor: COLORS.black,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 70,
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius,
            }}>
            {/* Claim */}
            <TouchableOpacity style={{ flex: 1 }} onPress={handleLogout}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={icons.profile}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <Text
                  style={{
                    marginLeft: SIZES.base,
                    ...FONTS.body3,
                    color: COLORS.white,
                  }}>
                  LOGOUT
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'top',
            padding: SIZES.padding,
            backgroundColor: COLORS.black,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 70,
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius,
            }}>
            {/* Claim */}
            <TouchableOpacity style={{ flex: 1 }} onPress={enterLogin}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={icons.profile}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <Text
                  style={{
                    marginLeft: SIZES.base,
                    ...FONTS.body3,
                    color: COLORS.white,
                  }}>
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
