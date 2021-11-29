import React, {useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  Platform,
} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {COLORS, SIZES, icons, images} from '../constants';
import {HeaderBar, TextIconButton, Rating} from '../components';
import {MapStyle} from '../styles';

const Place = ({navigation, route}) => {
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const [selectedHotel, setSelectedHotel] = React.useState(null);
  const [allowDragging, setAllowDragging] = React.useState(true);

  const _draggedValue = React.useRef(new Animated.Value(0)).current;
  let _panel = useRef(null);

  React.useEffect(() => {
    let {selectedPlace} = route.params;
    setSelectedPlace(selectedPlace);

    // Set up listener that will disable panel dragging whenever the mapview is shown

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

  function renderMap() {
    return (
      <SlidingUpPanel
        ref={c => (_panel = c)}
        allowDragging={allowDragging}
        animatedValue={_draggedValue}
        draggableRange={{top: SIZES.height + 120, bottom: 120}}
        showBackdrop={false}
        snappingPoints={[SIZES.height + 120]}
        height={SIZES.height + 120}
        friction={0.7}
        onBottomReached={() => {
          setAllowDragging(true);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
          }}>
          {/* Panel Header */}
          <View
            style={{
              height: 120,
              backgroundColor: 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.up_arrow}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white,
              }}
            />
            <Text style={{color: COLORS.white}}>Swipe for Details</Text>
          </View>

          {/*  Panel Detail */}
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MapView
              style={{
                width: '100%',
                height: '100%',
              }}
              provider={PROVIDER_GOOGLE}
              initialRegion={selectedPlace?.mapInitialRegion}
              customMapStyle={MapStyle}>
              {selectedPlace?.hotels.map((hotel, index) => (
                <Marker
                  key={index}
                  coordinate={hotel.latlng}
                  identifier={hotel.id}
                  onPress={() => {
                    setSelectedHotel(hotel);
                  }}>
                  <Image
                    source={
                      selectedHotel?.id == hotel.id
                        ? icons.bed_on
                        : icons.bed_off
                    }
                    resizeMode="contain"
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </Marker>
              ))}
            </MapView>

            {/* Header */}
            <HeaderBar
              title={selectedPlace?.name}
              leftOnPressed={() => _panel.hide()}
              right={true}
              containerStyle={{
                position: 'absolute',
                top: SIZES.padding * 2,
              }}
            />

            {/*  Hotel Details */}
            {selectedHotel && (
              <View
                style={{
                  position: 'absolute',
                  bottom: 30,
                  left: 0,
                  right: 0,
                  padding: SIZES.radius,
                }}>
                <Text style={{color: COLORS.white}}>
                  Hotels in {selectedPlace?.name}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    padding: SIZES.radius,
                    borderRadius: 15,
                    backgroundColor: COLORS.transparentBlack1,
                  }}>
                  <Image
                    source={selectedHotel?.image}
                    resizeMode="cover"
                    style={{
                      width: 90,
                      height: 120,
                      borderRadius: 15,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      marginLeft: SIZES.radius,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: COLORS.white}}>
                      {selectedHotel?.name}
                    </Text>

                    <Rating
                      containerStyle={{
                        marginTop: SIZES.base,
                      }}
                      rate={selectedHotel?.rate}
                    />

                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.lightGray,
                            fontSize:
                              Platform.OS === 'ios' ? SIZES.body4 : SIZES.body5,
                          }}>
                          From $ {selectedHotel?.price} / Night
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </SlidingUpPanel>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {renderedPlace()}
      {renderMap()}
    </View>
  );
};

export default Place;
