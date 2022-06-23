/**
 * 路由跳转
 * @param {string} url
 * @param {object} obj
 * @returns uni.navigateTo
 */
export const go = (url, obj) => {
  let info = "";
  if (obj) {
    let path = "";
    for (let key in obj) {
      path = path + "&" + key + "=" + obj[key];
    }
    uni.navigateTo({
      url: url + "?" + path,
      complete(res) {
        info = res;
      },
    });
  } else {
    uni.navigateTo({
      url,
      complete(res) {
        info = res;
      },
    });
  }
  return info;
};
/**
 * 路由重定向
 * @param {string} url
 * @param {object} obj
 * @returns uni.redirectTo
 */
export const reGo = (url, obj) => {
  let info = "";
  if (obj) {
    let path = "";
    for (let key in obj) {
      path = path + "&" + key + "=" + obj[key];
    }
    uni.redirectTo({
      url: url + "?" + path,
      complete(res) {
        info = res;
      },
    });
  } else {
    uni.redirectTo({
      url,
      complete(res) {
        info = res;
      },
    });
  }
  return info;
};
/**
 * 路由返回
 * @param {number} delta
 * @returns uni.navigateBack
 */
export const back = (delta = 1) => {
  let info = "";
  uni.navigateBack({
    delta,
    complete(res) {
      info = res;
    },
  });
  return info;
};
/**
 * 切换tabBar页面
 * @param {*} url
 * @param {*} obj
 * @returns
 */
export const tabBar = (url, obj) => {
  if (obj) {
    let path = "";
    for (let key in obj) {
      path = path + "&" + key + "=" + obj[key];
    }
    uni.switchTab({
      url: url + "?" + path,
      complete(res) {
        info = res;
      },
    });
  } else {
    uni.switchTab({
      url,
      complete(res) {
        info = res;
      },
    });
  }
  let info = "";
  return info;
};
