import React, {useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  Platform,
} from 'react-native';

// import SlidingUpPanel from 'rn-sliding-up-panel';

import {COLORS, SIZES, icons, images} from '../constants';
import {HeaderBar, TextIconButton, Rating} from '../components';

const Place = ({navigation, route}) => {
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const [selectedHotel, setSelectedHotel] = React.useState(null);
  const [allowDragging, setAllowDragging] = React.useState(true);

  const _draggedValue = React.useRef(new Animated.Value(0)).current;
  let _panel = useRef(null);

  React.useEffect(() => {
    let {selectedPlace} = route.params;
    setSelectedPlace(selectedPlace);

    _draggedValue.addListener(valueObj => {
      if (valueObj.value > SIZES.height) {
        setAllowDragging(false);
      }
    });

    return () => {
      _draggedValue.removeAllListeners();
    };
  }, [_draggedValue, route.params]);

  function renderedPlace() {
    return (
      <ImageBackground
        source={selectedPlace?.image}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <HeaderBar
          title=""
          leftOnPressed={() => navigation.goBack()}
          right={false}
          containerStyle={{
            marginTop: SIZES.padding * 2,
          }}
        />

        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            justifyContent: 'flex-end',
            marginBottom: 100,
          }}>
          {/* Name & Ratings */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: COLORS.white,
              }}>
              {selectedPlace?.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginRight: 5,
                  color: COLORS.white,
                }}>
                {selectedPlace?.rate}
              </Text>
              <Image
                source={icons.star}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>

          {/* Description */}
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.white,
            }}>
            {selectedPlace?.description}
          </Text>

          {/*  TextIcon Button */}
          <TextIconButton
            label="Book a Flight"
            icon={icons.aeroplane}
            customContainerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={() => console.log('book a flight')}
          />
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* {renderedPlace()} */}
    </View>
  );
};

export default Place;
