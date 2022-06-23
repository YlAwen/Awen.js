/**
 *
 * @param {string} name
 * @returns data||undefined
 */
export const get = (name) => {
  let allCookieArr = document.cookie.split("; ");
  for (let i = 0; i < allCookieArr.length; i++) {
    let itemCookieArr = allCookieArr[i].split("=");
    if (itemCookieArr[0] === name) {
      return itemCookieArr[1];
    }
  }
  return undefined;
};

/**
 *
 * @param {string} name
 * @param {any} value
 * @param {string} time
 * @returns undefined||error
 */
export const set = (name, value, time = "") => {
  try {
    document.cookie =
      name + "=" + value + (time.length ? "; max-age=" + time : "");
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {string} name
 * @returns undefined||error
 */
export const remove = (name) => {
  try {
    return this.set(name, "", -1);
  } catch (error) {
    return error;
  }
};
