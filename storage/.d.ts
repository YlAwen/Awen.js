/**
 * 获取本地存储
 * @param {string} str
 * @param {function} callback
 * @returns data
 */
export declare function getLocal(str: string, callback?: () => void): any;

/**
 * 设置本地存储
 * @param {string} str
 * @param {any} data
 * @param {function} callback
 * @returns boolean
 */
export declare function setLocal(
  str: string,
  data: any,
  callback?: () => void
): boolean;

/**
 * 清除指定本地存储
 * @param {string} str
 * @param {function} callback
 * @returns boolean
 */
export declare function removeLocal(
  str: string,
  callback?: () => void
): boolean;

/**
 * 清除所有本地存储
 * @param {function} callback
 * @returns boolean
 */
export declare function clearLocal(callback?: () => void): boolean;

/**
 * 获取本地存储
 * @param {string} str
 * @param {function} callback
 * @returns data
 */
export declare function getSession(str: string, callback?: () => void): any;

/**
 * 设置本地存储
 * @param {string} str
 * @param {any} data
 * @param {function} callback
 * @returns boolean
 */
export declare function setSession(
  str: string,
  data: any,
  callback?: () => void
): boolean;

/**
 * 清除指定本地存储
 * @param {string} str
 * @param {function} callback
 * @returns boolean
 */
export declare function removeSession(
  str: string,
  callback?: () => void
): boolean;

/**
 * 清除所有本地存储
 * @param {function} callback
 * @returns boolean
 */
export declare function clearSession(callback?: () => void): boolean;

/**
 * 获取cookie
 * @param {string} str
 * @returns data||boolean
 */
export declare function getCookie(str: string): boolean | any;

/**
 * 设置cookie
 * @param {string} str
 * @param {any} data
 * @param {any} time
 * @returns boolean
 */
export declare function setCookie(str: string, data: any, time?: any): boolean;

/**
 * 移除cookie
 * @param {string} str
 * @returns boolean
 */
export declare function removeCookie(str: string): boolean;
