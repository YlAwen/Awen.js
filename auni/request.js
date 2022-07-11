const config = {
  baseURL: "",
  header: {},
  timeout: 6000,
};

/**
 *
 * @param {method,url,data} options
 * @returns promise
 */
const request = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      ...config,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
      complete() {
        uni.hideLoading();
      },
    });
  });
};

export default request;
