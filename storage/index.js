/**
 * 获取本地存储
 * @param {string} str
 * @param {function} callback
 * @returns data
 */
export const getLocal = (str, callback = () => {}) => {
  let data = null;
  try {
    data = JSON.parse(localStorage.getItem(str));
    callback();
  } catch (error) {
    console.log(error);
  }
  return data;
};

/**
 * 设置本地存储
 * @param {string} str
 * @param {any} data
 * @param {function} callback
 * @returns boolean
 */
export const setLocal = (str, data, callback = () => {}) => {
  try {
    localStorage.setItem(str, JSON.stringify(data));
    callback();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * 清除指定本地存储
 * @param {string} str
 * @param {function} callback
 * @returns boolean
 */
export const removeLocal = (str, callback = () => {}) => {
  try {
    localStorage.removeItem(str);
    callback();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * 清除所有本地存储
 * @param {function} callback
 * @returns boolean
 */
export const clearLocal = (callback = () => {}) => {
  try {
    localStorage.clear();
    callback();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * 获取本地存储
 * @param {string} str
 * @param {function} callback
 * @returns data
 */
export const getSession = (str, callback = () => {}) => {
  let data = null;
  try {
    data = JSON.parse(sessionStorage.getItem(str));
    callback();
  } catch (error) {
    console.log(error);
  }
  return data;
};

/**
 * 设置本地存储
 * @param {string} str
 * @param {any} data
 * @param {function} callback
 * @returns boolean
 */
export const setSession = (str, data, callback = () => {}) => {
  try {
    sessionStorage.setItem(str, JSON.stringify(data));
    callback();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * 清除指定本地存储
 * @param {string} str
 * @param {function} callback
 * @returns boolean
 */
export const removeSession = (str, callback = () => {}) => {
  try {
    sessionStorage.removeItem(str);
    callback();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * 清除所有本地存储
 * @param {function} callback
 * @returns boolean
 */
export const clearSession = (callback = () => {}) => {
  try {
    sessionStorage.clear();
    callback();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * 获取cookie
 * @param {string} str
 * @returns data||boolean
 */
export const getCookie = (str) => {
  try {
    let allCookieArr = document.cookie.split("; ");
    for (let i = 0; i < allCookieArr.length; i++) {
      let itemCookieArr = allCookieArr[i].split("=");
      if (itemCookieArr[0] === str) {
        return itemCookieArr[1];
      }
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * 设置cookie
 * @param {string} str
 * @param {any} data
 * @param {any} time
 * @returns boolean
 */
export const setCookie = (str, data, time = "") => {
  try {
    let date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = str + "=" + data + ";expires=" + data;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * 移除cookie
 * @param {string} str
 * @returns boolean
 */
export const removeCookie = (str) => {
  try {
    this.setCookie(str, "", -1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
