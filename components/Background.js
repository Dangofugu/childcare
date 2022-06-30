import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

export default function Background({ children }) {
  return (
    <ImageBackground
      source={icons.background}
      resizeMode="cover"
      style={styles.background}
      blurRadius={10}
    >
      <KeyboardAvoidingView style={styles.container} enabled>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.black ,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
