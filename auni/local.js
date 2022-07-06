/**
 * 获取本地存储
 * @param {string} key
 * @returns data||""||error
 */
export const get = (key) => {
  try {
    return uni.getStorageSync(key);
  } catch (error) {
    return error;
  }
};

/**
 * 设置本地存储
 * @param {string} key
 * @param {any} data
 * @returns undefined||error
 */
export const set = (key, data) => {
  try {
    uni.setStorageSync(key, data);
  } catch (error) {
    return error;
  }
};

/**
 * 移除本地存储
 * @param {string} key
 * @returns undefined||error
 */
export const remove = () => {
  try {
    uni.removeStorageSync(key);
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
    uni.clearStorageSync();
  } catch (error) {
    return error;
  }
};
