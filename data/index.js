import { type } from "../check";

// TODO 对象

/**
 * object转formdata
 * @param {object} data
 * @returns formdata
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
      console.log("toFromData获得的data不是object");
    }
  } catch (error) {
    console.log(error);
  }
};
