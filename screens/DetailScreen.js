import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { firebase } from '../components/firebase-config';
import { Button, ActivityIndicator } from 'react-native-paper';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Fire from './Fire';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: '',
      shortDesc: '',
      desc1: '',
      desc2: '',
      desc3: '',
      imguri: '',
    };
  }
  componentDidMount = () => {
    //console.log()
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userId: Fire.shared.uid });
      }
    });
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({ quantity: 1 });
      const items = firebase
        .database()
        .ref('article/')
        .orderByChild('id')
        .equalTo(this.props.route.params.id); // .equalTo(this.props.route.params.id);
      //const items = firebase.database().ref('products/-MMpIds11dC43fghQdOI');
      items.on('value', (dataSnapshot) => {
        //console.log(dataSnapshot.val())
        dataSnapshot.forEach((child) => {
          //console.log(child.key)
          this.setState({
            id: child.val().id,
            title: child.val().title,
            category: child.val().category,
            shortDesc: child.val().shortDesc,
            desc1: child.val().desc1,
            desc2: child.val().desc2,
            desc3: child.val().desc3,
            imguri: child.val().url,
            key: child.key,
            imageName: child.val().imageName,
          });
        });
        this.setState({
          isLoading: false,
        });
      });
    });
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };
  render() {
    return (
      <View style={{backgroundColor: COLORS.black, flex:1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: COLORS.black,
          paddingBottom: 20,
         
        }}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <ImageBackground
          style={style.headerImage}
          source={{ uri: this.state.imguri }}>
          <View style={style.header}>
            <Icon
              name="arrow-back-ios"
              size={28}
              color={COLORS.black}
              onPress={this.props.navigation.goBack}
            />
          </View>
        </ImageBackground>
        <View>
          <View style={style.iconContainer}>
            <Icon name="book" color={COLORS.white} size={28} />
          </View>
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.primary,
              }}>
              {this.state.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: COLORS.white,
                marginTop: 5,
              }}>
              {this.state.category}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}></View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 25, color: COLORS.lightGreen }}>
                Description
              </Text>
              <Text
                style={{ lineHeight: 20, color: COLORS.white, marginTop: 10 }}>
                {this.state.desc1}
              </Text>
              <Text
                style={{ lineHeight: 20, color: COLORS.white, marginTop: 15 }}>
                {this.state.desc2}
              </Text>

              <Text
                style={{ lineHeight: 20, color: COLORS.white, marginTop: 15 }}>
                {this.state.desc3}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default DetailScreen;
