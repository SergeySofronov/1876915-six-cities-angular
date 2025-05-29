import { CitiesDefaults, SortType } from '../app.const';
import { User } from './user';

export enum HousingType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export interface PlaceLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface MarkerType extends PlaceLocation {
  id?: string
};

export type CityName = typeof CitiesDefaults[number]['name'];

export interface City {
  name: CityName;
  location: PlaceLocation;
}

export interface PlacePreview {
  id: string;
  title: string;
  type: HousingType;
  price: number;
  previewImage: string;
  city: City;
  location: PlaceLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export interface Place extends Omit<PlacePreview, 'previewImage'> {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export interface ChangeFavoritesResponse extends Place {
  previewImage: string;
}

export type PlaceSortType = keyof typeof SortType;

