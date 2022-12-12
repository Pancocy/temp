import axios from "@/http/index";

//  登录
export const login = (params = {}) => {
  return axios.post("/manage/manageLogin", params);
};
