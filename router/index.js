import { getType } from "../utils";
/**
 * 打开新页面
 * @param {string} path
 * @param {array||object} data
 */
export const open = (path, data) => {
  let url = path;
  if (path[path.length - 1] === "/") {
    url = url.slice(0, url.length - 1);
  }
  if (getType(data) === "Object") {
    let queryStr = "";
    for (let key in data) {
      queryStr = queryStr + "&" + key + "=" + data[key];
    }
    window.open(url + "?" + queryStr.replace(/.{1}(.*)/, "$1"), "_blank");
    return;
  }
  if (getType(data) === "Array") {
    var parmaStr = "";
    data.forEach((element) => {
      parmaStr = parmaStr + "/" + element;
    });
    window.open(url + parmaStr, "_blank");
    return;
  }
  window.open(url, "_blank");
};

/**
 * 跳转页面
 * @param {string} path
 * @param {array||object} data
 */
export const go = (path, data) => {
  let url = path;
  if (path[path.length - 1] === "/") {
    url = url.slice(0, url.length - 1);
  }
  if (getType(data) === "Object") {
    var queryStr = "";
    for (let key in data) {
      queryStr = queryStr + "&" + key + "=" + data[key];
    }
    window.open(url + "?" + queryStr.replace(/.{1}(.*)/, "$1"), "_self");
    return;
  }
  if (getType(data) === "Array") {
    var parmaStr = "";
    data.forEach((element) => {
      parmaStr = parmaStr + "/" + element;
    });
    window.open(url + parmaStr, "_self");
    return;
  }
  window.open(url, "_self");
};

/**
 * 获取url参数对象
 * @param {string} url
 * @returns object
 */
export const getParamsObj = (url) => {
  const r = {};
  const _url = url || window.location.href;
  if (_url.split("?")[1]) {
    let str = _url.split("?")[1];
    str = str.split("&");
    str.forEach((item) => {
      const key = item.split("=")[0];
      const val = item.split("=")[1];
      r[key] = decodeURIComponent(val);
    });
  }
  return r;
};

/**
 * 获取url参数字符串
 * @param {string} url
 * @returns string
 */
export const getParamsStr = (url) => {
  const str = "";
  const _url = url || window.location.href;
  if (_url.split("?")[1]) {
    return _url.split("?")[1];
  }
  return str;
};

/**
 * 获取urlpath字符串
 * @param {string} url
 * @returns string
 */
export const getPath = (url) => {
  const str = "";
  const _url = url || window.location.href;
  if (_url.split("?")[0]) {
    return _url.split("?")[0];
  }
  return str;
};

/**
 * 对象转路径params
 * @param {object} data
 * @returns params string
 */
export const toParams = (data) => {
  let str = "";
  if (getType(data) === "Object") {
    for (let key in data) {
      str = str + "&" + key + "=" + data[key];
    }
    return str.replace(/&(.*)/, "?$1");
  } else {
    return "";
  }
};

/**
 * 更改网址参数
 * @param {object} data
 */
export const changeUrlQuery = (obj) => {
  if (getType(obj) !== "Object") {
    return console.error("数据错误：", obj);
  }
  const path = window.location.origin + window.location.pathname + toParams(obj);
  window.history.replaceState(
    {
      path: path,
    },
    "",
    path,
  );
};
