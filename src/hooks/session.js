import { APP_NAME } from "../constants";

export const set = user =>
  window.sessionStorage.setItem(APP_NAME, JSON.stringify(user));

export const get = () => JSON.parse(window.sessionStorage.getItem(APP_NAME));
