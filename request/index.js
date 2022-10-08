/**
 * 获取类型
 * @param {any} data
 * @returns type
 */
export const type = (data) => {
  return Object.prototype.toString.call(data).replace(/\[object (.*)\]/, "$1");
};

/**
 * 下载文件
 * @param {axios} http
 * @param {axios options} options
 * @returns request
 */
export const downloadFile = (http, options) => {
  return http({
    ...options,
    responseType: "blob",
    headers: {
      ...options.headers,
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
    },
  });
};

/**
 * 保存文件
 * @param {文件流} data
 * @param {文件名} filename
 * @param {失败的回调} callback
 */
export const saveFile = (data, filename, callback = () => {}) => {
  try {
    const blob = new Blob([data]);
    saveAs(blob, filename);
  } catch (error) {
    console.log(error);
    callback();
  }
};

/**
 * 对象转路径params
 * @param {object} data
 * @returns params string
 */
export const toParams = (data) => {
  let str = "";
  if (type(data) === "Object") {
    for (let key in data) {
      str = str + "&" + key + "=" + data[key];
    }
    return str.replace(/&(.*)/, "?$1");
  } else {
    console.log("数据不是对象");
    return "";
  }
};
