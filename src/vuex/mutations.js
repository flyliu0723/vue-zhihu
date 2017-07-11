
/**
 * Created by jishu50 on 2017/6/19.
 */
import * as types from './mutations-types'

export default {
    [types.CHANGE_CON](state, message){
        state.con += message;
        state.sta = message;
    },
    [types.DELETE_CON](state){
        state.con = ''
    }
}
