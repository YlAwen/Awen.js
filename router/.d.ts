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
export declare function getParamsObj(url: string): Object;

/**
 * 获取url参数字符串
 * @param {string} url
 * @returns string
 */
export declare function getParamsStr(url: string): string;

/**
 * 获取urlpath字符串
 * @param {string} url
 * @returns string
 */
export declare function getPath(url: string): string;

/**
 * 对象转路径params
 * @param {object} data
 * @returns params string
 */
export declare function toParamsStr(data: object): string;
