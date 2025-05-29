import { CitiesDefaults, USER_PASSWORD_MAX_LENGTH as MAX, USER_PASSWORD_MIN_LENGTH as MIN } from '@app/const';

export const capitalizeFirstLetter = (line: string) => line?.replace(/^./i, (char) => char.toUpperCase());

export const pluralize = (word: string, count: number) => count === 1 ? word : `${word}s`;

export const testEmailExpr = (email: string) => new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
  .test(email);

export const testPasswordExpr = (password: string) => new RegExp(`^(?=.{${MIN},${MAX}}$)((\\d+)([a-zA-Z]+)|([a-zA-Z]+)(\\d+))`).test(password);

export const getRandomCityName = () => CitiesDefaults[Math.round(Math.random() * (CitiesDefaults.length - 1))].name;
