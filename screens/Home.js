import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { firebase } from '../components/firebase-config';
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
import Fire from '../screens/Fire';

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18 }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

export default function Home({ navigation, name }) {
  const [username, setUsername] = useState([]);
  const [device, setDevice] = useState(null);
  const [isUi, setIsUi] = useState(null);

  const names = [];

  useEffect(() => {
    const subscribe = firebase
      .firestore()
      .collection('users')
      .doc(Fire.shared.uid)
      .collection('userInfo')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          names.push(doc.data().name);
          //console.log(doc.data().name)
          //console.log(Fire.shared.state.user.name);
          setUsername(doc.data().name);
        });
      });
    return subscribe;
  }, [names]);

  const profileUser = {
    name: names,
  };

  const PhysicalGrowth = {
    id: 1,
    bookName: 'Physical Growth',
    bookCover: images.PhysicalGrowth,
    rating: 4.5,
    language: 'Eng',
    pageNo: '',
    author: '',
    navigate: 'PhysicalGrowth',
    genre: ['Health', 'Fitness', 'Caring'],
    readed: '',
    description:
      'Young children rapidly grow, develop and achieve important milestones between birth and age 4, creating the foundation for later growth. Physical development is one domain of infant development. It relates to changes, growth and skill development of the body, including development of muscles and senses. This will introduce developmental milestones in addition to influences on early physical growth and development',
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };

  const FoodPlan = {
    id: 2,
    bookName: 'Food Plan',
    bookCover: images.FoodPlan,
    rating: 4.1,
    language: 'Eng',
    pageNo: '',
    author: '',
    navigate: 'FoodPlan',
    genre: ['Health', 'Fitness', 'Mentality'],
    readed: '',
    description:
      'Deciding what to feed your little baby every day can be a challenge so we prepared sample meal plans, feeding schedules, and information on what and when to feed, should help eliminate some of the confusion. Make sure you make a follow up.',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };

  const MentalHealth = {
    id: 3,
    bookName: 'Mental Health',
    bookCover: images.MentalHealth,
    rating: 3.5,
    language: 'Eng',
    pageNo: '',
    author: '',
    navigate: 'MentalHealth',
    genre: ['Mentality', 'Health'],
    readed: '',
    description:
      'Being mentally healthy during childhood means reaching developmental and emotional milestones and learning healthy social skills and how to cope when there are problems. Mentally healthy children have a positive quality of life and can function well at home, in school, and in their communities.',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const SocialSkills = {
    id: 4,
    bookName: 'Social Skills',
    bookCover: images.SocialSkills,
    rating: 3.5,
    language: 'Eng',
    pageNo: '',
    author: '',
    navigate: 'SocialSkils',
    genre: ['Fitness', 'Health', 'Caring'],
    readed: '',
    description:
      'Social skills are the skills we use everyday to interact and communicate with others. They include verbal and non-verbal communication, such as speech, gesture, facial expression and body language. A person has strong social skills if they have the knowledge of how to behave in social situations and understand both written and implied rules when communicating with others. Children with a diagnosis of Autism Spectrum Disorder (ASD), Pervasive Developmental Disorder (Not Otherwise Specified) and Asperger’s have difficulties with social skills.',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const EmotionalTreatment = {
    id: 5,
    bookName: 'Emotional Treatment',
    bookCover: images.EmotionalTreatment,
    rating: 3.5,
    language: 'Eng',
    pageNo: '',
    author: '',
    navigate: 'EmotionalTreatment',
    genre: ['Health', 'Fitness', 'Mentality'],
    readed: '',
    description:
      'From the beginning, you’ve to consider your baby to be a unique person with specific character traits and preferences. She, however, has had only a dim notion of herself as a person separate from you. Now her sense of identity is coming into bloom. As she develops a growing sense of herself as an individual, she’ll also become increasingly conscious of you as a separate person.',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const CommonIllness = {
    id: 6,
    bookName: 'Common Illness',
    bookCover: images.CommonIllness,
    rating: 3.5,
    language: 'Eng',
    pageNo: '',
    author: '',
    navigate: 'CommonIllness',
    genre: ['Illness', 'Fitness', 'Mentality'],
    readed: '',
    description:
      'Children are prone to getting sick during the first few years of life as their bodies build immunity to infections. While it’s hard to stop your child from ever getting sick, germs can spread easily with kids playing in close proximity to each other. Some of the main ways diseases can be spread are through the air when a sick child coughs or sneezes, or through direct contact when a sick child touches infectious parts of their body then touches toys or other children, who may then touch their mouth, nose or eyes.',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const Banner1 = {
    id: 6,
    bookCover: images.homebanner,
  };

  const Banner2 = {
    id: 7,
    bookCover: images.homebanner2,
  };

  const myBooksData = [
    {
      ...PhysicalGrowth,
      ArticleName: 'PHYSICAL GROWTH',
    },
    {
      ...FoodPlan,
      ArticleName: 'FOOD PLAN',
    },
    {
      ...MentalHealth,
      ArticleName: 'MENTAL HEALTH',
    },
    {
      ...SocialSkills,
      ArticleName: 'SOCIAL SKILLS',
    },
    {
      ...EmotionalTreatment,
      ArticleName: 'EMOTIONAL TREATMENT',
    },
    {
      ...CommonIllness,
      ArticleName: 'COMMON ILLNESS',
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: '',
      books: [Banner1, Banner2],
    },
  ];

  const [profile, setFiredUid] = React.useState(profileUser);
  const [categories, setCategories] = React.useState(categoriesData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);

  const [selectedCategory, setSelectedCategory] = React.useState(1);

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greetings */}
        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>Welcome😊</Text>
            <Text style={{ ...FONTS.h6, color: COLORS.white }}>
              {profile.name}
            </Text>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 3,
            paddingBottom: 3,
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('LoginScreen')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 33,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Image
                source={icons.profile}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: COLORS.darkRed,
            borderRadius: SIZES.radius,
          }}>
          {/* Claim */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log('Claim')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                CHILDREN'S CARE ASSISTANT APP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderMyBookSection(myBooks) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate(item.navigate, {
              book: item,
            })
          }>
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray,
              }}>
              {item.ArticleName}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>Categories</Text>

          <TouchableOpacity onPress={() => console.log('See More')}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: 'flex-start',
                textDecorationLine: 'underline',
              }}></Text>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ flex: 1, marginRight: SIZES.padding }}
          onPress={() => setSelectedCategory(item.id)}>
          {selectedCategory == item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      (a) => a.id == selectedCategory
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({ item }) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row' }}
            onPress={() =>
              navigation.navigate('', {
                book: item,
              })
            }>
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{
                width: '95%',
                height: 150,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: '5%' }}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Header Section */}
      <View style={{ height: 200 }}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>

      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Books Section */}
        <View>{renderMyBookSection(myBooks)}</View>

        {/* Categories Section */}
        <View style={{ marginTop: SIZES.padding }}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
