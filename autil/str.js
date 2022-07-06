/**
 * 字符串去重
 * @param {string} str
 * @returns string
 */
export const toRepeat = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (newStr.indexOf(str[i]) === -1) {
      newStr += str[i];
    }
  }
  return newStr;
};
