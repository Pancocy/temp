import axios from "axios";
import { message } from "antd";
import { getInfo } from "@/utils/exportInfomation";
import {
  createElement,
  removeElement,
} from "@/components/spinLoading/destoryControl";
axios.defaults.timeout = 5 * 1000;
axios.defaults.baseURL =
  import.meta.env.VITE_NODE_ENV === "development"
    ? "/api"
    : import.meta.env.VITE_BASE_API;
axios.interceptors.request.use(
  (config) => {
    createElement();
    config.headers = { authorization: getInfo().token || "" };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    removeElement();
    const { status, data } = response;
    if (status >= 200 && status < 300) {
      return Promise.resolve(data);
    } else {
      message.error(data.msg || "请求信息错误");
      return;
    }
  },
  (error) => {
    removeElement();
    if (error.response) {
      let msg;
      switch (error.response.status) {
        case 404:
          msg = "接口请求不存在!错误码【404】。";
          break;
        case 500:
          msg =
            error.response.data.message || "服务端应用接口异常!错误码【500】。";
          break;
        default:
          msg = "请求错误，请检查或刷新重试！";
          break;
      }
      message.error(msg);
    } else {
      message.error("服务不可用");
    }
    return Promise.reject(error);
  }
);

export default axios;
