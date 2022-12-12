import userInfo from "./index";
import { deClone } from "@/utils/deepClone";


const reducer = (state = { ...userInfo.state }, action) => {
  let newState = deClone(state);
  for (let key in userInfo.actions) {
    if (action.type == key) {
      userInfo.actions[key](newState, action);
      break;
    }
  }
  return newState
};
export default reducer;
