export const countries = [
  {
    // THIS IS THE FIRST LOCATION - YELLOWSTONE
    id: 1,
    name: 'Yellowstone',
    image: require('./../assets/images/malaysia/malaysia_map.png'),
    places: [
      {
        id: 1,
        name: 'Old Faithful',
        location: 'Wyoming',
        description: 'Kuching, officially the City of Kuching',
        image: require('./../assets/images/malaysia/kuching.png'),
        rate: '4.89',
        theme: '🏔',
        mapInitialRegion: {
          latitude: 1.557177,
          longitude: 110.351902,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        hotels: [
          {
            id: '1',
            name: 'Riverside Majestic Hotel',
            image: require('./../assets/images/malaysia/kuching/riverside_majestic_hotel.jpg'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 1.557907,
              longitude: 110.352079,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Fairy Falls Trail',
        description:
          'Kuala Lumpur is the capital of Malaysia. Its modern skyline is.',
        image: require('./../assets/images/malaysia/kuala_lumpur.png'),
        rate: '4.89',
        theme: '🏔',
        mapInitialRegion: {
          latitude: 3.135662,
          longitude: 101.687128,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        hotels: [
          {
            id: '1',
            name: 'Hilton Kuala Lumpur',
            image: require('./../assets/images/malaysia/kuala_lumpur/hilton_kuala_lumpur.jpg'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 3.135308,
              longitude: 101.685729,
            },
          },
        ],
      },
    ],
  },
  {
    // THIS IS THE SECOND LOCATION - YOSEMITE
    id: 2,
    name: 'Yosemite',
    image: require('./../assets/images/india/india_map.png'),
    places: [
      {
        id: 1,
        name: 'Goa',
        description: 'Known for its gorgeous beaches, stellar nightlife.',
        image: require('./../assets/images/india/goa.png'),
        rate: '4.89',
        theme: '🏔',
        mapInitialRegion: {
          latitude: 15.498931,
          longitude: 73.767945,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        hotels: [
          {
            id: '1',
            name: 'Taj Holiday Village',
            image: require('./../assets/images/india/goa/taj_holiday_village.jpg'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 15.499815,
              longitude: 73.769295,
            },
          },
          {
            id: '2',
            name: 'Taj Fort Aguada',
            image: require('./../assets/images/india/goa/taj_fort_aguada.jpeg'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 15.497798,
              longitude: 73.767097,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Jaipur',
        description:
          'The Pink City, Jaipur is a destination you cannot miss when visiting India. Jaipur is a perfect reflection of what the royal state of Rajasthan is about.',
        image: require('./../assets/images/india/jaipur.png'),
        rate: '4.89',
        theme: '🏔',
        mapInitialRegion: {
          latitude: 26.928055,
          longitude: 75.788295,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        hotels: [
          {
            id: '1',
            name: 'Umaid Mahal',
            image: require('./../assets/images/india/jaipur/umaid_mahal.webp'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 26.92794,
              longitude: 75.789056,
            },
          },
        ],
      },
    ],
  },
  {
    // THIS IS THE THIRD LOCATION - GRAND CANYON
    id: 3,
    name: 'Grand Canyon',
    image: require('./../assets/images/indonesia/indonesia_map.png'),
    places: [
      {
        id: 1,
        name: 'Bali',
        description:
          'Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.',
        image: require('./../assets/images/indonesia/bali.png'),
        rate: '4.89',
        theme: '🏔',
        mapInitialRegion: {
          latitude: -8.422605,
          longitude: 115.274697,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        hotels: [
          {
            id: '1',
            name: 'The Kayon Jungle Resort',
            image: require('./../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -8.422426,
              longitude: 115.275185,
            },
          },
          {
            id: '2',
            name: 'Green View Private Villas',
            image: require('./../assets/images/indonesia/bali/green_view_private_villas.webp'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -8.422203,
              longitude: 115.275142,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Jakarta',
        description:
          'Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.',
        image: require('./../assets/images/indonesia/jakarta.png'),
        rate: '4.89',
        theme: '🏔',
        mapInitialRegion: {
          latitude: -6.227687,
          longitude: 106.826979,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044,
        },
        hotels: [
          {
            id: '1',
            name: 'Oakwood Premier Cozmo',
            image: require('./../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -6.227846,
              longitude: 106.825391,
            },
          },
          {
            id: '2',
            name: 'JW Marriott Hotel',
            image: require('./../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -6.227036,
              longitude: 106.827333,
            },
          },
        ],
      },
    ],
  },
];

const dummyData = {countries};

export default dummyData;
