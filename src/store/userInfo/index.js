import { getUserInfo } from '@/utils/app-util'
export default {
    state: {
       userInfo: getUserInfo()
    },
    actions: {
        setInfo(newState, actions){
            newState.userInfo = actions.payload
           console.log(newState,'======',actions)
        }
    }
}