import { LoggedUser } from '../types';

const USER_DATA_KEY_NAME = '6-cities-user-data';

export type Token = string;

export const getToken = (): Token => {
  const data: LoggedUser = JSON.parse(localStorage.getItem(USER_DATA_KEY_NAME) ?? 'null') as LoggedUser;

  return data?.token ?? '';
};

export const getUserData = (): LoggedUser => JSON.parse(localStorage.getItem(USER_DATA_KEY_NAME) ?? 'null') as LoggedUser;

export const saveUserData = (userData: LoggedUser): void => {
  localStorage.setItem(USER_DATA_KEY_NAME, JSON.stringify(userData));
};

export const dropUserData = (): void => {
  localStorage.removeItem(USER_DATA_KEY_NAME);
};
