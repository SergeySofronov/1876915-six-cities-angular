import { PlaceComment } from '@app/types';

const comments: PlaceComment[] = [
  {
    id: 'a3a6ec5a-32d8-455b-b24d-82d3367a723a',
    comment: 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2025-02-16T21:00:00.765Z',
    rating: 3,
    user: {
      name: 'Zak',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/6.jpg',
      isPro: false
    }
  },
  {
    id: '2046e3e7-d5da-473c-b567-66f04340b778',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2025-02-14T21:00:00.765Z',
    rating: 2,
    user: {
      name: 'Zak',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true
    }
  },
  {
    id: 'fc8b46f1-3c4e-465e-9137-18cbb9bd6a41',
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2025-02-12T21:00:00.765Z',
    rating: 5,
    user: {
      name: 'Isaac',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: false
    }
  }
];

export const getComments = () => comments;
