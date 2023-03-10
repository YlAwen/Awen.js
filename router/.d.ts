/**
 * 打开新页面
 * @param {string} path
 * @param {array||object} data
 */
export declare function open(path: string, data?: Object | Array<string | number>): void;

/**
 * 跳转页面
 * @param {string} path
 * @param {array||object} data
 */
export declare function go(path: string, data?: Object | Array<string | number>): void;

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
 * @returns string
 */
export declare function toParamsStr(data: object): string;

/**
 * 更改网址参数
 * @param {object} data
 */
export declare function changeUrlQuery(data: object): void;
