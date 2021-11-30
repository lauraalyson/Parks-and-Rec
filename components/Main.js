import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';

import TextButton from '../assets/TextButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import parkData from '../assets/data/parkData';
import {sizes, colors} from '../assets/theme';
import profile from '../assets/images/person.png';
import MoreImages from './MoreImages';

Entypo.loadFont();

const parkItemSize = sizes.width / 3;
const placesItemSize =
  Platform.OS === 'ios' ? sizes.width / 1.25 : sizes.width / 1.2;
const emptyItemSize = (sizes.width - placesItemSize) / 2;

const Main = ({navigation}) => {
  const parkScrollX = useRef(new Animated.Value(0)).current;
  const placesScrollX = useRef(new Animated.Value(0)).current;

  const [parks, setParks] = useState([{id: -1}, ...parkData.parks, {id: -2}]);
  const [places, setPlaces] = useState([
    {id: -1},
    ...parkData.parks[0].places,
    {id: -2},
  ]);

  const [placesScrollPosition, setPlacesScrollPosition] = useState(0);

  function renderParks() {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={parkItemSize}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        data={parks}
        keyExtractor={item => `${item.id}`}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: parkScrollX}}}],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={event => {
          var position = (
            event.nativeEvent.contentOffset.x / parkItemSize
          ).toFixed(0);

          setPlaces([{id: -1}, ...parkData.parks[position].places, {id: -2}]);
        }}
        renderItem={({item, index}) => {
          const opacity = parkScrollX.interpolate({
            inputRange: [
              (index - 2) * parkItemSize,
              (index - 1) * parkItemSize,
              index * parkItemSize,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const mapSize = parkScrollX.interpolate({
            inputRange: [
              (index - 2) * parkItemSize,
              (index - 1) * parkItemSize,
              index * parkItemSize,
            ],
            outputRange: [25, Platform.OS === 'ios' ? 80 : 60, 25],
            extrapolate: 'clamp',
          });

          const fontSize = parkScrollX.interpolate({
            inputRange: [
              (index - 2) * parkItemSize,
              (index - 1) * parkItemSize,
              index * parkItemSize,
            ],
            outputRange: [15, 25, 15],
            extrapolate: 'clamp',
          });

          if (index === 0 || index === parks.length - 1) {
            return (
              <View
                style={{
                  width: parkItemSize,
                }}
              />
            );
          } else {
            return (
              <Animated.View
                opacity={opacity}
                style={{
                  width: parkItemSize,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Animated.Text
                  style={{
                    color: colors.black,
                    fontSize: fontSize,
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Animated.Text>
              </Animated.View>
            );
          }
        }}
      />
    );
  }

  function exploreButtonHandler() {
    //  Get places current index
    const currentIndex = parseInt(placesScrollPosition, 10) + 1;

    console.log(places[currentIndex]);
    // Navigate to the next screen
    navigation.navigate('Place', {selectedPlace: places[currentIndex]});
  }

  function renderPlaces() {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={places}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        snapToAlignment="center"
        snapToInterval={
          Platform.OS === 'ios' ? placesItemSize + 28 : placesItemSize
        }
        scrollEventThrottle={16}
        decelerationRate={0}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: placesScrollX}}}],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={event => {
          var position = (
            event.nativeEvent.contentOffset.x / placesItemSize
          ).toFixed(0);

          setPlacesScrollPosition(position);
        }}
        renderItem={({item, index}) => {
          const opacity = placesScrollX.interpolate({
            inputRange: [
              (index - 2) * placesItemSize,
              (index - 1) * placesItemSize,
              index * placesItemSize,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          let activeHeight = 0;

          if (Platform.OS === 'ios') {
            if (sizes.height > 800) {
              activeHeight = sizes.height / 2;
            } else {
              activeHeight = sizes.height / 1.65;
            }
          } else {
            activeHeight = sizes.height / 1.65;
          }

          const height = placesScrollX.interpolate({
            inputRange: [
              (index - 2) * placesItemSize,
              (index - 1) * placesItemSize,
              index * placesItemSize,
            ],
            outputRange: [
              sizes.height / 2.25,
              activeHeight,
              sizes.height / 2.25,
            ],
            extrapolate: 'clamp',
          });

          if (index === 0 || index === places.length - 1) {
            return (
              <View
                style={{
                  width: emptyItemSize,
                }}
              />
            );
          } else {
            return (
              <Animated.View
                opacity={opacity}
                style={{
                  width: placesItemSize,
                  height: height,
                  alignItems: 'center',
                  borderRadius: 20,
                  padding: 10,
                }}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    marginHorizontal: sizes.padding,
                  }}>
                  <Text
                    style={{
                      color: colors.white,
                      marginBottom: sizes.radius,
                      fontSize: sizes.h2,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      marginBottom: sizes.padding,
                      textAlign: 'center',
                    }}>
                    <Entypo
                      name="location-pin"
                      size={20}
                      color={colors.white}
                    />
                    {item.location}
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      marginBottom: sizes.padding * 2,
                      textAlign: 'left',
                    }}>
                    {item.description}
                  </Text>

                  <TextButton
                    label="Explore"
                    customContainerStyle={{
                      position: 'absolute',
                      bottom: -20,
                      width: 80,
                    }}
                    onPress={() => exploreButtonHandler()}
                  />
                </View>
              </Animated.View>
            );
          }
        }}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <SafeAreaView>
        <View style={styles.menuWrapper}>
          <Text style={styles.titleStyle}>Parks&Rec</Text>
          <Image source={profile} style={styles.profileImage} />
        </View>
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'ios' ? 40 : 0,
        }}>
        <View>
          <View>{renderParks()}</View>
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              height: Platform.OS === 'ios' ? 500 : 450,
            }}>
            {renderPlaces()}
          </View>
        </View>
        <MoreImages />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 10,
    opacity: 0.85,
  },
  titleStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
});

export default Main;
