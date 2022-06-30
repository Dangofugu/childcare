import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animated from 'react-native-animatable';
export default class Scroll extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onScreenChange}>
        <Animated.View
          animation={this.props.animation}
          duration={1200}
          style={[styles.memo1, { backgroundColor: this.props.bgcolor }]}>
          <View style={styles.insideone}>
            <Text style={{ fontSize: 20, color: '#fff', width: 160 }}>
              {this.props.title}
            </Text>
            <Text style={{ color: '#fff', fontSize: 14, marginVertical: 5 }}>
              {this.props.author}
            </Text>
          </View>
          <View style={styles.insidetwo}>
            <ImageBackground
              source={this.props.background}
              style={{ width: '100%', height: '120%' }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.insidethree}>
            <Text style={{ fontSize: 20, color: '#fff', width: 160 }}></Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  memo1: {
    flex: 1,
    margin: 10,
    borderRadius: 18,
    marginBottom: 0,
  },
  insideone: {
    padding: 10,
  },
  insidetwo: {
    flex: 8,
    alignItems: 'center',
    marginBottom: 0,
    justifyContent: 'center',
  },
  insidethree: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 10,
  },
});
