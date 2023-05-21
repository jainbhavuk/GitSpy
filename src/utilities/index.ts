import { useLocation } from 'react-router-dom';

import BASE_FONT_SIZE from '~theme/constants';

/**
 * Convert pixels to rem units
 *
 * @param {number} value - The value in pixels to convert to rem
 * @returns {string} The value in rem units
 */
function pxToRem(val: number) {
  return `${val / BASE_FONT_SIZE}rem`;
}

/**
 * Sets a key value pair in Localstorage
 * @param key accepts a key
 * @param value accepts an object to be stored as value
 */
const setItemInLocalStorage = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Returns an object from Localstorage
 * @param key accepts a key
 * @returns object corresponding to the key in Localstorage
 */
const getItemFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

/**
 * Removes an item from Localstorage
 * @param key accepts a key to be deleted from Localstorage
 */
const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

/**
 * Checks if the given path is same as browser's current location
 * @param pathToCheck accepts a path constant
 * @returns {boolean} `true | false` based on current location
 */
const isOnSpecificPath = (pathToCheck: string) => {
  const location = useLocation();

  return location.pathname === pathToCheck;
};

export {
  isOnSpecificPath,
  setItemInLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  pxToRem,
};
