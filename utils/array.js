/**
 * 去重
 * @param {array} arr
 * @returns array
 */
export const toRepeat = (arr) => {
  let obj = {};
  return arr.filter((ele) => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  });
};
