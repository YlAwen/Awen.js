/**
 * 获取本地存储
 * @param {string} str
 * @returns data||""||error
 */
export const get = (str) => {
  try {
    return JSON.parse(sessionStorage.getItem(str) || "");
  } catch (error) {
    return error;
  }
};

/**
 * 设置本地存储
 * @param {string} str
 * @param {any} data
 * @returns undefined||error
 */
export const set = (str, data) => {
  try {
    sessionStorage.setItem(str, JSON.stringify(data));
  } catch (error) {
    return error;
  }
};

/**
 * 清除指定本地存储
 * @param {string} str
 * @returns undefined||error
 */
export const remove = (str) => {
  try {
    sessionStorage.removeItem(str);
  } catch (error) {
    return error;
  }
};

/**
 * 清除所有本地存储
 * @returns undefined||error
 */
export const clear = () => {
  try {
    sessionStorage.clear();
  } catch (error) {
    return error;
  }
};
