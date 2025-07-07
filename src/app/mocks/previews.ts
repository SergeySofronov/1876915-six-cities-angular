import { PlacePreview, HousingType } from 'src/app/core/models';

const previews: PlacePreview[] = [
  {
    id: 'a7815e5b-73b0-4494-8cce-02a61eb1ea57',
    title: 'Waterfront with extraordinary view',
    type: HousingType.Apartment,
    price: 390,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 2.5
  },
  {
    id: '2078b191-fdc7-4c28-aca4-81f57525db9e',
    title: 'Beautiful & luxurious apartment at great location',
    type: HousingType.Apartment,
    price: 247,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
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
    isFavorite: false,
    isPremium: false,
    rating: 2.1
  },
  {
    id: '75ca5879-fbb0-40f2-a85d-98419c1a84e0',
    title: 'Canal View Prinsengracht',
    type: HousingType.Apartment,
    price: 237,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
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
    isFavorite: false,
    isPremium: true,
    rating: 3.3
  },
  {
    id: '03a2d1bf-55e6-4bd7-88f7-9588990b211f',
    title: 'Perfectly located Castro',
    type: HousingType.Room,
    price: 191,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
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
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'a6992e16-9609-4055-892f-1c2b11f2255f',
    title: 'The Pondhouse - A Magical Place',
    type: HousingType.House,
    price: 328,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
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
    isFavorite: false,
    isPremium: true,
    rating: 3.4
  },
  {
    id: '12fa6bbd-6b7a-4051-b9a7-1f746f74d1b2',
    title: 'Loft Studio in the Central Area',
    type: HousingType.Hotel,
    price: 262,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 2.5
  },
  {
    id: '58930ba0-c352-4475-8fba-8fd475be1f52',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: HousingType.House,
    price: 910,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
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
    isFavorite: false,
    isPremium: true,
    rating: 4.4
  },
  {
    id: '9b9f55d9-5f34-43ec-80d0-f37c0d55f407',
    title: 'House in countryside',
    type: HousingType.Room,
    price: 267,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 2.3
  }
];

export const getPlacePreviews = () => previews;
export const getNearbyPlacePreviews = (placeId: string) => previews.filter((preview) => preview.id !== placeId) ?? [];
