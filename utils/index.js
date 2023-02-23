/**
 * 判断数据类型
 * @param {any} data
 * @returns type
 */
export const type = (data) => {
  return Object.prototype.toString.call(data).replace(/\[object (.*)\]/, "$1");
};

/**
 * 正则校验数据
 * @param {string} type
 * @param {number||string} str
 * @returns boolean||undefined
 */
export const check = (type, str) => {
  try {
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
          str,
        );
      case "IP": //IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
          str,
        );
      case "date": //日期时间
        return (
          /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
          /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
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
  } catch (error) {
    console.log(error);
  }
};

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

var _debounceTimeout = null;
/**
 * 函数防抖
 * @param {function} func 目标函数
 * @param {number} wait 延迟执行毫秒数
 * @returns function
 */
export const debounce = (func, wait = 500) => {
  clearTimeout(_debounceTimeout);
  _debounceTimeout = setTimeout(() => {
    func();
  }, wait);
};

var _throttleRunning = false;
/**
 * 函数节流
 * @param {function} func 函数
 * @param {number} wait 延迟执行毫秒数
 * @returns function
 */
export const throttle = (func, delay = 500) => {
  if (_throttleRunning) {
    return;
  }
  _throttleRunning = true;
  func();
  setTimeout(() => {
    _throttleRunning = false;
  }, delay);
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
    if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(data);
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
  navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text);
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
    return "0123456789ABCDEF".charAt((n - (n % 16)) / 16) + "0123456789ABCDEF".charAt(n % 16);
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
      return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(16);
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
export const handleTree = (data, id, parentId, children) => {
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
};

/**
 * 正则转义
 * @param {string} string
 * @returns string
 */
export const parseRegExp = (string) => {
  return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
};

/**
 * 匹配字符串
 * @param {string} value 数据
 * @param {string} checkStr 要匹配的值
 * @param {object} option 配置项
 * checkAll 默认true 全局匹配
 * capitalization 默认true 匹配大小写
 * @returns boolean
 */
export const hasText = (value, checkStr, option = {}) => {
  const _option = {
    checkAll: true,
    capitalization: true,
    ...option,
  };
  let str = "";
  if (_option.capitalization) str += "i";
  if (_option.checkAll) str += "g";
  const data = value.match(new RegExp(parseRegExp(checkStr), str));
  return data ? true : false;
};

/**
 * 高亮字段
 * @param {string} text 文本
 * @param {string} lightStr 高亮文本
 * @param {string} color 颜色
 * @param {object} option 配置项
 * checkAll 默认true 全局匹配
 * capitalization 默认true 匹配大小写
 * class 默认highLightText 类名
 * @returns string
 */
export const highLightText = (text, lightStr, color, option = {}) => {
  const _option = {
    checkAll: true,
    capitalization: true,
    class: "highLightText",
    ...option,
  };
  const startTag = `<span class="${_option.class}" style="color:${color}">`;
  const endTag = "</span>";
  let str = "";
  if (_option.capitalization) str += "i";
  if (_option.checkAll) str += "g";
  const regStr = new RegExp(`${parseRegExp(lightStr)}`, str);
  return text.replace(regStr, startTag + "$&" + endTag);
};

/**
 * @description 更新标题
 * @param {String} title 标题
 */
export const setTitle = (title = "") => {
  window.document.title = title;
};

/**
 * 获取文件信息
 * @param {string} url 地址
 * @param {string} str 地址拼接符
 * @returns 文件对象
 * {
 *   fullName,
 *   name,
 *   type,
 * }
 */
export const getFileInfo = (url, str = "/") => {
  const urlArr = url.split(str);
  const fullName = urlArr[urlArr.length - 1];
  let name = "";
  let type = "";
  if (fullName.indexOf(".") === -1) {
    name = fullName;
  } else {
    type = fullName.replace(/.*[.](.*)/, "$1");
    name = fullName.replace(/(.*)[.].*/, "$1");
  }
  return {
    fullName,
    name,
    type,
  };
};

/**
 * 打印
 * @param {object} option 配置项
 * {
 * 	type
 * 	color
 * 	text
 * 	title
 * 	theme
 * }
 */
export const log = (option = {}) => {
  let color = option.color || "";
  const theme = {
    primary: "rgb(52,141,238)",
    success: "rgb(37,190,109)",
    info: "rgb(144,147,153)",
    warning: "rgb(253,152,33)",
    danger: "rgb(238,61,33)",
    default: "rgb(54,73,93)",
  };
  const defaultOption = {
    type: "text",
    color: "#000",
    text: "",
    title: "",
    theme: "",
  };
  if (option.theme) {
    color = theme[option.theme];
  }
  const logOption = {
    ...defaultOption,
    ...option,
    color,
  };
  switch (logOption.type) {
    case "text":
      console.log(`%c${logOption.text}`, `color: ${logOption.color};`);
      break;
    case "title":
      console.log(
        `%c ${logOption.title} %c ${logOption.text} %c`,
        `background:${logOption.color};border:1px solid ${logOption.color}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
        `border:1px solid ${logOption.color}; padding: 1px; border-radius: 0 4px 4px 0; color: ${logOption.color};`,
        "background:transparent",
      );
      break;
    case "full":
      console.log(
        `%c ${logOption.text} `,
        `background:${logOption.color}; padding: 2px; border-radius: 4px;color: #fff;`,
      );
      break;
    default:
      break;
  }
};
