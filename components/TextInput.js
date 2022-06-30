import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={COLORS.primary}
        underlineColor="transparent"
        mode="contained"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: COLORS.white ,
    borderColor: COLORS.primary ,
  },
  description: {
    fontSize: 13,
    color: COLORS.white,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: COLORS.error,
    paddingTop: 8,
  },
})
