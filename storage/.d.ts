/**
 * 获取本地存储
 * @param {string} str
 * @param {function} callback
 * @returns data
 */
export declare function localGet(str: string, callback?: () => void): any;

/**
 * 设置本地存储
 * @param {string} str
 * @param {any} data
 * @param {function} callback
 * @returns boolean
 */
export declare function localSet(
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
export declare function localRemove(
  str: string,
  callback?: () => void
): boolean;

/**
 * 清除所有本地存储
 * @param {function} callback
 * @returns boolean
 */
export declare function localClear(callback?: () => void): boolean;

/**
 * 获取本地存储
 * @param {string} str
 * @param {function} callback
 * @returns data
 */
export declare function sessionGet(str: string, callback?: () => void): any;

/**
 * 设置本地存储
 * @param {string} str
 * @param {any} data
 * @param {function} callback
 * @returns boolean
 */
export declare function sessionSet(
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
export declare function sessionRemove(
  str: string,
  callback?: () => void
): boolean;

/**
 * 清除所有本地存储
 * @param {function} callback
 * @returns boolean
 */
export declare function sessionClear(callback?: () => void): boolean;

/**
 * 获取cookie
 * @param {string} str
 * @returns data||boolean
 */
export declare function cookieGet(str: string): boolean | any;

/**
 * 设置cookie
 * @param {string} str
 * @param {any} data
 * @param {any} time
 * @returns boolean
 */
export declare function cookieSet(str: string, data: any, time?: any): boolean;

/**
 * 移除cookie
 * @param {string} str
 * @returns boolean
 */
export declare function cookieRemove(str: string): boolean;
