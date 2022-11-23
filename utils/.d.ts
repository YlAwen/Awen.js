/**
 * object转formdata
 * @param {object} data 对象
 * @returns formdata | false
 */
export declare function toFromData(data: object): FormData | boolean;

/**
 * 函数防抖
 * @param {function} func 目标函数
 * @param {number} wait 延迟执行毫秒数
 * @param {boolean} immediate true - 立即执行， false - 延迟执行
 * @returns function
 */
export declare function debounce(
  func: function,
  wait?: number,
  immediate?: boolean
): void;

/**
 * 函数节流
 * @param {function} func 函数
 * @param {number} wait 延迟执行毫秒数
 * @param {number} type 1 在时间段开始的时候触发 2 在时间段结束的时候触发
 * @returns function
 */
export declare function throttle(
  func: function,
  wait?: number,
  type?: number
): void;

/**
 * 深克隆
 * @param {any} data 数据
 * @param {new WeakMap()} map 默认为new WeakMap()
 * @returns new data
 */
export declare function deepClone(data: any, map?: any): any;

/**
 * 拼接字符串
 * @param {string|number} data 数据
 * @param {string} splitStr 要拼接的字段
 * @param {number} splitNum 拼接位数
 * @returns new string
 */
export declare function splitStr(
  data: string | number,
  splitStr?: string,
  splitNum?: number
): string;

/**
 * 拷贝
 * @param {string} text 文本
 * @returns copy
 */
export declare function debounce(text: string | number): void;

/**
 * 页面滚动
 * @param {element} element dom元素
 * @param {string} str start end
 */
export declare function scrollTo(element: Element, str?: string): void;

/**
 * 英文首字母大写
 * @param {string} str 文本
 * @returns string
 */
export declare function titleCase(str: string): string;

/**
 * 同步阻塞
 * @param {number} time 时间（毫秒）
 * @returns none
 */
export declare function sleep(str: string): string;

/**
 * 去左右空格
 * @param {string} str 文本
 * @returns string
 */
export declare function trim(str: string): string;

/**
 * 去所有空格
 * @param {string} str 文本
 * @returns string
 */
export declare function trimAll(str: string): string;

/**
 * 替换所有相同字符串
 * @param {string} text 文本
 * @param {string} repstr 被替换的字段
 * @param {string} newstr 替换成的字段
 * @returns string
 */
export declare function replaceAll(
  text: string,
  repstr: string,
  newstr: string
): string;

/**
 * RGB颜色转十六进制颜色
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns string
 */
export declare function rgbToHex(
  r: string | number,
  g: string | number,
  b: string | number
): string;

/**
 * 十六进制颜色转RGB颜色
 * @param {string} hex
 * @returns string|null
 */
export declare function hexToRGB(hex: string): string | null;

/**
 * 生成uuid
 * @param {string} str 拼接的字段
 * @returns string
 */
export declare function getUUID(str?: string): string;

/**
 * 构造树型结构数据
 * @param {array} data 数据源
 * @param {string} id id字段 默认 'id'
 * @param {string} parentId 父节点字段 默认 'parentId'
 * @param {string} children 孩子节点字段 默认 'children'
 * @returns array
 */
export declare function handleTree(
  data: array,
  id?: string,
  parentId?: string,
  children?: string
): array;
