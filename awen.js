// ==========---------数据类型操作---------==========
/**
 *
 * @param {any} data
 * @returns type
 */
export const type = (data) => {
  return Object.prototype.toString.call(data).replace(/\[object (.*)\]/, "$1");
};
export const arr = {
  /**
   *
   * @param arr
   * @returns new arr
   */
  toRepeat(arr) {
    let obj = {};
    return arr.filter((ele) => {
      if (!obj[ele]) {
        obj[ele] = true;
        return true;
      }
    });
  },
};
export const obj = {
  /**
   *
   * @param obj
   * @returns new obj
   */
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
};
export const str = {
  /**
   *
   * @param str
   * @returns new str
   */
  toRepeat(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (newStr.indexOf(str[i]) === -1) {
        newStr += str[i];
      }
    }
    return newStr;
  },
};
// ==========---------校验操作---------==========
/**
 *
 * @param {string} str
 * @param {string} type
 * @returns boolean
 */
export const reg = (str, type) => {
  switch (type) {
    case "mobile": //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case "tel": //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case "card": //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case "mobileCode": //6位数字验证码
      return /^[0-9]{6}$/.test(str);
    case "pwd": //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^([a-zA-Z0-9_]){6,18}$/.test(str);
    case "payPwd": //支付密码 6位纯数字
      return /^[0-9]{6}$/.test(str);
    case "postal": //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case "QQ": //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case "email": //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case "money": //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case "URL": //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str
      );
    case "IP": //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str
      );
    case "date": //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
          str
        ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      );
    case "number": //数字
      return /^[0-9]$/.test(str);
    case "english": //英文
      return /^[a-zA-Z]+$/.test(str);
    case "chinese": //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str);
    case "lower": //小写
      return /^[a-z]+$/.test(str);
    case "upper": //大写
      return /^[A-Z]+$/.test(str);
    case "HTML": //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return;
  }
};
// ==========---------本地存储操作---------==========
export const local = {
  /**
   *
   * @param str
   * @returns str||""
   */
  get(str) {
    return JSON.parse(localStorage.getItem(str) || "");
  },
  /**
   *
   * @param str
   * @param data
   * @returns
   */
  set(str, data) {
    return localStorage.setItem(str, JSON.stringify(data));
  },
  /**
   *
   * @param str
   * @returns
   */
  remove(str) {
    return localStorage.removeItem(str);
  },
  /**
   *
   * @returns
   */
  removeAll() {
    return localStorage.clear();
  },
};
export const uniLocal = {
  /**
   *
   * @param {string} key
   * @returns data
   */
  get(key) {
    let info = "";
    uni.getStorageSync({
      key,
      complete(res) {
        info = res.data;
      },
    });
    return info;
  },
  /**
   *
   * @param {string} key
   * @param {any} data
   * @returns info
   */
  set(key, data) {
    let info = "";
    uni.setStorageSync({
      key,
      data,
      complete(res) {
        info = res;
      },
    });
    return info;
  },
  /**
   *
   * @param {string} key
   * @returns
   */
  remove(key) {
    let info = "";
    uni.removeStorageSync({
      key,
      complete(res) {
        info = res;
      },
    });
    return info;
  },

  clear() {
    uni.clearStorageSync();
  },
};
export const session = {
  /**
   *
   * @param str
   * @returns str||""
   */
  get(str) {
    return JSON.parse(sessionStorage.getItem(str) || "");
  },
  /**
   *
   * @param str
   * @param data
   * @returns
   */
  set(str, data) {
    return sessionStorage.setItem(str, JSON.stringify(data));
  },
  /**
   *
   * @param str
   * @returns
   */
  remove(str) {
    return sessionStorage.removeItem(str);
  },
  /**
   *
   * @returns
   */
  removeAll() {
    return sessionStorage.clear();
  },
};
export const cookie = {
  /**
   *
   * @param name
   * @returns str
   */
  get(name) {
    let allCookieArr = document.cookie.split("; ");
    for (let i = 0; i < allCookieArr.length; i++) {
      let itemCookieArr = allCookieArr[i].split("=");
      if (itemCookieArr[0] === name) {
        return itemCookieArr[1];
      }
    }
    return undefined;
  },
  /**
   *
   * @param name
   * @param value
   * @param time
   * @returns this
   */
  set(name, value, time = "") {
    document.cookie =
      name + "=" + value + time.length ? "; max-age=" + time : "";
    return this;
  },
  remove(name) {
    return this.set(name, "", -1);
  },
};
//  ==========---------路由操作---------==========
export const route = {
  open(path, data) {
    if (type(data) === "Object") {
      var queryStr = "";
      for (let key in data) {
        queryStr = queryStr + "&" + key + "=" + data[key];
      }
      return window.open(
        path + "?" + queryStr.replace(/.{1}(.*)/, "$1"),
        "_blank"
      );
    }
    if (type(data) === "Array") {
      var parmaStr = "";
      data.forEach((element) => {
        parmaStr = parmaStr + "/" + element;
      });
      return window.open(path + parmaStr, "_blank");
    }
    return window.open(path, "_blank");
  },
};
export const uniRoute = {
  go(url, obj) {
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
  },
  reGo(url, obj) {
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
  },
  back(delta = 1) {
    let info = "";
    uni.navigateBack({
      delta,
      complete(res) {
        info = res;
      },
    });
    return info;
  },
  tabBar(url, obj) {
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
  },
};
//  ==========---------浏览器视图操作---------==========
/**
 * 获取浏览器滚动距离
 * @returns {x:num,y:num}
 */
export const getScrollOffset = () => {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
};
/**
 * 获取浏览器视口宽高
 * @returns {w:num,h:num}
 */
export const getViewportOffset = () => {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
    }
  }
};
/**
 *
 * @param handle
 * @param delay
 * @returns
 */
export const debounce = (handle, delay) => {
  let timer = null;
  return function () {
    var _self = this,
      _args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      handle.apply(_self, _args);
    }, delay);
  };
};
export const throttle = (handler, wait) => {
  let lastTime = 0;
  return function (e) {
    let nowTime = new Date().getTime();
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments);
      lastTime = nowTime;
    }
  };
};
