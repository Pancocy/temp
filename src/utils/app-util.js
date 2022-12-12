// 保存用户信息
export const setUserInfo = (obj) => {
  return localStorage.setItem("userInfo", JSON.stringify(obj));
};
// 获取用户信息
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem("userInfo")) || {};
};
// 设置toekn
export const setToken = (jwt) => {
  return localStorage.setItem("token", jwt);
};
// 获取token
export const getToken = () => {
  return localStorage.getItem("token");
};
// 登出清除所有信息
export const removeAll = () => {
  return localStorage.clear();
};
