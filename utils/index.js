import * as array from "./array";
import * as object from "./object";
import * as string from "./string";
import * as regexp from "./regexp";
import * as browser from "./browser";
import * as other from "./other";

const utils = {
  array,
  object,
  string,
  regexp,
  browser,
  ...other,
};

export default utils;
