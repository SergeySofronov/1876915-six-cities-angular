import { Place, HousingType } from '@app/types';

const placeDetails: Place[] = [
  {
    id: 'a7815e5b-73b0-4494-8cce-02a61eb1ea57',
    title: 'Waterfront with extraordinary view',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: HousingType.Apartment,
    price: 390,
    images: ['https://15.design.htmlacademy.pro/static/hotel/15.jpg', 'https://15.design.htmlacademy.pro/static/hotel/6.jpg', 'https://15.design.htmlacademy.pro/static/hotel/18.jpg', 'https://15.design.htmlacademy.pro/static/hotel/12.jpg', 'https://15.design.htmlacademy.pro/static/hotel/4.jpg', 'https://15.design.htmlacademy.pro/static/hotel/11.jpg'],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: ['Kitchen', 'Washer', 'Fridge', 'Wi-Fi', 'Air conditioning', 'Heating', 'Towels', 'Laptop friendly workspace', 'Washing machine', 'Coffee machine'],
    host: {
      isPro: false,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 2.5,
    bedrooms: 2,
    maxAdults: 2
  },
  {
    id: '2078b191-fdc7-4c28-aca4-81f57525db9e',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: HousingType.Apartment,
    price: 247,
    images: ['https://15.design.htmlacademy.pro/static/hotel/12.jpg', 'https://15.design.htmlacademy.pro/static/hotel/18.jpg', 'https://15.design.htmlacademy.pro/static/hotel/17.jpg', 'https://15.design.htmlacademy.pro/static/hotel/6.jpg', 'https://15.design.htmlacademy.pro/static/hotel/13.jpg', 'https://15.design.htmlacademy.pro/static/hotel/5.jpg'],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    goods: ['Cable TV', 'Baby seat', 'Washer', 'Breakfast', 'Kitchen'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 2.1,
    bedrooms: 1,
    maxAdults: 9
  },
  {
    id: '75ca5879-fbb0-40f2-a85d-98419c1a84e0',
    title: 'Canal View Prinsengracht',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: HousingType.Apartment,
    price: 237,
    images: ['https://15.design.htmlacademy.pro/static/hotel/18.jpg', 'https://15.design.htmlacademy.pro/static/hotel/16.jpg', 'https://15.design.htmlacademy.pro/static/hotel/20.jpg', 'https://15.design.htmlacademy.pro/static/hotel/11.jpg', 'https://15.design.htmlacademy.pro/static/hotel/10.jpg', 'https://15.design.htmlacademy.pro/static/hotel/14.jpg'],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
    },
    goods: ['Heating', 'Washer', 'Towels', 'Baby seat'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.3,
    bedrooms: 1,
    maxAdults: 5
  },
  {
    id: '03a2d1bf-55e6-4bd7-88f7-9588990b211f',
    title: 'Perfectly located Castro',
    description: 'Design interior in most sympathetic area! Completely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: HousingType.Room,
    price: 191,
    images: ['https://15.design.htmlacademy.pro/static/hotel/14.jpg', 'https://15.design.htmlacademy.pro/static/hotel/18.jpg', 'https://15.design.htmlacademy.pro/static/hotel/1.jpg', 'https://15.design.htmlacademy.pro/static/hotel/16.jpg', 'https://15.design.htmlacademy.pro/static/hotel/3.jpg', 'https://15.design.htmlacademy.pro/static/hotel/8.jpg'],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    goods: ['Laptop friendly workspace', 'Wi-Fi', 'Washing machine', 'Dishwasher', 'Towels', 'Kitchen', 'Fridge', 'Coffee machine'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 1
  },
  {
    id: 'a6992e16-9609-4055-892f-1c2b11f2255f',
    title: 'The Pondhouse - A Magical Place',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: HousingType.House,
    price: 328,
    images: ['https://15.design.htmlacademy.pro/static/hotel/3.jpg', 'https://15.design.htmlacademy.pro/static/hotel/19.jpg', 'https://15.design.htmlacademy.pro/static/hotel/8.jpg', 'https://15.design.htmlacademy.pro/static/hotel/1.jpg', 'https://15.design.htmlacademy.pro/static/hotel/10.jpg', 'https://15.design.htmlacademy.pro/static/hotel/13.jpg'],
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
    goods: ['Wi-Fi', 'Washing machine', 'Baby seat', 'Kitchen'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.4,
    bedrooms: 5,
    maxAdults: 4
  },
  {
    id: '12fa6bbd-6b7a-4051-b9a7-1f746f74d1b2',
    title: 'Loft Studio in the Central Area',
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    type: HousingType.Hotel,
    price: 262,
    images: ['https://15.design.htmlacademy.pro/static/hotel/9.jpg', 'https://15.design.htmlacademy.pro/static/hotel/16.jpg', 'https://15.design.htmlacademy.pro/static/hotel/7.jpg', 'https://15.design.htmlacademy.pro/static/hotel/18.jpg', 'https://15.design.htmlacademy.pro/static/hotel/11.jpg', 'https://15.design.htmlacademy.pro/static/hotel/4.jpg'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    goods: ['Baby seat', 'Heating', 'Cable TV', 'Air conditioning', 'Washing machine', 'Towels', 'Fridge', 'Laptop friendly workspace', 'Breakfast', 'Dishwasher'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 2.5,
    bedrooms: 4,
    maxAdults: 6
  },
  {
    id: '58930ba0-c352-4475-8fba-8fd475be1f52',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: HousingType.House,
    price: 910,
    images: ['https://15.design.htmlacademy.pro/static/hotel/5.jpg', 'https://15.design.htmlacademy.pro/static/hotel/18.jpg', 'https://15.design.htmlacademy.pro/static/hotel/17.jpg', 'https://15.design.htmlacademy.pro/static/hotel/16.jpg', 'https://15.design.htmlacademy.pro/static/hotel/6.jpg', 'https://15.design.htmlacademy.pro/static/hotel/19.jpg'],
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.538341,
      longitude: 9.976654000000002,
      zoom: 16
    },
    goods: ['Coffee machine', 'Laptop friendly workspace', 'Air conditioning', 'Washer', 'Baby seat', 'Wi-Fi'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.4,
    bedrooms: 4,
    maxAdults: 9
  },
  {
    id: '9b9f55d9-5f34-43ec-80d0-f37c0d55f407',
    title: 'House in countryside',
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    type: HousingType.Room,
    price: 267,
    images: ['https://15.design.htmlacademy.pro/static/hotel/6.jpg', 'https://15.design.htmlacademy.pro/static/hotel/4.jpg', 'https://15.design.htmlacademy.pro/static/hotel/19.jpg', 'https://15.design.htmlacademy.pro/static/hotel/8.jpg', 'https://15.design.htmlacademy.pro/static/hotel/14.jpg', 'https://15.design.htmlacademy.pro/static/hotel/20.jpg'],
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    },
    goods: ['Dishwasher', 'Air conditioning', 'Cable TV', 'Washer', 'Baby seat', 'Laptop friendly workspace', 'Breakfast', 'Towels', 'Fridge', 'Wi-Fi', 'Kitchen'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 2.3,
    bedrooms: 1,
    maxAdults: 3
  }
];

export const getPlaceDetails = (placeId: string) => placeDetails.find((place) => place.id === placeId);
