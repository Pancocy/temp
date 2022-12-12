//  此处用于配置项获取redux 信息
import store from "@/store/index";

export const getInfo = () => {
  const { token } = store.getState().userInfoReducer.userInfo
  return {
    token
  };
};
