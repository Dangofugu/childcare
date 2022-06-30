import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import { firebase } from '../components/firebase-config';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

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

const Articles = ({ navigation }) => {
  const profileData = {
    name: 'Jazz',
    point: 200,
  };

  const PhysicalGrowth = {
    id: 1,
    bookName: 'Physical Growth',
    bookCover: images.PhysicalGrowth,
    rating: 4.5,
    language: 'Eng',
    pageNo: '',
    author: '',
    navigate: 'ArticleRead',
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
    navigate: 'ArticleRead2',
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
    navigate: 'ArticleRead3',
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
    navigate: 'ArticleRead4',
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
    navigate: 'ArticleRead5',
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
    navigate: 'ArticleRead6',
    genre: ['Illness', 'Fitness', 'Mentality'],
    readed: '',
    description:
      'Children are prone to getting sick during the first few years of life as their bodies build immunity to infections. While it’s hard to stop your child from ever getting sick, germs can spread easily with kids playing in close proximity to each other. Some of the main ways diseases can be spread are through the air when a sick child coughs or sneezes, or through direct contact when a sick child touches infectious parts of their body then touches toys or other children, who may then touch their mouth, nose or eyes.',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const myBooksData = [
    {
      ...PhysicalGrowth,
    },
    {
      ...FoodPlan,
    },
    {
      ...MentalHealth,
    },
    {
      ...SocialSkills,
    },
    {
      ...EmotionalTreatment,
    },
    {
      ...CommonIllness,
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'All Articles',
      books: [
        PhysicalGrowth,
        FoodPlan,
        MentalHealth,
        SocialSkills,
        EmotionalTreatment,
        CommonIllness,
      ],
    },
    {
      id: 2,
      categoryName: 'Physical Growth',
      books: [PhysicalGrowth],
    },
    {
      id: 3,
      categoryName: 'Food Plan',
      books: [FoodPlan],
    },
    {
      id: 4,
      categoryName: 'Mental Health',
      books: [MentalHealth],
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const tasks = [];

  useEffect(() => {
    const subscribe = firebase
      .database()
      .ref('article/')
      .on('value', (dataSnapshot) => {
        dataSnapshot.forEach((child) => {
          tasks.push({
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
        setData(tasks);
        console.log(tasks);
      });
    setIsloading('false');
    return subscribe;
  }, []);

  function renderButtonSection() {
    const mylist = data.map((item) => {
      //console.log(item.url)
      return (
        <TouchableOpacity
          style={{ marginLeft: SIZES.padding }}
          onPress={() =>
            navigation.navigate('DetailScreen', {
              id: item.id,
            })
          }>
          <View style={styles.container}>
            <View>
              <Image source={{ uri: item.imguri }} style={styles.image} />
              <View style={styles.milesView}>
                <Text style={styles.milesText}>{item.title}</Text>
              </View>
            </View>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.description}>• {item.shortDesc} •</Text>
            <View style={styles.smileList}>
              <Text style={styles.smile}>{item.category}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View>
        <ScrollView
          style={styles.qualityFood}
          contentContainerStyle={{ paddingRight: 10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {mylist}
        </ScrollView>
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
              navigation.navigate('ArticleDetail', {
                book: item,
              })
            }>
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              {/* Book name and author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h2,
                    color: COLORS.white,
                  }}>
                  {item.bookName}
                </Text>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>
                  {item.author}
                </Text>
              </View>

            

              {/* Genre */}
              <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                {item.genre.includes('Mentality') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>
                      Mentality
                    </Text>
                  </View>
                )}
                {item.genre.includes('Health') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>
                      Health
                    </Text>
                  </View>
                )}
                {item.genre.includes('Fitness') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>
                      Fitness
                    </Text>
                  </View>
                )}

                {item.genre.includes('Caring') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.gray,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>
                      Caring
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>


        </View>
      );
    };

    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.radius,
          paddingLeft: SIZES.padding,
        }}>
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
    <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>
      {/* Header Section */}

      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        <View>{renderButtonSection()}</View>
        {/* Categories Section */}
        <View style={{ marginTop: SIZES.padding }}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Articles;

const styles = StyleSheet.create({
  qualityFood: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingRight: 10,
  },
  container: {
    width: 300,
    height: 300,
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    marginTop: 15,
  },

  description: {
    fontFamily: 'Roboto-regular',
    color: 'gray',
    marginVertical: 8,
  },

  smile: {
    color: '#59B7C9',
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },

  smileList: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  milesView: {
    position: 'absolute',
    backgroundColor: 'rgba(129,122,115,0.9)',
    padding: 12,
    borderRadius: 10,
    bottom: 20,
    left: 20,
  },

  milesText: {
    color: '#000',
  },
});
