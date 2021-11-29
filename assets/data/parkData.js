export const parks = [
  {
    // THIS IS THE FIRST LOCATION - YELLOWSTONE
    id: 1,
    name: 'Yellowstone',
    image: require('./../../assets/images/Parks/Yellowstone/yellowstone3.jpg'),
    places: [
      {
        id: 1,
        name: 'Old Faithful',
        location: 'Wyoming',
        description:
          'Old Faithful Description will go here. Lorem Ipsum will be the placeholder.',
        image: require('./../../assets/images/Parks/Yellowstone/yellowstone1.jpg'),
        rating: '2',
        duration: '2',
        theme: '🏔',
        mapInitialRegion: {
          latitude: 1.557177,
          longitude: 110.351902,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
      },
      {
        id: 2,
        name: 'Fairy Falls Trail',
        location: 'Wyoming',
        description:
          'Fairy Falls trail Description will go here. Lorem Ipsum will be the placeholder.',
        image: require('./../../assets/images/Parks/Yellowstone/yellowstone2.jpg'),
        rating: '4',
        duration: '6',
        theme: '🏔',
        mapInitialRegion: {
          latitude: 3.135662,
          longitude: 101.687128,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
      },
    ],
  },
  {
    // THIS IS THE SECOND LOCATION - YOSEMITE
    id: 2,
    name: 'Yosemite',
    image: require('./../../assets/images/Parks/Yosemite/Yosemite3.jpg'),
    places: [
      {
        id: 1,
        name: 'Trail 1',
        location: 'California',
        description:
          'Yosemite trail Description will go here. Lorem Ipsum will be the placeholder.',
        image: require('./../../assets/images/Parks/Yosemite/Yosemite1.jpg'),
        rating: '4.89',
        duration: '5',
        theme: '🏔',
        mapInitialRegion: {
          latitude: 15.498931,
          longitude: 73.767945,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
      },
      {
        id: 2,
        name: 'Trail 2',
        location: 'California',
        description:
          'Yosemite Trail Description will go here. Lorem Ipsum will be the placeholder.',
        image: require('./../../assets/images/Parks/Yosemite/Yosemite2.jpg'),
        rating: '4.89',
        duration: '3',
        theme: '🏔',
        mapInitialRegion: {
          latitude: 26.928055,
          longitude: 75.788295,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
      },
    ],
  },
  {
    // THIS IS THE THIRD LOCATION - GRAND CANYON
    id: 3,
    name: 'Bryce Canyon',
    image: require('./../../assets/images/Parks/BryceCanyon/BryceCanyon3.jpg'),
    places: [
      {
        id: 1,
        name: 'Bryce Trail 1',
        location: 'Utah',
        description:
          'Trail Description will go here. Lorem Ipsum will be the placeholder.',
        image: require('./../../assets/images/Parks/BryceCanyon/BryceCanyon1.jpg'),
        rating: '4.89',
        duration: '3',
        theme: '🏔',
        mapInitialRegion: {
          latitude: -8.422605,
          longitude: 115.274697,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
      },
      {
        id: 2,
        name: 'Bryce Trail 2',
        location: 'Utah',
        description:
          'Trail Description will go here. Lorem Ipsum will be the placeholder.',
        image: require('./../../assets/images/Parks/BryceCanyon/BryceCanyon2.jpg'),
        rating: '4.89',
        duration: '2.5',
        theme: '🏔',
        mapInitialRegion: {
          latitude: -6.227687,
          longitude: 106.826979,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
      },
    ],
  },
];

const parkData = {parks};

export default parkData;
