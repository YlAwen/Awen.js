/**
 * 深克隆
 * @param {object} obj
 * @returns object
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
