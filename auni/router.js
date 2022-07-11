/**
 * 路由跳转
 * @param {string} url
 * @param {object} obj
 * @returns complete info
 */
export const go = (url, obj) => {
  if (obj) {
    let path = "";
    for (let key in obj) {
      path = path + "&" + key + "=" + obj[key];
    }
    return uni.navigateTo({
      url: url + "?" + path,
      complete(res) {},
    });
  } else {
    return uni.navigateTo({
      url,
      complete(res) {},
    });
  }
};
/**
 * 路由重定向
 * @param {string} url
 * @param {object} obj
 * @returns complete info
 */
export const reGo = (url, obj) => {
  if (obj) {
    let path = "";
    for (let key in obj) {
      path = path + "&" + key + "=" + obj[key];
    }
    return uni.redirectTo({
      url: url + "?" + path,
      complete(res) {},
    });
  } else {
    return uni.redirectTo({
      url,
      complete(res) {},
    });
  }
};
/**
 * 路由返回
 * @param {number} delta
 * @returns uni.navigateBack
 */
export const back = (delta = 1) => {
  return uni.navigateBack({
    delta,
    complete(res) {
      info = res;
    },
  });
};
/**
 * 切换tabBar页面
 * @param {string} url
 * @param {object} obj
 * @returns
 */
export const tabBar = (url, obj) => {
  if (obj) {
    let path = "";
    for (let key in obj) {
      path = path + "&" + key + "=" + obj[key];
    }
    return uni.switchTab({
      url: url + "?" + path,
      complete(res) {},
    });
  } else {
    return uni.switchTab({
      url,
      complete(res) {},
    });
  }
};
