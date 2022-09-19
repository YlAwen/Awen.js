/**
 * 打开新页面
 * @param {string} path
 * @param {array||object} data
 * @returns router
 */
export declare function open(path: string, data?: Object | Array<any>): Window;

/**
 * 打开页面
 * @param {string} path
 * @param {array||object} data
 * @returns router
 */
export declare function go(path: string, data?: Object | Array<any>): Window;

/**
 * 获取url参数对象
 * @param {string} url
 * @returns object
 */
export declare function getQueryObj(url: string): Object;

/**
 * 获取url参数字符串
 * @param {string} url
 * @returns string
 */
export declare function getQueryStr(url: string): string;

/**
 * 获取urlpath字符串
 * @param {string} url
 * @returns string
 */
export declare function getPath(url: string): string;
