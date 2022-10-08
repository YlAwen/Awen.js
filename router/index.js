/**
 * 打开新页面
 * @param {string} path
 * @param {array||object} data
 * @returns router
 */
export const open = (path, data) => {
  let url = path;
  if (path[path.length - 1] === "/") {
    url = url.slice(0, url.length - 1);
  }
  if (type(data) === "Object") {
    let queryStr = "";
    for (let key in data) {
      queryStr = queryStr + "&" + key + "=" + data[key];
    }
    return window.open(
      url + "?" + queryStr.replace(/.{1}(.*)/, "$1"),
      "_blank"
    );
  }
  if (type(data) === "Array") {
    var parmaStr = "";
    data.forEach((element) => {
      parmaStr = parmaStr + "/" + element;
    });
    return window.open(url + parmaStr, "_blank");
  }
  return window.open(url, "_blank");
};

/**
 * 打开页面
 * @param {string} path
 * @param {array||object} data
 * @returns router
 */
export const go = (path, data) => {
  let url = path;
  if (path[path.length - 1] === "/") {
    url = url.slice(0, url.length - 1);
  }
  if (type(data) === "Object") {
    var queryStr = "";
    for (let key in data) {
      queryStr = queryStr + "&" + key + "=" + data[key];
    }
    return window.open(url + "?" + queryStr.replace(/.{1}(.*)/, "$1"), "_self");
  }
  if (type(data) === "Array") {
    var parmaStr = "";
    data.forEach((element) => {
      parmaStr = parmaStr + "/" + element;
    });
    return window.open(url + parmaStr, "_self");
  }
  return window.open(url, "_self");
};

/**
 * 获取url参数对象
 * @param {string} url
 * @returns object
 */
export const getQueryObj = (url) => {
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
export const getQueryStr = (url) => {
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
