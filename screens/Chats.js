import React, { useLayoutEffect, useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { firebase } from '../components/firebase-config';
import Icon from 'react-native-vector-icons/AntDesign';
// import {  } from 'react-native-gesture-handler'
import Scroll from './ChatScroll';
import * as Animatable from 'react-native-animatable';
import Support from './ChatSupport';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Touch from '../constants/Touch';
import Fire from '../screens/Fire';

const Chats = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(Fire.shared.uid);
  const [chatName, setChatName] = useState('');
  const [id, setId] = useState('');
  const name = [];

  
  useEffect(() => {
    if (!user) {
      return enterLogin();
    }
  }, []);

  const enterSet = (id) => {
    if (id == 'yjqBKJzRWKh7u5PZXyUd') {
      setId(id);
      name.push('Lack of Exercise to children');
      setChatName(name);
      enterChat('yjqBKJzRWKh7u5PZXyUd', 'Lack of Exercise to children');
    } else if (id == 'ZC4NIxPd87RFOmzBCD0e') {
      setId(id);
      name.push('Common illness');
      setChatName(name);
      enterChat('ZC4NIxPd87RFOmzBCD0e', 'Common illness');
    }
  };

  const enterChat = (id, chatName) => {
    navigation.navigate('ChatDetail');
  };

  const enterLogin = (id, chatName) => {
    navigation.navigate('LoginScreen');
  };

  const enterSupport = (title) => {
    if (title == 'Balanced Diet') {
      navigation.navigate('ChatSupportFood');
    } else if (title == 'Daily Exercise and Sports') {
      navigation.navigate('ChatSupportSport');
    } else if (title == 'Illness & vaccination') {
      navigation.navigate('ChatSupportIllness');
    }
  };

  if (user) {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            height: '170%',
          }}>
          <View style={styles.header}>
            <Text style={styles.inline}>ChatRoom</Text>
          </View>

          <View style={styles.memos}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ width: '200%' }}
              showsHorizontalScrollIndicator={false}>
              <Scroll
                bgcolor="#F96D41"
                background={require('../assets/images/lack.png')}
                title="Lack of Exercise to children"
                author=""
                animation="bounceInLeft"
                onScreenChange={enterChat}
              />
              <Scroll
                bgcolor="#C5505E"
                background={require('../assets/images/commonillness.png')}
                title="Common Illness"
                author=""
                // animation = "bounceInLeft"
                onScreenChange={enterChat}
              />
              <Scroll
                bgcolor="#424BAF"
                background={require('../assets/images/breast.png')}
                title="Breast Feeding Problems"
                author=""
                onScreenChange={enterChat}
              />
              <Scroll
                bgcolor="#31Ad66"
                background={require('../assets/images/videogame.png')}
                title="Effects of Video Games"
                author=""
                onScreenChange={enterChat}
              />
            </ScrollView>
          </View>

          <View style={styles.supportview}>
            <Text style={styles.support}>Support</Text>
          </View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1500}
            style={[
              styles.rectangleone,
              {
                shadowOffset: { width: 100, height: 100 },
                shadowColor: 'rgba(138, 149, 158, 0.2)',
                shadowOpacity: 1,
                elevation: 30,
                backgroundColor: '#FFFFFF',
              },
            ]}>
            <Support
              image={require('../assets/icons/exercise.png')}
              title="Daily Exercise and Sports"
              subtitle=""
              onSupportScreenChange={() =>
                enterSupport('Daily Exercise and Sports')
              }
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInRight"
            duration={1500}
            style={[
              styles.rectangleone,
              { top: 580, backgroundColor: '#F4F9FC' },
            ]}>
            <Support
              image={require('../assets/icons/apple.png')}
              title="Balanced Diet"
              subtitle=""
              onSupportScreenChange={() => enterSupport('Balanced Diet')}
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1500}
            style={[
              styles.rectangleone,
              { top: 690, backgroundColor: '#F4F9FC' },
            ]}>
            <Support
              image={require('../assets/icons/illness.png')}
              title="Illness & vaccination"
              subtitle=""
              onSupportScreenChange={() =>
                enterSupport('Illness & vaccination')
              }
            />
          </Animatable.View>
        </ScrollView>
      </View>
    );
  } else {
    enterLogin();
  }
  return null;
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    flex: 1,
    left: 25,
    top: 100,
  },
  inline: {
    fontSize: 30,
    letterSpacing: -0.5,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  memos: {
    height: 250,
    position: 'absolute',
    top: 160,
    width: '100%',
    marginLeft: 10,
  },
  supportview: {
    position: 'absolute',
    left: 25,
    top: 420,
  },
  support: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    color: COLORS.white,
  },
  rectangleone: {
    height: 65,
    width: 300,
    position: 'absolute',
    alignSelf: 'center',
    top: 470,
    borderRadius: 18,
  },
});
