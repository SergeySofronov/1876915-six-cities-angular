import { User } from './user';

export interface PlaceComment {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export interface CreatePlaceComment {
  comment: string;
  rating: number;
}
