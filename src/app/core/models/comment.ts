import { User } from './user';

export interface PlaceComment {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export interface CreatePlaceComment {
  id: string;
  comment: string;
  rating: number;
}
