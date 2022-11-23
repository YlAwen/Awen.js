import { type } from "../check";

/**
 * object转formdata
 * @param {object} data 对象
 * @returns formdata | false
 */
export const toFromData = (data) => {
  try {
    if (type(data) === "Object") {
      let formdata = new FormData();
      for (let key in data) {
        formdata.append(key, data[key]);
      }
      return formdata;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * 函数防抖
 * @param {function} func 目标函数
 * @param {number} wait 延迟执行毫秒数
 * @param {boolean} immediate true - 立即执行， false - 延迟执行
 * @returns function
 */
export const debounce = (func, wait = 1000, immediate = true) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    if (timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
};

/**
 * 函数节流
 * @param {function} func 函数
 * @param {number} wait 延迟执行毫秒数
 * @param {number} type 1 在时间段开始的时候触发 2 在时间段结束的时候触发
 * @returns function
 */
export const throttle = (func, wait = 1000, type = 1) => {
  let previous = 0;
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
};

/**
 * 深克隆
 * @param {any} data 数据
 * @param {new WeakMap()?} map 默认为new WeakMap()
 * @returns new data
 */
export const deepClone = (data, map = new WeakMap()) => {
  try {
    // 基本数据类型，直接返回
    if (typeof data !== "object" || data === null) return data;
    // 函数 正则 日期 ES6新对象,执行构造题，返回新的对象
    const constructor = data.constructor;
    if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name))
      return new constructor(data);
    // map标记每一个出现过的属性，避免循环引用
    if (map.get(data)) return map.get(data);
    map.set(data, true);
    const cloneTarget = Array.isArray(data) ? [] : {};
    for (prop in data) {
      if (data.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(data[prop], map);
      }
    }
    return cloneTarget;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 拼接字符串
 * @param {string|number} data 数据
 * @param {string} splitStr 要拼接的字段
 * @param {number} splitNum 拼接位数
 * @returns new string
 */
export const splitStr = (data, splitStr = ",", splitNum = 3) => {
  try {
    let _data = data.toString();
    if (type(splitNum) === "Number") {
      return "";
    }
    if (_data.indexOf(".") !== -1 && type(data) === "Number") {
      let arr = _data.split(".");
      let data1 = arr[0];
      let data2 = arr[1];
      let result = "";
      while (data1.length > splitNum) {
        result = splitStr + data1.substring(data1.length - splitNum) + result;
        data1 = data1.substring(0, data1.length - splitNum);
      }
      result = data1 + result;
      return result + "." + data2;
    } else {
      let result = "";
      while (_data.length > splitNum) {
        result = splitStr + _data.substring(_data.length - splitNum) + result;
        _data = _data.substring(0, _data.length - splitNum);
      }
      result = _data + result;
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * 拷贝
 * @param {string} text 文本
 * @returns copy
 */
export const copy = (text) => {
  navigator.clipboard &&
    navigator.clipboard.writeText &&
    navigator.clipboard.writeText(text);
};

/**
 * 页面滚动
 * @param {element} element dom元素
 * @param {string} str start end
 */
export const scrollTo = (element, str = "start") => {
  element.scrollIntoView({ behavior: "smooth", block: str });
};

/**
 * 英文首字母大写
 * @param {string} str 文本
 * @returns string
 */
export const titleCase = (str) => {
  if (value == null || value.length === 0) return value;
  if (type(str) !== "String") {
    return str;
  } else {
    return value.replace(/^[a-z]/, (matchStr) => {
      return matchStr.toLocaleUpperCase();
    });
  }
};

/**
 * 同步阻塞
 * @param {number} time 时间（毫秒）
 * @returns none
 */
export const sleep = (time) => {
  let now = new Date();
  let exitTime = now.getTime() + time;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime) return;
  }
};

/**
 * 去左右空格
 * @param {string} str 文本
 * @returns string
 */
export const trim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * 去所有空格
 * @param {string} str 文本
 * @returns string
 */
export const trimAll = (str) => {
  return str.replace(/\s+/g, "");
};

/**
 * 替换所有相同字符串
 * @param {string} text 文本
 * @param {string} repstr 被替换的字段
 * @param {string} newstr 替换成的字段
 * @returns string
 */
export const replaceAll = (text, repstr, newstr) => {
  return text.replace(new RegExp(repstr, "gm"), newstr);
};

/**
 * RGB颜色转十六进制颜色
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns string
 */
export const rgbToHex = (r, g, b) => {
  const _toHex = (n) => {
    n = parseInt(n, 10);
    if (isNaN(n)) return "00";
    n = Math.max(0, Math.min(n, 255));
    return (
      "0123456789ABCDEF".charAt((n - (n % 16)) / 16) +
      "0123456789ABCDEF".charAt(n % 16)
    );
  };
  return "#" + utils._toHex(r) + utils._toHex(g) + utils._toHex(b);
};

/**
 * 十六进制颜色转RGB颜色
 * @param {string} hex
 * @returns string|null
 */
export const hexToRGB = (hex) => {
  if (hex.length === 4) {
    let text = hex.substring(1, 4);
    hex = "#" + text + text;
  }
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * 生成uuid
 * @param {string} str 拼接的字段
 * @returns string
 */
export const getUUID = (str = "-") => {
  return (
    "xxxxxxxx" +
    str +
    "xxxx" +
    str +
    "4xxx" +
    str +
    "yxxx" +
    str +
    "xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(
        16
      );
    })
  );
};

/**
 * 构造树型结构数据
 * @param {array} data 数据源
 * @param {string} id id字段 默认 'id'
 * @param {string} parentId 父节点字段 默认 'parentId'
 * @param {string} children 孩子节点字段 默认 'children'
 * @returns array
 */
export function handleTree(data, id, parentId, children) {
  let config = {
    id: id || "id",
    parentId: parentId || "parentId",
    childrenList: children || "children",
  };

  let childrenListMap = {};
  let nodeIds = {};
  let tree = [];

  for (let d of data) {
    let parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (let d of data) {
    let parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}
