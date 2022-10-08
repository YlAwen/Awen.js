/**
 * 下载文件
 * @param {axios} http
 * @param {axios options} options
 * @returns request
 */
export declare function downloadFile<T>(http: any, data: Object<T>): any;

/**
 * 保存文件
 * @param {Blob} data
 * @param {string} filename
 * @param {function} callback
 */
export declare function saveFile(
  data: Blob,
  filename: string,
  callback?: () => void
): void;

/**
 * 对象转路径params
 * @param {object} data
 * @returns params string
 */
export declare function toParams(data: object): string;
