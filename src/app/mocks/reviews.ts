const reviews = [
  {
    id: '2d214efe-26e3-4752-b15b-b5ed940095be',
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: '2025-02-22T21:00:00.077Z',
    rating: 4,
    user: {
      name: 'Isaac',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true
    }
  },
  {
    id: 'ae5ae693-25fc-4ba5-89dc-9fce22b21901',
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2025-02-20T21:00:00.077Z',
    rating: 5,
    user: {
      name: 'Jack',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/6.jpg',
      isPro: false
    }
  },
  {
    id: '57dd086f-54a1-4a8d-9062-e9921ca5dd5c',
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2025-02-18T21:00:00.077Z',
    rating: 3,
    user: {
      name: 'Max',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: true
    }
  }
];

export const getReviews = () => reviews;
